---
title: "Flex and Adobe's bad example..."
pubDate: 2008-03-05T00:00:00
description: We develop flash and flex front ends at [Eighty Elements](https://web.archive.org/web/20120526010420/http://www.eightyelements.com/) . I'm primarily a server side developer, and I decided to start teaching myself flex so I can better communicate and understand the work our front end guys do.
tags:
  - Flex
  - tutorials
  - fact checking
---

We develop flash and flex front ends at [Eighty Elements](https://web.archive.org/web/20120526010420/http://www.eightyelements.com/) . I'm primarily a server side developer, and I decided to start teaching myself flex so I can better communicate and understand the work our front end guys do. After a long session of trying to get past the 'Flex Hype Machine', I finally found Adobe's developer connection site and their getting started tutorials. I started at [coding with mxml and actionscript](https://web.archive.org/web/20120526010420/http://www.adobe.com/devnet/flex/quickstart/coding_with_mxml_and_actionscript/) . The first example is straight forward declarative flex,
the second is an inline actionscript example. When I
compiled and ran the second example in firefox, I got a
blue box in the top right of my firefox window, and a
button in the middle of my firefox window. Not what was
supposed to happen...I looked a little more closely at the
code and realized the createCompleteHandler was setting
the button position relative to the 'parent' of the
application container, which is firefox, instead of 'this'
which is the application container. I think it is totally
lame that adobe can spend so much time and money marketing
flex/flash/air and not take the time to check their
example code for accuracy and bugs.
