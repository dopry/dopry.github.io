---
layout: post
title: Admin tools for GitHub Pages
---

I have been looking for a good admin UI for GitHub pages. Static sites are great until you have to hand them off to a non-developer. Then hilarity, confusion, and frustration ensues.

Editors really need a few simple features to do their jobs well.

* Create and edit posts and pages.
* Upload and manage media files.
* Preview posts.

To make it convenient for editors there should a few additional constraints. 

* no need to use cli.
* no need to interact with GitHub.


We've tried a few tools in the last few years with varying degrees of success.

* Prose.io

  Prose was the first tool we found for managing GitHub pages. It was a great concept from Development Seed. It provided an editor for your markdown files in GitHub, Previews of you posts, and insulated editors from GitHub.

  It did have some drawbacks. The configuration wasn't well documented, it was poorly supported, The previews were always a bit off.

* Mr. Hyde

  Mr. Hyde is an Android app. It gives you a file browser and post editor. It's simple and straight forward to get started with. 

  Unfortunately it only runs on Android, and I haven't been able to actually get the previews to work.

* Netlify CMS

  Netlify CMS is another web base admin UI like prose. It provides previews and has an active community rapidly developing it. It has a nice UI that supports multiple content types, previews, and uploading images and media, and has a basic editorial workflow. Overall is the best to come along for basic editing tasks. 

  It suffers from a few draw backs for the GitHub Pages/Jekyll use cases. One of the project goals is to support multiple back-end and site generators. At this point in it's development it's really unaware of the site builder you're using, so you have to template and style your previews separately. The support for multiple backends such as GitHub, BitBucket, and gitlab is nice, but means the UX is somewhat constrained to features all the targets can support.

