---
title: "One Approch to DDL abstraction."
pubDate: 2007-03-28T00:00:00
description: I've been playing with DDL abstraction for Drupal. My current idea is to mimic the SQL-92 syntactical structure as an array. I'm working on the assumption that the generic SQL-92 clause ordering is consistent it is only the clauses themselves that need to be translated. I am going to assume that we use mysql datatypes by default so the values in the data definition array will be familar to mysql users.
tags:
  - drupal
  - DDL
  - abstraction
---

I've been playing with DDL abstraction for Drupal. My current idea is to mimic the SQL-92 syntactical structure
as an array. I'm working on the assumption that the generic SQL-92 clause ordering is consistent it is only the clauses themselves that need to be translated. I am going to assume that we use mysql datatypes by default so the values in the data definition array will be familar to mysql users.

Eventually I would like to expand this to support relationships and database introspection.

Notes from database.inc

```php
<?php
/**
 * Map Data Definition array attributes into sql phrases.
 *
 * This function recieves a column array definition and maps its attributes
 * in small sql phrases.
 *
 * The data type definitions from ANSI SQL-92[1] section 6.1
 *
 * they are generally phrases in the form of
 *     type[([<precision>, <size>, <scale>])] [CHARACTER SET <character set>]
 *
 * There is also a VARYING statement which we will not implement in the first iteration
 * of the DDL mapping.
 *
 * ==The column definitions from ANSI-SQL92[1] section 11.4
 * <column definition> ::=
 *    <column name> { <data type> | <domain name> }
 *    [ <default clause> ]
 *    [ <column constraint definition>... ]
 *    [ <collate clause> ]
 *
 * The representative Drupal DDL column array is.
 *
 * $column => array(
 *  'name' => 'id',
 *  'default' => '0'
 *  'collate' => '',
 *  'type' => array(
 *    'type' => 'int'  // BEGIN <data type>
 *    'size' => '4',
 *    'scale' => ''
 *    'precision' => ''
 *    'character set' => '' // END <data type>
 *   ),
 *   'constraints' => array(
 *      'not null' => TRUE,  // BEGIN <constraint definition> ...
 *      'unique' => 'false',
 *      'primary key' => 'TRUE'
 *   ),
 * );
 *
 *  The representative Drupal SQL phrase array is.
 *  $mapped_column => array(
 *   'name' => '{id}', // <column name>
 *   'type' => 'INT(4)
 *   'default' => 'DEFAULT 0', // <default clause>
 *   'constraints' => 'NOT NULL PRIMARY KEY', <column constraint definition>
 *   'collate' => '' // <collate clause>
 * );
 *
 * * ==The table definitions from ANSI SQL-92[1] section 11.3
 *
 * CREATE [ { GLOBAL | LOCAL } TEMPORARY ] TABLE <table name>
 *        <table element list>
 *        [ ON COMMIT { DELETE | PRESERVE } ROWS ]
 *
 *
 *  The representative Drupal DDL table array is.
 *
 *  $table = array(
 *    'name' => 'mytable',
 *    'type' => ''
 *    'columns' => array($column, ...),
 *    'on commit' => '',
 * );
 *
 * $table = array(
 *   'name' => '{mytable}',
 *   'type' => ''
 *   'columns' => array('$mapped_column, ...) , // see above.
 *   'indexes' => 'TBD'
 *   'on commit' => ''
 *  );
 *
 *
 * [1] http://www.contrib.andrew.cmu.edu/~shadow/sql/sql1992.txt
 *
 * @todo: abstract more of this to the database.engine.inc files.
 *
 */
function _db_map_column($column) {
  $mapped_column = array();
  $mapped_column['type'] = _db_map_column_type($column);
  $mapped_column['constraints'] = _db_map_column_constraints($column);
  $mapped_column['default'] = _db_map_column_default($column);
  $mapped_column['collate'] = _db_map_column_default($column);
  return $mapped_column;
}

/**
 * Map column types for different database types
 * @param columns  array of column definitions
 * @return array of database specific
 */
function _db_map_columns($columns) {
  foreach ($columns as $index => $column) {  
      $columns[$index] = _db_map_column($column);
  }
  return $columns;
}

/*
 * Create a database table based on Drupal Table Definition.
 */
function db_create_table($table) {
  $mapped_table = _db_map_table($table);
  $mapped_columns = _db_map_columns($table['columns']);
  foreach ($mapped_columns as $column) {
    $columns[] =  $column['name'] .' '. $column['type'] .' '. $column['not_null'] .' '. $column['default'];
  }
  foreach($tables['indexes'] as $index) {   
    // @todo: mapping index definitions.
    $indexes[] = '';
  }
 
  $sql = 'CREATE TABLE {'. $table['name'] .'} ('. implode($columns, ',') .')'  . implode(',', $indexes); 
  db_query($sql);}
?>
```

Notes from database.mysql.inc:

```php
<?php
/**
 * Translate DDL column types into engine specific
 * data type clauses.
 *
 * @param $type
 * array(
 *  'type' => 'DDL Type',
 *  'precision' => '',
 *  'size' => '',
 *  'scale' = '',
 *  'character set' => '',
 *  'unsigned' => BOOL,
 * )
 * @return string.
 */
function _db_map_column_type($type) {
  $output =  $type['type'] .'('. $type['size'] .')';
  if (isset($type['unsigned'] && $type['unsigned'])) {   
    $output .= ' UNSIGNED';
  }
  return $output;
}

/**
 * Translate DDL column constraints into engine specific
 * constriant clauses.
 *
 * @param array $constraint
 * array(
 *  'not null' => BOOL,
 *  'unique' => BOOL,
 *  'primary key' => BOOL,
 * )
 *
 * @return string
 */
function _db_map_column_constraints($constraints) {
  $elements = array();
  if (array_key_exists('not null', $constraints) && $constraints['not null']) {
    $elements[] = 'NOT NULL';
  }
  if (array_key_exists('primary key', $constraints) && $constraints['primary key']) {
    $elements[] = 'PRIMARY KEY';
  }
  elseif (array_key_exists('unique', $constraints) && $constraints['unique']) {
    $elements[] = 'UNIQUE';
  }
  return implode(' ', $elements);
}

/**
 * Translate DDL column default value into engine specific
 * default clause.
 *
 * @param mixed $default
 *  default value for the column.
 *
 * @return string
 */
function _db_map_column_default($column) {
  $default = '';
  if (array_key_exists('default', $column['default']) && !in_array($column['type']['type'], array('text', 'mediumtext'))) {    if (is_null($column['default'])) {
      $default = 'default NULL';
    } else if (!$column['default'] === FALSE) {
      $default = 'default '. $column['default'];
    }
  }
  return $default;
}
/**
 * Translate DDL column collation default value into engine specific
 * collation clause.
 *
 * @param mixed $collation
 *     default collation for the column.
 *
 * @return string
 */
function _db_map_column_collation($column) { 
  // I don't think mysql supports column collation.
  return '';
}

/**
 * Add a column to a mysql table.
 *
 * @param string table_name
 * @param mapped ddl column array
 */
function _db_add_column($table_name, $mapped_column) {
  return db_query('ALTER TABLE {'. $table_name .'} ADD COLUMN '. $mapped_column['name'] .' '. $mapped_column['type'] .
}
?>
```
