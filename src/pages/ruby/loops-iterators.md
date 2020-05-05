---
path: 'ruby-loops-iterators'
title: 'Loops and Iterators in Ruby'
category: 'Ruby'
featuredImage: ../../images/loop-in-ruby.jpg
---

In programming very often we want to repeat our code a certain number of times. For that purpose we use loops and iterators in Ruby. Ruby has different types of loops for various purspose. Let's look at them one by one.

## Loops
#### While Loop
We use while loop when we don't know how many times we need to loop. But we know the condition at which loop should stop.

```ruby
counter = 1

while counter < 11
  print "#{counter}, "
  counter += 1
end

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// Keeps printing counter as long as condition is true.
// While counter is less than 11 keep printing the number, and at every iteration increase counter // by 1.
// If we do not increase counter in every iteration, then it will become an infinite loop.
```

#### Until Loop
Until loop is opposite of while loop. While loop runs `while the given condition is true` and until loop runs `while the given condition is false` or `until the given condition is true`.
```ruby
counter = 11

until counter > 11
  print "#{counter}, "
  counter += 1
end

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
// Stops printing counter when condition is true.
```

#### For loop
For loop is used when we know how many times to loop.
```ruby
for num in 1...10
  print "#{num}, "
end

// 1, 2, 3, 4, 5, 6, 7, 8, 9,
// 1...10 creates a range from 1 to 9. (...) last range not included, (..) last range included.
```

## Iterators
An iterator is just a ruby method that repeatedly invokes a block of code.
#### Loop method
Loop method is an iterator. We have to implicitly break out of loop method with break keyword.
```ruby
num = 1

loop do
  print "#{i}, "
  num += 1
  break if num > 5
end

// 1, 2, 3, 4, 5
```

We can skip over a certain steps and continue with next iteration by using next keyword.
```ruby
for num in 1...10
  next if num == 5
  print "#{num}, "
end

// 1, 2, 3, 4, 6, 7, 8, 9,
// Notice 5 is not printed here.
```

#### Times method
Times method repeats the block of code given number of times.
```ruby
5.times do
  print "Hello World, "
end

// "Hello World", "Hello World", "Hello World", "Hello World", "Hello World",
```

#### Each method
Each method iterates over every element in a hash or array (We will talk about hash and array in next post).

We will be discussing `Each` method in more detail in post about hashes and arrays.

Thank You for your time.