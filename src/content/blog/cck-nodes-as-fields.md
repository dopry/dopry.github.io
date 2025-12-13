---
title: "CCK & Nodes as Fields...."
pubDate: 2006-12-12T00:00:00
description: <braindump> My current project is a fairly interesting CCK based site with a lot of node referencing going on. It's core is basically a normalized structure of three different node types. (books, authors, and publishers) All content produced on the website is relevant to one of those three things.
tags:
  - drupal
---

My current project is a fairly interesting CCK based site
with a lot of node referencing going on. It's core is
basically a normalized structure of three different node
types. (books, authors, and publishers) All content
produced on the website is relevant to one of those three
things.

I've recently run into a head banger style problem with it
though. The need to be able to simplify the input
procedure for the users. Since this is mainly reference
data for existing stories, we really need to be able to
automagically generate many nodes here....

The idea that keeps popping into mind is node types as
fields for cck. The concept is an expansion on node
reference. Where we embed an entire node form, where we
would expect a single field as say a field group.... Using
#tree it seems like it would be fairly simple just to
append node_form() to the cck form array, and process it
appropriately.

The next step to creating a usable UI from this... or at
least for my use case would be to write a custom widget
module for book nodes.... Something that takes an ISBN,
queries data from an external service and creates the
necessary nodes in the background.

And stores the nid locally. The problem is widget_info
doesn't receive any context about the field... So to
extend the widget set for node_reference fields where
allowed node types is only books would be impossible at
this juncture.
