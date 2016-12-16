---
name: Page
doc_uri: Page
versions: vx, api/0.1, v7.0, v7.1
released: 2014-12-16
tags: social
title: Page
layout: documentation
path_version: api/0.1
docs_version: '01'
permalink: /docs/01_Page/
doc_uri: v01_Page/
---

# {{ page.title }}

A {{ page.title }} is a representation of an entity (user, brand, athlete etc.) that allows entities to share stories and to
connect with an audience.

A public {{ page.title }} (see [Page Type](/docs/{{ page.path_version }}_Page_Type)) can be followed by [User](/docs/{{ page.docs_version }}_User) and a {{ page.title }} can be
[Page Association](/docs/{{ page.docs_version }}_Page_Association) with other {{ page.title }}s to automatically aggregate social content.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/page/{pk}/`
**Item URI:** `/{{ page.path_version }}/page/{alias}/`
**Collection URI:** `/{{ page.path_version }}/page/`

## Item

### Item Methods

`GET` Retrieve a {{ page.title }} by ID.  {{ page.title }}s can be retrieved by ID or alias.  Ex. `/page/123/` or `/page/uarunning/`
`PUT` Replaces a {{ page.title }} with a new {{ page.title }}.  The {{ page.title }} ID must be used with PUT.
`PATCH` Update a part of a {{ page.title }}.  The {{ page.title }} ID must be used with PATCH.

### Item properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `alias` | A URL-friendly unique identifier for a page.  May contain lower-case letters and numbers [a-z0-9] and must start with letter. | text | **GET**: required, **PUT**: required, **PATCH**: required, **POST**: required |
| `title` | {{ page.title }} title.  For personal pages this is the display name of the user. | text | **GET**: required, **PUT**: required, **PATCH**: required, **POST**: required |
| `description` | A short description of the page. | text | **GET**: required, **PUT**: required, **PATCH**: required, **POST**: required |
| `headline` | A short headline | text | **GET**: required, **PUT**: required, **PATCH**: required, **POST**: required |
| `url` | URL to the web representation of this page. | text | **GET**: required, **PUT**: required, **PATCH**: required, **POST**: required |
| `website` | The URL to the official website of the entity (ex. http://www.mistycopeland.com) | text | **GET**: required, **PUT**: required, **PATCH**: required, **POST**: required |
| `location` | The location of the user. | text | **GET**: required, **PUT**: required, **PATCH**: required, **POST**: required |
| `profile_photo` | Profile photos are available for public_figure and public_entity [Page Type](/docs/{{ page.path_version }}_Page_Type).  To access the profile photo for the user associated with a personal page see [User Profile Photo](/docs/{{ page.docs_version }}_User_Profile_Photo). | text | **GET**: required, **PUT**: required, **PATCH**: required, **POST**: required |
| `settings` | Currently this property is read only. | text | **GET**: optional |
| `cover_photo` | Cover photos are available for public_figure and public_entity [Page Type](/docs/{{ page.path_version }}_Page_Type). | text | **GET**: required, **PUT**: required, **PATCH**: required, **POST**: required |

###### Example values

`location` For a public_figure or personal page, the location of the user:

```json
{
    "country": "US",
    "region": "Colorado",
    "locality": "Denver"
}
```

`profile_photo` Example `profile_photo` (see [Image](/docs/{{ page.docs_version }}_Image) for more information). The `profile_photo` can be updated via [Image](/docs/{{ page.docs_version }}_Image)

```json
{
    "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
    "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
}
```

`settings` For personal pages: null. For public_entity and public_figure pages, a simple dictionary of page settings:

```json
{
    "featured_gallery_enabled": true,
    "qs_graph_enabled": true,
    "cta_text": null,
    "cta_link": null,
    "cta_target": null,
    "template": "default"
}
```

`cover_photo` Example response `cover_photo` (see [Image](/docs/{{ page.docs_version }}_Image) for more information). The `cover_photo` can be updated via [Image](/docs/{{ page.docs_version }}_Image)

```json
{
    "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
    "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
}
```


### Item links

`page_type` Represents the type of the page.

`followers` Link to a list of followers of the page and the pages that the user is following (if this is a public figure page).
  Available for `public_figure` and `public_entity` pages only.  Includes count.

`followers, with name: followers` Link to a list of users that are following this page.

`followers, with name: following` Link to a list of pages that the user behind the `public_figure` page is following (will only be included for `public_figure` pages)

`follow` Link to POST url to add a follow, present if the current user is not following this page.

`unfollow` Link to DELETE url to remove a follow, present if the current user is following this page.

`associations` Links to a list of page associations for the page (includes count) for each association direction.  A named link is provided for each direction.

 `associations, with name: from` Link to a list of pages that this page has created associations with (associations made from this page).

 `associations, with name: to` Link to a list of pages that have created associations with this page (associations made to this page).

`activity_feed` Links to the activity feed and the featured posts feed for this page.  A named link is provided for each feed that is available for the page.

`activity_feed with name: activity_feed` A link to the page activity feed

`activity_feed with name: featured` A link to a feed of featured items for the page.  This link will only be included if the page type supported a feature item feed and if the featured item feed is enabled in the page settings.

`user` Link to the associated user.  Available for `public_figure` and `personal` pages only.

`workouts` Link to the workouts for this page's user.  Available for `public_figure` and `personal` pages only.

`actigraphies` Link to actigraphies associated with this user represented by the page.  Available for `public_figure` and `personal` pages only.

## Collection

### Collection methods

`GET` Gets a list of pages sorted by `alias`.  Only `public_figure` and `public_entity` pages can be retrieved.
`POST` Create a new page.  Only `public_figure` and `public_entity` page types can be created.  See [Page Type](/docs/{{ page.path_version }}_Page_Type) for more information.

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `page_type_id` | Filter pages by [Page Type](/docs/{{ page.path_version }}_Page_Type) (one of `public_figure` or `public_entity`) | number | Yes   |
| `view` | Retrieve a specified subset of pages (one of `initial` or `suggested`).| text | Yes   |
| `interests` | Used optionally with `view=suggested` to filter suggested pages to one or more interests.  Multiple interests can be specified in a comma-delimited list.  Currently available interests include: `americanfootball`, `baseball`, `basketball`, `bike`, `boxing`, `cheer`, `dance`, `female`, `fish`, `globalfootball`, `golf`, `gymnastics`, `hockey`, `hunt`, `lacrosse`, `male`, `martialarts`, `mountain`, `nutrition`, `run`, `softball`, `surf`, `swim`, `tennis`, `track`, `trail`, `train`, `triathlon`, `volleyball`, `walk`, `weights` `yoga` | text | No   |
| `campaigns` | Used optionally with `view=suggested` to filter suggested pages by campaign.  Multiple campaigns can be specified in a comma-delimited list.  Can be used in conjunction with interests. Currently available interests include: `h12015_basketball`, `h12015_run` | text | No   |
| `offset` | The Page offset | number | No |
| `limit` | The number per Page | number | No |

###### Example values

`initial` {{ page.title }}s that should be initially followed (auto-followed) by newly registered users.

`suggested` Suggested pages to follow for the authenticated user.  Can by used with `page_type_id` to get suggestions for a specific [Page Type](/docs/{{ page.path_version }}_Page_Type).

### Collection links

`self` A link to this resource
`next` A link to the next page given the per-page limit

### Embedded collections

`page` A collection of {{ page.title }}s with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/page/{pk}/` or `GET: /{{ page.path_version }}/page/{alias}/`

###### Response

```json
{
    "website": "http://",
    "description": "A description of the page",
    "title": "Some Title",
    "url": "http://record.ua.com/page_alias",
    "alias": "page_alias",
    "cover_photo": {
        "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
        "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
    },
    "profile_photo": {
        "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
        "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
    },
    "_links": {
        "associations": [
            {
                "name": "from",
                "count": 0,
                "href": "/{{ page.path_version }}/page_association/?from_page_id=2127610"
            },
            {
                "name": "to",
                "count": 0,
                "href": "/{{ page.path_version }}/page_association/?to_page_id=2127610"
            }
        ],
        "follow": [
            {
                "href": "/{{ page.path_version }}/page_follow/"
            }
        ],
        "self": [
            {
                "href": "/{{ page.path_version }}/page/2127610/",
                "id": "2127610"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/Page"
            }
        ],
        "followers": [
            {
                "count": 0,
                "href": "/{{ page.path_version }}/page_follow/?page_id=2127610",
                "name": "followers"
            }
        ],
        "activity_feed": [
            {
                "name": "activity_feed",
                "href": "/{{ page.path_version }}/activity_story/?feed_type=page&feed_id=2127610"
            },
            {
                "name": "featured",
                "href": "/{{ page.path_version }}/activity_story/?feed_type=page&feed_id=2127610&feed_view=featured"
            }
        ],
        "page_type": [
            {
                "href": "/{{ page.path_version }}/page_type/public_entity/",
                "id": "public_entity"
            }
        ]
    },
    "location": null,
    "settings": {
        "featured_gallery_enabled": true,
        "qs_graph_enabled": true,
        "cta_text": null,
        "cta_link": null,
        "cta_target": null,
        "template": "default"
    }
}
```

### GET `public_figure` page

###### Request `GET: /page/17832762/ or /page/page_alias/`

###### Response

```json
{
    "website": "http://",
    "description": "A description of the page",
    "title": "Some Title",
    "url": "http://record.ua.com/page_alias",
    "alias": "page_alias",
    "cover_photo": {
        "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
        "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
    },
    "profile_photo": {
        "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
        "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
    },
    "_links": {
        "associations": [
            {
                "name": "from",
                "count": 0,
                "href": "/{{ page.path_version }}/page_association/?from_page_id=2127610"
            },
            {
                "name": "to",
                "count": 0,
                "href": "/{{ page.path_version }}/page_association/?to_page_id=2127610"
            }
        ],
        "follow": [
            {
                "href": "/{{ page.path_version }}/page_follow/"
            }
        ],
        "self": [
            {
                "href": "/{{ page.path_version }}/page/17832762/",
                "id": "17832762"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/Page"
            }
        ],
        "followers": [
            {
                "count": 0,
                "href": "/{{ page.path_version }}/page_follow/?page_id=2127610",
                "name": "followers"
            },
            {
                "count": 0,
                "href": "/{{ page.path_version }}/page_follow/?user_id=19357095",
                "name": "following"
            }
        ],
        "user": [
            {
                "href": "/{{ page.path_version }}/user/19357095/",
                "id": "19357095"
            }
        ],
        "activity_feed": [
            {
                "name": "activity_feed",
                "href": "/{{ page.path_version }}/activity_story/?feed_type=page&feed_id=2127610"
            },
            {
                "name": "featured",
                "href": "/{{ page.path_version }}/activity_story/?feed_type=page&feed_id=2127610&feed_view=featured"
            }
        ],
        "actigraphies": [
            {
                "href": "/{{ page.path_version }}/actigraphy/?user=19357095"
            }
        ],
        "workouts": [
            {
                "href": "/{{ page.path_version }}/workout/?user=19357095"
            }
        ],
        "page_type": [
            {
                "href": "/{{ page.path_version }}/page_type/public_figure/",
                "id": "public_figure"
            }
        ]
    },
    "location": {
        "country": null,
        "region": null,
        "locality": null
    },
    "settings": {
        "featured_gallery_enabled": true,
        "qs_graph_enabled": true,
        "cta_text": null,
        "cta_link": null,
        "cta_target": null,
        "template": "default"
    }
}
```

### PUT {{ page.title }} entity (Replace)

###### Request `PUT: /page/{pk}/`

Send a complete page representation as expected for POST

### Patch a {{ page.title }} entity

###### Request `PATCH: /page/{pk}/`

```json
{
    "title": "New Title",
    "description": "new description"
}
```

### GET {{ page.title }} collection

###### Request `GET: /page/?limit=10`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/vx/page/?limit=10&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/${doc_uri}"
            }
        ],
        "next": [
            {
                "href": "/vx/page/?limit=10&offset=10"
            }
        ]
    },
    "_embedded": {
        "pages": [
          {...}
        ]
    },
    "total_count": 12
}
```

### GET suggested {{ page.title }}s collection

###### Request `GET: /page/?view=suggested`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/vx/page/?limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/${doc_uri}"
            }
        ]
    },
    "_embedded": {
        "pages": [
          {...}
        ]
    },
    "total_count": 3
}
```

### GET suggested `public_figure` {{ page.title }}s collection

###### Request `GET: /page/?page_type_id=public_figure&view=suggested`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/vx/page/?limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/${doc_uri}"
            }
        ]
    },
    "_embedded": {
        "pages": [
          {...}
        ]
    },
    "total_count": 2
}
```

### GET Get initial (auto-follow) pages

###### Request `GET: /page/?view=initial`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/vx/page/?limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/{{ page.title }}"
            }
        ]
    },
    "_embedded": {
        "pages": [
          {...}
        ]
    },
    "total_count": 5
}
```

### POST a `public_figure` {{ page.title }} entity

###### Request `POST: /{{ page.path_version }}/page/`

```json
{
    "page_type": "/{{ page.path_version }}/page_type/public_figure/",
    "user": "/{{ page.path_version }}/user/123/",
    "alias": "pagealias",
    "title": "Some Title",
    "description": "A description of the page",
    "website": "http://"
}
```

### POST a `public_entity` {{ page.title }} entity

###### Request `POST: /{{ page.path_version }}/page/`

```json
{
    "page_type": "/{{ page.path_version }}/page_type/public_entity/",
    "alias": "pagealias",
    "title": "Some Title",
    "description": "A description of the page",
    "website": "http://"
}
```

### Post update of {{ page.title }} profile_photo

###### Request `POST: /image/`

See [Image](/docs/{{ page.docs_version }}_Image) for details on the format required for posting an image.

This example just shows the data JSON that needs to be provided to upload a profile_photo.

```json
{
    "href": "/vx/page/12345",
    "rel": "profile_photo"
}
```

### Post update of {{ page.title }} cover_photo

###### Request `POST: /image/`

See [Image](/docs/{{ page.docs_version }}_Image) for details on the format required for posting an image.

This example only shows the JSON-encoded object that should be provided as the "data" file in the multipart POST.

```json
{
    "href": "/vx/page/12345",
    "rel": "cover_photo"
}
```

<!-- Page Type -->
[vx Page Type]: docs/vx_Page_Type
[v7.0 Page Type]: docs/v70_Page_Type
[api/0.1 Page Type]: docs/01_Page_Type

<!-- Page Association -->
[vx Page Association]: docs/vx_Page_Association
[v7.0 Page Association]: docs/v70_Page_Association
[api/0.1 Page Association]: docs/01_Page_Association

<!-- Image -->
[vx Image]: docs/vx_Image
[v7.0 Image]: docs/v70_Image
[api/0.1 Image]: docs/01_Image

<!-- User -->
[vx User]: docs/vx_User
[v7.0 User]: docs/v70_User
[api/0.1 User]: docs/01_User

<!-- User Profile Photo -->
[vx User Profile Photo]: docs/vx_User_Profile_Photo
[v7.0 User Profile Photo]: docs/v70_User_Profile_Photo
[api/0.1 User Profile Photo]: docs/01_User_Profile_Photo
