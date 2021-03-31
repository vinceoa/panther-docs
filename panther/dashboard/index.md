---
layout: home
title: Dashboard
nav_order: 4
permalink: /panther/dashboard
layout: template
description: Panther Dashboard
---

# Overview

The dashboard provides an overview of the current contents of your event console.

![Sample Dashboard with animation](./dash-updating.mp4)



# Severities

At the top of the dashboard, there is a row of counters for events processed in the event logs associated with each severity.  These counters reflect the number of unique events logged, and will not increase if the same event log is processed multiple times.


# Event Groups

Counters are displayed in this section for events matching any created event groups -- along with one special counter for events having no associated group and another for all events processed.

The counters reflect the total numbers of unique event log entries in each of the respective groups, with the coloured bars representing the relative proportions of events having each of the severity levels. The actual numerical breakdowns can be inspected by moving the mouse pointer over each row.

# Activity Stream

The activity stream logs user interaction with Panther, including:

* Event acknowledgements and unacknowledgements
* Event assignments
* Event severity changes
* Event clearances
* Event deletions

# Inventory

The inventory lists the names of hostnames that Panther has receieved events from and the last times they were seen.
