---
brand: Mercy Delta
description: Iconic prints from an independent luxury brand, producing small sustainable collections that suit every woman, and can be worn year after year.
featured: true
path: mercy-delta
show: true
tech:
  [
    'Adobe XD',
    'AWS',
    'Heroku',
    'Klarna',
    'Postgres',
    'Redis',
    'Ruby on Rails',
    'Solidus',
    'Stimulus',
    'Stripe',
    'Tailwind',
  ]
title: Statement Prints from Day to Night
website: https://www.therunbox.co.uk/
---

## What is Mercy Delta?

Mercy Delta are a luxury womenswear label, specialising in statement prints you can wear both day and night.

## How Does it Work?

The website is a built upon Solidus, an open-source Rails eCommerce framework. The choice of Solidus over Shopify came down to the additional requirements of the website, as most of these requirements were already created for Solidus, thanks to it being open-source.

There's two payment options; card (which is handled by Stripe) and Klarna. Additionally, users can wishlist items to then purchase later.

The backend of the website is Rails with all the product and content management being handled in Solidus' admin interface. The frontend is built with Stimulus and Tailwind.
