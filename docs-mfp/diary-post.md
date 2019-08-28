---
layout: mfp_documentation
title: MyFitnessPal Developer - Diary - POST
permalink: /docs-mpf/diary-post/
---

# Diary POST

Required permission scope: ​diary

Creates one or more diary entries for the user identified by the value of the **mfp-user-id​** header. Clients may create diary entries of with types ​steps​ and ​exercise​.

## Request body

The request body is a representation of an array of diary entries. When creating ​exercise​ diary entries, clients need provide only the ​id​ property of each exercise being logged. Additionally, clients may provide a value for the ​version​ property of each exercise being logged; if no v​ ersion is provided, the most recent version will be used. (In most instances, clients will be interested only in the most recent version of an exercise, and so they may opt to exclude the ​version property.)

##Properties common to all diary types

**Name** | **Type** | **Required** 
 --- | --- | --- 
 type | String | Y
 date | Date | Y
 id* | String | N
 
 \*Clients may specify a unique identifier for a diary entry, subject to server acceptance. In most cases, however, it is advised that clients let the server assign the identifier.
 
 In addition to the common properties, diary entries of different types require different properties. Each type's property breakdown is described in the following sections.
 For descriptions of each field, see the ​[Diary data structure definition](appendix-data-structures-diary.md).​
 
 ## Properties, type = exercise
 
**Name** | **Type** | **Required for Cardio Exercises** | **Required for Strength Exercises**
 --- | --- | :---: | :---:
 exercise | [Exercise](appendix-data-structures-exercise.md) | Y | Y
 duration | Integer | Y | Y
 energy | [Measured Value](appendix-data-structures-measured-value.md) | Y | Y
 start_time | Timestamp | N | N
 tags | List (String) | N | N
 quantity[deprecated] | Integer | N | N
 sets | Integer | N | Y
 reps_per_set | Integer | N | Y
 weight_per_set | [Measured Value](appendix-data-structures-measured-value.md) | N | Y
 distance | [Measured Value](appendix-data-structures-measured-value.md) | N | N
 max_speed | [Measured Value](appendix-data-structures-measured-value.md) | N | N
 avg_heart_rate | Integer | N | N
 max_heart_rate | Integer | N | N
 elevation_change | [Measured Value](appendix-data-structures-measured-value.md) | N | N
 
 Different kinds of exercises will use different properties. A diary entry for a cardio exercise, for instance, is likely to contain one or more of these properties:
 
     ● distance
     ● max_speed
     ● avg_heart_rate
     ● max_heart_rate 
     ● elevation_change
 
 A diary entry for a strength exercise, however, must contain these properties:
 
     ● sets
     ● reps_per_set
     ● weight_per_set
 
 Exercises are user­generated content, and as such may change over time. In order to ensure that a logged exercise entry remains consistent, a diary entry is associated with a specific version of an exercise, even if that exercise is subsequently modified, perhaps to reflect more accurate energy expenditure. (To log the most recent version of an exercise, simply omit the version​ property. The version linked will be included in the response.)
 
 ##Properties, type = steps
 
 **Name** | **Type** | **Required** | **Default Value**
  --- | --- | --- | ---
  steps | Integer | Y | N/A
  start_time | Timestamp | Y | N/A
  duration | Integer | Y | N/A
  energy | [Measured Value](appendix-data-structures-measured-value.md) | Y | N/A

Entries with type ​**steps**​ are automatically grouped into daily aggregates, allowing clients to provide their users with fine­grained step and calorie tracking in a way that ensures energy expenditure will not be double­counted.

For a detailed description of ​steps ​usage,see the [A​ppendix](appendix-tracking-recommended-approach.md).​

## Example 1a: creating an exercise entry
    {
        "items": [
          {
            "type": "exercise",
            "date": "2014-05-06",
            "start_time": "2014-05-06T08:30:05-07:00",
            "duration": 2700,
            "energy": {
              "unit": "calories",
              "value": 500
            },
              "exercise": {
                "id": "b95n9898878f4"
              },
              "sets": 3,
              "reps_per_set": 10,
              "weight_per_set": {
                "unit": "pounds",
                "value": 55 
              }
          } 
      ]
    }
    
## Example 1b: creating an exercise entry for a specific version of an exercise

    {
        "items": [
          {
            "type": "exercise",
            "date": "2014-05-06",
            "start_time": "2014-05-06T08:30:05-07:00",
            "duration": 2700,
            "energy": {
              "unit": "calories",
              "value": 500
            },
            "exercise": {
              "id": "b95n9898878f4",
              "version": "894ngor84he93h84hvs7r"
            },
            "sets": 3,
            "reps_per_set": 10,
            "weight_per_set": {
              "unit": "pounds",
            "value": 55 
            }
        } 
      ]
    }

## Example 1c: creating multiple exercise entries

    {
        "items": [
          {
            "type": "exercise",
            "date": "2014-08-25",
            "start_time": "2014-08-25T18:30:00-04:00",
            "duration": 3300,
            "energy": {
              "unit": "calories",
              "value": 834
           },
            "exercise": {
              "id": "133753379654973"
            } 
           },
           {
            "type": "exercise",
            "date": "2014-08-25",
            "start_time": "2014-08-25T06:30:00-04:00",
            "duration": 2700,
            "energy": {
              "unit": "calories",
              "value": 169
            },
            "exercise": {
              "id": "133751232154941"
              } 
            }
        ]
    }
    
## Example 2: creating steps entries

    {
        "items": [
          {
            "type": "steps",
            "date": "2014-07-15",
            "steps": 580,
            "start_time": "2014-07-15T00:00:00+03:00",
            "duration": 300,
            "energy": {
              "unit": "kilojoules",
              "value": 121
            }
        }, 
        {
            "type": "steps",
            "date": "2014-07-15",
            "steps": 589,
            "start_time": "2014-07-15T00:05:00+03:00",
            "duration": 300,
            "energy": {
                "unit": "kilojoules",
                "value": 126
            }
        } 
      ]
    }
    
## Response

Since a request may create multiple Diary entry resources, a success response will include:

● a ​**Location**​ header with the URI of the first entry created

● a list of all new diary entries created, as they would be returned by a GET request, including all properties that may be specified via the **​fields**​ parameter.