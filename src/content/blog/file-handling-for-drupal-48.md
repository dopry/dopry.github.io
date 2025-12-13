---
title: "File Handling for Drupal 4.8"
pubDate: 2006-03-10T00:00:00
description: "Goals for drupal 4.8 file handling... - sink all file related DB activity to fileapi"
tags:
  - drupal
---

Goals for drupal 4.8 file handling...

- sink all file related DB activity to fileapi
- introduce hook_file
- drop temp files... either upload it or dont. No more messy previews.
- files are associated to a uid not a node.
- limit base file api to four functions (upload, copy, move, delete).
- fast path private file downloads.

  ```
  // download key is created and prefixed to path when url is themed.
  touch /tmp/dlkeys/keyfiles
  // get url parses key,
  if (is_file(tmp/dlkeys/key)) { send file }
  else { check file extension and send appropriate denied file }
  ```

- all filepaths relative to either private files root, or public files root.
- flexible file attributes tables
- attribute/query driven file browser.
