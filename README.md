# ifo-od

Tired of using the regular plain `if..else` without functions and callbacks? Well, look no more! Here is the Ifo-Od, a FP-oriented Javascript tool that does the job of conditional checking for you. You will never need to code simple-minded imperative `if` structures anymore!

## Usage

```javascript
import ifo from 'ifo-od';

let score = 85;   // -> Good score

ifo(() => score < 40, () => {
    console.log('Bad score');
  })
  .od(() => score < 70, () => {
    console.log('Regular score');
  })
  .od(() => score < 90, () => {
    console.log('Good score');
  })
  .od(() => {
    console.log('Great score!');
  });
```

## Features

* You won't use `if`s again!
* Use callbacks instead!
* Functional program the hell out of your application!
* Transforms your public repository into a private repository! _(since no one will be able to read it)_

## Warning

For those who still consider using ifo-od, don't. This is a joke and you shoudn't use this. I really mean it.