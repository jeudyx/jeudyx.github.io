---
layout: mfp_documentation
title: MyFitnessPal Developer - GET Measurements
permalink: /docs-mpf/measurements-get/
---

# Measurements

The following resource structure definition is relevant for this set of endpoints:

● [Measurement](appendix-data-structures-measurement.md)

    GET ​/measurements/​:measurementId

Required permission scope: ​measurements

Retrieves the measurement with the given identifier, provided the user identified by the **mfp-user-id**​ header is authorized to access it.


## Example response

    {
        "item": {
          "id": "s09feu438vfn3kgh",
          "type": "weight",
          "value": 208,
          "unit": "pounds",
          "date": "2014-04-16",
          "updated_at": "2014-05-06T08:30:05-07:00"
        }
    }

Required permission scope: ​measurements

Retrieves a set of measurements for the logged­in user, whose id is the value of the **mfp-user-id**​ header. Measurements are retrieved for a single entry date, and may be narrowed by measurement type.

    GET ​/measurements   
    
    
## Request query parameters

**Name** | **Description** | **Type** | **Required** | **Sample Values**
 :--- | --- | --- | --- | ---
 entry_date | Measurement creation date to search for, in ISO 8601 format: YYYY-MM-DD. | Date | Y | 2014-05-15
 types | A comma-delimited list of measurement types to include. | String | N | weight
 
 Currently, "weight" is the only supported measurement type.
 
 
 ## Response
 
 The response is an ordered list of measurements matching the request parameters. Pagination rules apply in the event of many measurements created on a the same date.
 