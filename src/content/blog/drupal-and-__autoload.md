---
title: "Drupal and __autoload"
pubDate: 2008-01-19T00:00:00
description: Crell published some interesting benchmarks in 'Benchmarking magic'. He mentions the overhead of loading and parsing in PHP being a big bottle neck in the [comments.](https://web.archive.org/web/20120711235832/http://www.garfieldtech.com/blog/magic-benchmarks#comment-564)
tags:
  - drupal
  - OO
  - __autoload
  - __call
  - php
---

Crell published some interesting benchmarks in 'Benchmarking magic'. He mentions the overhead of loading and parsing in PHP being a big bottle neck in the [comments.](https://web.archive.org/web/20120711235832/http://www.garfieldtech.com/blog/magic-benchmarks#comment-564) My current project uses a few classes that kind of clutter the .module and aren't always used. Having PHP magic functions on the mind I immediately started thinking about \_\_autoload and Drupal. Paths are an issue for includes with Drupal modules... You never quite know where your module will be in an installation. You can also only have a single \_autoload() function. So to keep life simple for myself I decided to stash args for drupal_get_path in my class names.

```php
 <?php

 function __autoload($classname) {
   $parts = explode('_', $classname);
   $type = array_pop($parts);
   $name = array_pop($parts);
   $file = array_pop($parts);
   $path = drupal_get_path($type, $name).'/class.'. $file .'.php';
   include_once($path);
 }


 class module_mediaAPI_media {}
 class module_transformer_transform {}
?>
```

This makes drupal try to load:

<ul>
<li>sites/all/modules/mediaAPI/class.media.php</li> 
<li>sites/all/modules/transformer/class.transform.php</li>

It would be nice to standardize an \_\_autoload as Drupal starts taking advantage of more OO capabilities.

Maybe Crell would be nice enough to plan out some \_\_autoload benchmarks in the future... _hint_ _hint_
