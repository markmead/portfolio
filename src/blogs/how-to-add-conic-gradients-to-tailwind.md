---
title: How to Add Conic Gradients to Tailwind [2021]
description: Currently, you cannot use conic gradients in Tailwind but that all changes
  with a few lines of code in the config.
path: add-conic-gradients-tailwind

---
## What is a conic gradient?

> conic-gradient() CSS function creates an image consisting of a gradient with color transitions rotated around a center point

So how do I add that to Tailwind? 

It's very simple...

And the following to your `tailwind.config.js` file:

    backgroundImage: {
      'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      'gradient-conic-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
      'gradient-conic-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
      'gradient-conic-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
      'gradient-conic-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
      'gradient-conic-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
      'gradient-conic-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
      'gradient-conic-br': 'conic-gradient(at bottom right, var(--tw-gradient-stops))',
      'gradient-conic-bl': 'conic-gradient(at bottom left, var(--tw-gradient-stops))',
    },

And that's it...

Now you can reference classes like `bg-gradient-conic-bl from-fuchsia-300 via-green-400 to-rose-700`

It can be seen in action on [Hypercolor](https://hypercolor.dev/ "Hypercolor website")