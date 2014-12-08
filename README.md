# $.fn.debounceSubmit

## About

**Prevent multiple form submits with jQuery**

After a form is submitted, this plugin will disable it for 750 milliseconds to prevent duplicate form submits. After the 750 millisecond wait the form will be re-enabled (This is important if some one use "Esc" to stop a form submit from completing)

**debounce**
[dee-bouns] describes rate-limiting or throttling the frequency of a method's execution.

**debounceSubmit**
[*dee* bouns *suh* b-mit] limits a form-submit from occuring if the form has tried to be submitted in the past *N* milliseconds


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

[![Before Submit Once](/assets/example-before.gif)](http://recordit.co/hfOQiNORbn)

### After

[![After Submit Once](/assets/example-after.gif)](http://recordit.co/0Nf8XElNpX)