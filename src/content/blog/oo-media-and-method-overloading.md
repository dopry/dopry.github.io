---
title: "OO, Media, and Method Overloading..."
pubDate: 2008-01-19T00:00:00
description: I'm not a big fan of OO development. I think the OO approach is poor for readability and code comprehension. However, it does make for great black boxes. I really appreciate OO for encapsulating executable code.
tags:
  - drupal
  - media
  - OO
---

I'm not a big fan of OO development. I think the OO
approach is poor for readability and code comprehension.
However, it does make for great black boxes. I really
appreciate OO for encapsulating executable code. I
recently wrote a module called ImageAPI for drupal that
encapsulates Images in an object with a procedural
interface for manipulating the Images stored in the
objects. Later I wrote a wrapper around FFmpeg and took it
a step further and replaced the procedural interface with
methods.

There were a few problems this nicely encapsulated.

- I need to manipulate files with ffmpeg without over
  writing the source,I can't use the old approach I did
  with drupal core's image.inc of overwriting the source
  file with the manipulated file. FFmpeg is still reading
  that source file. So I need to write out to a temp file
  foreach operation.
- I need to maintain updates to file extensions and such
  for ffmpeg conversions.
- I needed to clean up all my garbage tmp files, reliably.
  This has been an issue in imagecache and transformer
  when something goes awry.(which is more common in my
  code that I want it to be.)

I was able to wrap the creation of my temp files in the
constructor, and have the internal data all stay in the
object. Then the destructure gets called on shut down and
does all my cleanup for me. I rather liked the result. It
could still use some refining.

In the process of developing the ffmpeg class, I started
thinking about how this could apply to the more general
use case of handling multiple media types and different
possible backends for manipulating them. What I've really
been missing in the OO approach is method overloading. I
started imagining just what could be done with \_\_call.

Some particular use cases I'm working with...

- I want extract clips from a media file.$media = new Media($path);$media->trim($start_frame, $end_frame)$path = $media->save();
- I want to crop a particular piece of media.$media = new Media($path);$media->crop($width, $height);$path = $media->save();
- I want to insert something into a piece of media.$media = new Media($path);$media->insert($mark,
  $insert_path);$path = $media->save();
- I want to convert a piece of media to another format.$media = new Media($path);$media->transcode($options);$path = $media->save();

I don't want to think about file extensions or media
types. I also don't want to think about how this will
interact with drupal file objects just yet. I need my
container media object to encapulate all that stuff for
me. There is an issue of what if a particular operation
doesn't apply to a particular media object... for my
purposes I'm glad to gracefully ignore those unsupported
calls and just say the happen so I can do things like...

```php
$media = new Media($path);
$media->crop($width, $height);
$media->trim($start_frame, $end_frame);
$path = $media->save();
```

So I end up with media that is $widthx$height and at most
$end_frame - $start_frame long, regardless of whether its
audio, video, or image and my api doesn't give me a hard
time. I mean after all what I want for most of my use
cases is something that fits within those constraints for
display on a website.

This is my sorta sketch of where this is headed and
doesn't include the extension management stuff from my
ffmpeg class which I should be working on instead of this
write up... but hey I'm caffeinated and don't want to
forget.

```php
// $Id$
/**

* Abstract Media operations to underlying API's OO style.

*/
class media {

  // private resource file so we don't harm original media.
  private $res;

  // original source media path.
  private $src;

  // type of media(audio,image,video)
  private $type;

  // media meta data.
  private $meta = array();

  // api for manipulating this media type.
  private $actor;

  function __construct($path) {
    $this->src = $path;
    // Verify that we received a valid file path.
    if (!is_file($this->src)) {
      watchdog('MediaAPI', t('__construct: %p is not a valid path.', array('%p' => $this->src)), WATCHDOG_ERROR);
      return FALSE;
    }

    $this->res = tempnam(file_directory_temp(), 'MediaAPI_resource');

    // make a copy of the source the we will use as our local resource.

    if (!copy($path, $this->res)) {
      watchdog('MediaAPI', t('__construct(%s): Failed to create working copy %r.',
      array('%s' => $this->src, '%r'=> $this->r)
      return FALSE;
    }

    // @todo: Determine Media Type.
    /*
    $this->type = $this->get_type();
    switch($this->type) {
      case 'image':
        $this->actor = new ImageAPI($this->res);
        break;
      case 'video':
        $this->actor = new VideoAPI($this->res);
        break;
      case 'audio':
        $this->actor = new AudioAPI($this->res);
        break;
    }
   */
  }

  // clean up resources on delete.
  function __destruct() {
    file_delete($this->res);
  }

  // catch method calls and pass to underlying API classes.
  // @todo: implement graceful handling for actor capabilities.

  function __call($method, $arguments) {
    $result = $this->actor->{$method}($arguments);
  }

  // save a media resource.
  function save($dst = FALSE) {
    if (!$dst) {
      $dst = $this->src;
    }
    if (!file_copy($this->res, $dst)) {
      watchdog('MediaAPI', t('save(): Failed to save private resource(%r) to %d.',
      array('%d' => $dst, '%r' =>$this->res)));
      return FALSE;
    }
    return $dst;
  }
}
```
