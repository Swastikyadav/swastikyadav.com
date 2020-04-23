---
path: 'statements-and-expressions'
title: 'Statements and Expressions'
category: 'JavaScript'
featuredImage: ../../images/expression.png
---

Do you want to predict the outcome of your code? Is it possible to predict, what error your code is going to through? If you have ever asked these questions, then you are in the right place.

In this post, we are going to discuss **expressions and statements.** This is how JavaScript wants you to write and understand code.

## Statements and Expressions.
Everything to the left of (=) is a statement. Roughly a statement acts, like creating a box for value to be stored.

And anything to the right of (=) is an expression. An expression is anything that ultimately turns into a value or returns a value.
```js
var name = "Swastik";
// var name - Statement, creates a box for value to be stored.
// "Swastik" - Expression, a string (value).
```
See, this is the core grammar of the language. So, it is quite important to understand. Let's see some more examples.
```js
const add = function(a, b) {
	return a + b;
}
add(8, 4); // 12
// const add - Statement.
```
Now! you understand why the above syntax is called **function expression.** Because the entire function definition is to the right side of (=). And it returns a value.

You can not write a statement where JavaScript expects an expression.

Can you do this?
```js
const yesNo = if(0 < 1) {return "Yes";} else {return "No";};
// Error: Unexpected token if. 
```
The above code is the worse code you can write to show that you know nothing about JavaScript.
**if else statement** is a statement. Can't write it to the right of (=), where JS expects an expression.

Ok, how about this one. Try to predict the outcome.
```js
const yesNo = 0 < 1 ? "Yes" : "No";
yesNo; // OutCome ??
``` 
At first glance, you might think, It will through an error because **question mark operator** is just another way of writing **if-else statement.** 

And you are right. But there is a catch. If else is a statement, whereas question mark operator is an expression. Because it always returns a value no matter what.

Hence the outcome of the above code will be "Yes". Open up the console and try it out.

You see! how we predicted the outcome even the error that JS was about to give. That's the beauty of this concept. Try to see every code in this way.

Next, I will be coming up with some advanced JS concepts. And if you want me to write something specific, please let me know in the comments below.

For now, this is it. **Thank You** for reading. 