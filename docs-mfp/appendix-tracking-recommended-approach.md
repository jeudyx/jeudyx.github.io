---
layout: mfp_documentation
title: MyFitnessPal Developer - Appendix
permalink: /docs-mpf/appendix-tracking-recommended-approach/
---

# Recommended approach for tracking steps

Accurate energy expenditure for step tracking is best achieved by creating **​steps**​ entries at relatively fine­grained intervals. We recommend an interval of five minutes.

Because each entry contains the start time and duration, entries need not be transmitted every five minutes; clients may create and transmit them as network and connectivity conditions permit.


## Example 1: Request body to create a single steps entry

    {
        "items": 
        [
           {
             "type": "steps",
             "date": "2014-09-01",
             "steps": 580,
             "start_time": "2014-09-01T00:00:00-07:00",
             "duration": 300,
             "energy": 
             {
                "unit": "calories",
                "value": 27
             } 
           }
        ] 
    }
    

## Example 2: Request body to create multiple steps entries with a single request

    {
        "items": 
        [
           {
             "type": "steps",
             "date": "2014-09-01",
             "steps": 580,
             "start_time": "2014-09-01T00:00:00-07:00",
             "duration": 300,
             "energy": {
               "unit": "calories",
                "value": 27 
             }
           }, 
           {
             "type": "steps",
             "date": "2014-09-01",
             "steps": 564,
             "start_time": "2014-09-01T00:05:00-07:00",
             "duration": 300,
             "energy": {
               "unit": "calories",
               "value": 25 
             }
           }, 
           {
             "type": "steps",
             "date": "2014-09-01",
             "steps": 670,
             "start_time": "2014-09-01T00:10:00-07:00",
             "duration": 300,
             "energy": {
               "unit": "calories",
               "value": 42 
             }
           } 
        ]
    }