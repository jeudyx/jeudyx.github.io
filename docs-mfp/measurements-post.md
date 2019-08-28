---
layout: mfp_documentation
title: MyFitnessPal Developer - POST Measurements
permalink: /docs-mpf/measurements-post/
---

# Measurements POST

    POST ​/measurements

Required permission scope: ​measurements

Creates one or more measurements.

## Request Body

The request body is a representation of an array of measurements. If no value is supplied for date​, its value will be the current date.

**Properties for each measurement representation in the request body**

**Name** | **Type** | **Required** | **Default Values**
 :--- | --- | --- | --- 
 type | String | Y | N/A
 value | Float | Y | N/A
 unit | String  | Y | N/A
 date | Date | Y | N/A
 
The ​**weight**​ measurement type supports the following units:
    
    ● pounds
    ● kilograms
    
## Example request body

    {
      "items": [
          {
            "type": "weight",
            "value": 208,
            "unit": "pounds",
            "date": "2014-04-16"
        }, {
            "type": "weight",
            "value": 203,
            "unit": "pounds",
            "date": "2014-05-06"
        },
        {
            "type": "weight",
            "value": 200,
            "unit": "pounds",
            "date": "2014-06-20"
        } 
      ]
    }
    
## Response

Since a request may create multiple Measurement resources, a success response will include:

    ● a ​Location​ header with the URI of the first measurement created
    ● a list of all measurements created, as they would be returned by a GET request.