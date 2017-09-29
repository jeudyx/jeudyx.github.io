---
name: Page Follow
doc_uri: Page_Follow
versions: vx, api/0.1, v7.0, v7.1
released: 2014-12-16
tags: social
title: Page Follow
layout: documentation
path_version: vx
docs_version: vx
permalink: /docs/vx_Page_Follow/
doc_uri: vx_Page_Follow/
---

# {{ page.title }}

A {{ page.title }} represents a User following a [Page](/docs/{{ page.docs_version}}_Page).  Following a page allows a user to see public activity feed posts from that page in their activity feed.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/page_follow/{pk}/`

**Collection URI:** `/{{ page.path_version }}/page_follow/`

## Item

### Item Methods

`GET` Retrieve a {{ page.title }} by id
`DELETE` Remove a {{ page.title }} by id (unfollow)

<a name="item-links" />
### Item links

`page` A link to the [Page](/docs/{{ page.docs_version}}_Page) that is being followed
`self` A link to this resource
`user` A link to the User resource that owns the {{ page.title }}

## Collection

### Collection methods

`GET` Get a list of users that are following a page, get the pages a user is following or determine if a user is following a page.
`POST` Create a follow relationship between a page and a user (follow).

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `page_id` | The page being followed | param_type | No   |
| `user_id` | The user following the page | param_type | No   |

One of the two parameters is required, though, for any kind of useful response

### Collection links

`self` A link to this resource

### Embedded collections

`page_follows` A collection of {{ page.title }}s with links as described under [Item links](#item-links)

## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/page_follow/3847030/`

###### Response

```json
{
    "_links": {
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/{{ page.doc_uri }}"
            }
        ],
        "page": [
            {
                "href": "/{{ page.path_version }}/page/1/",
                "id": "1"
            }
        ],
        "self": [
            {
                "href": "/{{ page.path_version }}/page_follow/5295346/",
                "id": "5295346"
            }
        ],
        "user": [
            {
                "href": "/{{ page.path_version }}/user/19357095/",
                "id": "19357095"
            }
        ]
    }
}
```

### DELETE {{ page.title }} entity

###### Request `DELETE: /{{ page.path_version }}/page_follow/{pk}/`

###### Response

```
204 No Response
```

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/page_follow/?page_id=1234`

###### Response

```json
{
    "_embedded": {
        "page_follows": [
            {
                "_links": {
                    "page": [
                        {
                            "href": "/{{ page.path_version }}/page/1/",
                            "id": "1"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{ page.path_version }}/page_follow/3458687/",
                            "id": "3458687"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{ page.path_version }}/user/19357095/",
                            "id": "19357095"
                        }
                    ]
                }
            },
            {
                "_links": {
                    "page": [
                        {
                            "href": "/{{ page.path_version }}/page/1/",
                            "id": "1"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{ page.path_version }}/page_follow/3847030/",
                            "id": "3847030"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{ page.path_version }}/user/37676978/",
                            "id": "37676978"
                        }
                    ]
                }
            }
        ]
    },
    "_links": {
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/{{ page.doc_uri }}"
            }
        ],
        "self": [
            {
                "href": "/{{ page.path_version }}/page_follow/?limit=20&page_id=1&offset=0"
            }
        ]
    },
    "total_count": 2
}
```

### GET {{ page.title }} collection that a user is following

###### Request `GET: /{{ page.path_version }}/page_follow/?user_id=19357095`

###### Response

```json
{
    "_embedded": {
        "page_follows": [
            {
                "_links": {
                    "page": [
                        {
                            "href": "/{{ page.path_version }}/page/1/",
                            "id": "1"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{ page.path_version }}/page_follow/3458687/",
                            "id": "3458687"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{ page.path_version }}/user/19357095/",
                            "id": "19357095"
                        }
                    ]
                }
            },
            {
                "_links": {
                    "page": [
                        {
                            "href": "/{{ page.path_version }}/page/2/",
                            "id": "1"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{ page.path_version }}/page_follow/3847030/",
                            "id": "3847030"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{ page.path_version }}/user/19357095/",
                            "id": "19357095"
                        }
                    ]
                }
            }
        ]
    },
    "_links": {
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/{{ page.doc_uri }}"
            }
        ],
        "self": [
            {
                "href": "/{{ page.path_version }}/page_follow/?limit=20&page_id=1&offset=0"
            }
        ]
    },
    "total_count": 2
```

### GET {{ page.title }} collection if a user is following a page

###### Request `GET: /{{ page.path_version }}/page_follow/?page_id=1&user_id=19357095`

###### Response

Returns a single result if the user is following the page, otherwise returns an empty list.

```json
{
    "_embedded": {
        "page_follows": [
            {
                "_links": {
                    "page": [
                        {
                            "href": "/{{ page.path_version }}/page/2/",
                            "id": "1"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{ page.path_version }}/page_follow/3847030/",
                            "id": "3847030"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{ page.path_version }}/user/19357095/",
                            "id": "19357095"
                        }
                    ]
                }
            }
        ]
    },
    "_links": {
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/{{ page.doc_uri }}"
            }
        ],
        "self": [
            {
                "href": "/{{ page.path_version }}/page_follow/?limit=20&page_id=1&offset=0"
            }
        ]
    },
    "total_count": 1
}
```

### POST {{ page.title }} entity

###### Request `POST: /{{ page.path_version }}/page_follow/`

```json
{
    "page": "/{{ page.path_version }}/page/1/",
    "user": "/{{ page.path_version }}/user/19357095/"
}
```

###### Response

```json
{
    "page": "/{{ page.path_version }}/page/1/",
    "user": "/{{ page.path_version }}/user/19357095/"
}
```

### PATCH to create multiple *{{ page.title }}* entities

###### Request `PATCH: /{{ page.path_version }}/page_follow/`

```json
{
  "page_follows": [
    {
      "page": "/api/0.1/page/192/",
      "user": "/v7.0/user/37698697/"
    },
    {
      "page": "/api/0.1/page/195/",
      "user": "/v7.0/user/37698697/"
    }
  ]
}
```

###### Response

```json
{
    "page_follows": [
        {
          "resource_uri": "/{{ page.path_version }}/page_follow/123/",
          "page": "/api/0.1/page/192/",
          "user": "/v7.0/user/37698697/"
        },
        {
          "resource_uri": "/{{ page.path_version }}/page_follow/345/",
          "page": "/api/0.1/page/195/",
          "user": "/v7.0/user/37698697/"
        }
    ]
}
```

<!-- Page -->
[vx Page]: docs/vx_Page
[v7.0 Page]: docs/v70_Page
[api/0.1 Page]: docs/01_Page

<!-- User -->
[v7.0 User]: docs/v70_User
[api/0.1 User]: docs/01_User
