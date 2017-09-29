---
name: Role
doc_uri: Role
versions: vx, api/0.1, v7.0, v7.1
released: 2014-11-17
tags: social
title: Role
layout: documentation
path_version: v7.1
docs_version: v71
permalink: /docs/v71_Role/
doc_uri: v71_Role/
---

# {{ page.title }}

A {{ page.title }} represents a collection of permissions. This resource is provided only to allow the client to display
the permissions that are associated with a {{ page.title }}.

**IMPORTANT:** All authorization checks should be made by checking the user's permission
via the User Permission resource.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/role/{pk}/`
**Collection URI:** `/{{ page.path_version }}/role/`

## Item

### Item Methods

`GET` Retrieve a {{ page.title }} by id

<a name="item-properties" />
### Item properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `permissions` | description of field | the permissions attributed to this {{ page.title }} | **GET**: required |
| `description` | description of this {{ page.title }} | text | **GET**: required |
| `name` | name of the {{ page.title }} | text | **GET**: required |

<a name="item-links" />
### Item links

`self` A link to this resource

## Collection

### Collection methods

`GET` Get a list of {{ page.title }}s.

### Collection properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `total_count` | number of {{ page.title }}s in the response | number | **GET**: required |

### Collection links

`self` A link to this resource

### Embedded collections

`roles` A collection of {{ page.title }}s with properties as described under [Item properties](#item-properties) and links as described under [Item links](#item-links)

## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/role/administrator/`

###### Response

```json
{
    "permissions": [
        "create_resource",
        "manage_roles",
        "edit_resource",
        "edit_settings",
        "create_post",
        "delete_post",
        "create_reply",
        "delete_reply"
    ],
    "_links": {
        "self": [
            {
                "href": "/api/0.1//role/?limit=20&offset=0"
            }
        ]
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/Role"
            }
        ]
    },
    "description": "Perform administrative functions and manage permissions for other users",
    "name": "administrator"
}
```

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/role/`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "\/vx\/role\/?limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href":"https:\/\/developer.underarmour.com\/docs\/Role"
            }
        ]
    },
    "_embedded": {
        "roles": [
            {
                "permissions": ["create_resource", "manage_roles", ...],
                "description": "Perform administrative functions and manage permissions for other users",
                "name":"administrator"
            }
            {
                "permissions": ["edit_resource", "edit_settings", ...],
                "description": "Perform editing functions",
                "name": "editor"
            },
            {
                "permissions": ["create_post", "delete_post", ...],
                "description": "Perform moderation functions",
                "name": "moderator"
            }
        ]
    },
    "total_count": 3
}
```

[vx User Permission]: docs/vx_User_Permission
[v7.0 User Permission]: docs/v70_User_Permission
[api/0.1 User Permission]: docs/01_User_Permission
