# Group User

Represents a [`User`](/docs/v71_User)'s membership with a [`Group`](/docs/v71_Group). Used for retrieving and managing Group memberships.

To create or remove a Group membership the requesting user must have the appropriate permissions.  To create a membership
the Group must be public or the user must have been invited to the Group.  A Group membership can only be deleted by the
Group member or by the Group administrator.

## Resource URIs

**Item URI:** `/v7.0/group_user/{pk}/`

**Collection URI:** `/v7.0/group_user/`

## Item

### Item Methods

`GET` Retrieve a Group User by id  
`DELETE` Delete a Group User by id.  Only the user that the membership belongs to or the Group administrator can remove a user from a Group.

### Item links

`self` A link to this resource  
`user` A link to the User resource that owns the Group User
`group` Link to the associated [`Group`](/docs/v71_Group).

## Collection

### Collection methods

`GET` Get a list of Group Users.  
`POST` Create a membership (add a user to a Group)

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `user_id` | Get the Group memberships for a user | number | No |
| `group_id` | Get the Group memberships for a Group | number | No |

### Collection links

`self` A link to this resource  
`user` A link to the User resource that owns the Group User

### Embedded collections

`group_users` A collection of Group Users with links as described under [Item links][]

## Usage

### GET Group User entity

###### Request `GET: /v7.0/group_user/{pk}/`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group_user\/4\/",
            "id":"4"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group_User"
         }
      ],
      "group":[
         {
            "href":"\/v7.0\/group\/3\/",
            "id":"3"
         }
      ],
      "user":[
         {
            "href":"\/v7.0\/user\/12\/",
            "id":"12"
         }
      ]
   }
}
```

### DELETE Group User entity

###### Request `DELETE: /v7.0/group_user/{pk}/`

###### Response 204

### GET Group User collection by group_id

###### Request `GET: /v7.0/group_user/?group_id=5`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/v7.0/group_user/?group_id=5&limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/GroupUser"
            }
        ],
        "next": [
            {
                "href": "/v7.0/group_user/?group_id=5&limit=20&offset=20"
            }
        ]
    },
    "_embedded": {
        "group_users": [
            {
                "_links": {
                    "self": [
                        {
                            "href": "/v7.0/group_user/1313968/",
                            "id": "1313968"
                        }
                    ],
                    "group": [
                        {
                            "href": "/v7.0/group/5/",
                            "id": "5"
                        }
                    ],
                    "user": [
                        {
                            "href": "/v7.0/user/26766/",
                            "id": "26766"
                        }
                    ]
                }
            },
            ...
        ]
    },
    "total_count": 165
}
```

### GET Group User collection by user_id

###### Request `GET: /v7.0/group_user/?user_id=26766`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/v7.0/group_user/?user_id=26766&limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/GroupUser"
            }
        ],
        "next": [
            {
                "href": "/v7.0/group_user/?user_id=26766&limit=20&offset=20"
            }
        ]
    },
    "_embedded": {
        "group_users": [
            {
                "_links": {
                    "self": [
                        {
                            "href": "/v7.0/group_user/1313968/",
                            "id": "1313968"
                        }
                    ],
                    "group": [
                        {
                            "href": "/v7.0/group/5/",
                            "id": "5"
                        }
                    ],
                    "user": [
                        {
                            "href": "/v7.0/user/26766/",
                            "id": "26766"
                        }
                    ]
                }
            },
        ]
    },
    "total_count": 1
}
```

### POST Group User entity

###### Request `POST: /v7.0/group_user/`

```json
{
    "group": "/v7.0/group/1/",
    "user": "/v7.0/user/2/",
}
```

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group_user\/2\/",
            "id":"2"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group_User"
         }
      ],
      "group":[
         {
            "href":"\/v7.0\/group\/1\/",
            "id":"1"
         }
      ],
      "user":[
         {
            "href":"\/v7.0\/user\/2\/",
            "id":"2"
         }
      ]
   }
}
```

