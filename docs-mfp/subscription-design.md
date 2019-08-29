---
layout: mfp_documentation
title: MyFitnessPal Developer - Subscription Best Design Practices
permalink: /docs-mpf/subscription-design/
---

## Best Design Practices

A notification request may contain notifications about multiple items belonging to multiple users. In fact, a notification request may contain ​thousands​ of item notifications, so a receiving server must be designed to handle large HTTP POST requests.
It is strongly recommended that servers process the request contents asynchronously, so that the request may be acknowledged and the connection closed as quickly as possible. In this scenario, the suggested response code is **2​02 Accepted**.​