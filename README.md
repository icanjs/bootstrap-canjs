# bootstrap-canjs

[![Build Status](https://travis-ci.org/icanjs/bootstrap-canjs.png?branch=master)](https://travis-ci.org/icanjs/bootstrap-canjs)

CanJS component wrapper around Tw Bootstrap JS components

## Usage

### Component use

You can import individual components. E.g. to use Bootstrap's modal do:

```html
<can-import from="bootstrap/dist/css/bootstrap.css" />
<can-import from="bootstrap-canjs/src/modal/" />

<!-- Place `bootstrap-modal` in a top-level position in your document. -->
<bootstrap-modal></bootstrap-modal>

<!-- Use `bootstrap-modal-content` whenever you want in your app. -->
<!-- Once its rendered it will be shown within bootstrap-modal. -->
<button ($click)="openMyModal()">Open my modal</button>
{{#if isOpened}}
  <bootstrap-modal-content>
    <div class="modal-header">
      <button ($click)="close()">close</button>
      <h4 class="modal-title">Modal title</h4>
    </div>
    <div class="modal-body">
      <p>One fine body</p>
    </div>
  </bootstrap-modal-content>
{{/if}}
```

### CommonJS use

Use `require` to load `bootstrap-canjs` and everything else
needed to create a template that uses `bootstrap-canjs`:

```js
var plugin = require("bootstrap-canjs");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/bootstrap-canjs/dist/global/bootstrap-canjs.js'></script>
```

### Release Notes

- v0.0.1:
  - Added `bootstrap-modal` and `bootstrap-modal-content` components.
