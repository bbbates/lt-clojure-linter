# lt-clojure-linter - Clojure static expression checker for Lighttable

Clojure expression static analysis for Lighttable.

Uses a cljs port of ['kibit'](https://github.com/jonase/kibit) to statically analyze the contents of a clojure editor. Produces hints using the lt-lint plugin.

## Notes
This is a really early concept version of this plugin. If you wish to play around with it, a few things to be aware of:

1. It's really really slow - but fortunately not "lock up Lighttable while it runs", slow (all analysis is performed in a background thread). However, I would recommend either turning off automatic linting for clojure editors, or increasing the delay the background thread queue doesn't get overwhelmed with clojure linting to do for every keystroke you peform.
You can (and should) increase the delay using the following behaviour:
```
  [:clojure-linted :lt.plugins.lt-lint/auto-linting-properties true 5000] ;; set to 5s delay - I found that to be enough
```
2. The clojure reader isn't great - since Lighttable is using an old version of cljs (like, really old), we're stuck with using a very hobbled reader to parse text into sexprs. I updated a version from [rewrite-cljs](https://github.com/rundis/rewrite-cljs/), but there may still be some edge cases that cause issues.

3. The messages aren't pretty printed - working on that.

Please, though, have a play, and pull requests are always welcome.


## License

Copyright © 2016 Brendan Bates

Distributed under the Eclipse Public License, the same as Clojure.

