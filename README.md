# lt-clojure-linter - Clojure static expression checker for Lighttable

Clojure expression static analysis for Lighttable.

Uses a cljs port of ['kibit'](https://github.com/jonase/kibit) to statically analyze the contents of a clojure editor. Produces hints using the lt-lint plugin.

## Notes
This is a really early concept version of this plugin.

If you wish to play around with it, be aware that it's fairly slow - but fortunately _not_ "lock up Lighttable while it runs" slow (all analysis is performed in a set of background thread pools). However, I would recommend either turning off automatic linting for clojure editors, or increasing the delay the background thread queue doesn't get overwhelmed with clojure linting to do for every keystroke you peform.
You can (and should) increase the delay using the following behaviour:
```
  [:clojure-linted :lt.plugins.lt-lint/auto-linting-properties true 5000] ;; set to 5s delay - I found that to be enough
```

Please, though, have a play, and pull requests are always welcome.


## License

Copyright © 2016 Brendan Bates

Distributed under the Eclipse Public License, the same as Clojure.

