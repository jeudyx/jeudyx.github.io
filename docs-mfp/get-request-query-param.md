---
layout: mfp_documentation
title: MyFitnessPal Developer - GET Request Query Parameter
permalink: /docs-mpf/get-request-query-param/
---

# GET Request Query Parameter

The following query­string parameter may be included with most requests made to the API.

**Name** | **Description** | **Type** | **Required** | **Sample Value** | **Default Value**
 --- | --- | --- | --- | --- | ---
 fields* | Include the indicated property or properties in the resource representation. | Array(String) | N | [energy, exercise] | none (return only properties that are not complex objects, e.g. integers, strings)
 
 \*​In all ​**fields**​ examples contained in this document, the square brackets are not URL­encoded to assist readability, though in real­world requests, they must be URL­encoded.
 
 The ​**fields**​ query parameter allows clients to limit responses to those complex properties that are of interest, thereby reducing network and memory usage.
 
 Consider the following examples, which illustrate how the response content of a Diary resource changes based on the presence and value of the **fields**​ query parameter.
 
 **Example 1: No *​fields***
 
 Request: ​GET /diary/9348fwn4go89v48ghg
 
 Response body:
 
    {
    "item":
         {
           "id": "9348fwn4go89v48ghg",
           "type": "exercise",
           "date": "2014-07-15",
           "start_time": "2014-07-15T08:30:05-07:00",
           "duration": 2700
        } 
    }
    

**Example 2: ​fields: ​energy, exercise**

Request: ​GET /diary/9348fwn4go89v48ghg?fields[]=energy&fields[]=exercise

Response body:

    {
    "item":
            {
              "id": "9348fwn4go89v48ghg",
              "type": "exercise",
              "date": "2014-07-15",
              "start_time": "2014-05-06T08:30:05-07:00",
              "duration": 2700,
              "energy": {
                "unit": "calories",
                "value": 500
              },
              "exercise": {
                "id": "b95n9898878f4",
                "version": "g8v7h",
                "type": "cardio",
                "description": "Curling",
                "mets": 4.0,
                "public": true
                } 
            }
    }