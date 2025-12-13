---
title: "Agile Project Management on GitHub"
pubDate: 2013-10-23T00:00:00
description: For some reason clients want to know when their projects will be complete so they can plan for their business. As a project manager I normally want to know if the team's performance is changing and how it's changing so I can better support the team and troubleshoot operational issues.
tags:
  - project management
  - github
  - reporting
---

For some reason clients want to know when their projects will be complete so they can plan for
their business. As a project manager I normally want to know if the team's performance is changing and how it's changing so I can better support the team and troubleshoot operational issues.

At [Spry Group](https://web.archive.org/web/20141002092321/http://spry-group.com/) we decided to adopt 'agile' as a methodology for tracking our project performance. If you're not familiar with agile, I strongly recommend checking out [Agile Firestarter](https://web.archive.org/web/20141002092321/http://www.agilefirestarter.com/) , specifically the 'Introduction to Agile' and 'Agile Estimation' videos. We looked at a few tools like Pivotal Tracker, Jira, VersionOne etc. Ultimately, we decided they were all just 'too much'. Too expensive, too cumbersome, and just another tool we have
to work with throughout the day.

We started thinking about how we could implement the process using what we already have. We live in GitHub as a team. Our work is already coordinated as issues in GitHub. We maintain most of our operational documents in Google Drive. After a little thinking and experimenting we developed a process that works really well for us. It doesn't require us to do any more than work our ticket queues and work with a few labels and milestones and maintain a spreadsheet in Google Drive.

We use a very simple system of labels to annotate the priority and points for issues and we use milestones for grouping issue. Issues enter the system without any labels.

As a project manager I spend a few hours a day looking through issues which have no priority. Once I've verified the user story and acceptance criteria for a ticket are complete I assign a priortity label in the form of priority/1, priority/2 etc. Normally I assign priorities based on contractual milestones or phases. With lower numbers being the ones that are due sooner.

As a developer I spend a couple hours twice a week estimating issues with my team. We make sure the tickets are clear, discuss whether to break up the tickets into multiple tickets and play planning poker to assign points to the ticket. If we need to break up a ticket into multiple tasks we maintain the priority of the original ticket and usually some part of the title.

As a practice our project issue titles begin with a number that can be tied back to a contract deliverable. When we start a sprint, we create a new milestone for the sprint and assign tickets to the milestone based on priority and points. When we complete a sprint we remove incomplete issues from the milestone and close the milestone.

We calculate velocity as a sum of the points of the completed tickets in the milestone. We maintained a spreadsheet with sprint velocity and we're able to generate reasonable estimates for the work we need to do each week and give our clients better feedback about our progress and performance.

This worked pretty well as workflow for our team, but we were still spending a lot of time reporting to our clients, maintaining project performance spreadsheet. We got the idea to automate the reporting to ourselves and our clients. Once we got that done we realized how annoying rolling over the sprints was so we automated that as well.

Now I have the time to focus on making sure we understand the clients requirements and my teams have what they need
to deliver. We like the automation so much we thought we'd see if people were interested in it as a product. We are planning to expand on it a bit and build a widget platform for people who want to integrate the reporting into their own
dashboards... We'd love to hear from you if you have feature ideas or different needs.

Check out [SpryHub](https://web.archive.org/web/20141002092321/http://spryhub.io/) [Open an issue](https://web.archive.org/web/20141002092321/https://github.com/spry-group/SpryHub/issues/new) and share your thoughts or ask us to set you
up.
