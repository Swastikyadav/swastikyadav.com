---
title: How JavaScript works behind the scene - Execution Context and Call Stack
author: Swastik Yadav
date: 2021-07-02
hero: ./banner.png
excerpt: Learn how JS works under the hood and how functions are executed in JavaScript with execution context.
---

Hello World!

In this post we will see how functions are executed in JavaScript, and how variables are defined and initialized.

We will also discuss, what is hoisting?

## Execution Context
Any function in JavaScript is executed in two phases:

1. **Declaration Phase**: This phase is only responsible for declaring variables and functions.
2. **Execution Phase**: This phase is responsible for executing function blocks.

Let's understand both phases one by one.

We will use the following snippet to understand the execution context.

```js
var x = 42;
var y = 21;

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  retrn a * b;
}

let sum = add(42, 21); // 68
const product = multiply(24, 20); // 480
var sumProduct = multiply(add(x, y), 0);

console.log(sum, product, sumProduct);
```

Note: In the above snippet some variables are defined with **var**, some with **let**, and some with **const**. I did that on purpose to show how each of them works differently in execution context.

## Declaration Phase
In declaration phase variables and functions are allocated memory. But there is a slight difference in where the memory is allocated to var and let, const.

- **var**: var is allocated memory in global scope or in it's function scope and is initialized with *```undefined```*.
- **let and const**: let and const are allocated memory in TDZ (Temporal Dead Zone), hence is not accessible or defined while the variable is in TDZ. It remains in TDZ unless assigned a value (initialized).

> TDZ (Temporal Dead Zone) is the time between hoisting (declaration) and value assignment (initialization).

![declaration-phase](./dec-phase.png) 

## Execution Phase
In execution context:
- Function blocks are executed in global execution context.
- Variables are assigned values. 

If there are nested functions, then further **Function Execution Context** are created in GEC (both declaration and execution phases runs again for the nested function).

![execution-phase](./exec-phase.png)

One important thing to note is that, *Once a function is returned, it is cleared / removed from the execution context*. And it is done with the **Call Stack**.

## CallStack
Execution context is maintained using a "Call Stack". A stack is a LIFO (last in first out) data structure. In a stack we only insert or delete elements at the top of stack, think in terms of JavaScript Array.push and Array.pop method.

There can be only one execution context running at a time, that's why **JavaScript is a single threaded language**.

Whenever an execution context is halted (may be due to some delay or data fetching), a different execution context becomes the current running EC. The halted EC might then at a later point pick back up where it left.

![call-stack](./call-stack.png)

## Hoisting
The concept that variables are allocated memory (declared) before the execution of code is known as hoisting.

- var is accessible (with undefined as value) before it's declaration because it is declared in global memory.
- let and const are also hoisted (declared before execution) but in TDZ (temporal dead zone), hence are not accessible before their declaration in the code.

So, if the question is, Are let and const hoisted in JavaScript? The answer is **Yes, they are hoisted but in temporal dead zone**.

------------------------------------

So, that's it for this post, if you found this post helpful please do share and subscribe my [newsletter](./subscribe) for more such posts.

Thank You!