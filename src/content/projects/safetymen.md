---
title: Modernising an industry leader and simplifying their workflow
brand: Safetymen
website: https://www.safetymen.co.uk/
description: Crafting an admin system to enable easier course management for the client.
path: safetymen
tech: ['Ruby on Rails', 'StimulusJS', 'Tailwind', 'Devise', 'RSpec']
---

## Challenge

Improve the experience of courses management, and create a more pleasing user experience.

## Solution

- Build out a CRUD app with Ruby on Rails for courses
- Create a custom admin area to manage courses
- Implement Stripe payment and courses booking for customers
- Add autofill search where courses have multiple search terms

## Product

![Home](../images/safetymen/home.png)
Shows upcoming courses that are bookable above the fold.

![Search](../images/safetymen/search.png)
Custom search implemented with [StimulusJS](https://stimulusjs.org/) with JSON data supplied from Rails.

![Course](../images/safetymen/course.png)
Individual course page that gives more information about the course, and shows bookable dates for the course, or related courses available.

![Admin](../images/safetymen/admin.png)
An admin dasboard to manage courses, news and bookable courses (events).

![Admin courses](../images/safetymen/admin-courses.png)
Courses view in the admin dashboard with pagination, category filtering and search.

![Admin course](../images/safetymen/admin-course.png)
Individual course form with a WSYIWYG editor built from [Trix](https://trix-editor.org/).
