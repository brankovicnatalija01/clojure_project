["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/iter/es6.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.iter.es6\");\n  goog.module.declareLegacyNamespace();\n  const GoogIterable = goog.require(\"goog.iter.Iterable\");\n  const GoogIterator = goog.require(\"goog.iter.Iterator\");\n  class ShimIterable {\n    __iterator__() {\n    }\n    toGoog() {\n    }\n    toEs6() {\n    }\n    static of(iter) {\n      if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator || iter instanceof ShimEs6Iterator) {\n        return iter;\n      } else if (typeof iter.next == \"function\") {\n        return new ShimIterableImpl(() => {\n          return iter;\n        });\n      } else if (typeof iter[Symbol.iterator] == \"function\") {\n        return new ShimIterableImpl(() => {\n          return iter[Symbol.iterator]();\n        });\n      } else if (typeof iter.__iterator__ == \"function\") {\n        return new ShimIterableImpl(() => {\n          return iter.__iterator__();\n        });\n      }\n      throw new Error(\"Not an iterator or iterable.\");\n    }\n  }\n  class ShimIterableImpl {\n    constructor(func) {\n      this.func_ = func;\n    }\n    __iterator__() {\n      return new ShimGoogIterator(this.func_());\n    }\n    toGoog() {\n      return new ShimGoogIterator(this.func_());\n    }\n    [Symbol.iterator]() {\n      return new ShimEs6Iterator(this.func_());\n    }\n    toEs6() {\n      return new ShimEs6Iterator(this.func_());\n    }\n  }\n  class ShimGoogIterator extends GoogIterator {\n    constructor(iter) {\n      super();\n      this.iter_ = iter;\n    }\n    next() {\n      return this.iter_.next();\n    }\n    toGoog() {\n      return this;\n    }\n    [Symbol.iterator]() {\n      return new ShimEs6Iterator(this.iter_);\n    }\n    toEs6() {\n      return new ShimEs6Iterator(this.iter_);\n    }\n  }\n  class ShimEs6Iterator extends ShimIterableImpl {\n    constructor(iter) {\n      super(() => {\n        return iter;\n      });\n      this.iter_ = iter;\n    }\n    next() {\n      return this.iter_.next();\n    }\n  }\n  exports = {ShimIterable, ShimEs6Iterator, ShimGoogIterator};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Shims between goog.iter.Iterator and ES6 iterator.\n */\n\ngoog.module('goog.iter.es6');\ngoog.module.declareLegacyNamespace();\n\nconst GoogIterable = goog.require('goog.iter.Iterable');\nconst GoogIterator = goog.require('goog.iter.Iterator');\n\n\n/**\n * Common interface extending both `goog.iter.Iterable` and ES6 `Iterable`,\n * and providing `toGoog()` and `toEs6()` methods to get either kind\n * of iterator.  `ShimIterable.of()` is the primary entry point for\n * this library.  If it is given an iterable that is *not* also an\n * iterator, then it will inherit any reusability from its argument\n * (i.e. `ShimIterable.of(mySet)` will be reusable, since mySet makes\n * a fresh Iterator every time, whereas `ShimIterable.of(myIterator)`\n * will be one-shot).\n *\n * `ShimGoogIterator` and `ShimEs6Iterator` extend `ShimIterable` and\n * also implement one or the other iterator API.  Since they extend\n * `ShimIterable`, it is easy to convert back and forth between the two\n * APIs.  Any such conversion will expose a view to the same underlying\n * iterator, so elements pulled via one API will not be available from\n * the other.\n *\n * @interface\n * @extends {Iterable<VALUE>}\n * @template VALUE\n */\nclass ShimIterable {\n  /** @return {!GoogIterator<VALUE>} */\n  __iterator__() {}\n\n  /** @return {!ShimGoogIterator<VALUE>} */\n  toGoog() {}\n\n  /** @return {!ShimEs6Iterator<VALUE>} */\n  toEs6() {}\n\n  /**\n   * @param {!Iterable<VALUE>|!Iterator<VALUE>|\n   *         !GoogIterator<VALUE>|!GoogIterable} iter\n   * @return {!ShimIterable}\n   * @template VALUE\n   */\n  static of(iter) {\n    if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator ||\n        iter instanceof ShimEs6Iterator) {\n      return iter;\n    } else if (typeof iter.next == 'function') {\n      return new ShimIterableImpl(\n          () => /** @type {!Iterator|!GoogIterator} */ (iter));\n    } else if (typeof iter[Symbol.iterator] == 'function') {\n      return new ShimIterableImpl(() => iter[Symbol.iterator]());\n    } else if (typeof iter.__iterator__ == 'function') {\n      return new ShimIterableImpl(\n          () => /** @type {{__iterator__:function(this:?, boolean=)}} */ (iter)\n                    .__iterator__());\n    }\n    throw new Error('Not an iterator or iterable.');\n  }\n}\n\n\n/**\n * Concrete (private) implementation of a non-iterator iterable.  This is\n * separate from the iterator versions since it supports iterables that\n * are not \"one-shot\".\n * @implements {ShimIterable<VALUE>}\n * @template VALUE\n */\nclass ShimIterableImpl {\n  /** @param {function(): !Iterator<VALUE>} func */\n  constructor(func) {\n    /** @const @private */\n    this.func_ = func;\n  }\n\n  /** @override */\n  __iterator__() {\n    return new ShimGoogIterator(this.func_());\n  }\n\n  /** @override */\n  toGoog() {\n    return new ShimGoogIterator(this.func_());\n  }\n\n  /** @override */\n  [Symbol.iterator]() {\n    return new ShimEs6Iterator(this.func_());\n  }\n\n  /** @override */\n  toEs6() {\n    return new ShimEs6Iterator(this.func_());\n  }\n}\n\n\n/**\n * Concrete `goog.iter.Iterator` subclass that also implements `ShimIterable`.\n * @extends {GoogIterator<VALUE>}\n * @implements {ShimIterable<VALUE>}\n * @template VALUE\n */\nclass ShimGoogIterator extends GoogIterator {\n  /** @param {!Iterator<VALUE>} iter */\n  constructor(iter) {\n    super();\n    this.iter_ = iter;\n  }\n\n  /**\n   * @override @see {!goog.iter.Iterator}\n   * @return {!IIterableResult<VALUE>}\n   */\n  next() {\n    return this.iter_.next();\n  }\n\n\n  /** @override */\n  toGoog() {\n    return this;\n  }\n\n  /** @override */\n  [Symbol.iterator]() {\n    return new ShimEs6Iterator(this.iter_);\n  }\n\n  /** @override */\n  toEs6() {\n    return new ShimEs6Iterator(this.iter_);\n  }\n}\n\n\n/**\n * Concrete ES6 `Iterator` that also implements `ShimIterable`.\n * @implements {IteratorIterable<VALUE>}\n * @extends {ShimIterableImpl<VALUE>}\n * @template VALUE\n */\nclass ShimEs6Iterator extends ShimIterableImpl {\n  /** @param {!Iterator<VALUE>} iter */\n  constructor(iter) {\n    super(() => iter);\n    /** @const @private */\n    this.iter_ = iter;\n  }\n\n  /** @override */\n  next() {\n    return this.iter_.next();\n  }\n}\n\n\nexports = {\n  ShimIterable,\n  ShimEs6Iterator,\n  ShimGoogIterator,\n};\n","~:compiled-at",1736113675045,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.iter.es6.js\",\n\"lineCount\":82,\n\"mappings\":\"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\",\n\"sources\":[\"goog/iter/es6.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Shims between goog.iter.Iterator and ES6 iterator.\\n */\\n\\ngoog.module('goog.iter.es6');\\ngoog.module.declareLegacyNamespace();\\n\\nconst GoogIterable = goog.require('goog.iter.Iterable');\\nconst GoogIterator = goog.require('goog.iter.Iterator');\\n\\n\\n/**\\n * Common interface extending both `goog.iter.Iterable` and ES6 `Iterable`,\\n * and providing `toGoog()` and `toEs6()` methods to get either kind\\n * of iterator.  `ShimIterable.of()` is the primary entry point for\\n * this library.  If it is given an iterable that is *not* also an\\n * iterator, then it will inherit any reusability from its argument\\n * (i.e. `ShimIterable.of(mySet)` will be reusable, since mySet makes\\n * a fresh Iterator every time, whereas `ShimIterable.of(myIterator)`\\n * will be one-shot).\\n *\\n * `ShimGoogIterator` and `ShimEs6Iterator` extend `ShimIterable` and\\n * also implement one or the other iterator API.  Since they extend\\n * `ShimIterable`, it is easy to convert back and forth between the two\\n * APIs.  Any such conversion will expose a view to the same underlying\\n * iterator, so elements pulled via one API will not be available from\\n * the other.\\n *\\n * @interface\\n * @extends {Iterable<VALUE>}\\n * @template VALUE\\n */\\nclass ShimIterable {\\n  /** @return {!GoogIterator<VALUE>} */\\n  __iterator__() {}\\n\\n  /** @return {!ShimGoogIterator<VALUE>} */\\n  toGoog() {}\\n\\n  /** @return {!ShimEs6Iterator<VALUE>} */\\n  toEs6() {}\\n\\n  /**\\n   * @param {!Iterable<VALUE>|!Iterator<VALUE>|\\n   *         !GoogIterator<VALUE>|!GoogIterable} iter\\n   * @return {!ShimIterable}\\n   * @template VALUE\\n   */\\n  static of(iter) {\\n    if (iter instanceof ShimIterableImpl || iter instanceof ShimGoogIterator ||\\n        iter instanceof ShimEs6Iterator) {\\n      return iter;\\n    } else if (typeof iter.next == 'function') {\\n      return new ShimIterableImpl(\\n          () => /** @type {!Iterator|!GoogIterator} */ (iter));\\n    } else if (typeof iter[Symbol.iterator] == 'function') {\\n      return new ShimIterableImpl(() => iter[Symbol.iterator]());\\n    } else if (typeof iter.__iterator__ == 'function') {\\n      return new ShimIterableImpl(\\n          () => /** @type {{__iterator__:function(this:?, boolean=)}} */ (iter)\\n                    .__iterator__());\\n    }\\n    throw new Error('Not an iterator or iterable.');\\n  }\\n}\\n\\n\\n/**\\n * Concrete (private) implementation of a non-iterator iterable.  This is\\n * separate from the iterator versions since it supports iterables that\\n * are not \\\"one-shot\\\".\\n * @implements {ShimIterable<VALUE>}\\n * @template VALUE\\n */\\nclass ShimIterableImpl {\\n  /** @param {function(): !Iterator<VALUE>} func */\\n  constructor(func) {\\n    /** @const @private */\\n    this.func_ = func;\\n  }\\n\\n  /** @override */\\n  __iterator__() {\\n    return new ShimGoogIterator(this.func_());\\n  }\\n\\n  /** @override */\\n  toGoog() {\\n    return new ShimGoogIterator(this.func_());\\n  }\\n\\n  /** @override */\\n  [Symbol.iterator]() {\\n    return new ShimEs6Iterator(this.func_());\\n  }\\n\\n  /** @override */\\n  toEs6() {\\n    return new ShimEs6Iterator(this.func_());\\n  }\\n}\\n\\n\\n/**\\n * Concrete `goog.iter.Iterator` subclass that also implements `ShimIterable`.\\n * @extends {GoogIterator<VALUE>}\\n * @implements {ShimIterable<VALUE>}\\n * @template VALUE\\n */\\nclass ShimGoogIterator extends GoogIterator {\\n  /** @param {!Iterator<VALUE>} iter */\\n  constructor(iter) {\\n    super();\\n    this.iter_ = iter;\\n  }\\n\\n  /**\\n   * @override @see {!goog.iter.Iterator}\\n   * @return {!IIterableResult<VALUE>}\\n   */\\n  next() {\\n    return this.iter_.next();\\n  }\\n\\n\\n  /** @override */\\n  toGoog() {\\n    return this;\\n  }\\n\\n  /** @override */\\n  [Symbol.iterator]() {\\n    return new ShimEs6Iterator(this.iter_);\\n  }\\n\\n  /** @override */\\n  toEs6() {\\n    return new ShimEs6Iterator(this.iter_);\\n  }\\n}\\n\\n\\n/**\\n * Concrete ES6 `Iterator` that also implements `ShimIterable`.\\n * @implements {IteratorIterable<VALUE>}\\n * @extends {ShimIterableImpl<VALUE>}\\n * @template VALUE\\n */\\nclass ShimEs6Iterator extends ShimIterableImpl {\\n  /** @param {!Iterator<VALUE>} iter */\\n  constructor(iter) {\\n    super(() => iter);\\n    /** @const @private */\\n    this.iter_ = iter;\\n  }\\n\\n  /** @override */\\n  next() {\\n    return this.iter_.next();\\n  }\\n}\\n\\n\\nexports = {\\n  ShimIterable,\\n  ShimEs6Iterator,\\n  ShimGoogIterator,\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"GoogIterable\",\"require\",\"GoogIterator\",\"ShimIterable\",\"__iterator__\",\"toGoog\",\"toEs6\",\"of\",\"iter\",\"ShimIterableImpl\",\"ShimGoogIterator\",\"ShimEs6Iterator\",\"next\",\"Symbol\",\"iterator\",\"Error\",\"constructor\",\"func\",\"func_\",\"iter_\",\"exports\"]\n}\n"]