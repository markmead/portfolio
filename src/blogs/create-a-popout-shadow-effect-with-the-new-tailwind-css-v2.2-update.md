---
title: Create a Popout Shadow Effect with the New Tailwind CSS v2.2 Update
description: To create a popout shadow effect in in the past with Tailwind CSS you'd
  need additional elements, but not anymore with Tailwind v2.2.
path: popout-shadow-effect-with-tailwind-2-2

---
The popout shadow effect for buttons, inputs, links etc is a popular style.

So popular, I even use it as the featured button component on [HyperUI: Components for Tailwind CSS](https://www.hyperui.dev/components/buttons "Button components on HyperUI").

But to create this in Tailwind CSS required additional HTML elements inside which made your HTML cluttered.

**This is fixed in Tailwind v2.2.**

Here's an example of the old way:

    <a class="relative inline-block group" href="">
      <span class="absolute inset-0 transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
      <span class="relative inline-block px-8 py-3 bg-white border-2 border-black"> Hello there! 👋 </span>
    </a>

[Tailwind Play Example](https://play.tailwindcss.com/HnPMePFeCK "Example of the code above")

There's 2 additional `span` tags here and this way makes the shadow effect slightly offset, an example will follow of this will be linked at the bottom!

The new and improve way using the new **`before`** and **`after`** psuedo variants:

    <a href="" class="px-8 py-3 bg-white relative border-2 border-black inline-block after:absolute after:inset-0 after:translate-x-1 after:translate-y-1 after:bg-black after:-z-1 hover:after:translate-x-0 hover:after:translate-y-0">
      Hello there! 👋
    </a>

Better, right? The only issue is how long the `<a>` tag becomes, but that can be fixed with some HTML attribute stacking.

Another thing to mention was the use of `-z-1` which I had to add to the Tailwind config with the following:

    theme: {
      extend: {
        zIndex: {
          '-1': '-1',
        },
      },
    },

A small addition for much, much cleaner code!

As for the slight offset... Here's a replica of the example but in CodePen written with SCSS:

[CodePen Example with SCSS](https://codepen.io/markmead/pen/gOmErLy "Example of the code in this blog but without Tailwind")

If you compare the old Tailwind way, the new Tailwind v2.2 way and the CodePen SCSS example, you will see the new Tailwind v2.2 way and the CodePen SCSS example match. Whereas the old Tailwind way is slightly offset... Odd.