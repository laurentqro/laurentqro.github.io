---
layout: post
title:  "Testing multi-threaded asynchronous code in Java"
intro: "Test operates in one thread. The code under test runs in other threads, which your test knows nothing about. So how do you test multi-threaded code?"
date:   2018-06-08 11:15:00 +0100
---

A test operates in one thread. The code under test runs in other threads, which your test knows nothing about.

So how do you test multi-threaded code?

I'll show you how I did that to test my multi-client [Java echo server](https://github.com/laurentqro/echoServer).

Here is my server code:

```java
// src/main/java/EchoServer.java

public class EchoServer {
  private ServerSocket serverSocket;

  EchoServer(ServerSocket serverSocket) {
    this.serverSocket = serverSocket;
    this.executor = Executors.newFixedThreadPool(2);
  }

  public void start() {
    while(true) {
      listenForClients();
    }
  }

  private void listenForClients() {
    Socket socket = serverSocket.accept();
    executor.execute(new EchoServerThread(socket));
  }
}
```

Initially, I set off to make all my code run in the same thread. If it's all in the same thread, it should be easy to test, right?

Let's use dependency injection to enable our test to replace the multi-thread executor with a single-thread one:

```java
// src/main/java/EchoServer.java

public class EchoServer {
  private ServerSocket serverSocket;
  private Executor executor;

  EchoServer(ServerSocket serverSocket, Executor executor) {
    this.serverSocket = serverSocket;
    this.executor = executor;
  }

  public void start() {
    while(true) {
      listenForClients();
    }
  }

  private void listenForClients() {
    Socket socket = serverSocket.accept();
    executor.execute(new EchoServerThread(socket));
  }
}
```

In the test, let's inject the single-thread executor:

```java
// src/test/java/EchoServerTest.java
public class EchoServerTest {
  @Test
  public void broadcastsToAllClients() {
    // set up fake server socket
    // create three clients

    Executor singleThreadExecutor = Executors.newSingleThreadExecutor();
    EchoServer echoServer = new EchoServer(fakeServerSocket, singleThreadExecutor));

    echoServer.listenForClients();
    echoServer.listenForClients();
    echoServer.listenForClients();

    String expected = "hello from client 1\nhello from client 2\nhello from client 3";

    assertEquals(expected, client1.getSocket().getOutputStream().toString().trim());
  }
```

Let's run the test ...

```
  // System OUT: Accepting client ...
  // System OUT: Accepted client.

  // System OUT: Accepting client ...
  // System OUT: Accepted client.

  // System OUT: Accepting client ...
  // System OUT: Accepted client.

    org.junit.ComparisonFailure

    [stacktrace]

  // System OUT: Accepted client on thread: pool-2-thread-1

    Process finished with exit code 255
```

... and **fail**.

Do you notice anything weird?

The last call to `System.out` occured _after_ the test assertion failed.

The test ran in the `main` thread, the code in another. The test completely ignored it and completed before it had a chance to finish execution.

### Wait a second

Let's make the test wait for the thread to finish running:

```java
// src/test/java/EchoServerTest.java

public class EchoServerTest {
  @Test
  public void broadcastsToAllClients() {
    // set up fake server socket
    // create three clients

    Executor singleThreadExecutor = Executors.newSingleThreadExecutor();
    EchoServer echoServer = new EchoServer(fakeServerSocket, singleThreadExecutor));

    echoServer.listenForClients();
    echoServer.listenForClients();
    echoServer.listenForClients();

    Thread.sleep(1000);

    String expected = "hello from client 1\nhello from client 2\nhello from client 3";

    assertEquals(expected, client1.getSocket().getOutputStream().toString().trim());
  }
```

```java
  Accepting ...
  Accepted.

  Accepting ...
  Accepted.

  Accepting ...
  Accepted.

  Accepted client on thread: pool-2-thread-1
  Number of clients connected: 1

  Accepted client on thread: pool-2-thread-1
  Number of clients connected: 2

  Accepted client on thread: pool-2-thread-1
  Number of clients connected: 3

  Tests passed: 1 of 1 test
```

Ok so our test passed, but making our test wait for an arbitrary 1000ms (`Thread.sleep(1000)`) is an antipattern. We don't want to make our test suite slower. Quite the opposite.

### Asynchronous code, synchronous test

One key learning tidbit here for me was that even if you get your test to run your code in a single thread rather than multiple ones, your test and your code still run in two different threads that are totally oblivious to each other.

The solution here is to get rid off all asynchronicity and run everything in the main thread.

We can replace

`Executor executor = Executors.newSingleThreadExecutor();`

with

`Executor executor = new SynchronousExecutor();`

where `SynchronousExecutor` overrides the `Executor` class' `execute` method to run any `Runnable` object synchronously:

```java
public class SynchronousExecutor implements Executor {
  @Override public void execute(Runnable runnable) {
      runnable.run();
  }
}
```

The test still passes!

Key takeaway of the week: _Make asynchronous code run synchronously in your test_.
