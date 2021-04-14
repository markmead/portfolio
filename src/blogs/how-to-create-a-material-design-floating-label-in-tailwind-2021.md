---
title: How to Create a Material Design Floating Label in Tailwind [2021]
description: Learn how to create the famous floating label effect found in Material
  Design by Google in Tailwind.
path: how-to-create-a-material-design-floating-label-in-tailwind

---
[**Jump straight to the Tailwind Play example**](https://play.tailwindcss.com/3unp9RIMe4?file=config "Tailwind Play example of a Material Design floating label in Tailwind")

If you are unaware of a Material Design floating label you can take a look at an example on the Material Design website; [floating label on text input example](https://material-components.github.io/material-components-web-catalog/#/component/text-field "Material Design floating label example").

For a label to be a floating label it needs to fulfill a set of criteria:

* Be placed inside the input
* Move away from the text when the input is focused
* Move away from the text when the input has a value

Tailwind currently can only handle the first one out of the box, but I stumbled across [this Stack Overflow answer](https://stackoverflow.com/a/65321069 "StackOverflow answer for Tailwind focused sibling") when attempting to implement a floating label on a client website.

For the last one, I leaned on `:placeholder-shown` and created a Tailwind plugin that checks for `:not(:placeholder-shown)`.

    const notEmptySiblingPlugin = plugin(function ({ addVariant }) {
      addVariant('not-empty-sibling', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `:not(:placeholder-shown) + .not-empty-sibling\\:${rule.selector.slice(1)}`
        })
      })
    })

This works perfectly but sadly `:placeholder-shown` isn't [fully supported](https://caniuse.com/?search=placeholder-shown "Check on caniuse for placeholder-shown CSS").

It also requires the use of the `placeholder=""` attribute on your `input` to either be empty or use the Tailwind class `placeholder-transparent` which is what I have opted for in my example.

If you're not a fan of this approach I'd recommend combining the first custom plugin `focusedSibling` and using JavaScript, here's how I have achieved this effect in the past with [Alpine](https://github.com/alpinejs/alpine "Alpine JS GitHub repository").

    <div class="relative" x-data="{ value: '' }>
    	<input type="text" id="name" x-model="value" />
    	<label for="name" :class="{ '-translate-y-12': value, '-translate-y-1/2': !value }" class="focused-sibling:-translate-y-12 absolute top-1/2 left-2 transform transition-transform">Name</label>
    </div>

If you are working with [Vue](https://github.com/vuejs/vue "Vue JS GitHub repository"), this markup is easily transferable if you decide to not go the full Tailwind CSS route.