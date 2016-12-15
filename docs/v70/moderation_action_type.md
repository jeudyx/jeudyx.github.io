---
name: Moderation Action Type
doc_uri: Moderation_Action_Type
versions: v7.0, v7.1
released: 2014-09-23
modified: 2014-12-17
tags: social
title: Moderation Action Type
layout: documentation
path_version: v7.0
docs_version: v70
permalink: /docs/v70_Moderation_Action_Type/
doc_uri: v70_Moderation_Action_Type/
---

# {{ page.title }}

Provides the moderation action types that can be taken through the moderation endpoints.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/moderation_action_type/{pk}/`

**Collection URI:** `/{{ page.path_version }}/moderation_action_type/`

## Item

### Item Methods

`GET` Retrieve a {{ page.title }} by id

<a name="item-properties" />
### Item properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `name` | Read-Only. The name signifying the type of action. | JSON type | **GET**: required|

<a name="item-links" />
### Item links

`self` A link to this resource

## Collection

### Collection methods

`GET` Get a list of {{ page.title }}s.

### Collection links

`self` A link to this resource

### Embedded collections

`moderation_action_type` A collection of {{ page.title }}s with properties as described under [Item properties](#item-properties) and links as described under [Item links](#item-links)

## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/moderation_action_type/1/`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"/{{ page.path_version }}/moderation_action_type/1/",
            "id":"1"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/Moderation_Action_Type"
         }
      ]
   },
   "name":"Flagged"
}
```

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/moderation_action_type/`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"/{{ page.path_version }}/moderation_action_type/?limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/Moderation_Action_Type"
         }
      ]
   },
   "_embedded":{
      "moderation_action_type":[
         {
            "_links":{
               "self":[
                  {
                     "href":"/{{ page.path_version }}/moderation_action_type/1/",
                     "id":"1"
                  }
               ]
            },
            "name":"Flagged"
         },
         {
            "_links":{
               "self":[
                  {
                     "href":"/{{ page.path_version }}/moderation_action_type/2/",
                     "id":"2"
                  }
               ]
            },
            "name":"Unflagged"
         },
         {
            "_links":{
               "self":[
                  {
                     "href":"/{{ page.path_version }}/moderation_action_type/3/",
                     "id":"3"
                  }
               ]
            },
            "name":"Allowed"
         },
         {
            "_links":{
               "self":[
                  {
                     "href":"/{{ page.path_version }}/moderation_action_type/4/",
                     "id":"4"
                  }
               ]
            },
            "name":"Removed"
         }
      ]
   },
   "total_count":4
}
```
