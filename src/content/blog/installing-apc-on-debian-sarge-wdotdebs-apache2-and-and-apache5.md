---
title: "Installing APC on Debian Sarge w/dotdeb's apache2 and and apache5"
pubDate: 2006-03-15T00:00:00
description: Until dotdeb gets the package done.... pecl install apc isn't smart enough to grab apxs2.
tags:
  - systems administration
---

Until dotdeb gets the package done.... pecl install apc isn't smart enough to grab apxs2.

```bash
apt-get install php5-dev; # (phpize etc)
apt-get install apache2-dev; #(same reqs deal)
pecl download apc
tar -xvzf APC[tab]; # if you got a smart shell
cd APC[tab];
/usr/bin/phpize5 ;
./configure --enable-apc --enable-apc-mmap --with-apxs2 --with-php-config=/usr/bin/php-config
make; make install
```

default config:

```
  extension=apc.so
  apc.enabled=1
  apc.shm_segments=1
  apc.optimization=0
  apc.shm_size=32
  apc.num_files_hint=500
  apc.mmap_file_mask=/tmp/apc.XXXXXX
  apc.enable_cli=1
```

set cache default per domain.
