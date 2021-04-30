---
title: Better Ways to Write `@apply` in Tailwind [2021]
description: Learn how to write better Tailwind in a CSS file with `@apply` without
  it becoming unreadable and with it feeling more like native CSS.
path: better-ways-to-write-apply-in-tailwind

---
When using Tailwind you might reach a point where you need to write Tailwind in a CSS file.

I typically reach this point when I have a component that is used in multiple places, ideally, you want to extract that component into its own file but that's not always the solution.

Thankfully, if you do need to write Tailwind in a CSS file you have two options;

**`theme()`**

    .button-theme {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: theme("spacing.3") theme("spacing.6");
      font-size: theme("fontSize.sm");
      font-weight: theme("fontWeight.semibold");
      letter-spacing: theme("letterSpacing.wider");
      text-transform: uppercase;
      border-radius: theme("borderRadius.lg");
    }

**`@apply`**

    .button-apply {
      @apply inline-flex justify-center items-center px-6 py-3 text-sm font-semibold tracking-wider uppercase rounded-lg;
    }

As you can see using `theme()` leads to cleaner, easier to read CSS.

**But what if you want to use `@apply` as it's faster and uses the same Tailwind class names you'd use in an HTML file?**

Once again, there are two options;

**Multiple `@apply`**

    .button-apply-multiple {
      @apply inline-flex justify-center items-center;
      @apply px-6 py-3;
      @apply text-sm font-semibold tracking-wider uppercase;
      @apply rounded-lg;
    }

**Stacked `@apply`**

    .button-apply-stacked {
      @apply 
        inline-flex justify-center items-center 
        px-6 py-3 
        text-sm font-semibold tracking-wider uppercase 
        rounded-lg;
    }

Both of these are good options and it's a purely personal preference.

I'd recommend following the pattern I have used of grouping relevant Tailwind class names onto individual lines;

* **display** `inline-flex justify-center items-center`
* **spacing** `px-6 py-3`
* **font** `text-sm font-semibold tracking-wider uppercase`
* **style** `rounded-lg`

Following this pattern will keep your `@apply` uses clean and easy to read.

Here's an example of using [Tailwind in CSS files](https://play.tailwindcss.com/yr2sDQF469?file=css "Tailwind in CSS files example")