---
layout: mfp_documentation
title: MyFitnessPal Developer - Appendix
permalink: /docs-mpf/appendix-tracking-determining-daily-totals/
---

# Determining daily totals

Clients may retrieve a user's total daily energy intake and expenditure by requesting all diary entries for the day. As indicated in the documentation of [G​ET /v2/diary](diary-get.md)​, the default value of the **types**​ query parameter is ​**diary_meal,exercise,steps_aggregate**.​ The response to such a request would include all energy intake via food (in each ​**diary_meal**​ entry) as well as energy expenditure via the ​**steps_aggregate**​ entry/entries and any **​exercise​** entries logged for the day, regardless of the method by which the entries were logged.


## Example request URI

Line breaks added for readability:

    GET /v2/diary?entry_date=2014-09-01
                 &fields[]=energy
                 &fields[]=nutritional_contents
                 &fields[]=exercise
 
 
 ## Example response body
 
     {
        "items": 
        [
            {
              "type": "diary_meal",
              "date": "2014-09-01",
              "diary_meal": "Breakfast",
              "nutritional_contents": {
                "energy": {
                  "unit": "calories",
                  "value": 350
                },
                "fat": 6.8,
                "carbohydrates": 38,
                "protein": 19,
                "sugar": 8
              } 
            },
            {
              "type": "diary_meal",
              "date": "2014-09-01",
              "diary_meal": "Lunch",
              "nutritional_contents": {
                "energy": {
                  "unit": "calories",
                  "value": 531
                },
                "fat": 12,
                "carbohydrates": 75,
                "protein": 25,
                "sugar": 9,
                "cholesterol": 125,
                "fiber": 6,
                "vitamin_a": 35,
                "vitamin_c": 40
              } 
            },
            {
              "type": "exercise",
              "id": "vcxo4nb95ntfso84nEVIVUDn3f8ndf",
              "date": "2014-09-01",
              "start_time": "2014-09-01T12:05:00Z",
              "duration": 1800,
              "energy": {
                "unit": "calories",
                "value": 500
              },
              "exercise": {
                 "id": "909837568192837594",
                 "type": "cardio",
                 "description": "Running, 6.5mph",
                 "mets": 4,
                 "public": true
              } 
            },
            {
              "type": "steps_aggregate",
              "id": "c84bcfc2bf301397e0e2486b2d2f94fc1b313b67",
              "date": "2014-09-01",
              "steps": 12312,
               "energy": {
                 "unit": "calories",
                 "value": 1535
               },
             "primary": true
           }
        ] 
}