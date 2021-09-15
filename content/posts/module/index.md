---
title: Working with modules in JavaScript
author: Swastik Yadav
date: 2021-07-16
hero: ./banner.png
excerpt: Introduction to modules in JavaScript and export / import.
---

Hello Everyone,

In this post we will explore the modern way of using modules in JavaScript.

There are several ways to use modules in JavaScript:

- AMD: One of the most ancient module system.
- CommonJS: The module system created for Node.JS server.
- UMD: Suggested as universal system. Compatible with AMD and CommonJS.
- Language level module system (import / export): The modern way to use modules in JavaScript.

In this post we will only cover the last one as the first three are part of history, seen in older scripts.

## What is module?
A module is just a file. To manage a large codebase different scripts are separated into different modules. Modules let's you call function of one script from another script.

- **export**: Variables and functions labled with `export`, are accessible from outside the current script.
- **import**: Allows to use functionality of other script in current script.

For instance:

`sayHello.js`
```js
export function sayHello(user) {
  console.log(`Hello, ${user}`);
}
```

`main.js`
```js
import { sayHello } from "./sayHello.js";

sayHello("Swastik");

// Running main.js consoles "Hello Swastik".
```

> Modules work only via HTTP(s), not locally.
If you try to use modules via **file://** protocol, import / export directives don't work. It only works via HTTP(s) protocol.

The code snippet in last example don't actually work, in order to make it work, we need to tell JavaScript that we are using modules. There are two ways to do that.

1. Use **.mjs** as script file extension instead of **.js**.
2. Specify **"type": "module"** in package.json.

## Export and Import
Now, let's see some most common patterns and ways to use import / export in our scripts.

### 1. Name Export:

`Export`
```js
export const name = "Value";
```

`Import`
```js
import { name } from "...";
```

### 2. Default Export:

`Export`
```js
export default "Value";
```

`Import`
```js
import anyName from "...";
```

### 3. Rename Export

`Export`
```js
const name = "value";
export { name as newName };
```

`Import`
```js
import { newName } from "...";
```

### 4. Export List + Rename

`Export`
```js
export {
  name1,
  name2 as newName2
}
```

`Import`
```js
import {
  name1 as newName1,
  newName2
} from "...";
```

---------------------------

That's it for this post. If you found this post helpful, please do share and subscribe to my newsletter below or [here](./subscribe).

Thank You!