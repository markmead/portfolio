---
description: There's a lot of classes in Tailwind but the one you will be writing
  the most is container. Learn the best way of setting up this class to write better
  Tailwind code, faster.
path: the-best-setup-for-the-container-class-in-tailwind
title: The Best Setup for the `container` Class in Tailwind [2021]

---
All CSS frameworks have the `.container` class, it's the most efficient way of setting a default `max-width` for your content.

In Bootstrap it's as simple as writing `.container` but in Tailwind, you'd have to write something like `container mx-auto px-4 sm:px-6 lg:px-8`. This is not efficient and will cause more clutter in your HTML.

There's an easy solution for this and it's all done through the `talwind.config.js` file.

    module.exports = {
      theme: {
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '1.5rem',
            lg: '2rem',
          },
        },
        extend: {},
      },
      variants: {},
      plugins: [],
    }

As you can see, we are overriding the `container` object which is found within the `theme` object. In there we've set some important values;

* `center: true` this will remove the need of the `mx-auto` class
* `padding: {}` this has been set as an object with a `DEFAULT` and breakpoint values but you can use a string instead; `padding: '1rem'`

If you do set `padding` as an object, you need to use `DEFAULT` to set the value for sizes below the breakpoints set. In this example `1rem` will be used up to the `sm` breakpoint.

You can take a look at this setup in [this example](https://play.tailwindcss.com/613aNBVMzD?layout=horizontal&size=2220x720&file=config "Tailwind container setup example") I setup on [play.tailwindcss](https://play.tailwindcss.com/ "Tailwind sandbox website").