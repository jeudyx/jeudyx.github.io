---
layout: mfp_documentation
title: MyFitnessPal Developer - Diary - GET
permalink: /docs-mpf/diary-get/
---

# Diary

The following resource structure definitions are relevant for this set of endpoints:

● [Diary](appendix-data-structures-diary.md)

● [Exercise](appendix-data-structures)

The following types of diary entries are supported:
    
    ● exercise
    ● steps
    ● steps_aggregate – entries of this type are available in GET requests
    ● diary_meal – entries of this type are available in GET requests

Required permission scope: ​diary

Retrieves a single diary entry, provided the user id in the **​mfp-user-id**​ header is authorized to retrieve it.

    GET ​/diary/​:entryId


## Response

The response body is a diary entry matching the requested identifier.

**Example ​exercise​ ​response, no ​fields​ parameter:**

    {
        "items": [
        {
            "type": "exercise",
            "id": "vcxo4nb95nt",
            "date": "2014-05-06",
            "tags": ["cardio", "outdoors"],
            "start_time": "2014-05-06T07:05:00-07:00",
            "duration": 1800,
            "energy": { "unit": "calories", "value": 500 },
            "exercise": {
              "id": "b95n9898878f4",
              "version": "jf4o9znf4l9rjg",
              "type": "cardio",
              "description": "Running, 6.5mph",
              "mets": 4,
              "public": true
            } 
        },
        {
            "type": "diary_meal",
            "date": "2014-05-06",
            "diary_meal": "Breakfast",
            "nutritional_contents": {
              "energy": { "unit": "calories", "value": 350 },
              "fat": 6.8,
              "protein": 19,
              "sugar": 8
            } 
        },
        {
            "type": "diary_meal",
            "date": "2014-05-06",
            "diary_meal": "Lunch",
            "nutritional_contents": {
              "energy": { "unit": "calories", "value": 531 },
              "fat": 12,
              "protein": 25,
              "sugar": 9,
              "cholesterol": 125,
              "fiber": 6,
              "vitamin_a": 35,
              "vitamin_c": 40
            }
        }
      ] 
    }
    
**Example response body, ​type​ = diary_meal:**

    {
        "items": [ 
        {
            "type": "diary_meal",
            "date": "2014-05-06",
            "diary_meal": "Breakfast",
            "nutritional_contents": {
              "energy": { "unit": "calories", "value": 350 },
              "fat": 6.8,
              "protein": 19,
              "sugar": 8
            } 
        },
        {
            "type": "diary_meal",
            "date": "2014-05-06",
            "diary_meal": "Lunch",
            "nutritional_contents": {
              "energy": { "unit": "calories", "value": 531 },
              "fat": 12,
              "protein": 25,
              "sugar": 9,
              "cholesterol": 125,
              "fiber": 6,
              "vitamin_a": 35,
              "vitamin_c": 40
            } 
        }
        ] 
    }