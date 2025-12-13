---
title: "Drupal file handling..."
pubDate: 2006-01-05T00:00:00
description: "I've discovered upload.module is a totally"
tags:
  - drupal
---

I've discovered upload.module is a totally whack piece of code... reading through it I feel like someone was trying to win a code obfuscation contest...

Through the process of osmosis(passing out on my laptop with vi open), I've think I've seen
a light. Not necessarily a bright one, but a light none the less. There needs to be a way
for modules to dependably interact with the file upload and management process, and
hopefully without the overhead of a whole new hook...

My disparate thoughts go something like....

if $node->files[$fid] is just an array of properties for a node/file relationship, and
$node->filedata[$fid] is what we get from the actual file itself, we can decouple a lot
of things... (list, description, properties added by other modules)...

It would also make it easier to clean up how upload.module handles files. The files object could be build directly off the form eliminating the upload_load calls in upload_nodeapi, and upload_save. Then through the clever use of module weighting which chx has introduced, and making sure the state of node->files and node->filedata is consistant between
upload_nodeapi insert/validate and upload_nodeapi load per page load other modules can act on the files through good old
nodeapi.

It gets a little tricky with previews, but I'm thinking of queueing file activities, so they don't get done until submit and so long process like reencoding a piece of video can be done, outside of php's limited execution time... I think this will all work out very well and I think I can do it without crossing paths with Ber too much for the time being, while he's working on the lower level file storage stuff.

.darrel.
