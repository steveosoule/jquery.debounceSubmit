# $.fn.debounceSubmit

### jQuery plugin to stop double-clicks from submitting forms multiple times.

## Description

After a form is submitted, this plugin will disable it for 750 milliseconds to prevent duplicate form submits. After the 750 millisecond wait the form will be re-enabled (This is important if some one uses "Esc" to stop a form submit from completing)

<!-- **debounce**
[dee-bouns] describes rate-limiting or throttling the frequency of a method's execution.

**debounceSubmit**
[*dee* bouns *suh* b-mit] limits a form-submit from occuring if the form has attempted to be submitted in the past *N* milliseconds -->

## Example Usage

```
$('form').debounceSubmit(); // Applies to all forms
$('#payment-form').debounceSubmit(); // Applies to #payment-form
$('#another-payment-form').debounceSubmit({
  wait: 500
});
```

## Options

* **wait**: (_Number_, Default: `750`) The amount of time (in milliseconds) between when the form is disabled and when it is re-enabled
* **debug**: (_Boolean_, Default: `false`) Enable/Disable console.logs() for submit handler being enabled, disabled, & prevented

## Real Life Example

### Before

Clicking the submit button multiple times causes the form to make several partial/canceled requests to the server that result in a tax calculation error during checkout
[![Before Submit Once](/assets/example-before.gif)](http://recordit.co/hfOQiNORbn)

### After

Clicking the submit button multiple times only allows one successfull submit to happen
[![After Submit Once](/assets/example-after.gif)](http://recordit.co/0Nf8XElNpX)