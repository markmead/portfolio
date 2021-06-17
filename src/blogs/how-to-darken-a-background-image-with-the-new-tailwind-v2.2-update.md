---
title: How to Darken a Background Image with the New Tailwind v2.2 Update
description: In the past you had to darken background images with either custom CSS,
  or an extra element. That's in the past now Tailwind v2.2 is here!
path: darken-background-image-with-tailwind-2-2

---
Before Tailwind v2.2 you would have to do the following to darken a background image:

    <section class="relative" style="background-image: url(https://images.unsplash.com/photo-1623929147463-fb46e69f0f05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80)">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
      <div class="container mx-auto py-48 relative">
        <h1 class="text-white text-5xl font-bold text-center">Hello</h1>
      </div>
    </section>

[Tailwind Play Example](https://play.tailwindcss.com/Pe9cWr9dFW "Example of code above")

This works fine but it does require an extra HTML element, usually a `div` 👎

But in Tailwind v2.2 you can do the following thanks to the new `before` and `after` psuedo variants:

    <section class="relative before:absolute before:inset-0 before:bg-black/50" style="background-image: url(https://images.unsplash.com/photo-1623929147463-fb46e69f0f05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80)">
      <div class="container mx-auto py-48 relative">
        <h1 class="text-white text-5xl text-center">Hello</h1>
      </div>
    </section>

[Tailwind Play Example](https://play.tailwindcss.com/nja7heWlTQ "Example of the code above")

Much cleaner!

This example also makes use of the new and improved color opacity syntax replacing `bg-black bg-opacity-50` with `bg-black/50`.

Read up on the full list of changes on the Tailwind CSS webite:

[Tailwind v2.2](https://blog.tailwindcss.com/tailwindcss-2-2 "Blog post describing the new Tailwind v2.2 update")