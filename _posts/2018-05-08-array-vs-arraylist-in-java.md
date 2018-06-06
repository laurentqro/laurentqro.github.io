---
layout: post
title:  "Array vs. ArrayList in Java"
date:   2018-05-08 10:51:42 +0100
---
I started working on my Java TicTacToe application this week. When it came to picking a data structure for my board, I reached for `Array`. But then I discovered Java also had `ArrayList`.

What are the differences between `Array` and `ArrayList` in Java? Why use one over the other?

**Main differences**

1. `Array` is a fixed length data structure, ArrayList is variable length. Once created, you can't change an `Array`'s size. `ArrayList` can be resized dynamically.

2. ArrayList cannot hold primitives, it can only hold objects. Array can hold both primitives and objects.

**A note on boxing and unboxing**

**Boxing**: wrapping a primitive into a class (e.g. `Integer` or `Boolean`), after which it becomes a boxed primitive.

`Integer.valueOf(1);`

**Unboxing**: converting a wrapped primitive into a primitive.

```
java> Integer wrappedInt = 1;
=> java.lang.Integer wrappedInt = 1
java> wrappedInt.intValue();
=> java.lang.Integer res1 = 1
```

**Autoboxing**: automatically convert from a primitive to an object.

```
ArrayList<Integer> intList = new ArrayList<Integer>();
intList.add(1);
```

In this example, autoboxing converted our `1` primitive into an object before adding it to the ArrayList. We didn't actually store a primitive.
