---
title: "Why Drupal Contrib is Awesome!"
pubDate: 2013-07-19T00:00:00
description: Today, I started working on converting the [Spry Group](http://spry-group.com/) website to Drupal. The current site is a static site which we rather hurriedly tossed up while starting the business to at least have an online presence. We've been wanting to add some contact forms and blogs and update the content to reflect the direction our business has taken since we started the adventure.
tags:
  - drupal
  - opensource
---

Today, I started working on converting the [Spry Group](https://web.archive.org/web/20140922015142/http://spry-group.com/) website to Drupal. The current site is a static site which we rather hurriedly tossed up while starting the business to at least have an online presence. We've been wanting to add some contact forms and blogs and update the content to reflect the direction our business has taken since we started the adventure. So we spin up a Drupal 7 site on [Pantheon](https://web.archive.org/web/20140922015142/http://www.getpatheon.com/), and start plugging away setting up new
pages, picking a theme, setting up a slider, and then the contact forms.

With the new site we wanted to have a call to action from each of our service pages that linked to a contact form. I quickly discovered there was no way to deep link to a category in the core site wide contact form. I swore I had
written a patch for that and went to look and sure enough, 7 years or so ago I had written [https://drupal.org/node/46730](https://web.archive.org/web/20140922015142/https://drupal.org/node/46730) for Drupal 6. In good old drupal core fashion it got marked as a duplicate of a [newer effort](https://web.archive.org/web/20140922015142/https://drupal.org/node/183678) , which missed the D7 release cycle and ported to Drupal 8, then superseded by another over engineering effort to support Mollom. While these other things got implemented people are still trying to [figure out the UX](https://web.archive.org/web/20140922015142/https://drupal.org/node/1849158)

So being a person who likes to scratch their own itches and not wanting to hack core. I wrapped up my simple form hack as my first new Drupal module in about 6 years.

Then I decide to poke around in contrib and Ifind someone else has already solved these problems with the [Contact Forms](https://web.archive.org/web/20140922015142/https://drupal.org/project/contact_forms) Module.

Now, let's talk about why Contrib is Awesome. In the above example there is a demonstrated use case. Site builders want to be able to directly link to a specific contact form category. In core we're seeing a long discussion between developers about how to implement the features they want with no input from the end users. The end user feedback
cycle critical to agile development is nearly completely absent in core development. While in contrib you have a number of options for contact forms which can compete and develop independently of core and have a faster release and end user feedback cycle.

I can choose from modules like my simple hack which add a small feature to the core module or complete replacements. It's a competitive environment and usage statistics can demonstrate which modules are successful and heavily used. It's great ecosystem for developing and maturing features.
