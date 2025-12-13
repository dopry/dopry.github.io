---
title: "DrupalCampNYC 4 gives ImageCache 1.x some loving..."
pubDate: 2008-03-31T00:00:00
description: I had a great time at DrupalCampNYC.... I stuck myself in the Hack Shack, where I should probably keep myself as jaded as I've been lately. Ate me some tasty Bagels and got to help a few folks out... I even gave a presentation on workflow in Drupal 5. (Yes I occasionally show for my sessions.)
tags:
  - drupal
  - imagecache
  - DrupalCampNYC
---

I had a great time at DrupalCampNYC.... I stuck myself in the Hack Shack, where I should
probably keep myself as jaded as I've been lately. Ate
me some tasty Bagels and got to help a few folks
out... I even gave a presentation on workflow in
Drupal 5. (Yes I occasionally show for my sessions.) I think the best part was actually getting to work
first hand with a difficult imagecache permissions
issue Nat Meysenburg from OpenFlows was having...
There are a slew of things that can go wrong working
with imagecache... Apache's Rewrite Rules,
Permissions, Drupal Files Config, corrupt images, lock
files.... I always have a difficult time divining what
problems people are having from my issue queue... It
always ends up being a long round of question and
answer before I figure out an issue if I ever do... In my on going frustration with supporting imagecache.
I added a few permissions fixes to get a 1.4(borked)
and 1.5 out. I started thinking ImageCache 1.x is
_really_ crufty compared to 2.x. It's just a little
bit cleaner than the proof of concept it originally
started as. So I've taken the last two days to back
port the Header responses from 2.x, add a lot more
watchdog calls, fix up the lock file handling, and
remove some of the stuff that I look at now and go,
"what was I thinking?". After releasing a broken 1.4, I'm a little gun shy
about rolling 1.6 right now from 1.x-dev. I would love
some brave souls to check out the DRUPAL-5 branch or
wait till tomorrow and test out the snapshot As soon
as I get 3-4 not brokens I'll go about a release... .darrel.

[drupal](/web/20150509010747/http://darrelopry.com/taxonomy/term/1) [imagecache](/web/20150509010747/http://darrelopry.com/taxonomy/term/37) [DrupalCampNYC](/web/20150509010747/http://darrelopry.com/category/tags/drupalcampnyc)
