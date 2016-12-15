---
layout: documentation
title: Release Notes
permalink: /docs/02_Release_Notes/
---

# Release Notes

In order to move fast and build the best API we can, we push new endpoint 
versions fairly frequently to accommodate better interfaces.  In order to 
make your updates as easy as possible we will include a description of all 
breaking changes made between versions in these notes.  Of note is that any
change in the version INCLUDING minor revisions will have interface and 
breaking changes.  Most new API versions will only change a few endpoints.

## v7.1 Feb 11, 2015

v7.1 was added to standardize the way resources link to each other through
HAL.

BREAKING CHANGES:

- Friendship, Group Invite, and Page Follow Resource
    - When inserting multiple resources, the response json will now put
      each inserted resource in the __embedded block.
      
NEW FEATURES:

- Route Resource
    - Added rpc uri /v7.1/Route/<id>/set_privacy/ to set the privacy on a route
    
    ```
    POST /v7.1/Route/<id>/set_privacy/
    {"privacy": "/v7.1/privacy_option/<id>/"}
    ```

## v7.0 Feb 1, 2015

OAuth 2.0 has worked well for all new integrations.  We have added a token 
exchange endpoint and announced an end of life to OAuth 1.0a
support in the API on Feb 1, 2016.

NEW FEATURES:

- Data Source Resource

## v7.0 Jan 1, 2015

Release of Heart Rate and Page features.

NEW FEATURES:

- Heart Rate Zones Resource 
- Heart Rate Zones Calculation Resource 
- Heart Rate Time In Zones Resource 
- Workout Heart Rate Resource
- Page Resource
- Page Follow Resource
- Page Association Resource
- Page Type Resource

## v7.0 Dec 1, 2014

NEW FEATURES:

- Role Resource
- User Role Resource

##v7.0 Nov 1, 2014

Release of 24/7 data and groups on platform.

NEW FEATURES:

- Activity Resource
- Activity Story Resource
- Aggregate Resource
- Body Mass Resource
- Group Resource
- Group User Resource
- Group Invite Resource
- Group Purpose Resource
- Group Leaderboard Resource
- Sleep Resource
- Map Marker Image Resource
- Membership Resource
- Remote Connection Resource
- Remote Connection Type Resource

## v7.0 Oct 1, 2014

Webhooks were added so 3rd parties can subscribe to workout updates.  More signals 
will be added in the future based on requests.  

NEW FEATURES:

- Webhook Resource
- Moderation Status
- Moderation Action
- Moderation Action Type

## v7.0 June 1, 2014

OAuth 2.0 was added to the v7.0 API plane.  After having integration challenges
with Oauth 1.0a we decided to move to OAuth 2.0 which has much better client
library support.

## v7.0 Nov 1, 2013

NEW FEATURES:

- Route Bookmark Resource
- User Stats Resource

## v7.0 Oct 1, 2013

v7.0 is the first release of a full featured public, restful API from Under
Armour Connected Fitness.  It is secured with OAuth 1.0a.

NEW FEATURES:

- User Resource
- User Profile Photo Resource
- Privacy Resource
- Friendship Resource
- Activity Type Resource
- Workout Resource
- Route Resource
- Course Resource
- Achievement Resource
- User Achievement Resource
