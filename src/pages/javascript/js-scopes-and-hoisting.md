---
path: 'js-scopes-and-hoisting'
title: 'Understanding JS Scopes and Hoisting'
category: 'JavaScript'
featuredImage: ../../images/js-scope.png
---

## Uderstanding Scopes in JavaScript.

Scope and hoisting is one of the most important concept to learn in JavaScript. And that's what we are going to do in this article today.

## Scope

In simplest words scope means **where to look for a particular thing.**

Let's take an example.

> Imagine a river visible to people in your country only, that river is in **Local Scope** of your country.
>
> Whereas on the other hand, moon is visible from everywhere on earth. Moon is in **Globla Scope** of earth.

Right there you got the concept of **local** and **global scope.**

## In Context of JavaScript.

Any code of JavaScript available everywhere is in **global scope.** Any variable or function inside a block of code can't be accessed outside of that block of code.

#### Exception:

**"var" creates block of code only inside function**, but "let" and "const" creates block of code everywhere.

There are few default globals in **browser environment of JS.** for example Window and Document.

```js
var name = 'Swastik'
// Variable "name" is in global scope. It is available everywhere.

function name() {
  var petName = 'Bittu'
  return petName
}
console.log(petName) // Error: Variable "petName" is not defined.
// Because it is in local scope of function name.
```

## var, let & const.

Look at the code below.

```js
console.log(a) // Undefined
var a = 'A'

console.log(b) // Error: "Cannot access 'b' before initialization"
let b = 'B'
```

Notice that the first two line of code didn't gave error but 'Undefined' and last two line didn't complain that b is not defined. That's because of hoisting and initialization.

> The worse thing you could have in programming is magic.

The secret behind this magic is **Hoisting.** Variables become available before their decleration, that's all hoisting is.

But why JavaScript behaves like that. We will dive into that question in next article about **Execution Context**.

If you have any question about difference b/w variable types, then here is your answer.

| Variable Type | Hoisting | ReAssignment | ReDecleration | Initialization |
| ------------- | -------- | ------------ | ------------- | -------------- |
| var           | ✔        | ✔            | ✔             | ✔              |
| let           | ✔        | ✔            | ✘             | ✘              |
| const         | ✔        | ✘            | ✘             | ✘              |

This is pretty much it for today. Please follow on twitter(@codeSwastik), See you in next article.

**Happy Coding.**
