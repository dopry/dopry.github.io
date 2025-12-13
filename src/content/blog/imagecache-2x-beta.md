---
title: "Imagecache 2.x Beta"
pubDate: 2007-12-28T00:00:00
description: I've recently been working on imagecache 2.x... It's not the original update I planned with the full transformer conversion, but a major rewrite none the less. ImageCache 2.x is currently feature complete and ready for testing.
tags:
  - drupal
  - imagecache
---

I've recently been working on imagecache 2.x... It's not the original update I planned with the full transformer conversion, but a major rewrite none the less. ImageCache 2.x is currently feature complete and ready for testing.

## Overview

- 'scale and crop' action.
- private files support
- improved error responses
- strip secondary file_dirctory_path from URLS.
- restructured code to improve re-usability.
- Uses ImageAPI
- hook_imagecache_action

## Scale and Crop

UnConed sent me a patch to replace the awkward scale to inside/outside dimensions with Drupal core's scale and crop function. I think this much simplifies the configuration of many presets.

## Private Files Support

Support for private files is a long standing feature request. It's here now. It provides per preset access control for derivatives. I still want to add support for apache served presets with private files enabled, It needs to be a flag on each preset.

## Improved Error Responses

I updated imagecache to return either 403/404 images per preset or 403/404 response codes if access is denied to a preset or the source image cannot be found respectively. If a preset cannot be found imagecache should issue a 404 response, and if an error occurs imagecache should return a 500 response. Returning proper headers should prevent a few browser requests for missing and access denied images.

## Strip file_directory_path

Imagecache has long been plagued with long difficult URL's. That is no more in the 2.x version, the imagecache urls no longer contain file_directory_path() within the imagecache namespace.

## Restructured Code

Nearly everything happening in imagecache was occuring in one monolithic function. This has been broken up so that there are menu callback handlers for private and public fililes, a helper function for handling an imagecache request and sending the proper response to the browser, and a function for building imagecache derivatives.

## Uses ImageAPI

Core's image.inc requires a write to disk per image operation, using valuable disk i/o and reducing image quality. I wrote a replacement to image.inc called ImageAPI that operates on in memory image objects, and allows you to use multiple image toolkits simultaneously.

## hook_imagecache_action

You can now implement your own imagecache actions by using hook_imagecache_action, see the example in ImageCache.
