---
title: Lost Content? Did you check Wayback Machine?
pubDate: 2025-12-13T02:00:00
description: About a decade ago in a fit of pique after my old drupal site got hacked, I just rm -rf'd the whole server and all it's backups. At the time I had moved on from Drupal and the Drupal community and was busy with the Spry Group. Recently, I started thinking about what is next in my career. I decided I want to start looking for a senior technical executive role. When I started reviewing my online presence... I was not impressed and began regretting having trashed my old drupal site...

tags:
  - data recovery
  - archives
---

About a decade ago in a fit of pique after my old drupal site got hacked, I just rm -rf'd the whole server and all it's backups. At the time I had moved on from Drupal and the Drupal community and was busy with the Spry Group. Recently, I started thinking about what is next in my career. I decided I want to start looking for a senior technical executive role. When I started reviewing my online presence... I was not impressed and began regretting having trashed my old drupal site...

I recently did a large content migration for Typenetwork.com to a new CMS based on wagtail from their old expression engine instance. There were quite a few images linked from various partner sites that were no longer active. I came up with a strategy to recover the content using wayback machine when we encoutered broken links migrating the old content to the new CMS. It worked very well. We were able to recover all but 2 of the missing images.

I put the same strategy to work to recover the content from my personal blog. I tasked copilot with spidering my old site on way back machine and within 10 minutes I had a draft python script that had collected all the URLs for my pages on wayback machine. Within a few hours of iteration, I had all of my old content downloaded and being parsed and converted to markdown.

I had copilot help convert my jekyll site to astro. I spent a few hours themeing to match my old monochrome these I build for my first drupal blog. Then a few hours reviewing all the markdown and doing some quick hand cleanup of things that didn't parse well...

I'm still a bit sad about is losing some of the original images. Wayback only had the thumbnail...

When all is said and done though, Wayback Machine is the bomb. I'm dropping them a [generous donation](https://archive.org/donate?origin=iawww-TopNavDonateButton) today.

Now I've got to start getting all the posts I startedm but never finished on the years published.

.darrel.
