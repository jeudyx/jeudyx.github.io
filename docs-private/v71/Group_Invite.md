# Group Invite

Represents a [User](/docs/v71_User)'s invitation to a [Group](/docs/v71_Group).
Used for retrieving and managing Group Invites.

To create or remove an invitation, the requesting User must be and administrator
of the Group.


## Resource URIs

* **Collection URI:** `/v7.1/group_invite/`
* **Item URI:** `/v7.1/group_invite/<group_invite_id>/`


## Item

### Item methods

* `GET` Gets an invite by id.
* `DELETE` Remove an invite. Only a group administrator can remove and invite.


### Item properties

* `email` The email address of the invited user.


### Item links

* `user` Link to the associated [`User`](/docs/v71_User).
* `group` Link to the associated [`Group`](/docs/v71_Group).


## Collection

### Collection methods

* `GET` Get a collection of invites.
* `POST` Create an invite.
* `PATCH` Create multiple invites.

### Collection query parameters

* `user_id` Get the Group Invites for a user.
* `group_id` Get the Group Invites for a group.


## Usage

### Invite multiple users to a group

###### Request `PATCH: /v7.0/group_invite/`

```json
{
    "group_invites": [
        {
            "group": "/v7.0/group/143201/",
            "user": "/v7.0/user/12696504/",
        },
        {
            "group": "/v7.0/group/143201/",
            "email": "some.other.email@address.com"
        },
    ]
}
```

###### Response 201

```json
{
   "group_invites":[
        {
            "group": "/v7.1/group/143201/",
            "user": "/v7.1/user/12696504/",
        },
        {
            "group": "/v7.1/group/143201/",
            "email": "some.other.email@address.com"
        },
   ],
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group_invite\/?limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group_Invite"
         }
      ]
   }
}
```


### Get the invites for a group

###### Request `GET: /v7.1/group_invite/?group_id=<group_id>`

###### Response 200

```json
{
    "_links": {
        "self": [
            {
                "href": "/v7.1/group_invite/?group_id=5&limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/GroupInvite"
            }
        ],
        "next": [
            {
                "href": "/v7.1/group_invite/?group_id=5&limit=20&offset=20"
            }
        ]
    },
    "_embedded": {
        "group_invites": [
            {
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/group_invite/1313968/",
                            "id": "1313968"
                        }
                    ],
                    "group": [
                        {
                            "href": "/v7.1/group/5/",
                            "id": "5"
                        }
                    ],
                    "user": [
                        {
                            "href": "/v7.1/user/26766/",
                            "id": "26766"
                        }
                    ]
                },
                "email": "some.email@address.com"
            },
            ...
        ]
    },
    "total_count": 10
}
```


### Get the invites for a user

###### Request `GET: /v7.1/group_invite/?user_id=<user_id>`

###### Response 200

```json
{
    "_links": {
        "self": [
            {
                "href": "/v7.1/group_invite/?user_id=5&limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/GroupInvite"
            }
        ]
    },
    "_embedded": {
        "group_invites": [
            {
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/group_invite/1313968/",
                            "id": "1313968"
                        }
                    ],
                    "group": [
                        {
                            "href": "/v7.1/group/5/",
                            "id": "5"
                        }
                    ],
                    "user": [
                        {
                            "href": "/v7.1/user/26766/",
                            "id": "26766"
                        }
                    ]
                },
                "email": "some.email@address.com"
            },
            ...
        ]
    },
    "total_count": 2
}
```


### Invite a user to a group

###### Request `POST: /v7.1/group_invite/`

```json
{
    "group": "/v7.1/group/143201/",
    "user": "/v7.1/user/12696504/",
    "email": "some.email@address.com"
}
```

###### Response 201

```json
{
   "message":null,
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group_invite\/4\/",
            "id":"4"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group_Invite"
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
            "href":"\/v7.0\/user\/14\/",
            "id":"14"
         }
      ]
   },
   "email":"ckPDpToxdGqd@example.com"
}
```


### Invite multiple users to a group

###### Request `PATCH: /v7.1/group_invite/`

```json
{
    "group_invites": [
        {
            "group": "/v7.1/group/143201/",
            "user": "/v7.1/user/12696504/",
        },
        {
            "group": "/v7.1/group/143201/",
            "email": "some.other.email@address.com"
        },
    ]
}
```

###### Response 201

```json
{
    "group_invites": [
        {
            "group": "/v7.1/group/143201/",
            "user": "/v7.1/user/12696504/",
        },
        {
            "group": "/v7.1/group/143201/",
            "email": "some.other.email@address.com"
        },
    ],
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group_invite\/?limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group_Invite"
         }
      ]
   }
}
```


### Remove an invite

###### Request `DELETE: /v7.1/group_invite/1313968`

###### Response 204
