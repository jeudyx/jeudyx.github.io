---
layout: mfp_documentation
title: MyFitnessPal Developer - Exercises GET
permalink: /docs-mpf/exercises-diary-get/
---

# Exercises

The following resource structure definition is relevant for this set of endpoints:

● [Exercise](appendix-data-structures-exercise.md)


## Resource

    GET ​/exercises/​:exerciseId
    
Required permission scope: ​**private-exercises**

Retrieves the exercise with the given identifier from the public database and, if the **m​fp-user-id** header contains a valid user id, the user's private exercises.


## Request query parameters

**Name** | **Description** | **Type** | **Required** | **Default Values**
 :--- | --- | --- | :---: | ---
 version | The version of the exercise being requested. If none is present, the current version is returned. | String | N | abc123qwerty
 
 
 ## Example response
 
     {
        "item": {
               "id": "zXKDV84eqnio8a4n",
               "version": "d980v43",
               "type": "cardio",
               "description": "Curling",
               "mets": 4,
               "public": true
         }
     }
