---
name: Suggested Friend
doc_uri: Suggested_Friend
versions: api/0.1, v7.1
released: 2014-11-22
tags: social
title: Suggested Friend
layout: documentation
path_version: api/0.1
docs_version: 01
permalink: /docs/01_Suggested_Friend/
doc_uri: 01_Suggested_Friend/
---

# {{ page.title }}

Returns suggested friends on Under Armour and Facebook for a given user.

## Resource URIs

**Collection URI:** `/{{ page.path_version }}/friend_suggestion/`

## Item

<a name="item-properties" />
### Item Properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `reasons` | A list of the reasons this user is being suggested. | [`reason`](#reason-object) | **GET:** Required |

<a name="reason-object" />
#### Reason object

An object that includes the suggestion source and weight as factored into the total suggestion score, e.g:

```json
{"source": "facebook", weight: 1}
```

<a name="item-links" />
### Item links

`mutual_friends` Links to the list of users the requesting user and this suggestion have in common. Includes a count of all mutual friends.
`user` Links to the user being suggested. Includes the user's display_name.
`profile_picture` Links to the profile image for the suggested user.

## Collection

### Collection methods

`GET` Retrieve a list of friend suggestions.

### Collection query parameters

| Name         | Description                           | Type                               | Required |
|--------------|---------------------------------------|------------------------------------|----------|
| `user`       | The user to retrieve suggestions for. | [`user`](/docs/{{ page.docs_version }}_User) `id` or `href` | Required |

[Pagination parameters](/docs/v71_Paging)

### Embedded collections

`suggestions` A collection of suggested friend items with properties as described under [Item properties](#item-properties) and links as described under [Item links](#item-links)

## Usage

### GET Suggested Friends for a user

###### Request: `GET /{{ page.path_version }}/friend_suggestion/?user={id}`

###### Response: 200

```json
{
    "_embedded": {
        "suggestions": [
            {
                "reasons": [
                    {
                        "source": "native",
                        "weight": 1.0
                    }
                ],
                "_links": {
                    "profile_picture": [
                        {
                            "href": "/{{ page.path_version }}/user_profile_photo/{their_id}/",
                            "id": "{their_id}",
                            "name": "user_profile_photo"
                        }
                    ],
                    "mutual_friends": [
                        {
                            "count": 4,
                            "href": "/{{ page.path_version }}/user/?mutual_friends_for={their_id},{your_id}"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{ page.path_version }}/user/{their_id}/",
                            "display_name": "Friend, A.",
                            "id": "876537"
                        }
                    ]
                }
            },
            ...
        ]
    },
    "_links": {
        "self": [
            {
                "href": "/{{ page.path_version }}/friend_suggestion/?limit=20&user={your_id}&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
        "next": [
            {
                "href": "/{{ page.path_version }}/friend_suggestion/?limit=20&user={your_id}&offset=20"
            }
        ]
    }
}

```
