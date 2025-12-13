---
title: "vhost filesystem and permissions."
pubDate: 2006-03-17T00:00:00
description: "apache atomic vhost permissions with php... ```"
tags:
  - systems administration
---

apache atomic vhost permissions with php...

```
1771 root user example.com/
0771 root user example.com/cgi-bin
0771 root user example.com/public_html
1777 root root example.com/tmp
0755 root root example.com/var

(logs/stats/db's)
user:
  home=example.com

groups...
user: user
example.com: user,www-data

```

change group to example.com and chmod g+ws folder that both the webapp and users need access to.
