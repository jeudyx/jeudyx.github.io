---
layout: documentation
title: Data Source
resource: DataSource
version: v7.1
versionhref: v71
permalink: /docs/v71_DataSource/
---

# Data Source

The Data Source resource represents the unique combination of
[Device](/docs/{{page.versionhref}}_Device) and [Remote Connection](/docs/{{page.versionhref}}_Remote_Connection)
for a user's data recording hardware.

For example, for the Device "Samsung Galaxy S5", a Data Source represents the
specific machine that a user picks up in the morning and puts in their pocket;
it is _their_ Samsung Galaxy S5.

Along the same lines, a Remote Connection which represents a user's authorization
to a 3rd party, such as Withings, Jawbone, Fitbit etc; the instance of this
remote connection in the context of a user becomes that user's unique
Data Source.


## Resource URIs

* **Item URI:** `/{{page.version}}/data_source/{id}/`
* **Collection URI:** `/{{page.version}}/data_source/`


## Item

### Item Methods

* `GET` Retrieve a Data Source by id.
* `PUT` Update a Data Source by id.


### Item query parameters

None


### Item properties

| Name                         | Description                                           | Type    | Units | HTTP Support                                             |
| ---                          | ---                                                   | ---     | ---   | ---                                                      |
| `name`                       | Name of the Data Source                               | String  |       | **GET:** required, **PUT:** optional, **POST:** optional |
| `active`                     | Whether the Data Source can accept new data           | Boolean |       | Optional                                                 |
| `advertised_name`            | The name a Data Source advertises over Bluetooth      | String  |       | Optional                                                 |
| `serial_number`              | A unique identifier for the Data Source               | String  |       | Optional                                                 |
| `bluetooth_device_address`   | The BDA(Bluetooth Device Address) for the Data Source | String  |       | Optional                                                 |
| `firmware_version`           | The firmware version of the Data Source               | String  |       | Optional                                                 |
| `hardware_version`           | The hardware version of the Data Source               | String  |       | Optional                                                 |

Note: If you use `PUT` with `"active": false` to deactivate a Data Source, any
associated [Data Source Priority](/docs/{{page.versionhref}}_Data_Source_Priority) will be
deleted at the same time. Also, inactive Data Sources will not show up in the
collection listing.


### Item links

* `self` A link to this resource.
* `device` A link to the [Device](/docs/{{page.versionhref}}_Device) resource.


## Collection

### Collection methods

* `GET` Get a list of Data Sources owned by requesting user.
* `POST` Create a Data Source and embedded [Device](/docs/{{page.versionhref}}_Device).

For example: a user's Samsung Galaxy S5 device, Withings remote connection,
Garmin Forerunner 910XT.

This list is sorted by date added, and it is not an option to change the order.


### Collection query parameters

| Name     | Description                                                                                    | Type   | Required |
| ---      | ---                                                                                            | ---    | ---      |
| `device` | Valid id or href of the [Device](/docs/{{page.versionhref}}_Device) resource, does not need to be url encoded. | String | No       |


### Collection properties

| Name          | Description               | Type   | Units | HTTP Support      |
| ---           | ---                       | ---    | ---   | ---               |
| `total_count` | count of objects returned | Number |       | **GET:** required |


### Collection links

* `self` A link to this resource.


### Embedded collections

* `Data Sources` A collection of Data Sources with properties as described under
  [Item properties][] and links as described under [Item links][].
* `Device` A collection of [Devices](/docs/{{page.versionhref}}_Device).


## Usage

### GET Data Source entity

###### Request `GET: /{{page.version}}/data_source/12345/`

###### Response

```json
{
    "name": "My Samsung",
    "advertised_name": null,
    "active": true,
    "serial_number": null,
    "bluetooth_device_address": null,
    "firmware_version": null,
    "hardware_version": null,
    "_embedded": {
        "device": [{
            "model": "sm-g900t",
            "manufacturer": "samsung",
            "name": "Samsung SM G900T Activity Tracker",
            "description": "Does stuff",
            "_links": {
                "self": [{
                    "href": "/{{page.version}}/device/samsung_sm-g900t/",
                    "id": "samsung_sm-g900t"
                }]
            }
        }]
    },
    "_links": {
        "self": [{
            "href": "/{{page.version}}/data_source/12345/",
            "id": "12345"
        }],
        "device": [{
            "href": "/{{page.version}}/device/samsung_sm-g900t/",
            "id": "samsung_sm-g900t"
        }]
    }
}
```


### GET Data Source collection

###### Request `GET: /{{page.version}}/data_source/`

###### Response

```json
{
    "_embedded": {
        "data_sources": [
            {
                "name": null,
                "advertised_name": null,
                "active": true,
                "serial_number": null,
                "bluetooth_device_address": null,
                "firmware_version": null,
                "hardware_version": null,
                "_embedded": {
                    "device": [{
                                "model": "sm-g900t",
                                "manufacturer": "samsung",
                                "name": "Samsung SM G900T Activity Tracker",
                                "description": "Does stuff",
                                "_links": {
                                    "self": [{
                                        "href": "/{{page.version}}/device/samsung_sm-g900t/",
                                        "id": "samsung_sm-g900t"
                                    }]
                                }
                    }]
                },
                "_links": {
                    "self": [{
                        "href": "/{{page.version}}/data_source/12345/",
                        "id": "12345"
                    }],
                    "device": [{
                        "href": "/{{page.version}}/device/samsung_sm-g900t/",
                        "id": "samsung_sm-g900t"
                    }]
                }
            },
            {
                "name": "name goes here",
                "advertised_name": null,
                "active": true,
                "serial_number": null,
                "bluetooth_device_address": null,
                "firmware_version": null,
                "hardware_version": null,
                "_embedded": {
                    "device": [{
                                "model": "abc_one",
                                "manufacturer": "manufacturer",
                                "name": "Device Name",
                                "description": "Device description",
                                "_links": {
                                    "self": [{
                                        "href": "/{{page.version}}/device/abc_one",
                                        "id": "abc_one"
                                    }]
                                }
                    }]
                },
                "_links": {
                    "self": [{
                        "href": "/{{page.version}}/data_source/54321/",
                        "id": "12345"
                    }],
                    "device": [{
                        "href": "/{{page.version}}/device/abc_one/",
                        "id": "abc_one"
                    }]
                }
            }
        ]
    },
    "_links": {
        "self": [{
            "href": "/{{page.version}}/data_source/?device=samsung_sm-g900t"
        }]
    },
    "total_count": 2
}
```


### POST Data Source entity

###### Request `POST: /{{page.version}}/data_source/`

Embedded device will be auto created, if it doesn't exist.

```json
{
    "name": "optional name here",
    "_embedded": {
        "device": [{
            "model": "sm-g900t",
            "manufacturer": "samsung"
        }]
    }
}
```


###### Response

```json
{
    "name": "optional name here",
    "advertised_name": null,
    "active": true,
    "serial_number": null,
    "bluetooth_device_address": null,
    "firmware_version": null,
    "hardware_version": null,
    "_embedded": {
        "device": [{
            "model": "sm-g900t",
            "manufacturer": "samsung",
            "name": "Samsung SM G900T Activity Tracker",
            "description": "Does stuff",
            "_links": {
                "self": [{
                    "href": "/{{page.version}}/device/samsung_sm-g900t/",
                    "id": "samsung_sm-g900t"
                }]
            }
        }]
    },
    "_links": {
        "self": [{
            "href": "/{{page.version}}/data_source/<data_source_id>/",
            "id": "<data_source_id>"
        }],
        "device": [{
            "href": "/{{page.version}}/device/samsung_sm-g900t/",
            "id": "samsung_sm-g900t"
        }]
    }
}
```


### PUT Data Source entity

###### Request `PUT: /{{page.version}}/data_source/12345/`

```json
{
    "name": "Update Name of Datasource"
}
```


###### Response

```json
{
    "name": "Update Name of Datasource",
    "advertised_name": null,
    "active": true,
    "serial_number": null,
    "bluetooth_device_address": null,
    "firmware_version": null,
    "hardware_version": null,
    "_embedded": {
        "device": [{
            "model": "sm-g900t",
            "manufacturer": "samsung",
            "name": "Samsung SM G900T Activity Tracker",
            "description": "Does stuff",
            "_links": {
                "self": [{
                    "href": "/{{page.version}}/device/samsung_sm-g900t/",
                    "id": "samsung_sm-g900t"
                }]
            }
        }]
    },
    "_links": {
        "self": [{
            "href": "/{{page.version}}/data_source/12345/",
            "id": "12345"
        }],
        "device": [{
            "href": "/{{page.version}}/device/samsung_sm-g900t/",
            "id": "samsung_sm-g900t"
        }]
    }
}
```


### PUT deactivate Data Source entity

###### Request `PUT: /{{page.version}}/data_source/12345/`

```json
{
    "active": false
}
```


###### Response

At this point, any associated [Data Source Priority](/docs/{{page.versionhref}}_Data_Source_Priority)
will be deleted at the same time. Also, inactive Data Sources will not show up
in the collection listing.

```json
{
    "name": "Update Name of Datasource",
    "advertised_name": null,
    "active": false,
    "serial_number": null,
    "bluetooth_device_address": null,
    "firmware_version": null,
    "hardware_version": null,
    "_embedded": {
        "device": [{
            "model": "sm-g900t",
            "manufacturer": "samsung",
            "name": "Samsung SM G900T Activity Tracker",
            "description": "Does stuff",
            "_links": {
                "self": [{
                    "href": "/{{page.version}}/device/samsung_sm-g900t/",
                    "id": "samsung_sm-g900t"
                }]
            }
        }]
    },
    "_links": {
        "self": [{
            "href": "/{{page.version}}/data_source/12345/",
            "id": "12345"
        }],
        "device": [{
            "href": "/{{page.version}}/device/samsung_sm-g900t/",
            "id": "samsung_sm-g900t"
        }]
    }
}
```
