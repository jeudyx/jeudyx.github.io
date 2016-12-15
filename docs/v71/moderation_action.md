---
name: Moderation Action
doc_uri: Moderation_Action
versions: v7.0, v7.1
released: 2014-09-23
modified: 2014-12-17
tags: social
title: Moderation Action
layout: documentation
path_version: v7.1
docs_version: v71
permalink: /docs/v71_Moderation_Action/
doc_uri: v71_Moderation_Action/
---

# {{ page.title }}

A resource that allows a user to take moderation type actions against a specific resource or resource type. Users with
limited permissions will be able to flag or un-flag content, where users with moderator level permissions will be able
to remove content.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/moderation_action/{pk}/`

**Collection URI:** `/{{ page.path_version }}/moderation_action/`

## Item

### Item Methods

`GET` Retrieve a {{ page.title }} by id

<a name="item-links" />
### Item links

`self` A link to this resource
`user` A link to the User resource that owns the {{ page.title }}
`moderation_action_type` Required. Link to the action type that is being taken. Valid values are limited by a user's
permissions. Basic access allows users to ``FLAG`` and ``UNFLAG`` a resource.
`resource` Required. Link to the resource this action is being applied to.

## Collection

### Collection methods

`POST` Create a {{ page.title }}.

### Collection links

`self` A link to this resource
`user` A link to the User resource that owns the {{ page.title }}

### Embedded collections

`moderation_actions` A collection of {{ page.title }}s with links as described under [Item links](#item-links)

## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/moderation_action/{pk}/`

###### Response

```json
{
   "_links":{
      "action":[
         {
            "href":"\/{{ page.path_version }}\/moderation_action_type\/1\/",
            "id":"1"
         }
      ],
      "self":[
         {
            "href":"\/{{ page.path_version }}\/moderation_action\/3\/",
            "id":"3"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Moderation_Action"
         }
      ],
      "resource":[
         {
            "href":"\/92Q7xAmosjo680Dr9M54WV7cb2BOKarnnoPqfFBAkPGcVEJ6KQi2T3BX0LGt5MboBBJiJhg7Nyn6NeY9TdDSysSrTwkZPAsCox9Kryh5XVMf0MGfS4UstBMUzmVNfpvV\/882394\/"
         }
      ],
      "user":[
         {
            "href":"\/{{ page.path_version }}\/user\/2\/",
            "id":"2"
         }
      ]
   }
}
```

### POST {{ page.title }} entity

###### Request `POST: /{{ page.path_version }}/moderation_action/`

```json
{
    "action": "/{{ page.path_version }}/moderation_action_type/1/",
    "resource": "/{{ page.path_version }}/activity_story/1-2345-6789/"
}
```

###### Response 201
