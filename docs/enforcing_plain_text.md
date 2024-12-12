---
id: enforcing_plain_text
title: Enforcing plain-text strings with the fbs API
sidebar_label: Enforcing plain-text strings
---

## TL;DR

- `fbs` is a specialized version of the `fbt` JS API to represent **only** translatable plain-text strings
  - It’s a subset of `fbt` since the latter can also represent rich text contents (like a mix of text and React components)
- Use `fbs` whenever you want to force the translated result to be a plain string.
  - This is typically useful for HTML attributes whose value can only be plain text strings (e.g. [ARIA description](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description))
- The translation process of `fbs` is the [same as with regular JS fbt strings](https://www.internalfb.com/intern/wiki/Getting-started-with-i--n/clientside-in/#how-do-i-make-sure-my-st)

## What is it?

- `fbs` represents a translatable plain-text string
  - It’s a subset of fbt which can also represent rich text contents (i.e. a mix of text and React components)
- `fbs` means something like "FB string", it’s not a true acronym. 😅

## How to use it?

- Use the `fbs()` functional API _(recommended)_
- All existing fbt constructs are supported. Just write `fbs` instead of `fbt`.
  - E.g. `<fbt:param>` and `<fbs:param>` work the same way.
  - See [examples in unit tests file](https://github.com/facebook/fbt/blob/09ad3546a2f02c53af4c031113989564872eba34/runtime/shared/__tests__/fbs-test.js)
  - **🚨 IMPORTANT: if you pass a non-stringish value to `<fbs:param>`, we'll end up throwing a JS exception on the client-side.**
- How to submit translation requests for it?
  - Please follow the same process as for the regular `fbt` strings

### Examples in React

```jsx
<>
  <fbs desc="some desc">Hello world!</fbs>
  <fbs desc="some desc">
    Hello{' '}
    <fbt:name name="name" gender={someGender}>
      {name}
    </fbt:name>
  </fbs>
  {fbs('Hello world!', 'description')} // you can use the functional style too
</>
```

### Examples in regular JS

```js
let myPlainTranslatedText = fbs('Hello world!', 'description');

myPlainTranslatedText = fbs(
  [
    'I have ',
    fbs.plural('a dream', count, {
      many: 'dreams',
      showCount: 'yes',
    }),
    '.',
  ],
  'desc',
);
// singular text = "I have a dream."
// plural text = "I have {number} dreams."

// make sure to call .toString() as close to the UI recipient as possible
document.title = myPlainTranslatedText.toString();
```
