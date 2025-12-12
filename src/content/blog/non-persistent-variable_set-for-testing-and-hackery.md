---
title: "Non-persistent variable_set for testing and hackery"
pubDate: 2008-05-10T00:00:00
description: Writing simpletests for imagecache_create_url and file_create_url today, I had to change a few of Drupal's persistent variables, namely clean_url and file_downloads. I was kind of frustrated by the need to save the old values, set the values I needed for the test case, run the test, then restore the old variables. The process itself is a little dangerous in the case where you hit runtime fatal errors and the variables never get restored.
tags:
  - drupal
  - simpletest
  - breakage
---

Writing simpletests for imagecache_create_url and file_create_url today, I had to change a few of Drupal's persistent variables, namely clean_url and file_downloads. I was kind of frustrated by the need to save the old values, set the values I needed for the test case, run the test, then restore the old variables. The process itself is a little dangerous in the case where you hit runtime fatal errors and the variables never get restored.

Also during the course of the testing all other requests to the same drupal site are affected by this variable change, so there are potential concurrency errors as well. I was thinking.. wouldn't it be awesome if I could set variables for just the current request... aka just set $conf['variable_name']... since there have been movements to eliminate globals and I'm just generally scared of them... and I want non-persistant variable_set I though changing variable_set by adding a persistent argument would make testing a little easier and maybe enable some kinds of strange hackery for others...

```php
function variable_set($name, $value, $persistent = true) {
  global $conf;
  if ($persistent) {
    $serialized_value = serialize($value);
    db_query("UPDATE {variable} SET value = '%s' WHERE name = '%s'", $serialized_value, $name);
    if (!db_affected_rows()) {
      @db_query("INSERT INTO {variable} (name, value) VALUES('%s', '%s')", $name, $serialized_value);
    }
    cache_clear_all('variables', 'cache');
  }
  $conf[$name] = $value;
}
```

Just an idea since testing seems to be in the air... maybe the problem is already solved elsewhere...
