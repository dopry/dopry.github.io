---
title: "Microformats and Media... RFC if you like JS or CSS"
pubDate: 2008-04-17T00:00:00
description: I have a love hate relationship with microformats. The apostles who think they're the end all be all of the semantic web drive me insane. 'Semantic Web' aside, microformats are a powerful approache to reusable design. Consistent markup with the appropriate JS or CSS can make for great reusable UI widgets.
tags:
  - drupal
  - media
  - microformats
---

![](https://web.archive.org/web/20150508215421im_/http://darrelopry.com/sites/default/files/styles/thumbnail/public/storyimages/wiki.png?itok=EDgr21XI)

I have a love hate relationship with microformats. The apostles who think they're the end all be all of the semantic web drive me insane. 'Semantic Web' aside, microformats are a powerful approache to reusable design. Consistent markup with the appropriate JS or CSS can make for great reusable UI widgets. This morning I was dabbling with derivative which goes through some acrobatics to display multiple media types, in light of the classes I recently added to the tags imagecache produces, I thought it would be awsome to use a simple microformat for files. Some quick Googling (proper verbs what is english coming to) ledme to [http://microformats.org/wiki/file-format-examples](https://web.archive.org/web/20150508215421/http://microformats.org/wiki/file-format-examples)

I'm seriously considering merging both examples from the page into something like: The Gorge - MPEG video (22MB, 20x200, 228s, MP3192Kbps audio, MPEG-2 video)

```
<div class="hFileFormat">
  <a
    type="video/mpeg; audio-codec=MP3, audio-codec-sample-rate=192Kbps, video-codec=MPEG-2"
    length="23068672"
    href="/web/20150508215421/http://darrelopry.com/angels_arete.mpg">
    The Gorge - MPEG video
  </a>
  (
    <abbr class="size-in-octets' title="23068672">22MB</abbr>,
    <span class="audio-codec">MP3</span>
    <abbr class="audio-codec-sample-rate" title=192000>192Kbps</abbr>
    <span class="video-codec">MPEG-2</span>
  )
</div>
```

The format will need some refinement, so I am to soliciting feedback from people familiar with JQuery and CSS. Are there limitations to the markup? Can it be more succinct? Can it be made more self explanatory? Are there ways to make it an easier target for selectors? Is anyone else doing anything similar?
