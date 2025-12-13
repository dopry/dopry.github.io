---
title: "Yeah dev.thing.net is alive..."
pubDate: 2005-11-29T00:00:00
description: I got my new development server up and running...
tags:
  - systems administration
---

I got my new development server up and running... Well, its not new. I've upgraded an old 1U nameserver from 500MHZ/64MB to 900MHZ/320MB... It has been merrily been running along on Ubuntu Breezy since day 1.

There a three goals for this server..

1. Track thing.net development projects.

2. start developing thing.net's next generation hosting platform... ... Virtualization, Apache2, and the php5/mysql5 move....

3. Offer SCM/Project tracking support for small teams working on new media related software projects.

To meet these goals I'm going to have to back track a little since I found Xen... IE) backup the current setup, install a Xen dom0, then rebuild dev.thing.net in a vm...

goals 1 and 3 are met by a nice installation of trac/svn and a nice create_project script I wrote which automates setting up svn, trac, and apache for a project.
