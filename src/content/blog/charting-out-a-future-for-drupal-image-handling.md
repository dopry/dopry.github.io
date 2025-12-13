---
title: "Charting out a future for Drupal Image handling..."
pubDate: 2006-10-19T00:00:00
description: I've somehow found some amazing people who are interested in helping my with my image/file manipulation work for Drupal. Based on concepts that have been brewing in imagecache (dynamic image generation and manipulation, automated derivative generation, image processing automation) I've started an endeavor to break this stuff into usable discreet chunks.
tags:
  - drupal
---

I've somehow found some amazing people who are interested in helping my with my image/file manipulation work for Drupal. Based on concepts that have been brewing in imagecache (dynamic image generation and manipulation, automated derivative generation, image processing automation) I've started an endeavor to break this stuff into usable discreet chunks.

The first bridge to cross is Transformer.module.
Transformer.module handles transform plugins, creating
transformations (batches of transforms), executing
individual transforms, executing batch transformations,
and providing js callbacks to transforms and
transformations.

The next bridge will be revisiting imagecache and updating
it to work with the transformer module as a back end.

The final end goal is an inline javascript image editor
that will initially allow basic resize, crop, and scale
functions. SnipShot is a rough model for what I want to
do, but not quite there.

1. its not JQuery.
2. I can't target any inline image.
3. the tool palette is limited.
4. its proprietary.

I'd like it to work with node previews and tinymce, so I
could scale/crop inline with my content editing bringing
the online content production completely within the
browser.
