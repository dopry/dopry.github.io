---
title: "Progress Events, Continued research on XMLHttpRequest2."
pubDate: 2008-07-10T00:00:00
description: Apparently, I don't pay enough attention to the W3C, but who does. :) So I've discovered the basis spec for all theHTML 5 progress events. The events are great. A quick look at the [Event definitions](https://web.archive.org/web/20130908195810/http://dev.w3.org/2006/webapi/progress/Progress.html#Event) reveal we get 5 new cool events loadstart, progress, error, abort, and load. Well at least error and abort are pretty obvious.
tags:
  - W3C
  - XMLHttpRequest2
  - Progress Events
  - specifications
---

Apparently, I don't pay enough attention to the W3C, but who does. :) So I've discovered the basis spec for all theHTML 5 progress events. The events are great. A quick look at the [Event definitions](https://web.archive.org/web/20130908195810/http://dev.w3.org/2006/webapi/progress/Progress.html#Event) reveal we get 5 new cool events loadstart, progress, error, abort, and load. Well at least error and abort are pretty obvious.

The remaining event names leave little to be desired. Admittedly progress is pretty straight forward, but I still need to look at the spec to know what it is about. loadstart and load are completely obtuse to me.. Do you really want to work with progress.progress, progress.loadstart and progress.load for the next 5-10 years?

Where did they get these names? [The WHAT-WG's events for media elements in HTML 5](https://web.archive.org/web/20130908195810/http://www.whatwg.org/specs/web-apps/current-work/#progress0) is where. The geniuses writing the spec are introducing use case specific terminology into the abstraction. In context the event names make far more sense: media.loadstart, media.load. For media it doesn't make sense to use already 'loaded' words like start or complete. The problems is that we aren't talking exclusively about 'loading' things or media. We also talking about... posting, transcoding, generating, processing, animating, playing... a whole collection of verbs and consistency of interface. So now that I've complained what would I recommend... progress.begin progress.update progress.complete

I am at least glad the WHAT-WG has made the W3C get off it's rear and do some modernizing. However I think it's sad that the brilliant people at W3C don't even take a moment to consider context when creating an abstraction. At least google didn't reveal anything to me...

Won't your suggested event names be useless in the context of WHATWG's mediaelements? In the case of media.load being a progress event, implying media.load.begin media.load.update and media.load.complete, no. Just requires some DOM rethinking in a few places. What about the people who have already started implementing the progress events? It's still a draft spec, expect changes. Let me introduce `sed`. But this is only an aesthetic change! I strongly feel it makes the Progress Events much easier to understand in context for developers. I feel strongly about self documenting code and well named properties and methods... I think it totally save some developers from losing their hair. My suggestion may not be the best, but maybe it will open up the subject for discussion. Most people seem to eat what they're fed without thinking about what's in it or how it was prepared...
