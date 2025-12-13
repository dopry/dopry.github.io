---
title: "ImageField 2.0, ImageCache 2.0, ImageAPI 1.1"
pubDate: 2008-05-12T00:00:00
description: I'm finally comfortable enough with my Image\* namespace to have official releases of the 2.x series of ImageField and ImageCache + ImageAPI... I'd like to extend thanks to everyone who has filed issues and submitted patches, especially Drewish and Quicksketch.
tags:
  - drupal
  - imagecache
  - CCK
  - imageapi
  - Images
  - imagefield
---

**Install ImageAPI before upgrading to ImageCache2.x!!**

I'm finally comfortable enough with my Image\* namespace to have official releases of the 2.x series of ImageField and ImageCache + ImageAPI... I'd like to extend thanks to everyone who has filed issues and submitted patches, especially Drewish and Quicksketch.

Now that my 2.x's are out I can start on the 6.x ports. ImageAPI already has a working port in HEAD, but needs some bug fixes ported from 5.x-1.x. There is a patch for ImageCache pending in it's queue and it should be a trivial port. ImageField will be the first to see an official release, since it will be needed to test the ImageCache port. I will be developing a core compatible file api for imagefield and filefield to consolidate specialized functions used by both to maintain path correctness, implement hook_file, and hide a few messages from some of the chattier core file functions. This will delay D6 ImageField development a little.

Since CCK is still at alpha I don't see it delaying and official ImageField release. I will also probably be getting back to the CCK issue queue so I can get my D6 ports out and stable.

/me waves to KarenS and Yched.

--outta the weeds
.darrel.
