---
layout: post
title:  "How to customise your shell prompt"
date:   2013-10-25 10:51:42 +0100
---

By default, the shell prompt on Mac OS X is somewhat cluttered so I customised it to be nice and minimalistic.

1. Open your terminal

2. Open your bash profile: `vim .bash_profile`

3. In your bash profile file, add the following on a new line: `export PS1="\$ \w: "`. `\w` gives the Current working directory. If you are not root, `\$` inserts a `$`. If you are logged in as root, you get a `#`.

4. Logout from your Mac's user session and log back in.

5. Open Terminal.

And <em>voil&agrave;</em>!

<img src="/assets/images/shell-prompt.png">

More on how to further <a href="http://www.ibm.com/developerworks/linux/library/l-tip-prompt/" target="_blank">customise your shell prompt</a>.
