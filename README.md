# @spudly/curry

Creates a curried function.

<!-- config-config:badges-start -->
<!-- prettier-ignore-start -->
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/spudly/curry/build?style=flat-square)
[![Codecov](https://img.shields.io/codecov/c/github/spudly/curry?style=flat-square)](https://codecov.io/gh/spudly/curry)
[![version](https://img.shields.io/npm/v/@spudly/curry.svg?style=flat-square)](https://www.npmjs.com/package/@spudly/curry)
[![downloads](https://img.shields.io/npm/dm/@spudly/curry.svg?style=flat-square)](http://www.npmtrends.com/@spudly/curry)
[![NPM](https://img.shields.io/npm/l/@spudly/curry?style=flat-square)](https://github.com/spudly/curry/blob/master/LICENSE.md)

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/spudly/curry/blob/master/CODE_OF_CONDUCT.md)

[![Watch on GitHub](https://img.shields.io/github/watchers/spudly/curry.svg?style=social)](https://github.com/spudly/curry/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/spudly/curry.svg?style=social)](https://github.com/spudly/curry/stargazers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/spudly/curry.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20curry%20https%3A%2F%2Fgithub.com%2Fspudly%2Fcurry)
<!-- prettier-ignore-end -->

<!-- config-config:badges-end -->

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
