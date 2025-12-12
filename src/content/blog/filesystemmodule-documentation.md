---
title: "Filesystem.Module Documentation"
pubDate: 2006-06-21T00:00:00
description: How filesystem.module and fileapi.inc fit into the drupal architecture
tags:
  - drupal
---

**How filesystem.module and fileapi.inc fit into the drupal architecture**:

<div class="cf">
  <img class="fl" src="/images/filesystemAPIstack.png">
</div>

_this image does not include repositories_

core filesystem concepts

- storage drivers
- repositories
- fileapi
- filesystem

Walk though from the bottom up....

**storage drivers** implement callbacks for
various file storage systems. They provide basic file
functions for whatever storage system they support. They
provide a settings form and validate callback as well as
their file handling callbacks.

**repositories** are an instance of a storage
driver. A repository has a mountpoint, a driver, a
driver's settings, access control callbacks, and a system
flags which determines whether the repository can be
deleted or not.

**fileapi** abstracts the repositories and
storages drivers from developers and provides stable UI
for developers that works with file paths. Its is a lower
level api to replace functions like php's
copy/move/unlink.

**filesystem** provides an upper level api,
treating files as arrays with a multitude metadata. It
does concurrent database operations with fileapi
operations. It provides custom file elements, a generic
filebrowser interface, and utility tools for other modules
to make developing file centric sites easier.

and now in a drupal far far away. my errata

Filesystem.module expects files to be an array.

Example of file object.

```php
$file = array(
  'fid' => '', //unique file id
  'uid' => '', //uid file is associated to
  'name' => 'filename.ext', //display name of file
  'path' => 'files/filename', //absolute path && real filename
  'mime' => 'text/plain', //mime type of file
  'size' => 33032, //filesize
  'attributes => array(
    //associative array offile metadata.
    'key' =>'value'
  ),
);
```

fileapi expects a path. fileapi_invoke_storage_driver
handles parsing out the storage driver used for a
particular mount point.

filesystem.module associates files to uids instead of
nids. This makes the file life cycle asynchronous to the
node life cycle.

fileapi.inc provides low-level file functions with support
for storage drivers.

filesystem.module provides a richer api which combines
low-level file handling and db handling in single function
calls. It also provides a basic filebrowser, and an
intelligent form element for handling uploads.

**these need to be revised to match the current code i'm
working with** APIS:

filesystem.module:

```php
  filesystem_manage((array)$file)
  filesystem_unmanage((array)$file)
  filesystem_privatize((array)$file, $access_control_callback)
  filesystem_publicize((array)$file)
  filesystem_copy((array)$file, (array)$file)
  filesystem_move((array)$file, (array)$file)
  filesystem_rm((array)$file)
  filesystem_load(array/fid) //node load like syntax
  filesystem_get(url)
  filesystem_save_metadata((array)$file)
  filesystem_get_metadata((array)$file)
```

fileapi.inc:

```
  bool fileapi_is_file($path)
  bool fileapi_is_dir($path)
  bool fileapi_exists($path)
  errno fileapi_mkdir($path)
  errno fileapi_rm($path)
  errno fileapi_move($src, $dst)
  errno fileapi_copy($src, $dst)
  errno fileapi_readdir($src);
  errno fileapi_readfile($src);
  errno fileapi_get($src);
  errno fileapi_upload($src);
```

storage drivers:

```php
bool storagedriver_$driver_is_file($settings, $path)
bool storagedriver_$driver_is_dir($settings, $path)
bool storagedriver_$driver_mkdir($settings, $path)
bool storagedriver_$driver_rmdir($settings, $path)
bool storagedriver_$driver_rm($settings, $path)
bool storagedriver_$driver_copy($settings, $src, $dst)
bool storagedriver_$driver_move($settings, $src, $dst)
array storagedriver_$driver_readdir($settings, $path)
array storagedriver_$driver_readfile($settings, $path)
bool storagedriver_$driver_exists($settings, $path)
bool storagedriver_$driver_touch($settings, $path)
```
