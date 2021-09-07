---
title: Truthy and Falsy values in JavaScript
author: Swastik Yadav
date: 2021-06-11
hero: ./banner.jpg
excerpt: Learn which are the only 6 falsy values in JavaScript.
---

Hello Everyone,

In this post we will explore the truthy and falsy values in JavaScript. This is going to be a very short to the point blog post. So, let's get started.

## Truthy and Falsy Values
- Any value that evaluates to **true** in **Boolean Context** is truthy value.

For instance
```js
console.log(Boolean("Hello World!"));
// true
```

- Any value that evaluates to **false** in **Boolean Context** is falsy value.

For instance
```js
console.log(Boolean(0));
// false
```

## The only 6 falsy values
There are only 6 falsy values. Everything else (other than these 6 values) evaluates to true in boolean context.

```
- ""
- 0
- false
```

The above 3 values are equal to each other.

```
- undefined
- null
```

The above 2 values [loosely equalls (==)](javascript-loose-equality-vs-strict-equality-check) to each other and nothing else.

```
- Nan
```

NaN is the only value that is not even equal to itself.

```js
console.log(NaN == NaN);
// false
```

----------------------------------

So, that's it for this post, I will see you in some other post. If you found this one helpful, do share it and join my newsletter below or [here](./subscribe).

Thank You!