---
layout: mfp_documentation
title: MyFitnessPal Developer - Supported Data Formats
permalink: /docs-mpf/supported-data-formats/
---

# Supported Data Formats

All endpoints will support requests and responses using the following data format:

    ● application/json

To this end, all requests must include an **Accept**​ header indicating the data format the client expects to see in 
responses. It is recommended that clients supply the header as follows:

    Accept: application/json

Properties with an indicated type of **​List(String)**​ are represented in request and response bodies as JavaScript arrays:
      
    [ "a value", "another value", "a third value" ]