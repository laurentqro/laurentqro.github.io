---
layout: post
title:  "Java Streams"
date:   2018-05-08 10:51:42 +0100
---

> _There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult._

> Sir Charles Antony Richard Hoare

**The habitual Java way, with array indexes:**

```java
import java.util.ArrayList;
import java.util.List;

public int[] timesTwo(int[] numbers) {
  int[] results = new int[3];

  for(int i = 0; i < numbers.length; i++) {
      results[i] = numbers[i] * 2;
  }

  return results;
}
```

**The habitual Java way, without indexes:**

```java
import java.util.ArrayList;
import java.util.List;

public List<Integer> timesTwo(List<Integer> numbers) {
  List<Integer> results = new ArrayList<>();

  for(String number : numbers) {
      results.add(number * 2);
  }

  return results;
}
```

**With streams (Java 8 onwards):**

```java
public List<Integer> timesTwo(List<Integer> numbers) {
  return numbers.stream().map(number -> number * 2).collect(Collectors.toList());
}
```

Simple, clear, and brief. We don't mess around with mutable variables, iteration is abstracted away, and it's easier to understand and maintain.

The secret sauce there is `stream()` and the lambda expression (here `number -> number * 2`).

`stream()` turns an array into an iterable collection, the lambda expression is applied to each member of the collection, and the result is accumulated into a new collection.

A lambda expression is an anonymous function that gets created just in time. On the left of `->` is a list of parameters, and on the right is the function's body.

When we pass a lambda expression to a method, the compiler converts the lambda expression to an instance of the appropriate functional interface. A functional interface is an interface that contains one and only one abstract method.

**Wanted dead or alive: the for loop**

After reading about streams, I was understandably excited, and so I decided to go on a `for` loop hunt inside my Java Tic Tac Toe application.

Here's a nice trophy:


**Before**

```java
public boolean hasWin() {
  for(Line line : getLines()) {
      if (line.hasWin()) {
          return true;
      }
  return false;
}
```

**Nicer (I did actually start with this)**

```java
public boolean hasWin() {
  return getLines().stream().filter(line -> line.hasWin()).findFirst().isPresent();
}
```

**Even nicer (thanks, IntelliJ)**

```java
public boolean hasWin() {
  return getLines().stream().anyMatch(Line::hasWin);
}
```

Note how we can replace `line -> line.hasWin()` with method reference: `Line::hasWin`.
