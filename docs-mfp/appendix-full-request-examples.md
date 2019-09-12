
---
layout: mfp_documentation
title: MyFitnessPal Developer - Appendix
permalink: /docs-mpf/appendix-full-request-examples/
---

# Full request and response examples

These examples are real requests and responses, with some data (such as Authorization tokens and user identifiers) modified. They are intended to illustrate the expected content of requests and responses. Some line breaks have been added for readability


## POST request and response

This request creates a Diary entry of type **exercise​**.

Request:

    POST https://api.myfitnesspal.com/v2/diary HTTP/1.1
       Host: api.myfitnesspal.com
       Content-Type: application/json
       Accept: application/json
       Accept-Encoding: gzip,deflate,sdch
       Accept-Language: en-US,en;q=0.8
       mfp-client-id: awesome_fitness_tracker
       mfp-user-id: 2320694511409
       Authorization: Bearer f4e5ab42081e485949ed3ea35cf3857s0ebd0a62
    {
        "items": [
           {
             "type": "exercise",
             "date": "2014-08-25",
             "exercise": {
               "id": "134026223316461"
              },
             "start_time": "2014-08-25T15:00:00-07:00",
             "duration": 1800,
             "energy": {
               "unit": "calories",
               "value": 210
             }
            } 
        ]
    }


Response:

    Location: /v2/diary/61a4152be5b1de6813ceea5546f5c099aea751b9c
    Content-Type: application/json; charset=utf-8
    Cache-Control: max-age=0, private, must-revalidate
    Connection: close
    {
        "items": 
        [
           {
             "id": "61a4152be5b1de6813ceea5546f5c099aea751b9c",
             "type": "exercise",
             "date": "2014-08-25",
             "exercise": {
               "id": "134026223316461"
             },
             "duration": 1800,
             "energy": {
               "unit": "calories",
               "value": 210
             },
             "start_time": "2014-08-25T22:00:00Z",
             "avg_heart_rate": null,
             "max_heart_rate": null,
             "distance": null,
             "max_speed": null,
             "elevation_change": null
           }
        ] 
    }   


## GET request and response
Request:

    GET https://api.myfitnesspal.com/v2/diary
              ?entry_date=2014-08-25
              &types=diary_meal,exercise
              &fields[]=nutritional_contents
              &fields[]=exercise
              &fields[]=energy
              HTTP/1.1
       Host: api.myfitnesspal.com
       Accept: application/json
       Accept-Encoding: gzip,deflate,sdch
       Accept-Language: en-US,en;q=0.8
       mfp-client-id: awesome_fitness_tracker
       mfp-user-id: 2320694511409
       Authorization: Bearer f4e5ab42081e485949ed3ea35cf3857s0ebd0a62

Response:

    Content-Type: application/json; charset=utf-8
    Cache-Control: max-age=0, private, must-revalidate
    Connection: close
    
    {
        "items": [
            {
              "type":"diary_meal",
              "date":"2014-08-25",
              "diary_meal":"Breakfast",
              "nutritional_contents": {
                "protein": 22.35,
                "fat": 25.72,
                "saturated_fat": 5.5,
                "polyunsaturated_fat": 9.08,
                "monounsaturated_fat": 8.79,
                "trans_fat": 0.0,
                "cholesterol": 420.44,
                "sodium": 945.06,
                "potassium": 454.4,
                "fiber": 9.01,
                "sugar": 26.26,
                "vitamin_a": 14.93,
                "vitamin_c": 10.58,
                "calcium": 10.31,
                "iron": 25.35,
                "carbohydrates": 49.72,
                "energy": {
                  "unit": "calories",
                  "value": 515
                }
            } 
        },
        {
          "type":"diary_meal",
          "date": "2014-08-25",
          "diary_meal": "Lunch",
          "nutritional_contents": {
            "protein": 30.71,
            "fat": 4.27,
            "saturated_fat": 1.5,
            "polyunsaturated_fat": 0.8,
            "monounsaturated_fat": 1.33,
            "trans_fat": 0.0,
            "cholesterol": 77.3,
            "sodium": 747.84,
            "potassium": 841.76,
            "fiber": 3.15,
            "sugar": 59.17,
            "vitamin_a": 1.1,
            "vitamin_c": 21.7,
            "calcium": 5.91,
            "iron": 8.12,
            "carbohydrates": 92.81,
            "energy": {
              "unit": "calories",
              "value": 526
            } 
        }
        }, 
        {
            "id": "61a4452be5b1db6813cdc85546f5c49eea7585bc",
            "type": "exercise",
            "date": "2014-08-25",
            "exercise": {
              "id": 134026223316461
            },
            "duration": 1800,
            "energy": {
              "unit": "calories",
              "value": 210
            },
            "start_time": "2014-08-25T22: 00: 00Z",
            "avg_heart_rate": null,
            "max_heart_rate": null,
            "distance": null,
            "max_speed": null,
            "elevation_change": null
          }
      ]
    }      
