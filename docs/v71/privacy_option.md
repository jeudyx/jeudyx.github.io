---
name: Privacy
title: Privacy
layout: documentation
path_version: v7.1
docs_version: v71
permalink: /docs/v71_Privacy_Option/
doc_uri: Privacy_Option
versions: v7.0, v7.1
released: 2014-11-22
tags: user
---

# {{ page.title }}

This resource provides access to the Under Armour {{ page.title }} settings. {{ page.title }} settings are linked other objects such as workouts, routes, and user settings.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/privacy_option/<pk>/`
**Collection URI:** `/{{ page.path_version }}/privacy_option/`

## Item

### Item methods

`GET` Retrieve a {{ page.title }} option by `id`

### Item properties

| Name   | Description                          | Type   | Units | HTTP Support      |
|--------|--------------------------------------|--------|-------|-------------------|
| `desc` | A description of the {{ page.title }} setting | string |       | **GET:** Required |

## Collection

### Collection methods

`GET` Retrieve a listing of {{ page.title }} options

### Collection properties

| Name          | Description                          | Type   | Units | HTTP Support      |
|---------------|--------------------------------------|--------|-------|-------------------|
| `total_count` | the total number of {{ page.title }} settings | number |       | **GET:** Required |

### Embedded collections

`privacy_options` A collection of {{ page.title }} items with properties as described under `Item properties`

## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/privacy_option/1/`

###### Response

```json
{
    "_links": {
        "self": [{
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
        }]
    },
    "description": "Friends. Share With All My Friends"
}
```

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/privacy_option/`

###### Response

```json
{
    "_links": {
        "self": [{
            "href": "\/{{ page.path_version }}\/privacy_option\/?limit=20&offset=0"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
        }]
    },
    "_embedded": {
        "privacy_options": [{
            "_links": {
                "self": [{
                    "href": "\/{{ page.path_version }}\/privacy_option\/0\/",
                    "id": "0"
                }]
            },
            "description": "Private. Do Not Share"
        }, {
            "_links": {
                "self": [{
                    "href": "\/{{ page.path_version }}\/privacy_option\/3\/",
                    "id": "3"
                }]
            },
            "description": "Public. Share With Everyone"
        }, {
            "_links": {
                "self": [{
                    "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
                    "id": "1"
                }]
            },
            "description": "Friends. Share With All My Friends"
        }]
    },
    "total_count": 3
}
```
