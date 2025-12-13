---
title: "Mime Types and Multimedia Handling... ARG!!!"
pubDate: 2007-12-29T00:00:00
description: I really dislike working with MIME types, but they're a fact of life. The MIME type system does a great job of serving of its original purpose of describing data for transfer between different systems and associating data to applications that are capable of displaying the data.
tags:
  - drupal
  - files
  - mime
  - multimedia
---

I really dislike working with MIME types, but they're a
fact of life. The MIME type system does a great job of
serving of its original purpose of describing data for
transfer between different systems and associating data to
applications that are capable of displaying the data.

Written to support internet mail exchange, the MIME system
has outgrown it's original scope in the modern world and
is now used to describe files and media used on the web
and in web applications. The base mime types are Image,
Audio, Video, Application, Multipart, and Message. I will
ignore the last two since they are very email specific and
haven't really escaped their original scope.

['Image'](https://web.archive.org/web/20120526004705/http://tools.ietf.org/html/rfc2046#section-4.2) and ['Audio'](https://web.archive.org/web/20120526004705/http://tools.ietf.org/html/rfc2046#section-4.3) are straight forward just still image file formats and
audio encoding formats. ['Video'](https://web.archive.org/web/20120526004705/http://tools.ietf.org/html/rfc2046#section-4.4) is for 'time-varying-picture image, possibly with color
and coordinated sound.' Which should basically cover all
of our container formats such as ogg, asf, mpeg, and
quicktime. Next we come to ['Application'](https://web.archive.org/web/20120526004705/http://tools.ietf.org/html/rfc2046#section-4.5) . This MIME type told us that a helper application was
needed to view the data it stored, and was only to be used
when one of the other MIME types didn't fit the bill to
describe the data.

In the ['Video'](https://web.archive.org/web/20120526004705/http://tools.ietf.org/html/rfc2046#section-4.4) section of RFC 2046 states 'Unrecognized subtypes of
"video" should at a minumum be treated as
"application/octet-stream"'.

My major complaints about mime types and mime handling
mostly derive from implementers confusion about this. The
'file' binary on ubuntu returns application/octet-stream
as the mime type for unknown video types such as ASF
instead of something like video/x-unknown. The people
behind OGG as well have done something equally silly
choosing 'application/ogg' as the mime type for ogg
encoded files. Since ogg contains sync's audio and moving
image it seems like a shoe in for 'video/ogg'.

For my purposes as a developer working outside of the
original scope, I really only need to know the MIME media
type not the subtype. I'm concerned with implementing
abstract work flows for different media types. The
processes and metadata associated with video, image, or
audio MIME types tend to be the same across all sub types.
Available tools like ffmpeg and imagemagick tend to
abstract the subtype handling and even the type handling
at times. Most players and browsers abstract the subtype
presentation.

Why after 10+ years have the people working with media
files and mime detections tools not decided to adhere to
the RFC and make it easy for me to detect or know the MIME
Media type of a file consistently. I can only imagine the
hoops the developers who deal with the subtypes have to
jump through.

In Drupal I hope to work around this and bring some sanity
to myself. It will begin with the first hook_filefield
module I've been wanting to write since I implemented
hook_filefield.... I still think this should happen in
core via [hook_file](https://web.archive.org/web/20120526004705/http://drupal.org/node/142995) ....
