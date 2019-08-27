---
layout: mfp_documentation
title: MyFitnessPal Developer - Response Body
permalink: /docs-mpf/response-body/
---

# Response Body

When a successful response has a nonempty body, regardless of request method, it shall be a representation of one or more resources, wrapped in an object with a key of **​item**​ (for single-resource responses) or **​items**​ (for one­or­more­resource responses).

## Example 1: a JSON representation of a single resource

    {
    "item": {
              "id": "qwerty123foo",
              "name": "An object name",
              "quantity": 42
            } 
    }
    
## Example 2: a JSON representation of a collection of resources

    {
    "items": [
              {
                "id": "qwerty123foo",
                "name": "An object name",
                "quantity": 42
              }, 
              {
                "id": "abc98sdf8",
                "name": "Another object name",
                "quantity": 17
              }, 
              {
                "id": "ld49bfh30vm549dr",
                "name": "A third object",
                "quantity": 9847
              } 
             ]   
    }