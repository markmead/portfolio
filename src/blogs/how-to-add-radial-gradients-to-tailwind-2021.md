---
title: How to Add Radial Gradients to Tailwind [2021]
description: Currently, you cannot use radial gradients in Tailwind but that all changes
  with a few lines of code in the config.
path: add-radial-gradients-tailwind

---
Currently, you cannot add radial gradients to Tailwind and it's not something they are looking to add anytime soon.

So how do you add radial gradients to Tailwind?

It's very simple...

And the following to your `tailwind.config.js` file:

    backgroundImage: {
      'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
      'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
      'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
      'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
      'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
      'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
    },

And that's it...

Now you can reference classes like `bg-gradient-radial-at-l from-fuchsia-300 via-green-400 to-rose-700`

It can be seen in action on [Hypercolor](https://hypercolor.dev/ "Hypercolor website")