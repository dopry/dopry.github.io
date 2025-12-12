---
title: "Referential Integrity in Drupal W00T!!"
pubDate: 2007-01-23T00:00:00
description: There are some days I really get excited about Drupal. I got really excited the other day when Dries sent an email to the dev list, basically saying mysql 3.23 support will be dropped and we can start using foreign keys.
tags:
  - drupal
  - database
  - referential integrity
---

There are some days I really get excited about Drupal. I got really excited the other day when Dries sent an email to the dev list, basically saying mysql 3.23 support will be dropped and we can start using foreign keys.

I think its good Drupal is finally starting to move in a direction where trust and work is being off loaded to the database. I mean there are only 30+ years of R&D into relational databases. I'm not sure why we developers keep trying to outsmart the DB in our applications.

With murmurs of an abstracted DDL by Adrian and some others to simplify managing schema's for different databases I start to hope in the future Drupal might start to utilize more of the power provided by relational databases.

The first thing that comes to mind is using stored procedures or views built from our Data Definitions to load node types, reducing what was once many queries and round trips to the database to a single call.

Next, I start envisioning triggers handling much of our cache clearing instead of developers having to make another query to the database. Another cool side effect of doing more in the database and having well defined schema's is that its easier to integrate other applications without having to use Drupal or Drupal's API's.

/me smiles
