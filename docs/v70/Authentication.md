---
layout: documentation
title: API Authentication Overview
permalink: /docs/v70_Authentication/
---

# Under Armour API Authentication Overview

## Authentication Protocols

Under Armour supports the industry standard OAuth 2 protocols for authentication. We recommend using [OAuth 2](https://tools.ietf.org/html/rfc6749), as it is simpler for the client developer to implement and supports all use cases.

## A word about supported application types

The Under Armour Connected Fitness Platform only supports OAuth 2 via authorization grant and client credentials. Because of this, any application that cannot protect its consumer key/secret pair is not supported. Notably, this includes browser-based applications (e.g. "single-page apps"). For these kinds of applications, we recommend that a server-side component handle any communication with the Under Armour API.

Under Armour cannot enforce the security of your application, and we reserve the right to shut off API access for any clients deemed to be operating insecurely.

## Adding Under Armour branding to your application

If you're having users connect your application with their Under Armour accounts, you are required to use the following images for the log in button:

![xlarge logo](//developer-ua.mapmyfitness.com.s3.amazonaws.com/assets/login_buttons/UA-login_btn-xlarge.png)
![large logo](//developer-ua.mapmyfitness.com.s3.amazonaws.com/assets/login_buttons/UA-login_btn-large.png)
![medium loglo](//developer-ua.mapmyfitness.com.s3.amazonaws.com/assets/login_buttons/UA-login_btn-medium.png)
