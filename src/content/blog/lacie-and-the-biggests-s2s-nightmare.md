---
title: "LaCie and The Biggests S2S nightmare...."
pubDate: 2006-12-06T00:00:00
description: "So one of my clients wanted to get a relatively solid disk to disk backup system going for a production file share running on an Xserve G5 with OS X 10.3.9. I recommended several raid products, amongst which were LaCie's new Biggest S2S Raid Array, Apple's X Serve Raid, and a couple consumer external FW drive models I like."
tags:
  - systems administration
---

So one of my clients wanted to get a relatively solid disk
to disk backup system going for a production file share
running on an Xserve G5 with OS X 10.3.9.

I recommended several raid products, amongst which were
LaCie's new Biggest S2S Raid Array, Apple's X Serve Raid,
and a couple consumer external FW drive models I like.

They chose the LaCie Biggest S2S. Its a pretty fair price
for a 5 drive external raid array. It has a small foot
print, and 1TB of storage in the Raid 1+0 configuration
with a hotspare. I wish it supported Raid V though.. I'd
like to squeeze a tiny bit more storage out of it and
still get to keep the hot spare.

I expected this thing to be a walk in the park to setup. I
waited until most of the office was out in the evening let
everyone know the file server was going down. I popped in
the SATA card. I expected to install the drivers and go...

Put in the Driver CD for the card, goto install the
driver. Woohoo installation failure. So I went LaCie's
site to download a more current driver. Only one available
for the provided SATA card v2.0.1 on the Mac. Download it.
Installation Failure.

_fix permissions_

Installation succeeds....

Load up LaCie's raid array manager and no dice. She
doesn't detect the raid array. Tinker for a little while.

Next maintenance window...

Swallow pride. Call tech support. Nice enough reps. I
explain the problem. The status lights on the box say
happy, manager software runs fine. I see the individual
drives in disk utility... but no raid. We decide its the
sata card, raid processor or server... (we've really
narrowed this one down, eh?).

I tell the rep I'm going to test on another server, then
send it in for exchange...

Next maintenance window.....

Get to office. Make fresh install of 10.3 on older unused
G4 work station. Install Sata Card. Install drivers, not!
Call tech support. Send tech support install.log that plainly shows their
packaging is fubar.ed(see attachment)... They can't
reproduce(on 10.4). I reiterate I'm using 10.3.9 and it is
a pristine installation with on updates applied to the OS
itself. I get asked to send it in anyway. I decide to play
with the drivers a little more.... I fix the postflight
scripts add a little sanity checking to the preflight
scripts to no avail. I'm a little fed up with LaCie at
this point, and decide to check on the OEM manufacturer of
the cards site. Silicon Image. Well wouldn't you know
there is a version 1.4.1 of the Drivers for 10.3.9 that is
not available on the LaCie website.

Woot, my LaCie S2S works now.

Lessons learned... Don't trust LaCie's QC and
Documentation. I know support is mostly scripted so I
can't really blame them. Check for better drivers from
OEM's if you think you're having driver issues.
