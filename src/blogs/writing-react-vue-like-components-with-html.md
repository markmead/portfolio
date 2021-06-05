---
title: Writing React/Vue Like Components with HTML
description: Want to write React/Vue like components but with HTML? Thanks to the
  Fetch API, this is now possible.
path: fetchtml-react-vue-components-html

---
I recently had a thought...

> How can I write React/Vue like components but in HTML?

All I wanted was a way to write HTML like this:

    <div data-render="card" data-title="Card" data-text="Component"></div>
    <div data-render="card" data-title="Another Card" data-text="Component"></div>

Seems doable, it's basic HTML with data attributes and copies the React/Vue like component rendering with props.

Thanks to the recent development on my product; [HyperUI: Components for Tailwind CSS](https://www.hyperui.dev/ "Tailwind CSS components for sale") I came across a way to do this.

All we need is Fetch API, some data attributes and a HTML file.

## Fetch API

We use this to get the HTML from the HTML file as text.

## Data Attributes

How we pass data to the component.

## HTML File

This will be our component. An example would look like this:

    <a href="{{href}}">
      <h5>{{title}}</h5>
      <p>{{text}}</p>
    </a>

Notice the React/Vue like `{{prop}}` these values map to the value pass from the HTML with the `data-render` attribute.

## Enter Fetchtml

The code for this functionality is tiny, it's > 5kb unpacked.

Here is the function that powers all of it:

    function render(type, url) {
      const els = [...document.querySelectorAll(`[data-render=${type}]`)]
    
      for (const el of els) {
        const data = el.dataset
    
        fetch(url, {
          method: 'get',
        })
          .then((res) => res.text())
          .then((html) => {
            const keys = Object.keys(data)
    
            for (const key of keys) {
              html = html.replace(`{{${key}}}`, data[key])
            }
    
            el.innerHTML = html
          })
      }
    }

Which we then call with:

    render('card', 'card.html')

You can find out more about Fetchtml and find out how to use it on the [GitHub repo](https://github.com/markmead/fetchtml "Fetchtml GitHub repository").