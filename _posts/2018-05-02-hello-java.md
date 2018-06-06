---
layout: post
title:  "Hello Java"
date:   2018-05-02 10:51:42 +0100
---

Today, I am writing my first Java app ever. In line with [8th Light](https://8thlight.com/) tradition, it will be a game of Tic Tac Toe.

But first, let's get a _Hello World_ application going.

1. Work through the [Java koans](https://github.com/matyb/java-koans)
2. Install [Gradle](https://gradle.org/)
3. Download [IntelliJ](https://www.jetbrains.com/idea/)
4. Create a new Java application


**Install Gradle**

Gradle is (mostly) a task runner and a dependency management tool. It can also be daemonised to run your test suite and the compiler continuously in the background. It will only run the compiler for the code that has changed since the previous compilation.

Here's a few things Gradle can do:

* create the directory structure for a new application (`gradle init`)
* run your application (`gradle run`)
* run the unit tests and the linter (`gradle check`)
* run the unit tests continuously (`gradle test --continuous`)
* create and run tasks, a task being any basic operation
* manage dependencies

To install on Mac OS X using [Homebrew](https://brew.sh/), run `brew install gradle`.

Let's check the installation was successful:

```bash
$ gradle -v

------------------------------------------------------------
Gradle 4.7
------------------------------------------------------------

Build time:   2018-04-18 09:09:12 UTC
Revision:     b9a962bf70638332300e7f810689cb2febbd4a6c

Groovy:       2.4.12
Ant:          Apache Ant(TM) version 1.9.9 compiled on February 2 2017
JVM:          10.0.1 ("Oracle Corporation" 10.0.1+10)
OS:           Mac OS X 10.13.4 x86_64

```

Sweet.


**Install IntelliJ**

I was recommended IntelliJ as an integrated development environment for developing in Java, so IntelliJ it is. Other popular choices are NetBeans and Eclipse. Let's download [IntelliJ](https://www.jetbrains.com/idea/download) and install it.

**Create a new application**

Let's create a new folder for our application.

`mkdir TicTacToe && cd TicTacToe`

I want to create a new command line application. A quick look at the Gradle docs tells me I should run `gradle init` with the `--type java-application` flag. This flag tells gradle to give me an application with JUnit for testing, directories in the conventional locations for source code.

Because there are no existing classes in my application, Gradle generates a sample class and a matching test.

```java
// src/main/java/App.java

public class App {
      public String getGreeting() {
          return "Hello world.";
      }

      public static void main(String[] args) {
          System.out.println(new App().getGreeting());
      }
  }
```

```java
// src/test/java/AppTest.java

import org.junit.Test;
import static org.junit.Assert.*;

public class AppTest {
    @Test public void testAppHasAGreeting() {
        App classUnderTest = new App();
        assertNotNull("app should have a greeting", classUnderTest.getGreeting());
    }
}
```

Let's ask IntelliJ to run our app, and we get back:

```
Hello world.

Process finished with exit code 0
```

Hello Java!
