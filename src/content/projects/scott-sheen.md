---
brand: Scott Sheen & Partners
description: A family run, independent Estate Agent with over forty years’ experience within the industry. Scott Sheen & Partners specialise in all aspects of Sale and Letting of Residential property locally in North Essex.
path: scott-sheen
tech: ['Adobe XD', 'Alpine', 'Alto', 'AWS', 'Heroku', 'Postgres', 'Ruby on Rails', 'Spina', 'Stimulus', 'Tailwind']
title: Leading Estate Agency in the Tendring Area
website: https://www.scottsheenandpartners.co.uk/
---

## What is Scott Sheen & Partners?

Scott Sheen is an estate agent based in North Essex, specialising in all aspects of sale and letting of residential property.

## How Does it Work?

The properies are managed on Alto, a property management tool that exposes properties and branches through an XML API.

We've used an open source API wrapper for Alto that we've updated and are now managing through a GitHub fork. This API wrapper (Vebra) allows the XML to be easily converted into database records, this makes them much easier to work with in Rails, and allows easy `ActiveRecord` queries.

The content of the site is managed with Spina, and the frontend is built with Alpine and Tailwind.
