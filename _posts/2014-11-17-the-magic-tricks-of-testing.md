---
layout: post
title:  "The magic tricks of testing"
date:   2014-11-17 10:51:42 +0100
---

Sandi Metz gave a talk titled [The Magic Tricks of Testing](https://www.youtube.com/watch?v=URSWYvyc42M) at Rails Conf 2013. She tells us about **what** should be tested and **whose responsibility** it is to do so. Here are my takeaways.

We want a unit test to be:

* thorough
* stable
* fast
* few

### Focus on messages

There are three types of messages:

* incoming (receives from others)
* sent to self (the object sends to itself)
* outgoing (sends messages)

These messages come in two flavours: they can be queries or commands.

A **query message** returns something and changes nothing.

A **command returns** nothing and changes something.

The problem is, we conflate commands and queries. (e.g. pop method). It is not evil per se to mix command and query methods, but they get tested differently.

##### Incoming query messages

```ruby
class Wheel
  attr_reader :rim, :tire

  def initialize(rim, tire)
    # ..
  end

  def diameter
    rim + (tire * 2)
  end
end
```

The diameter method is an incoming query.

This is how it is tested:

```ruby
  class WheelTest < MiniTest::Unit::TestCase
    def test_calculates_diameter
      wheel = Wheel.new(26, 0.01)
      assert(26.02, wheel.diameter)
    end
  end
```

**Rule**: Test incoming query messages by making _assertions_ about _what they send back_ (i.e. their state).

We don't care about how it's done. We care only about the message that is sent back. We test only the interface, not the implementation. That means we can change the implementation without breaking the tests.

#### Incoming command messages

```ruby
class Gear
  attr_reader :chainring, :cog, :wheel

  def initialize(args)
    # ...
  end

  def set_cog
    @cog = new_cog
  end
end
```

The `set_cog` method is a combination of a query and a command.

It returns a value - that's the query part - that gets set on the `@cog` instance variable - that's the command part.

We test only the command:

```ruby
class GearTest < MiniTest::Unit::TestCase
  def test_set_cog
    gear = Gear.new
    gear.set_cog(27)
    assert(27, gear.cog)
  end
end
```

**Rule**: Test incoming command messages by making **assertions** about **direct public side effects**.

The receiver of the incoming message has sole responsibility making assertions about its value.

**Rule**: **Do not test private methods**. Do not make assertions about their result. Do not expect to send them.

Writing tests for private methods binds us to a specific implementation and make it impossible to refactor without breaking the tests.

It's an overspecification that adds costs, and absolutely no value.

#### Outgoing query message

**Rule**: Do not test outgoing query messages.

Do not make assertions about their result. Do not expect to send them.

If a sent message has no visible side-effect, then the sender should **not** test it.

#### Outgoing command message

Test outgoing command messages by setting expectations on them, expecting that you send them.

#### Summary

<img src="/assets/images/sandi_metz_unit_test_matrix.png" />

**Underlying principles:**

* Be a minimalist
* Use good judgement
* Test everything once
* Test the interface
* Trust collaborators
* Insist on simplicity
