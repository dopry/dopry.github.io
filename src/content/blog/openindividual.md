---
title: "OpenIndividual"
pubDate: 2006-03-30T00:00:00
description: There are lots of really cool social networking applications out there. Each is unique in its marketing, but central in what it does. Host an online persona, allow members to associate & 'link' to each other, allow people to search for site members.
tags:
  - drupal
---

There are lots of really cool social networking
applications out there. Each is unique in its marketing,
but central in what it does. Host an online persona, allow
members to associate & 'link' to each other, allow
people to search for site members.

However, I don't like the thought of opening social
networks to the gain of third parties. It makes me feel
like Orwell is hiding in my closet next to Ms. Atwood and
Mr. Zemyatin. trying to figure out why I wear an XL shirt
when a large would fit me...

So I started thinking of openIndividual, a distributed
social network protocol. Its only a hazy vision right now.
At its core is the individual record. Which states a users
home base on the internet, and the users public key, and
the information the user wishes to share about himself.

You network and associate by trading connections/keys much
like the debian web of trust amongst developers.

A user would post a request to the home base service for
another to ask if they can be linked or associated. Who
ever manages that node would respond and accept or reject
the trust key.

User would maintain wighted levels of trust and
information that is available at different trust levels...

1. public anyone can view.
2. accepted, non public, but shared with peoples whose key
   you've accepted
3. and up are manually assigned to friends and personal data
   items..

... So we need like a way to keep this stuff in sync...
Like a daily ping to between a id server and its peers...
This will do things like carry queries updated itself
about peers, gather selected info bits from peers....

Searches are viral. They're a packet of information that
moves along a users networks and forward along connections
they are allowed to... Kind of like a bottle at sea, but
with more direction.. Once they find a match they can
report to the originator, automatically or be held until a
response is approved or rejected....

Participation present and future is all determined by the
participant and their willingness to maintain their
openIndividual server and database...

So lets define some of this stuff....

Say a Pulic Individual is something like...

```
Individual {
  Public Name:
  Public Key:
  Public URL:
  DATA {
    key = value
  }
}
```

... DATA is purposefully loose... Its is meant for users and
implementors to experiment with. To create their own
protocols for messaging, content syndication, link
sharing, personal data sharaing.. What ever people feel
like they can fit in the openIndividual messaging framework.

```
friends(fid, guid, pname, pkey, purl, trustlevel)....
fid = SERIAL // autoincrement local ID...
guid = MD5(pname, pkey, purl);
pname = varchar(255);
pkey = id_rsa.pub;
purl = home server XMLRPC url;
trustlevel = 0 == trusted
// the rest is user defined for now.
```

So we need some methods to work with I guess, lets start with the basics....

How do we initiate a link or collect public data from an identity?

```
getidentity
  @return the public identity

requesttrust
  @param publicIdentity + DATA
  @return boolean (true, requestKey(begin DH seq))
  @return boolean (false, errno) err1 = paranoid, not trusting anyone
  --use for new connections and reconnecting a node that fell off the network.

accepttrust
  @param DH seq N+1
```

Next we need polling....

```
requestUpdate
  @param Identity + new DH seq

postUpdate
  @param Identity + DH seq + 1.
  @return DH seq + 1

  -- post update is a multi post process...
  step one... init, verify DH...
  step to begin passing data in chunks deemed
  acceptable at a rate deemed acceptable by the
  recieving server. (post, php, memory, badnwidth
  limitations)
```

Thats all for now....

Next we will think about the basic initiate relationship
part of the equation and the polling/messaging frame
work... If you are familiar with trust architectures and
cryptography your help would be greatly appreciated.

.darrel.
