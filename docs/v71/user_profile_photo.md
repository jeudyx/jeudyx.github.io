---
name: User Profile Photo
doc_uri: User_Profile_Photo
versions: v7.0, v7.1
released: 2013-09-30
tags: user
title: User Profile Photo
layout: documentation
path_version: v7.1
docs_version: v71
permalink: /docs/v71_User_Profile_Photo/
doc_uri: v71_User/
---

# {{ page.title }}

This resource is used to update {{ page.title }}s. It also includes links to the images that can be used for display.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/user_profile_photo/<pk>/`
**Collection URI:** `/{{ page.path_version }}/user_profile_photo/`

## Item

### Item methods

`GET` Retrieve a [User](/docs/{{ page.docs_version }}_User/)'s profile photo
`PUT` Update a [User](/docs/{{ page.docs_version }}_User/)'s profile photo

### Item links <a name="itemlinks"></a>

`small_image` Small profile image for display
`medium_image` Medium profile image for display
`large_image` Large profile image for display

## Usage

### GET a {{ page.title }}

###### Request `GET: /{{ page.path_version }}/user_profile_photo/<pk>/`

###### Response

```json
{
    "_links": {
        "small": [
            {
                "href": "http://static.mapmyfitness.com/..."
            }
        ],
        "large": [
            {
                "href": "http://static.mapmyfitness.com/..."
            }
        ],
        "self": [
            {
                "href": "/{{ page.path_version }}/user_profile_photo/<id>/",
                "id": "<id>"
            }
        ],
        "medium": [
            {
                "href": "http://static.mapmyfitness.com/..."
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/{{ page.doc_uri }}"
            }
        ]
    }
}
```
