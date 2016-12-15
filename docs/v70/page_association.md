---
name: Page Association
doc_uri: Page_Association
versions: vx, api/0.1, v7.0, v7.1
released: 2014-12-16
tags: social
title: Page Association
layout: documentation
path_version: v7.0
docs_version: v70
permalink: /docs/v70_Page_Association
doc_uri: v70_Page_Association/
---

# {{ page.title }}

A {{ page.title }} represents an association between two public pages (see [Page](/docs/{{ page.docs_version }}_Page)) and is used for sharing content between pages.
The direction of the {{ page.title }} has meaning and indicates that the `from_page` has associated itself with the
`to_page`, allowing social posts from the `to_page` to appear on the `from_page`.

To create an association between pages, the [User](/docs/{{ page.docs_version }}_User) creating the association must have `edit_resource`
permission on {{ page.title }}s.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/page_association/{pk}/`

**Collection URI:** `/{{ page.path_version }}/page_association/`

## Item

### Item Methods

`GET` Retrieve a {{ page.title }} by id
`DELETE` Delete a {{ page.title }} by id (`edit_resource` permission on {{ page.title }}s is required)

### Item links

`self` A link to this resource
`user` A link to the User resource that owns the {{ page.title }}
`from_page` Link to the from [Page](/docs/{{ page.docs_version }}_Page)
`to_page` Link to the to [Page](/docs/{{ page.docs_version }}_Page)

## Collection

### Collection methods

`GET` Get a list of {{ page.title }}s.
`POST` Create a {{ page.title }}.  (`edit_resource` permission on {{ page.title }}s is required).

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `from_page_id` | Get a list of all {{ page.title }}s *from* a page. | number | No |
| `to_page_id` | Get a list of all {{ page.title }}s *to* a page. | number | No |

Note:
    Both parameters can be used together to determine if there is an association of the specified direction between
    two pages.

### Collection links

`self` A link to this resource
`user` A link to the User resource that owns the {{ page.title }}

### Embedded collections

`page_associations` A collection of {{ page.title }}s with links as described under [Item links][]

## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/page_association/8001991/`

###### Response

```json
{
    '_links': {
        'documentation': [
            {
                'href': 'https://developer.underarmour.com/docs/{{ page.doc_uri }}'
            }
        ],
        'from_page': [
            {
                'href': '/{{ page.path_version }}/page/1/',
                'id': '1'
            }
        ],
        'self': [
            {
                'href': '/{{ page.path_version }}/page_association/8001991/',
                'id': '8001991'
            }
        ],
        'to_page': [
            {
                'href': '/{{ page.path_version }}/page/2/',
                'id': '2'
            }
        ]
    }
}
```

### PUT {{ page.title }} entity

###### Request `PUT: /{{ page.path_version }}/page_association/{pk}/`

```json
{
    "input_payload":"here"
}
```

###### Response

```json
{
    "output_payload":"here"
}
```

### DELETE {{ page.title }} entity

###### Request `DELETE: /{{ page.path_version }}/page_association/8001991/`

###### Response

```
204 No Response
```

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/page_association/?from_page_id=1`

###### Response

```json
{
    '_embedded': {
        'page_associations': [
            {
                '_links': {
                    'from_page': [
                        {
                            'href': '/{{ page.path_version }}/page/1/',
                            'id': '1'
                        }
                    ],
                    'self': [
                        {
                            'href': '/{{ page.path_version }}/page_association/8001991/',
                            'id': '8001991'
                        }
                    ],
                    'to_page': [
                        {
                            'href': '/{{ page.path_version }}/page/2/',
                            'id': '2'
                        }
                    ]
                }
            },
            {
                '_links': {
                    'from_page': [
                        {
                            'href': '/{{ page.path_version }}/page/1/',
                            'id': '1'
                        }
                    ],
                    'self': [
                        {
                            'href': '/{{ page.path_version }}/page_association/4136742/',
                            'id': '4136742'
                        }
                    ],
                    'to_page': [
                        {
                            'href': '/{{ page.path_version }}/page/3/',
                            'id': '3'
                        }
                    ]
                }
            }
        ]
    },
    '_links': {
        'documentation': [
            {
                'href': 'https://developer.underarmour.com/docs/{{ page.doc_uri }}'
            }
        ],
        'self': [
            {
                'href': '/{{ page.path_version }}/page_association/?limit=20&from_page_id=1&offset=0'
            }
        ]
    },
    'total_count': 2
}
```

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/page_association/?to_page_id=2`

###### Response

```json
{
    '_embedded': {
        'page_associations': [
            {
                '_links': {
                    'from_page': [
                        {
                            'href': '/{{ page.path_version }}/page/1/',
                            'id': '1'
                        }
                    ],
                    'self': [
                        {
                            'href': '/{{ page.path_version }}/page_association/8001991/',
                            'id': '8001991'
                        }
                    ],
                    'to_page': [
                        {
                            'href': '/{{ page.path_version }}/page/2/',
                            'id': '2'
                        }
                    ]
                }
            }
        ]
    },
    '_links': {
        'documentation': [
            {
                'href': 'https://developer.underarmour.com/docs/{{ page.doc_uri }}'
            }
        ],
        'self': [
            {
                'href': '/{{ page.path_version }}/page_association/?limit=20&from_page_id=1&offset=0'
            }
        ]
    },
    'total_count': 1
}
```

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/page_association/?from_page_id=1&to_page_id=2`

###### Response

Returns a single result if there is an association of this direction between two pages, otherwise returns an empty list.

```json
{
    '_embedded': {
        'page_associations': [
            {
                '_links': {
                    'from_page': [
                        {
                            'href': '/{{ page.path_version }}/page/1/',
                            'id': '1'
                        }
                    ],
                    'self': [
                        {
                            'href': '/{{ page.path_version }}/page_association/8001991/',
                            'id': '8001991'
                        }
                    ],
                    'to_page': [
                        {
                            'href': '/{{ page.path_version }}/page/2/',
                            'id': '2'
                        }
                    ]
                }
            }
        ]
    },
    '_links': {
        'documentation': [
            {
                'href': 'https://developer.underarmour.com/docs/{{ page.doc_uri }}'
            }
        ],
        'self': [
            {
                'href': '/{{ page.path_version }}/page_association/?limit=20&from_page_id=1&offset=0'
            }
        ]
    },
    'total_count': 1
}
```

### POST {{ page.title }} entity

###### Request `POST: /{{ page.path_version }}/page_association/`

```json
{
    'from_page': '/{{ page.path_version }}/page/1/',
    'to_page': '/{{ page.path_version }}/page/2/'
}
```

###### Response

```json
{
    'from_page': '/{{ page.path_version }}/page/1/',
    'to_page': '/{{ page.path_version }}/page/2/'
}
```

<!-- Page -->
[vx Page]: docs/vx_Page
[v7.0 Page]: docs/v70_Page
[api/0.1 Page]: docs/01_Page

<!-- User -->
[vx User]: docs/vx_User
[v7.0 User]: docs/v70_User
[api/0.1 User]: docs/01_User
