---
name: Page Type
doc_uri: Page_Type
versions: vx, api/0.1, v7.0, v7.1
released: 2014-12-16
tags: social
title: Page Type
layout: documentation
path_version: v7.1
docs_version: v71
permalink: /docs/v71_Page_Type/
doc_uri: v71_Page_Type/
---

# {{ page.title }}

Provides {{ page.title }}s which are applied to a [`Page`](/docs/{{ page.docs_version }}_Page)

## Resource URIs

**Item URI:** `/{{ page.path_version }}/page_type/{pk}/`

**Collection URI:** `/{{ page.path_version }}/page_type/`

## Item

### Item Methods

`GET` Retrieve a {{ page.title }} by id

<a name="item-links" />
### Item properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `title` | The {{ page.title }}'s title, e.g. "Public Figure" | text | **GET**: required |


<a name="item-links" />
### Item links

`self` A link to this resource

## Collection

### Collection methods

`GET` Get a list of {{ page.title }}s.

### Collection links

`self` A link to this resource

### Embedded collections

`page_types` A collection of {{ page.title }}s with properties as described under [Item properties](#item-properties) and links as described under [Item links](#item-links)

## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/page_type/{pk}/`

###### Response

```json
{
    '_links': {
        'documentation': [
            {
                'href': 'https://developer.underarmour.com/docs/{{ page.doc_uri }}'
            }
        ],
        'self': [
            {
                'href': '/{{ page.path_version }}/page_type/public_entity/',
                'id': 'public_entity'
            }
        ],
    },
    'title': 'Public entity'
}
```

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/page_type/`

###### Response

```json
{
    '_embedded': {
        'page_types': [
            {
                '_links': {
                    'self': [
                        {
                            'href': '/{{ page.path_version }}/page_type/personal/',
                            'id': 'personal'
                        }
                    ],
                },
                'title': 'Personal'
            },
            {
                '_links': {
                    'self': [
                        {
                            'href': '/{{ page.path_version }}/page_type/public_entity/',
                            'id': 'public_entity'
                        }
                    ],
                },
                'title': 'Public entity'
            },
            {
                '_links': {
                    'self': [
                        {
                            'href': '/{{ page.path_version }}/page_type/public_figure/',
                            'id': 'public_figure'
                        }
                    ],
                },
                'title': 'Public figure'
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
                'href': '/{{ page.path_version }}/page_type/?limit=20&offset=0'
            }
        ]
    },
    'total_count': 3
}
```

