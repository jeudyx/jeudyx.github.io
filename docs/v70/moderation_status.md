---
name: Moderation Status
doc_uri: Moderation_Status
versions: v7.0, v7.1
released: 2014-09-23
modified: 2014-12-17
tags: social
title: Moderation Status
layout: documentation
path_version: v7.0
docs_version: v70
permalink: /docs/v70_Moderation_Status/
doc_uri: v70_Moderation_Status/
---

# {{ page.title }}

A resource that allows a user to view the {{ page.title }} of a specific resource or resource type. Users will need the appropriate permissions to view the results.

## Resource URIs

**Collection URI:** `/{{ page.path_version }}/moderation_status/`

## Item

<a name="item-properties" />
### Item properties

| Name         | Description          | Type      | HTTP Support                                                       |
|--------------|----------------------|-----------|--------------------------------------------------------------------|
| `score` | A value representing the number of flags that a resource has against it. | JSON type | **GET**: required |

<a name="item-links" />
### Item links

`self` A link to this resource
`moderation_action_type` Required. Link to the action type that is being taken. Valid values are limited by a user's permissions. Basic access allows users to ``FLAG`` and ``UNFLAG`` a resource.
`resource` Required. Link to the resource this action is being applied to.

## Collection

### Collection methods

`GET` Get a list of {{ page.title }}s.

### Collection properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `total_count` | The total number of statuses that match the request | JSON type | **GET**: required |

### Collection links

`self` A link to this resource

### Embedded collections

`moderation_status` A collection of {{ page.title }}s with properties as described under [Item properties][#item-properties] and links as described under [Item links][#item-links]

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/moderation_status/`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/{{ page.path_version }}\/moderation_status\/?limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Moderation_Status"
         }
      ]
   },
   "_embedded":{
      "moderation_status":[
         {
            "score":1,
            "_links":{
               "action":[
                  {
                     "href":"\/{{ page.path_version }}\/moderation_action_type\/1\/",
                     "id":"1"
                  }
               ],
               "self":[
                  {
                     "href":"\/{{ page.path_version }}\/moderation_status\/1\/",
                     "id":"1"
                  }
               ],
               "resource":[
                  {
                     "href":"the href"
                  }
               ]
            }
         }
      ]
   },
   "total_count":1
}
```
