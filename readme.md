# Modal

A lightweight library for simple modals.

## Get started

You can choose between using CDN or NPM.

### Using CDN

First off import JavaScript and CSS:

```html
<script src="https://cdn.jsdelivr.net/npm/@coronling/modal@1.0.0/dist/modal.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@coronling/modal@1.0.0/dist/modal.min.css">
```

Then you can initiate all modals on the page:
```html
<script>
    modal.modal();
</script>
```

### Using NPM

When using NPM you can import modal in your JavaScript module:

```js
import { modal } from "@coronling/modal";

modal();
```

SCSS:

```scss
@import "~@coronling/modal/scss/modal";
```

### Example

Now you are ready to create own modals, here is a simple example:

```html
<button data-modal-trigger="example">Open modal</button>

<div class="modal" data-modal="example">
    <div class="modal-content">
        Hello world
        <div class="modal-close" data-modal-close="example"></div>
    </div>
</div>
```

### Methods

#### modal()
Finds and initiates all modals on the page.

#### initializeModal(modalId)
Finds and initiates a single modal selected by data-modal with given modalId.
This method could be especially helpful when you dynamically append a modal to DOM.

```html
<button data-modal-trigger="example2">Open modal</button>

<div class="modal" data-modal="example2">
    <div class="modal-content">
        Hello world
        <div class="modal-close" data-modal-close="example2"></div>
    </div>
</div>
```

JS:

```
import { initializeModal } from "@coronling/modal";

initializeModal("example2");
```

Alternatively when you use script from CDN:

```js
modal.initializeModal("example2");
```