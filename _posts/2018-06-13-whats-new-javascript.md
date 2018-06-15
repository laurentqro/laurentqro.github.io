---
layout: post
title: What's new (for me) in Javascript
intro: My somewhat imited experience of Javascript had been painful, so I was apprehensive of diving back into it. Turns out, I shouldn't have been. Javascript has changed a lot, for the better. Here is a quick overview of the novelties that made it fun to write Javascript.
meta: What's new (for me) in Javascript
date:   2018-06-13 10:51:42 +0100
---

After finishing my echo server in Java, my mentors gave me my new assignment: write another [Tic Tac Toe in NodeJS](https://github.com/laurentqro/ttt_nodejs).

This is the first time since 2014 that I write an entire application in vanilla Javascript from scratch. Since then, I have been mostly touching up existing code, often jQuery, or using frameworks like [EmberJS](https://www.emberjs.com/).

My limited experience with the language had been painful, so I was apprehensive of diving back into vanilla Javascript

As it turns out, I shouldn't have been. Javascript has changed a lot, for the better. Less quirky, less verbose.

Here is a quick overview of the novelties that made it fun to write Javascript.

### Class declarations

```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }
}
```

The `class` keyword was introduced by ES2015 and is not a `class` implementation; it's syntactic sugar over Javascript's prototypal model.

```javascript
let cat = new Cat('Felix');
cat.name;
// 'Felix'
```

### Inheritance

```javascript
class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}

class HumanPlayer extends Player {
  constructor(name, symbol) {
    super(symbol);
    this.name = name;
  }
}
```

```javascript
let humanPlayer = new HumanPlayer('John', 'X');

console.log(humanPlayer.name);
// 'John'
console.log(humanPlayer.symbol);
// 'X'
```

### Functions Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((previous, current) => {
    return previous + current;
  });
}
```

```javascript
console.log(sum(1, 2, 3));
// 6
```

```javascript
let [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]
```

### Arrow functions

```javascript
// ES5
let markedCells = cells.filter(function(cell) {
  return cell.isMarked();
});

// ES6
let markedCells = cells.filter(cell => cell.isMarked());
```

### ES6 modules

The `export` statement is used to export a class, functions or primitive values from the module so they can be used by other scripts with the `import` statement.

There are two kinds of exports: default exports and named exports.

##### Named exports

```javascript
// exports a function declared earlier
export { myFunction };

// exports a constant
export const doublePi = Math.PI * 2;
```

##### Default exports (class)

```javascript
// cat.js
export default class Cat {}
```

```javascript
// other-file.js
import Cat from 'cat';
let cat = new Cat();
// ..
```

##### Default exports (function)

```javascript
// math.js
export default function square(x) {
  return x * x;
}
```

```javascript
// other-file.js
import square from 'math';
console.log(square(2));
// 4
```

### `async` / `await`

Promises were an improvement on callbacks. Async/await is an improvement on promises.

Specifically, async/await makes it easy to use multiple promises by allowing us to use promises synchronously. It reads nicer than promise chaining.

```javascript
function fooAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('foo');
    }, 2000);
  });
}

function barAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('bar');
    }, 2000);
  });
}

async function fooBar() {
  let foo = await fooAfter2Seconds();
  console.log(foo);

  let bar = await barAfter2Seconds();
  console.log(bar);
}

fooBar();
// After 2 seconds:
// 'foo'
// After 2 more seconds:
// 'bar'
```

Inside the `foobar` function, the second asynchronous function `barAfter2Seconds` is called only once the first asynchronous function `fooAfter2Seconds` has resolved.

### `let` and `const`

A variable declared with `let` is limited in scope to the block, statement, or expression on which it is used. This is unlike the `var` keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

Constants are block-scoped, much like variables defined using the `let` statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.
