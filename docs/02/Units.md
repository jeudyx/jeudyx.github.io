---
layout: documentation
title: Units
permalink: /docs/02_Units/
---

# Units

Our API has standardized on specific units of measurement that will be used for all endpoints. You should always expect field values of that measurement type to be the unit specified below.

| Measurement Type|Unit Value |
| ----------------|----------|
| Distance        |meters |
| Speed           |meters/second |
| Elevation       |meters |
| Energy          |Joules |
| Angle (earth)   |degrees |
| Heart Rate      |beats/minute |
| Cadence         |revolutions/minute |
| Power           |watts |
| Temperature     |celcius |
| Date-Time       |ISO 8601 formatted string *YYYY-MM-DDThh:mm:ssZ*. [RFC-3339] |


[RFC-3339]: http://tools.ietf.org/html/rfc3339
