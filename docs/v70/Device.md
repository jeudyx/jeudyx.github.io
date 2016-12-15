---
layout: documentation
title: Device
resource: Device
version: v7.0
versionhref: v70
permalink: /docs/v70_Device/
---

# Device

The `Device` resource represents the hardware used to record data.

### Device Identifier

A device is identified by the combination of manufacturer and model (lower case), separated by `_`.

## Resource URIs

**Item URI:** `/{{page.version}}/device/{pk}/`

**Collection URI:** `/{{page.version}}/device/`

## Item

### Item Methods

 * `GET` Retrieve a Device by id.
 * `PUT` Update a Device by id.

### Item query parameters

None

### Item properties <a name="itemproperties"></a>

| Name           | Description                                          | Type   | Units | HTTP Support                                              |
|----------------|------------------------------------------------------|--------|-------|-----------------------------------------------------------|
| `name`         | Name of the device, max length 100 characters        | String |       | **GET**: required, **PUT**: optional, **POST**: optional  |
| `description`  | Description of the device, max length 255 characters | String |       | **GET**: required, **PUT**: optional, **POST**: optional  |
| `manufacturer` | Short name of manufacturer                           | String |       | **GET**: required, **PUT**: immutable, **POST**: required |
| `model`        | Model of the device                                  | String |       | **GET**: required, **PUT**: immutable, **POST**: required |

###### Example values

* **`model`** - Allowed characters: Value must begin with uppercase and lowercase letters (will be converted to lower case), and may end with upper and lower case letters or decimal digits, hyphen, and  period (as a regular expression: `^[a-zA-Z0-9][a-zA-Z0-9~\.\-]*$`).
 * **Valid models:** `"sm-g900t"`, `"smg900t"`, `"SM-g900t"` (auto-converted to `"sm-g900t"`)
 * **Invalid models:** `"sm g900t"`, `"sm_g900t"`
* **`manufacturer`** - Allowed characters: uppercase and lowercase letters (will be converted to lower case) (as a regular expression: `/^[a-zA-Z]*$/`).
 * **Valid manufacturers:** `"samsung"`, `"underarmour"`
 * **Invalid manufacturers:** `"under armour"`, `"under_armour"`

### Item links <a name="itemlinks"></a>

 * `self` A link to this resource.

## Collection

### Collection methods

 * `GET` Get a list of Devices.
 * `POST` Create a Device.


### Collection query parameters

| Name           | Description               | Type       | Required |
|----------------|---------------------------|------------|----------|
| `manufacturer` | description of param name | String     | Yes      |

### Collection properties

| Name          | Description               | Type      | Units | HTTP Support      |
|---------------|---------------------------|-----------|-------|-------------------|
| `total_count` | count of objects returned | Number    |       | **GET**: required |

### Collection links

 * `self` A link to this resource.

### Embedded collections

 * `devices` A collection of Devices with properties as described under [Item properties](#itemproperties) and links as described under [Item links](#itemlinks).

## Usage

### GET Device entity

###### Request `GET: /{{page.version}}/device/samsung_sm-g900t/`

###### Response

```json
{
    "model": "sm-g900t",
    "manufacturer": "samsung",
    "name": "Samsung SM G900T Activity Tracker",
    "description": "Tracks activity data",
    "_links": {
        "self": [{
            "href": "/{{page.version}}/device/samsung_sm-g900t/"
        }]
    }
}
```


### GET Device collection

###### Request `GET: /{{page.version}}/device/?manufacturer=samsung`

###### Response

```json
{
    "_embedded": {
        "devices": [
            {
                "model": "sm-g900t",
                "manufacturer": "samsung",
                "name": "Samsung SM G900T Activity Tracker",
                "description": "Tracks activity data",
                "_links": {
                    "self": [{
                        "href": "/{{page.version}}/device/samsung_sm-g900t/"
                    }]
                }
            },
            {
                "model": "gear-fit",
                "manufacturer": "samsung",
                "name": "Samsung Gear Fit",
                "description": "Samsung Gear Fit Activity Tracker",
                "_links": {
                    "self": [{
                        "href": "/{{page.version}}/device/samsung_gear-fit/",
                        "id": "samsung_gear-fit"
                    }]
                }
            }
        ]
    },
    "_links": {
        "self": [{
            "href": "/{{page.version}}/device/?manufacturer=samsung"
        }]
    },
    "total_count": 2
}
```
### POST Device entity

###### Request `POST: /{{page.version}}/device/`

```json
{
    "model": "sm-g900t",
    "manufacturer": "samsung",
    "name": "Samsung SM G900T Activity Tracker",
    "description": "Tracks activity data"
}
```

###### Response

```json
{
    "model": "sm-g900t",
    "manufacturer": "samsung",
    "name": "Samsung SM G900T Activity Tracker",
    "description": "Tracks activity data",
    "_links": {
        "self": [{
            "href": "/{{page.version}}/device/samsung_sm-g900t/"
        }]
    }
}
```

### PUT Device entity

###### Request `PUT: /{{page.version}}/device/samsung_sm-g900t/`

```json
{
    "name": "Samsung SM G900T Activity Tracker",
    "description": "New Description"
}
```

###### Response

```json
{
    "model": "sm-g900t",
    "manufacturer": "samsung",
    "name": "Samsung SM G900T Activity Tracker",
    "description": "New Description",
    "_links": {
        "self": [{
            "href": "/{{page.version}}/device/samsung_sm-g900t/"
        }]
    }
}
```
