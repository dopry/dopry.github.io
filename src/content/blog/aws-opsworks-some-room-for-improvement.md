---
title: "AWS OpsWorks, some room for improvement."
pubDate: 2013-06-26T00:00:00
description: One of [our](https://web.archive.org/web/20141010131625/http://spry-group.com/) clients was looking to move from RightScale to Chef. Their primary motivation was the difficulty of maintaining the RightScale scripts and the costs related to RightScale.
tags:
  - AWS OpsWorks Wish List
---

One of [our](https://web.archive.org/web/20141010131625/http://spry-group.com/) clients was looking to move from RightScale to Chef. Their primary motivation was the difficulty of maintaining the RightScale scripts and the costs related to RightScale.

AWS announced OpsWorks during the proposal process and the client was interested in taking a shot at OpsWorks. For the most port working with OpsWorks has been easy. If you know how to work with Chef Solo you can work with Ops Works. You really need to have a good grasp of the [OpsWorks Life Cycle Events.](https://web.archive.org/web/20141010131625/http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-events.html)

There are a few areas I feel OpsWorks really needs to improve, these are the ones that are on my mind currently.

**PHP Layer** - This really needs additional stack options like the Rails Layer. I use nginx + php-fpm as do most contemporary php applications. The apache2/mod_php combination has been out of vogue for some time especially on VM where memory constraints can make all the difference.

**Custom Layers** - All of the custom layers have great settings options. I'd really like to have the abilityto define setting for my custom layers and map them to attributes. It would make it easier for me to re-use and share my recipes with having to give detailed instruction on how to set values in the stack json.

**Application Settings** - It would be really nice to be able to specify some application settings much like the Custom
Layers. At least some sort of application json that gets mixed into the stack json would be useful so I don't have to navigate back to the stack to update the stack json while I'm working on the application.

**Application Deployment** - I wish there was a way to mark a specific branch and commit as the active deployment. Right now I have a paranoia that I will do an application deployment on T1 with the head of my production repo on T1, then on T2 we will push code into the production repo with plans to deploy on T3. The on T2 the app layer will scale up and add an instance that will get the T2 application code before the official deployment.

**Show me the JSON** - Currently the primary way to pass custom attribute values into your recipes is with the Stack JSON. However it's hard to know what JSON is actually being passed to your recipes from the dashboard.There are some cool
commands to show the json that was passed to an recipe that can be ran on the client like `sudo opsworks-agent-cli get_json` . I wish there were a similar command in the Dashboard that would allow me to see what would be passed in without running a recipe.
