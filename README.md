# @spudly/curry

Creates a curried function.

# Installation

```bash
npm install --save @spudly/curry
```

# Usage

```js
import curry from '@spudly/curry';

const add = curry((a, b, c) => a + b + c);
curriedAdd(1, 2, 3); // => 6
curriedAdd(1, 2)(3); // => 6
curriedAdd(1)(2, 3); // => 6
curriedAdd(1)(2)(3); // => 6
```
