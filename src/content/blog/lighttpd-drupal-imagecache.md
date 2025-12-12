---
title: "Lighttpd + Drupal + Imagecache...."
pubDate: 2008-02-21T00:00:00
description: I have a client whose sysadmin is adamant about using Lighttpd as a webserver, whose site also uses imagecache. There are some major differences in Lighttpd's rewrite system compared to Apache's rewrite system. The difference that is most important is the lack of the file exists check provided by the -f flag to apache's rewrite conditions.
tags:
  - drupal
  - imagecache
  - lighttpd
  - webservers
---

I have a client whose sysadmin is adamant about using Lighttpd as a webserver, whose site also uses imagecache. There are some major differences in Lighttpd's rewrite system compared to Apache's rewrite system. The difference that is most important is the lack of the file exists check provided by the -f flag to apache's rewrite conditions. The way imagecache works is to dynamically generate images that don't exist when they're requested from it's url namespace. So if you request [http://example.com/files/imagecache/thumbnail/myimage.jpg](https://web.archive.org/web/20150509010931/http://example.com/files/imagecache/thumbnail/myimage.jpg) and it doesn't exist the url rules rewrite it as [http://example.com/index.php?q=files/imagecache/thumbnail/myimage.jpg](https://web.archive.org/web/20150509010931/http://example.com/index.php?q=files/imagecache/thumbnail/myimage.jpg) and drupal passes the request to imagecache. If the file does exist Apache just serves it directly.

Since Lighttpd's rewrite rules do not support this file exists flag they are unsuitable to solving our problem. I tried setting up several different variations of rewrite rules, specialized 404 handling. Finally after searching I found, [http://nordisch.org/2007/2/6/drupal-on-lighttpd-with-clean-urls](https://web.archive.org/web/20150509010931/http://nordisch.org/2007/2/6/drupal-on-lighttpd-with-clean-urls) So after installing mod_magnet, and editing the url prefixing for my local installation everything works wonderfully...

While everything is working I still have some concerns that make me want to do some benchmarks against lighthttpd and apache. My concern is that mod_magnet seems to have a heavy performance cost, like 25% less requests per second
according to the Benchmarks section of [http://nordisch.org/2006/10/6/dr-magneto-vs-mr-404-handler](https://web.archive.org/web/20150509010931/http://nordisch.org/2006/10/6/dr-magneto-vs-mr-404-handler) When I consider it in light of the performance benchmarks at [http://blog.kovyrin.net/2006/08/28/ruby-performance-results/](https://web.archive.org/web/20150509010931/http://blog.kovyrin.net/2006/08/28/ruby-performance-results/) I start wondering if lighttpd + mod_magnet +fcgi really has a performance advantage over apache2 + fcgi + mod_rewrite. I would expect lighttpd to have a smaller memory footprint, but a minimally configured apache + fcgi has a pretty small memory footprint compared to running mod_php.... Now that I have a working lighttpd install I may try to do some benchmarks to ease my mind.
