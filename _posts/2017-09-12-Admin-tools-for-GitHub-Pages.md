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

<!--more-->

I've tried a few tools in the last few years with varying degrees of success.

* [Prose.io](https://github.com/prose/prose)

  Prose was the first tool we found for managing GitHub pages. It was a great concept from Development Seed. It provided an editor for your markdown files in GitHub, Previews of you posts, and insulated editors from GitHub. It did have some drawbacks. The configuration wasn't well documented, it was poorly supported, The previews were always a bit off. Development halted for a while, but it seems to have picked up recentinly. Maybe there is some life still left in the project. 

* [Mr. Hyde](https://play.google.com/store/apps/details?id=org.faudroids.mrhyde&hl=en)

  Mr. Hyde is an Android app. It gives you a file browser and post editor. It's simple and straight forward to get started with. It only runs on Android, and I wasn't able to get the previews to work. Although I was successful at writing and publishing a simple post in my test. 

* [Netlify CMS](https://www.netlifycms.org/)

  Netlify CMS is another web base admin UI like prose. It provides previews and has an active community rapidly developing it. It has a nice UI that supports multiple content types, previews, and uploading images and media, and has a basic editorial workflow. Overall is the best to come along for basic editing tasks. 

  It suffers from a few draw backs for the GitHub Pages/Jekyll use cases. One of the project goals is to support multiple back-end and site generators. At this point in it's development it's really unaware of the site builder you're using, so you have to template and style your previews separately. The support for multiple backends such as GitHub, BitBucket, and gitlab is nice, but means the UX is somewhat constrained to features all the targets can support.
  
I think netlify is the best of the pure client side options editing UIs. It has an active community and they're doing good work. For myself, I'm going to be editing markdown directly on github.

  
  

