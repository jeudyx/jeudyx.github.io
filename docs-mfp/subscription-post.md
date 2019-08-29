---
layout: mfp_documentation
title: MyFitnessPal Developer - Subscription POST
permalink: /docs-mpf/subscription-post/
---

# Subscription Management

The process of setting up a partner client to receive subscription updates will include configuration of the URL to which notifications should be sent (via HTTP POST), as well as configuration of the types of items for which the client wishes to receive notifications.
The types of items that may be subscribed to are:

**Name** | **Description** 
 :--- | --- 
 diary_meal | Receive a notification when the user creates a food diary entry
 diary_exercise | Receive a notification when the user creates an exercise diary entry
 diary_steps | Receive a notification when the user’s daily step tracking is updated
 measurements | Receive a notification when the user creates a supported measurement, e.g., weight
 user_info | Receive a notification when the user updates relevant profile or account information
 
 More item types may be added as features evolve.
 
    POST ​/subscriptions
    
Required permission scope: ​**subscriptions**

Creates one or more subscriptions to item updates by the user identified by the value of the **mfp-user-id​** header for the client identified by the value of the **m​fp-client-id​** header.

## Request

The request body must be empty. (This means that subscriptions to all content types will be created.)

## Response

A successful response will include:

    ● a ​Location​ header with the URI of the first newly­created subscription
    ● a list of all the newly­created subscriptions, as they would be returned by a GET request.