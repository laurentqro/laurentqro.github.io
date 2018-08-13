---
layout: post
title:  "An introduction to Elixir Plug"
date:   2018-08-13 10:51:42 +0100
---

[Plug](https://github.com/elixir-plug/plug) is the specification that enables web frameworks written in the [Elixir](https://elixir-lang.org/) programming language to talk to different web servers running in the Erlang virtual machine. If you're a rubyist, Plug is to Elixir what [Rack](https://rack.github.io/) is to Ruby.

#### Why should I care about Plug?

Understanding the basics of Plug will make it easier for you to understand Elixir's go-to web framework Phoenix, and any web framework written in Elixir.

#### Ok then, that's cool. So what is Plug? Explain to me like I am actually five

In simple terms, a Plug is a bit of code that receives a data structure, transforms it, and returns this transformed data structure. The data structure that a plug receives is conventionally called a `connection`. This `connection` data structure contains everything we need to know about the incoming web request, like `host`, `path`, query parameters, etc.

Here's a quick glimpse at what a plug connection struct might look like:

```elixir
%Plug.Conn{
  host: "www.example.com",
  path_info: ["bar", "baz"],
  ...}
```

#### Ok, explain like I'm an adult now, just to see

Plug defines a simple interface, and any code that conforms to this interface can be used in a Plug application. This makes it easy to build small, focused and reusable bits of code, and then use Plug to compose them into a larger application.

Plug provides connection adapters for different web servers running in the Erlang VM, like [Cowboy](https://github.com/ninenines/cowboy). In practice, this means you could switch from Cowboy to another web server without having to change any of your code (other than the code that specifies which connection adapter to use).

#### Ok got it. So what's the Plug interface exactly?

A Plug comes in two forms: **function plug** and **module plug**.

Plug-compliant code must be either:

* a *function* that receives a connection and set of options as arguments, and returns the connection.

OR

* a *module* that implements an `init/1` and a `call/2` function.

A *function* plug receives a connection and set of options as arguments, and returns the connection:

```elixir
def hello_world_plug(conn, _opts) do
  conn
  |> put_resp_content_type("text/plain")
  |> send_resp(200, "Hello world")
end
```

A *module* plug implements an `init/1` and a `call/2` function:


```elixir
defmodule MyPlug do
  def init([]), do: false
  def call(conn, _opts), do: conn
end
```

Here, `init/1` initializes the options. `call/2` receives the connection and the initialized options, and returns the connection.

As everything in Elixir, a connection is immutable, so every manipulation of a connection returns a updated copy of the connection.

```elixir
conn = put_resp_content_type(conn, "text/plain")
conn = send_resp(conn, 200, "ok")
conn
```

#### A simple example: "Hello, world!"

Create a new project: `mix new pluggy_mc_plug_app`

`cd` into the project directory and add Plug and Cowboy to `mix.exs` as dependencies:

```elixir
def deps do
  [
    {:cowboy, "~> 2.0"},
    {:plug, "~> 1.0"}
  ]
end
```

List both `:cowboy` and `:plug` as your application dependencies:

```elixir
def application do
  [applications: [:cowboy, :plug]]
end
```

Run `mix deps.get` in your terminal to install the dependencies.

Then create a `PluggyMcPlug` module:

```elixir
defmodule PluggyMcPlug do
  import Plug.Conn

  def init(options) do
    # initialize options

    options
  end

  def call(conn, _opts) do
    conn
    |> put_resp_content_type("text/plain")
    |> send_resp(200, "Hello, world!")
  end
end
```

```elixir
$ iex -S mix
iex> {:ok, _} = Plug.Adapters.Cowboy2.http PluggyMcPlug, []
{:ok, #PID<...>}
```

Point your browser at `http://localhost:4000`.

You should see "Hello, world!".
