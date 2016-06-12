# lt-clojure-linter changes

## 0.0.6 (12 Jun 2016)
Fixes:
- Made a bad assumption about the user plugin directory name. Fixed this up so the module js file can be correctly loaded.

## 0.0.5 (4 June 2016)

Fixes:
- Speed up analysis by filtering out only expressions that can be analysed by kibit rules (lists).

## 0.0.4 (28 May 2016)

Fixes:
- Fix issue with core.logic not walking PersistentHashMap properly.
