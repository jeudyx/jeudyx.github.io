# Activity resource

This resource allows retrieval of activities bucketed by user's day. Also see [`Actigraphy`](/docs/v71_Actigraphy) and [`Activity Time Series`](/docs/v71_Activity_Time_Series).

The only behavior currently supported by this API is fetching the latest entry in order to determine last ${name}
synced with the server. Only certain parameters are currently supported (see `Collection query parameters` section.

## Resource URIs

**Collection URI:** `/vx/activity/`

**Item URI:** `/vx/activity/<id>/`

## Item

### Item methods

`GET` Fetch an activity by id  
`DELETE` Delete an activity

### Item query parameters

None

### Item properties

| Name                 | Description                                                              | Type     | Units        | HTTP Support      |
|----------------------|--------------------------------------------------------------------------|----------|--------------|-------------------|
| `start_datetime_utc` | The instant in time that the activity began.                             | datetime | UTC datetime | **GET:** Required |
| `end_datetime_utc`   | The instant in time that the activity ended.                             | datetime | UTC datetime | **GET:** Required |
| `created_datetime`   | The instant in time that the activity was recorded.      | datetime | UTC datetime | **GET:** Required |
| `updated_datetime`   | The instant in time that the activity was last modified. | datetime | UTC datetime | **GET:** Required |
| `recorder_type_key`  | The key for the recorder type that recorded the data.                    | string   |              | **GET:** Required |


### Item links

`self` A link to this resource  
`user` A link to the User resource that owns the activity

## Collection

### Collection methods

`GET` Retrieve a list of activities.

### Collection query parameters


| Name                | Description                                                                      | Type       | Required |
|---------------------|----------------------------------------------------------------------------------|------------|----------|
| `user`              | Currently can be either href or id.                                              | href or id | Yes      |
| `offset`            | Currently, only accepts value of 0.                                              | int        | Yes      |
| `limit`             | Currently, only accepts value of 1.                                              | int        | Yes      |
| `recorder_type_key` | Currently, only accepts value of 'ios_m7', 'apple_iphone6', 'apple_iphone6plus'. | string     | Yes      |
| `order_by`          | Can be one of ['date', '-date']. Defaults to 'date' (sorted by date ascending)   | string     | Yes      |

### Collection properties

None

### Collection links

None

### Embedded collections

None

## Usage

### Retrieve an activity by `id`

### Retrieve a list of activities

### Delete an activity

