---
path: 'ruby-control-flow'
title: 'Control Flow in Ruby'
category: 'Ruby'
featuredImage: ../../images/ruby-control-flow.jpeg
---

This post will talk about control flow / conditional statements in Ruby. There are times when we want our code to run only if a specific condition is satisfied. That's where control flow in programming language helps us.

## If Else and Elsif
With the help of if we can stop our code from running if a condition is false.
```ruby
num = 5

if num > 6
  puts "Num is greater than 6"
end
```

The above code is not going to run because 5 is always less than 6. But what if we want to run some other code if condition is false. That's where Else block comes.
```ruby
num = 5

if num > 6
  puts "Num is greater than 6"
else
  puts "Num is less than 6"
end

// "Num is less than 6"
// => nil
```

And for multiple if blocks we use Elsif. Notice it is **Elsif** not **Elseif**.

```ruby
num = 6

if num > 6
  puts "Num is greater than 6"
elsif num < 6
  puts "Num is less than 6"
else
  puts "Num is equal to 6"
end

// "Num is equal to 6"
// => nil
```

## Unless
Sometimes you need to reverse your if/else. Maybe you want to check if something is false. Normally you do it with a **!** operator. It reverses the boolean value.

```ruby
hungry = true

if !hungry
  puts "Time to eat"
end
```

But provides a better way to achieve the same with unless keyword. The below code is exactly same as the above one.
```ruby
hungry = true

unless hungry
  puts "Time to eat"
end
```

## Comparison Operators
Comparison operators are used to comapre two values.

- Equality Operator (==): Checks if left and right side are equal. Returns true if equal otherwise false.
- Not Equality Operator (!=): Opposite of equality operator. Checks if left and right side are not equal.
- Greater than or equal to (>=): Checks if left side is greater than or equal to right side.
- Less than or equal to (<=): Checks if left side is less than or equal to right side.

## Logical Operators / Boolean Operator
#### And (&&) operator
And operator results in true only if both side of operator is true.
```ruby
true && true // results true
true && false // results false
false && true // results false
false && false // results false
```

#### Or (||) operator
Or operator results in true if either side of operator is true.
```ruby
true || true // results true
true || false // results true
false || true // results true
false || false // results false
```

So, that's pretty much it about control flow in this post. We are about to dive much deeper in further posts about ruby, so stay tuned.

Thank You for reading.