---
path: 'js-basics'
title: 'Getting started with JavaScript'
category: 'JavaScript'
featuredImage: ../../images/js.png
---

With this post my aim is to help you, get started with the Basics of JavaScript. **You can learn the syntax anywhere, but this blog is all about building logics and understanding the core concepts.**

In any programming language we do mainly 4 things.

1. Storing Values
2. Storing an action.
3. Applying conditions
4. Repetition

Let's talk about each of them one by one.

## Storing Values

To store values we use **Variables**. There are three keywords to declare a variable. 
>**var**, **let** and **const**

The difference between them does not matter at this article.

```js
var user_name = "swastik";
// var - keyword
// user_name - name of the variable
// "swastik" - value in string
```
Here equall to (=) does not means that **LHS** is equall to **RHS**. It simply assigns the value to the variable.

Now whenever you need this value you can just refer to the variable. Try the following with the above code at chrome console.
```js
user_name;
// output will be "swastik"
```
## Storing an action
To store a series of steps, i.e action, we use **Functions**. 

Think about it this way. <i>We follow a reciepe to cook food.</i> Function is also a reciepe where the steps to perform a specific action is written.

Functions are defined in three ways:

1. Function Decleration
```js
function add(a, b) {
	return a + b;
}
```
2. Function Expression
```js
var add = function(a, b) {
	return a + b;
}
```
3. Arrow Function:  Just a short hand for function expression.
```js
var add = (a, b) => {
	return a + b;
}
```
Just defining a function won't do the job. To run the function you would have to execute it. All the above function will do the same, you can execute it this way.
```js
add(5, 7);
// output 12
```
## Applying Conditions
In programming there are many instances when we want to run our code only if a certain condition is meet. That's where conditional statement comes in.

It goes like this. **(Sudo code)** 
```
if condition is true:
	-> this code executes.
if condition is false:
	-> do nothing or execute another code.
```
A working example.
```js
if (5 > 7) {
	console.log("false, 5 is smaller than 7");
} else {
	console.log("true, 7 is greater than 5");
}
// The second block to code will execute because the first block executes to false.
```
This way we can make sure that our code runs only when it needs to.

## Repetition
So, many times you will find yourself repeating a code again and again. Why repeat your code when we can automate our repetition. We do that with loops.

There are 3 types of loop, but we will be looking at the most famous one. **For Loop**.

Say we need to print all natural numbers upto 5 at console. We can do it like the following.
```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```
This would work, but imagine if we need to print first 100 natural numbers. OMG!

Thank good, we have loops.

**For Loop (Sudo code)**
```
for (start; end; step) {
	// whatever code you need to repeat.
}
// start - where to start the loop
// end - where to end the loop
// step - how many steps to jump for each iteration.
```
Now let's print first five natural numbers, using loops.
```js
for (var i = 1; i <= 5; i + 1) {
	console.log(i);
}
// That is it. Literally!

// Start - at 1
// End - at 5
// Step - jump 1 step after each iteration.
```
Wasn't it much more easier than writing console.log() five times.

<hr>
WOW!

We have covered so much in this one article. So, take your time to digest these informations. 
Stay tuned for more programming stuff.
