---
title: "Setting up Darwin Streaming Server on Ubuntu Breezy"
pubDate: 2006-01-16T00:00:00
description: Well you can't do it with the 4.0 compiler that ships with the distribution... Its too strict.
tags:
  - systems administration
---

Well you can't do it with the 4.0 compiler that ships with
the distribution... Its too strict.

Solution, use the gcc-3.3 compiler, and some useful
includes.

apt-get install gcc-3.3 g++-3.3 libc6-dev

update Buildit

In the section under linux.i586/i686 (assuming you're
running on a pentium or better system)... CPLUS=gcc-3.3 CCOMP=gcc-3.3 LINKER='gcc-3.3'

Thats all there is to it... Tell the DSS developers to get
up to date :).
