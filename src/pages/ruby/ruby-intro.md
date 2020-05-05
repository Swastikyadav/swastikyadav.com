---
path: 'intro-ruby'
title: 'Introduction to Ruby'
category: 'Ruby'
featuredImage: ../../images/ruby.jpeg
---

This post is to introduce you with the programming language Ruby. It is said to be a programmers's best friend, because of it's simplicity.

## DataTypes and Variables.
For now we have mainly 3 data types in Ruby.
- Numeric (any number)
- Boolean (true or false)
- String ("collection of characters in a quote")

#### Variables
In Ruby we have 4 types of variables.
- Global variable
- Local variable
- Instance variable
- Class variable

Global Variable: Global variable is the one whose scope is entire programm, which can be accessed anywhere in the programm. And we will talk about other 3 variables in some other post.

We define variable with it's name and assign a value to it with assignment operator (=).

```ruby
name = "Swastik"
```

## Mathemetical Operators
These operators helps us with mathematical calculation in our programm.
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Exponentiation (**)
- Modulus / Remainder (%)

## puts and print
puts and print let us print a text on irb (interactive ruby) terminal. There is a small difference b/w puts and print.

puts: Adds a new blank line after text.
```ruby
puts "Hello World"
// Hello World
// => nil
```

print: No blank line after text.
```ruby
print "Hello World"
// Hello World => nil
```

## Everything in Ruby is an Object.
Everything in Ruby is an Object, hence everything in Ruby has certain built in method. Here we discuss common String methods.

#### Length method
This method tells the length of your string.
```ruby
name = "Swastik Yadav"
puts = name.length
// 13
// => nil
```

#### Reverse method
This method reverses your entire string.
```ruby
name = "Swastik Yadav"
puts = name.reverse
// "vadaY kitsawS"
// => nil
```

#### Upcase and Downcase method
These method converts the entire string to uppercase or lowercase.
```ruby
name = "Swastik Yadav"
puts = name.upcase
// "SWASTIK YADAV"
// => nil

puts = name.downcase
// "swastik yadav"
// => nil
```

A method always returns something, that's why you see nil returning from every method in code examples. More on this in later posts.

This post was just to make you familiar with Basic Ruby concepts. We will be exploring more about Ruby in further posts.

Thank You!