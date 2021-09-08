---
title: Shallow cloning vs Deep cloning
author: Swastik Yadav
date: 2021-06-25
hero: ./banner.png
excerpt: The difference between shallow and deep cloning, How to implement them, and the pitfalls with shallow cloning.
---

Hello Everyone,

In this post we will explore the difference between shallow and deep cloning and we will see what are some pitfalls with shallow cloning.

Before moving on, you should check out my last post on [copy by value vs copy by reference](./copy-by-value-vs-copy-by-reference), it will set you up to understand this one.

## The shallow clone
A shallow clone means that certain (sub)-values are still connected to the original variable (references to the same point in memory).

For instance:
```js
let me = {
  name: "Swastik",
  age: 22,
  gender: "Male",
  address: {
    house: 325,
    street: 14,
    city: "NewDelhi",
  }
}

let myShallowClone = {...me};

console.log(me.name, myShallowClone.name, me.address.city, myShallowClone.address.city);
// Swastik, Swastik, NewDelhi, NewDelhi

me.name = "Yadav";
me.address.city = "Bihar";

console.log(me.name, myShallowClone.name, me.address.city, myShallowClone.address.city);
// Yadav Swastik Bihar Bihar
```

#### The pitfall with shallow copy
- The change in ```me.name``` does not affect the ```myShallowCopy.name```.
- But the change in ```me.address.city``` also changes ```myShallowCopy.address.city``` because nested objects are only pointers / references. 

## The deep clone
A deep clone means that all values of new variable are copied and disconnected from the original variable. Changing ```me.address.city``` should not affect ```myShallowCopy.address.city```.

One way to deep clone nested object is to manually copying all nested objects.

For instance:
```js
let me = {
  name: "Swastik",
  age: 22,
  gender: "Male",
  address: {
    house: 325,
    street: 14,
    city: "NewDelhi",
  }
}

let myManualDeepClone = {...a, address: {...a.address}};

me.address.city = "Bihar";

console.log(me.address.city, myManualDeepClone.address.city);
// NewDelhi, Bihar
```

But what if you don't want to copy all your nested objects manually? We can simply **stringify** our object and **parse** it right after.

For instance:
```js
let me = {
  name: "Swastik",
  age: 22,
  gender: "Male",
  address: {
    house: 325,
    street: 14,
    city: "NewDelhi",
  }
}

let myDeepClone = JSON.parse(JSON.stringify(me));

me.address.city = "Bihar";

console.log(me.address.city, myDeepClone.address.city);
// NewDelhi, Bihar
```

Note: There is no pitfalls with cloning primitive datatypes, because they are by default refers to different points in memory.

-------------------------------------------------------

So, I hope that now the difference between shallow and deep cloning is clear. if you found this post helpful, please do share and subscribe to my newsletter below or [here](./subscribe).

Thank You!