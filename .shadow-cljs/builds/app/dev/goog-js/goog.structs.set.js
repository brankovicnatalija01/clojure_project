["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/set.js"],"~:js","goog.provide(\"goog.structs.Set\");\ngoog.require(\"goog.structs\");\ngoog.require(\"goog.structs.Collection\");\ngoog.require(\"goog.structs.Map\");\ngoog.requireType(\"goog.iter.Iterator\");\ngoog.structs.Set = function(opt_values) {\n  this.map_ = new goog.structs.Map();\n  this.size = 0;\n  if (opt_values) {\n    this.addAll(opt_values);\n  }\n};\ngoog.structs.Set.getUid_ = goog.getUid;\ngoog.structs.Set.getKey_ = function(val) {\n  var type = typeof val;\n  if (type == \"object\" && val || type == \"function\") {\n    return \"o\" + goog.structs.Set.getUid_(val);\n  } else {\n    return type.slice(0, 1) + val;\n  }\n};\ngoog.structs.Set.prototype.getCount = function() {\n  return this.map_.size;\n};\ngoog.structs.Set.prototype.add = function(element) {\n  this.map_.set(goog.structs.Set.getKey_(element), element);\n  this.setSizeInternal_(this.map_.size);\n};\ngoog.structs.Set.prototype.addAll = function(col) {\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  var i = 0;\n  for (; i < l; i++) {\n    this.add(values[i]);\n  }\n  this.setSizeInternal_(this.map_.size);\n};\ngoog.structs.Set.prototype.removeAll = function(col) {\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  var i = 0;\n  for (; i < l; i++) {\n    this.remove(values[i]);\n  }\n  this.setSizeInternal_(this.map_.size);\n};\ngoog.structs.Set.prototype.delete = function(element) {\n  const rv = this.map_.remove(goog.structs.Set.getKey_(element));\n  this.setSizeInternal_(this.map_.size);\n  return rv;\n};\ngoog.structs.Set.prototype.remove = function(element) {\n  return this.delete(element);\n};\ngoog.structs.Set.prototype.clear = function() {\n  this.map_.clear();\n  this.setSizeInternal_(0);\n};\ngoog.structs.Set.prototype.isEmpty = function() {\n  return this.map_.size === 0;\n};\ngoog.structs.Set.prototype.has = function(element) {\n  return this.map_.containsKey(goog.structs.Set.getKey_(element));\n};\ngoog.structs.Set.prototype.contains = function(element) {\n  return this.map_.containsKey(goog.structs.Set.getKey_(element));\n};\ngoog.structs.Set.prototype.containsAll = function(col) {\n  return goog.structs.every(col, this.contains, this);\n};\ngoog.structs.Set.prototype.intersection = function(col) {\n  var result = new goog.structs.Set();\n  var values = goog.structs.getValues(col);\n  var i = 0;\n  for (; i < values.length; i++) {\n    var value = values[i];\n    if (this.contains(value)) {\n      result.add(value);\n    }\n  }\n  return result;\n};\ngoog.structs.Set.prototype.difference = function(col) {\n  var result = this.clone();\n  result.removeAll(col);\n  return result;\n};\ngoog.structs.Set.prototype.getValues = function() {\n  return this.map_.getValues();\n};\ngoog.structs.Set.prototype.values = function() {\n  return this.map_.values();\n};\ngoog.structs.Set.prototype.clone = function() {\n  return new goog.structs.Set(this);\n};\ngoog.structs.Set.prototype.equals = function(col) {\n  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col);\n};\ngoog.structs.Set.prototype.isSubsetOf = function(col) {\n  var colCount = goog.structs.getCount(col);\n  if (this.getCount() > colCount) {\n    return false;\n  }\n  if (!(col instanceof goog.structs.Set) && colCount > 5) {\n    col = new goog.structs.Set(col);\n  }\n  return goog.structs.every(this, function(value) {\n    return goog.structs.contains(col, value);\n  });\n};\ngoog.structs.Set.prototype.__iterator__ = function(opt_keys) {\n  return this.map_.__iterator__(false);\n};\ngoog.structs.Set.prototype[Symbol.iterator] = function() {\n  return this.values();\n};\ngoog.structs.Set.prototype.setSizeInternal_ = function(newSize) {\n  this.size = newSize;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Datastructure: Set.\n *\n *\n * This class implements a set data structure. Adding and removing is O(1). It\n * supports both object and primitive values. Be careful because you can add\n * both 1 and new Number(1), because these are not the same. You can even add\n * multiple new Number(1) because these are not equal.\n */\n\n\ngoog.provide('goog.structs.Set');\n\ngoog.require('goog.structs');\ngoog.require('goog.structs.Collection');\ngoog.require('goog.structs.Map');\ngoog.requireType('goog.iter.Iterator');\n\n/**\n * A set that can contain both primitives and objects.  Adding and removing\n * elements is O(1).  Primitives are treated as identical if they have the same\n * type and convert to the same string.  Objects are treated as identical only\n * if they are references to the same object.  WARNING: A goog.structs.Set can\n * contain both 1 and (new Number(1)), because they are not the same.  WARNING:\n * Adding (new Number(1)) twice will yield two distinct elements, because they\n * are two different objects.  WARNING: Any object that is added to a\n * goog.structs.Set will be modified!  Because goog.getUid() is used to\n * identify objects, every object in the set will be mutated.\n * @param {Array<T>|Object<?,T>=} opt_values Initial values to start with.\n * @constructor\n * @implements {goog.structs.Collection<T>}\n * @implements {Iterable<T>}\n * @final\n * @template T\n * @deprecated This type is misleading: use ES6 Set instead.\n */\ngoog.structs.Set = function(opt_values) {\n  'use strict';\n  this.map_ = new goog.structs.Map();\n\n\n  /**\n   * The number of items in this set.\n   * @const {number}\n   */\n  this.size = 0;\n\n  if (opt_values) {\n    this.addAll(opt_values);\n  }\n};\n\n/**\n * A function that returns a unique id.\n * @private @const {function(?Object): number}\n */\ngoog.structs.Set.getUid_ = goog.getUid;\n\n\n/**\n * Obtains a unique key for an element of the set.  Primitives will yield the\n * same key if they have the same type and convert to the same string.  Object\n * references will yield the same key only if they refer to the same object.\n * @param {*} val Object or primitive value to get a key for.\n * @return {string} A unique key for this value/object.\n * @private\n */\ngoog.structs.Set.getKey_ = function(val) {\n  'use strict';\n  var type = typeof val;\n  if (type == 'object' && val || type == 'function') {\n    return 'o' + goog.structs.Set.getUid_(/** @type {Object} */ (val));\n  } else {\n    return type.slice(0, 1) + val;\n  }\n};\n\n\n/**\n * @return {number} The number of elements in the set.\n * @override\n * @deprecated Use the `size` property instead, for alignment with ES6 Set.\n */\ngoog.structs.Set.prototype.getCount = function() {\n  'use strict';\n  return this.map_.size;\n};\n\n\n/**\n * Add a primitive or an object to the set.\n * @param {T} element The primitive or object to add.\n * @override\n */\ngoog.structs.Set.prototype.add = function(element) {\n  'use strict';\n  this.map_.set(goog.structs.Set.getKey_(element), element);\n  this.setSizeInternal_(this.map_.size);\n};\n\n\n/**\n * Adds all the values in the given collection to this set.\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection\n *     containing the elements to add.\n * @deprecated Use `goog.collections.sets.addAll(thisSet, col)` instead,\n *     converting Objects to their values using `Object.values`, for alignment\n *     with ES6 Set.\n */\ngoog.structs.Set.prototype.addAll = function(col) {\n  'use strict';\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    this.add(values[i]);\n  }\n  this.setSizeInternal_(this.map_.size);\n};\n\n\n/**\n * Removes all values in the given collection from this set.\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection\n *     containing the elements to remove.\n * @deprecated Use `goog.collections.sets.removeAll(thisSet, col)` instead,\n *     converting Objects to their values using `Object.values`, for alignment\n *     with ES6 Set.\n */\ngoog.structs.Set.prototype.removeAll = function(col) {\n  'use strict';\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    this.remove(values[i]);\n  }\n  this.setSizeInternal_(this.map_.size);\n};\n\n\n/**\n * Removes the given element from this set.\n * @param {T} element The primitive or object to remove.\n * @return {boolean} Whether the element was found and removed.\n */\ngoog.structs.Set.prototype.delete = function(element) {\n  'use strict';\n  const rv = this.map_.remove(goog.structs.Set.getKey_(element));\n  this.setSizeInternal_(this.map_.size);\n  return rv;\n};\n\n/**\n * Removes the given element from this set.\n * @param {T} element The primitive or object to remove.\n * @return {boolean} Whether the element was found and removed.\n * @override\n * @deprecated Use `delete`, for alignment with ES6 Set.\n */\ngoog.structs.Set.prototype.remove = function(element) {\n  'use strict';\n  return this.delete(element);\n};\n\n\n/**\n * Removes all elements from this set.\n */\ngoog.structs.Set.prototype.clear = function() {\n  'use strict';\n  this.map_.clear();\n  this.setSizeInternal_(0);\n};\n\n\n/**\n * Tests whether this set is empty.\n * @return {boolean} True if there are no elements in this set.\n * @deprecated Use the size property and compare against 0, for alignment with\n *     ES6 Set.\n */\ngoog.structs.Set.prototype.isEmpty = function() {\n  'use strict';\n  return this.map_.size === 0;\n};\n\n\n/**\n * Tests whether this set contains the given element.\n * @param {T} element The primitive or object to test for.\n * @return {boolean} True if this set contains the given element.\n */\ngoog.structs.Set.prototype.has = function(element) {\n  'use strict';\n  return this.map_.containsKey(goog.structs.Set.getKey_(element));\n};\n\n/**\n * Tests whether this set contains the given element.\n * @param {T} element The primitive or object to test for.\n * @return {boolean} True if this set contains the given element.\n * @override\n * @deprecated Use `has` instead, for alignment with ES6 Set.\n */\ngoog.structs.Set.prototype.contains = function(element) {\n  'use strict';\n  return this.map_.containsKey(goog.structs.Set.getKey_(element));\n};\n\n\n/**\n * Tests whether this set contains all the values in a given collection.\n * Repeated elements in the collection are ignored, e.g.  (new\n * goog.structs.Set([1, 2])).containsAll([1, 1]) is True.\n * @param {goog.structs.Collection<T>|Object} col A collection-like object.\n * @return {boolean} True if the set contains all elements.\n * @deprecated Use `goog.collections.sets.hasAll(thisSet, col)`, converting\n *     Objects to arrays using Object.values, for alignment with ES6 Set.\n */\ngoog.structs.Set.prototype.containsAll = function(col) {\n  'use strict';\n  return goog.structs.every(col, this.contains, this);\n};\n\n\n/**\n * Finds all values that are present in both this set and the given collection.\n * @param {Array<S>|Object<?,S>} col A collection.\n * @return {!goog.structs.Set<T|S>} A new set containing all the values\n *     (primitives or objects) present in both this set and the given\n *     collection.\n * @template S\n * @deprecated Use `goog.collections.sets.intersection(thisSet, col)`,\n *     converting Objects to arrays using Object.values, instead for alignment\n *     with ES6 Set.\n */\ngoog.structs.Set.prototype.intersection = function(col) {\n  'use strict';\n  var result = new goog.structs.Set();\n\n  var values = goog.structs.getValues(col);\n  for (var i = 0; i < values.length; i++) {\n    var value = values[i];\n    if (this.contains(value)) {\n      result.add(value);\n    }\n  }\n\n  return result;\n};\n\n\n/**\n * Finds all values that are present in this set and not in the given\n * collection.\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection.\n * @return {!goog.structs.Set} A new set containing all the values\n *     (primitives or objects) present in this set but not in the given\n *     collection.\n */\ngoog.structs.Set.prototype.difference = function(col) {\n  'use strict';\n  var result = this.clone();\n  result.removeAll(col);\n  return result;\n};\n\n\n/**\n * Returns an array containing all the elements in this set.\n * @return {!Array<T>} An array containing all the elements in this set.\n * @deprecated Use `Array.from(set.values())` instead, for alignment with ES6\n *     Set.\n */\ngoog.structs.Set.prototype.getValues = function() {\n  'use strict';\n  return this.map_.getValues();\n};\n\n/**\n * @returns {!IteratorIterable<T>} An ES6 Iterator that iterates over the values\n *     in the set.\n */\ngoog.structs.Set.prototype.values = function() {\n  'use strict';\n  return this.map_.values();\n};\n\n/**\n * Creates a shallow clone of this set.\n * @return {!goog.structs.Set<T>} A new set containing all the same elements as\n *     this set.\n * @deprecated Use `new Set(thisSet.values())` for alignment with ES6 Set.\n */\ngoog.structs.Set.prototype.clone = function() {\n  'use strict';\n  return new goog.structs.Set(this);\n};\n\n\n/**\n * Tests whether the given collection consists of the same elements as this set,\n * regardless of order, without repetition.  Primitives are treated as equal if\n * they have the same type and convert to the same string; objects are treated\n * as equal if they are references to the same object.  This operation is O(n).\n * @param {goog.structs.Collection<T>|Object} col A collection.\n * @return {boolean} True if the given collection consists of the same elements\n *     as this set, regardless of order, without repetition.\n * @deprecated Use `goog.collections.equals(thisSet, col)`, converting Objects\n *     to arrays using Object.values,  instead for alignment with ES6 Set.\n */\ngoog.structs.Set.prototype.equals = function(col) {\n  'use strict';\n  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col);\n};\n\n\n/**\n * Tests whether the given collection contains all the elements in this set.\n * Primitives are treated as equal if they have the same type and convert to the\n * same string; objects are treated as equal if they are references to the same\n * object.  This operation is O(n).\n * @param {goog.structs.Collection<T>|Object} col A collection.\n * @return {boolean} True if this set is a subset of the given collection.\n * @deprecated Use `goog.collections.isSubsetOf(thisSet, col)`, converting\n *     Objects to arrays using Object.values, instead for alignment with ES6\n *     Set.\n */\ngoog.structs.Set.prototype.isSubsetOf = function(col) {\n  'use strict';\n  var colCount = goog.structs.getCount(col);\n  if (this.getCount() > colCount) {\n    return false;\n  }\n  if (!(col instanceof goog.structs.Set) && colCount > 5) {\n    // Convert to a goog.structs.Set so that goog.structs.contains runs in\n    // O(1) time instead of O(n) time.\n    col = new goog.structs.Set(col);\n  }\n  return goog.structs.every(this, function(value) {\n    'use strict';\n    return goog.structs.contains(col, value);\n  });\n};\n\n\n/**\n * Returns an iterator that iterates over the elements in this set.\n * @param {boolean=} opt_keys This argument is ignored.\n * @return {!goog.iter.Iterator} An iterator over the elements in this set.\n * @deprecated Call `values` and use native iteration, for alignment with ES6\n *     Set.\n */\ngoog.structs.Set.prototype.__iterator__ = function(opt_keys) {\n  'use strict';\n  return this.map_.__iterator__(false);\n};\n\n/**\n * @return {!IteratorIterable<T>} An ES6 Iterator that iterates over the values\n *     in the set.\n */\ngoog.structs.Set.prototype[Symbol.iterator] = function() {\n  return this.values();\n};\n\n/**\n * Assigns to the size property to isolate supressions of const assignment\n * to only where they are needed.\n * @param {number} newSize The size to update to.\n * @private\n */\ngoog.structs.Set.prototype.setSizeInternal_ = function(newSize) {\n  /** @suppress {const} */\n  this.size = newSize;\n};\n","~:compiled-at",1736163560438,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.set.js\",\n\"lineCount\":121,\n\"mappings\":\"AAiBAA,IAAKC,CAAAA,OAAL,CAAa,kBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,cAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,yBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,kBAAb,CAAA;AACAF,IAAKG,CAAAA,WAAL,CAAiB,oBAAjB,CAAA;AAoBAH,IAAKI,CAAAA,OAAQC,CAAAA,GAAb,GAAmBC,QAAQ,CAACC,UAAD,CAAa;AAEtC,MAAKC,CAAAA,IAAL,GAAY,IAAIR,IAAKI,CAAAA,OAAQK,CAAAA,GAAjB,EAAZ;AAOA,MAAKC,CAAAA,IAAL,GAAY,CAAZ;AAEA,MAAIH,UAAJ;AACE,QAAKI,CAAAA,MAAL,CAAYJ,UAAZ,CAAA;AADF;AAXsC,CAAxC;AAoBAP,IAAKI,CAAAA,OAAQC,CAAAA,GAAIO,CAAAA,OAAjB,GAA2BZ,IAAKa,CAAAA,MAAhC;AAWAb,IAAKI,CAAAA,OAAQC,CAAAA,GAAIS,CAAAA,OAAjB,GAA2BC,QAAQ,CAACC,GAAD,CAAM;AAEvC,MAAIC,OAAO,MAAOD,IAAlB;AACA,MAAIC,IAAJ,IAAY,QAAZ,IAAwBD,GAAxB,IAA+BC,IAA/B,IAAuC,UAAvC;AACE,WAAO,GAAP,GAAajB,IAAKI,CAAAA,OAAQC,CAAAA,GAAIO,CAAAA,OAAjB,CAAgDI,GAAhD,CAAb;AADF;AAGE,WAAOC,IAAKC,CAAAA,KAAL,CAAW,CAAX,EAAc,CAAd,CAAP,GAA0BF,GAA1B;AAHF;AAHuC,CAAzC;AAgBAhB,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUC,CAAAA,QAA3B,GAAsCC,QAAQ,EAAG;AAE/C,SAAO,IAAKb,CAAAA,IAAKE,CAAAA,IAAjB;AAF+C,CAAjD;AAWAV,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUG,CAAAA,GAA3B,GAAiCC,QAAQ,CAACC,OAAD,CAAU;AAEjD,MAAKhB,CAAAA,IAAKiB,CAAAA,GAAV,CAAczB,IAAKI,CAAAA,OAAQC,CAAAA,GAAIS,CAAAA,OAAjB,CAAyBU,OAAzB,CAAd,EAAiDA,OAAjD,CAAA;AACA,MAAKE,CAAAA,gBAAL,CAAsB,IAAKlB,CAAAA,IAAKE,CAAAA,IAAhC,CAAA;AAHiD,CAAnD;AAeAV,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUR,CAAAA,MAA3B,GAAoCgB,QAAQ,CAACC,GAAD,CAAM;AAEhD,MAAIC,SAAS7B,IAAKI,CAAAA,OAAQ0B,CAAAA,SAAb,CAAuBF,GAAvB,CAAb;AACA,MAAIG,IAAIF,MAAOG,CAAAA,MAAf;AACK,MAAIC,IAAI,CAAR;AAAL,OAAA,EAAgBA,CAAhB,GAAoBF,CAApB,EAAuBE,CAAA,EAAvB;AACE,QAAKX,CAAAA,GAAL,CAASO,MAAA,CAAOI,CAAP,CAAT,CAAA;AADF;AAGA,MAAKP,CAAAA,gBAAL,CAAsB,IAAKlB,CAAAA,IAAKE,CAAAA,IAAhC,CAAA;AAPgD,CAAlD;AAmBAV,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUe,CAAAA,SAA3B,GAAuCC,QAAQ,CAACP,GAAD,CAAM;AAEnD,MAAIC,SAAS7B,IAAKI,CAAAA,OAAQ0B,CAAAA,SAAb,CAAuBF,GAAvB,CAAb;AACA,MAAIG,IAAIF,MAAOG,CAAAA,MAAf;AACK,MAAIC,IAAI,CAAR;AAAL,OAAA,EAAgBA,CAAhB,GAAoBF,CAApB,EAAuBE,CAAA,EAAvB;AACE,QAAKG,CAAAA,MAAL,CAAYP,MAAA,CAAOI,CAAP,CAAZ,CAAA;AADF;AAGA,MAAKP,CAAAA,gBAAL,CAAsB,IAAKlB,CAAAA,IAAKE,CAAAA,IAAhC,CAAA;AAPmD,CAArD;AAgBAV,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUkB,CAAAA,MAA3B,GAAoCC,QAAQ,CAACd,OAAD,CAAU;AAEpD,QAAMe,KAAK,IAAK/B,CAAAA,IAAK4B,CAAAA,MAAV,CAAiBpC,IAAKI,CAAAA,OAAQC,CAAAA,GAAIS,CAAAA,OAAjB,CAAyBU,OAAzB,CAAjB,CAAX;AACA,MAAKE,CAAAA,gBAAL,CAAsB,IAAKlB,CAAAA,IAAKE,CAAAA,IAAhC,CAAA;AACA,SAAO6B,EAAP;AAJoD,CAAtD;AAcAvC,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUiB,CAAAA,MAA3B,GAAoCI,QAAQ,CAAChB,OAAD,CAAU;AAEpD,SAAO,IAAKa,CAAAA,MAAL,CAAYb,OAAZ,CAAP;AAFoD,CAAtD;AASAxB,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUsB,CAAAA,KAA3B,GAAmCC,QAAQ,EAAG;AAE5C,MAAKlC,CAAAA,IAAKiC,CAAAA,KAAV,EAAA;AACA,MAAKf,CAAAA,gBAAL,CAAsB,CAAtB,CAAA;AAH4C,CAA9C;AAaA1B,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUwB,CAAAA,OAA3B,GAAqCC,QAAQ,EAAG;AAE9C,SAAO,IAAKpC,CAAAA,IAAKE,CAAAA,IAAjB,KAA0B,CAA1B;AAF8C,CAAhD;AAWAV,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAU0B,CAAAA,GAA3B,GAAiCC,QAAQ,CAACtB,OAAD,CAAU;AAEjD,SAAO,IAAKhB,CAAAA,IAAKuC,CAAAA,WAAV,CAAsB/C,IAAKI,CAAAA,OAAQC,CAAAA,GAAIS,CAAAA,OAAjB,CAAyBU,OAAzB,CAAtB,CAAP;AAFiD,CAAnD;AAYAxB,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAU6B,CAAAA,QAA3B,GAAsCC,QAAQ,CAACzB,OAAD,CAAU;AAEtD,SAAO,IAAKhB,CAAAA,IAAKuC,CAAAA,WAAV,CAAsB/C,IAAKI,CAAAA,OAAQC,CAAAA,GAAIS,CAAAA,OAAjB,CAAyBU,OAAzB,CAAtB,CAAP;AAFsD,CAAxD;AAeAxB,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAU+B,CAAAA,WAA3B,GAAyCC,QAAQ,CAACvB,GAAD,CAAM;AAErD,SAAO5B,IAAKI,CAAAA,OAAQgD,CAAAA,KAAb,CAAmBxB,GAAnB,EAAwB,IAAKoB,CAAAA,QAA7B,EAAuC,IAAvC,CAAP;AAFqD,CAAvD;AAiBAhD,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUkC,CAAAA,YAA3B,GAA0CC,QAAQ,CAAC1B,GAAD,CAAM;AAEtD,MAAI2B,SAAS,IAAIvD,IAAKI,CAAAA,OAAQC,CAAAA,GAAjB,EAAb;AAEA,MAAIwB,SAAS7B,IAAKI,CAAAA,OAAQ0B,CAAAA,SAAb,CAAuBF,GAAvB,CAAb;AACK,MAAIK,IAAI,CAAR;AAAL,OAAA,EAAgBA,CAAhB,GAAoBJ,MAAOG,CAAAA,MAA3B,EAAmCC,CAAA,EAAnC,CAAwC;AACtC,QAAIuB,QAAQ3B,MAAA,CAAOI,CAAP,CAAZ;AACA,QAAI,IAAKe,CAAAA,QAAL,CAAcQ,KAAd,CAAJ;AACED,YAAOjC,CAAAA,GAAP,CAAWkC,KAAX,CAAA;AADF;AAFsC;AAOxC,SAAOD,MAAP;AAZsD,CAAxD;AAwBAvD,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUsC,CAAAA,UAA3B,GAAwCC,QAAQ,CAAC9B,GAAD,CAAM;AAEpD,MAAI2B,SAAS,IAAKI,CAAAA,KAAL,EAAb;AACAJ,QAAOrB,CAAAA,SAAP,CAAiBN,GAAjB,CAAA;AACA,SAAO2B,MAAP;AAJoD,CAAtD;AAcAvD,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUW,CAAAA,SAA3B,GAAuC8B,QAAQ,EAAG;AAEhD,SAAO,IAAKpD,CAAAA,IAAKsB,CAAAA,SAAV,EAAP;AAFgD,CAAlD;AASA9B,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUU,CAAAA,MAA3B,GAAoCgC,QAAQ,EAAG;AAE7C,SAAO,IAAKrD,CAAAA,IAAKqB,CAAAA,MAAV,EAAP;AAF6C,CAA/C;AAWA7B,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUwC,CAAAA,KAA3B,GAAmCG,QAAQ,EAAG;AAE5C,SAAO,IAAI9D,IAAKI,CAAAA,OAAQC,CAAAA,GAAjB,CAAqB,IAArB,CAAP;AAF4C,CAA9C;AAiBAL,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAU4C,CAAAA,MAA3B,GAAoCC,QAAQ,CAACpC,GAAD,CAAM;AAEhD,SAAO,IAAKR,CAAAA,QAAL,EAAP,IAA0BpB,IAAKI,CAAAA,OAAQgB,CAAAA,QAAb,CAAsBQ,GAAtB,CAA1B,IAAwD,IAAKqC,CAAAA,UAAL,CAAgBrC,GAAhB,CAAxD;AAFgD,CAAlD;AAiBA5B,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAU8C,CAAAA,UAA3B,GAAwCC,QAAQ,CAACtC,GAAD,CAAM;AAEpD,MAAIuC,WAAWnE,IAAKI,CAAAA,OAAQgB,CAAAA,QAAb,CAAsBQ,GAAtB,CAAf;AACA,MAAI,IAAKR,CAAAA,QAAL,EAAJ,GAAsB+C,QAAtB;AACE,WAAO,KAAP;AADF;AAGA,MAAI,EAAEvC,GAAF,YAAiB5B,IAAKI,CAAAA,OAAQC,CAAAA,GAA9B,CAAJ,IAA0C8D,QAA1C,GAAqD,CAArD;AAGEvC,OAAA,GAAM,IAAI5B,IAAKI,CAAAA,OAAQC,CAAAA,GAAjB,CAAqBuB,GAArB,CAAN;AAHF;AAKA,SAAO5B,IAAKI,CAAAA,OAAQgD,CAAAA,KAAb,CAAmB,IAAnB,EAAyB,QAAQ,CAACI,KAAD,CAAQ;AAE9C,WAAOxD,IAAKI,CAAAA,OAAQ4C,CAAAA,QAAb,CAAsBpB,GAAtB,EAA2B4B,KAA3B,CAAP;AAF8C,GAAzC,CAAP;AAXoD,CAAtD;AAyBAxD,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUiD,CAAAA,YAA3B,GAA0CC,QAAQ,CAACC,QAAD,CAAW;AAE3D,SAAO,IAAK9D,CAAAA,IAAK4D,CAAAA,YAAV,CAAuB,KAAvB,CAAP;AAF2D,CAA7D;AASApE,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAjB,CAA2BoD,MAAOC,CAAAA,QAAlC,CAAA,GAA8C,QAAQ,EAAG;AACvD,SAAO,IAAK3C,CAAAA,MAAL,EAAP;AADuD,CAAzD;AAUA7B,IAAKI,CAAAA,OAAQC,CAAAA,GAAIc,CAAAA,SAAUO,CAAAA,gBAA3B,GAA8C+C,QAAQ,CAACC,OAAD,CAAU;AAE9D,MAAKhE,CAAAA,IAAL,GAAYgE,OAAZ;AAF8D,CAAhE;;\",\n\"sources\":[\"goog/structs/set.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Datastructure: Set.\\n *\\n *\\n * This class implements a set data structure. Adding and removing is O(1). It\\n * supports both object and primitive values. Be careful because you can add\\n * both 1 and new Number(1), because these are not the same. You can even add\\n * multiple new Number(1) because these are not equal.\\n */\\n\\n\\ngoog.provide('goog.structs.Set');\\n\\ngoog.require('goog.structs');\\ngoog.require('goog.structs.Collection');\\ngoog.require('goog.structs.Map');\\ngoog.requireType('goog.iter.Iterator');\\n\\n/**\\n * A set that can contain both primitives and objects.  Adding and removing\\n * elements is O(1).  Primitives are treated as identical if they have the same\\n * type and convert to the same string.  Objects are treated as identical only\\n * if they are references to the same object.  WARNING: A goog.structs.Set can\\n * contain both 1 and (new Number(1)), because they are not the same.  WARNING:\\n * Adding (new Number(1)) twice will yield two distinct elements, because they\\n * are two different objects.  WARNING: Any object that is added to a\\n * goog.structs.Set will be modified!  Because goog.getUid() is used to\\n * identify objects, every object in the set will be mutated.\\n * @param {Array<T>|Object<?,T>=} opt_values Initial values to start with.\\n * @constructor\\n * @implements {goog.structs.Collection<T>}\\n * @implements {Iterable<T>}\\n * @final\\n * @template T\\n * @deprecated This type is misleading: use ES6 Set instead.\\n */\\ngoog.structs.Set = function(opt_values) {\\n  'use strict';\\n  this.map_ = new goog.structs.Map();\\n\\n\\n  /**\\n   * The number of items in this set.\\n   * @const {number}\\n   */\\n  this.size = 0;\\n\\n  if (opt_values) {\\n    this.addAll(opt_values);\\n  }\\n};\\n\\n/**\\n * A function that returns a unique id.\\n * @private @const {function(?Object): number}\\n */\\ngoog.structs.Set.getUid_ = goog.getUid;\\n\\n\\n/**\\n * Obtains a unique key for an element of the set.  Primitives will yield the\\n * same key if they have the same type and convert to the same string.  Object\\n * references will yield the same key only if they refer to the same object.\\n * @param {*} val Object or primitive value to get a key for.\\n * @return {string} A unique key for this value/object.\\n * @private\\n */\\ngoog.structs.Set.getKey_ = function(val) {\\n  'use strict';\\n  var type = typeof val;\\n  if (type == 'object' && val || type == 'function') {\\n    return 'o' + goog.structs.Set.getUid_(/** @type {Object} */ (val));\\n  } else {\\n    return type.slice(0, 1) + val;\\n  }\\n};\\n\\n\\n/**\\n * @return {number} The number of elements in the set.\\n * @override\\n * @deprecated Use the `size` property instead, for alignment with ES6 Set.\\n */\\ngoog.structs.Set.prototype.getCount = function() {\\n  'use strict';\\n  return this.map_.size;\\n};\\n\\n\\n/**\\n * Add a primitive or an object to the set.\\n * @param {T} element The primitive or object to add.\\n * @override\\n */\\ngoog.structs.Set.prototype.add = function(element) {\\n  'use strict';\\n  this.map_.set(goog.structs.Set.getKey_(element), element);\\n  this.setSizeInternal_(this.map_.size);\\n};\\n\\n\\n/**\\n * Adds all the values in the given collection to this set.\\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection\\n *     containing the elements to add.\\n * @deprecated Use `goog.collections.sets.addAll(thisSet, col)` instead,\\n *     converting Objects to their values using `Object.values`, for alignment\\n *     with ES6 Set.\\n */\\ngoog.structs.Set.prototype.addAll = function(col) {\\n  'use strict';\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  for (var i = 0; i < l; i++) {\\n    this.add(values[i]);\\n  }\\n  this.setSizeInternal_(this.map_.size);\\n};\\n\\n\\n/**\\n * Removes all values in the given collection from this set.\\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection\\n *     containing the elements to remove.\\n * @deprecated Use `goog.collections.sets.removeAll(thisSet, col)` instead,\\n *     converting Objects to their values using `Object.values`, for alignment\\n *     with ES6 Set.\\n */\\ngoog.structs.Set.prototype.removeAll = function(col) {\\n  'use strict';\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  for (var i = 0; i < l; i++) {\\n    this.remove(values[i]);\\n  }\\n  this.setSizeInternal_(this.map_.size);\\n};\\n\\n\\n/**\\n * Removes the given element from this set.\\n * @param {T} element The primitive or object to remove.\\n * @return {boolean} Whether the element was found and removed.\\n */\\ngoog.structs.Set.prototype.delete = function(element) {\\n  'use strict';\\n  const rv = this.map_.remove(goog.structs.Set.getKey_(element));\\n  this.setSizeInternal_(this.map_.size);\\n  return rv;\\n};\\n\\n/**\\n * Removes the given element from this set.\\n * @param {T} element The primitive or object to remove.\\n * @return {boolean} Whether the element was found and removed.\\n * @override\\n * @deprecated Use `delete`, for alignment with ES6 Set.\\n */\\ngoog.structs.Set.prototype.remove = function(element) {\\n  'use strict';\\n  return this.delete(element);\\n};\\n\\n\\n/**\\n * Removes all elements from this set.\\n */\\ngoog.structs.Set.prototype.clear = function() {\\n  'use strict';\\n  this.map_.clear();\\n  this.setSizeInternal_(0);\\n};\\n\\n\\n/**\\n * Tests whether this set is empty.\\n * @return {boolean} True if there are no elements in this set.\\n * @deprecated Use the size property and compare against 0, for alignment with\\n *     ES6 Set.\\n */\\ngoog.structs.Set.prototype.isEmpty = function() {\\n  'use strict';\\n  return this.map_.size === 0;\\n};\\n\\n\\n/**\\n * Tests whether this set contains the given element.\\n * @param {T} element The primitive or object to test for.\\n * @return {boolean} True if this set contains the given element.\\n */\\ngoog.structs.Set.prototype.has = function(element) {\\n  'use strict';\\n  return this.map_.containsKey(goog.structs.Set.getKey_(element));\\n};\\n\\n/**\\n * Tests whether this set contains the given element.\\n * @param {T} element The primitive or object to test for.\\n * @return {boolean} True if this set contains the given element.\\n * @override\\n * @deprecated Use `has` instead, for alignment with ES6 Set.\\n */\\ngoog.structs.Set.prototype.contains = function(element) {\\n  'use strict';\\n  return this.map_.containsKey(goog.structs.Set.getKey_(element));\\n};\\n\\n\\n/**\\n * Tests whether this set contains all the values in a given collection.\\n * Repeated elements in the collection are ignored, e.g.  (new\\n * goog.structs.Set([1, 2])).containsAll([1, 1]) is True.\\n * @param {goog.structs.Collection<T>|Object} col A collection-like object.\\n * @return {boolean} True if the set contains all elements.\\n * @deprecated Use `goog.collections.sets.hasAll(thisSet, col)`, converting\\n *     Objects to arrays using Object.values, for alignment with ES6 Set.\\n */\\ngoog.structs.Set.prototype.containsAll = function(col) {\\n  'use strict';\\n  return goog.structs.every(col, this.contains, this);\\n};\\n\\n\\n/**\\n * Finds all values that are present in both this set and the given collection.\\n * @param {Array<S>|Object<?,S>} col A collection.\\n * @return {!goog.structs.Set<T|S>} A new set containing all the values\\n *     (primitives or objects) present in both this set and the given\\n *     collection.\\n * @template S\\n * @deprecated Use `goog.collections.sets.intersection(thisSet, col)`,\\n *     converting Objects to arrays using Object.values, instead for alignment\\n *     with ES6 Set.\\n */\\ngoog.structs.Set.prototype.intersection = function(col) {\\n  'use strict';\\n  var result = new goog.structs.Set();\\n\\n  var values = goog.structs.getValues(col);\\n  for (var i = 0; i < values.length; i++) {\\n    var value = values[i];\\n    if (this.contains(value)) {\\n      result.add(value);\\n    }\\n  }\\n\\n  return result;\\n};\\n\\n\\n/**\\n * Finds all values that are present in this set and not in the given\\n * collection.\\n * @param {Array<T>|goog.structs.Collection<T>|Object<?,T>} col A collection.\\n * @return {!goog.structs.Set} A new set containing all the values\\n *     (primitives or objects) present in this set but not in the given\\n *     collection.\\n */\\ngoog.structs.Set.prototype.difference = function(col) {\\n  'use strict';\\n  var result = this.clone();\\n  result.removeAll(col);\\n  return result;\\n};\\n\\n\\n/**\\n * Returns an array containing all the elements in this set.\\n * @return {!Array<T>} An array containing all the elements in this set.\\n * @deprecated Use `Array.from(set.values())` instead, for alignment with ES6\\n *     Set.\\n */\\ngoog.structs.Set.prototype.getValues = function() {\\n  'use strict';\\n  return this.map_.getValues();\\n};\\n\\n/**\\n * @returns {!IteratorIterable<T>} An ES6 Iterator that iterates over the values\\n *     in the set.\\n */\\ngoog.structs.Set.prototype.values = function() {\\n  'use strict';\\n  return this.map_.values();\\n};\\n\\n/**\\n * Creates a shallow clone of this set.\\n * @return {!goog.structs.Set<T>} A new set containing all the same elements as\\n *     this set.\\n * @deprecated Use `new Set(thisSet.values())` for alignment with ES6 Set.\\n */\\ngoog.structs.Set.prototype.clone = function() {\\n  'use strict';\\n  return new goog.structs.Set(this);\\n};\\n\\n\\n/**\\n * Tests whether the given collection consists of the same elements as this set,\\n * regardless of order, without repetition.  Primitives are treated as equal if\\n * they have the same type and convert to the same string; objects are treated\\n * as equal if they are references to the same object.  This operation is O(n).\\n * @param {goog.structs.Collection<T>|Object} col A collection.\\n * @return {boolean} True if the given collection consists of the same elements\\n *     as this set, regardless of order, without repetition.\\n * @deprecated Use `goog.collections.equals(thisSet, col)`, converting Objects\\n *     to arrays using Object.values,  instead for alignment with ES6 Set.\\n */\\ngoog.structs.Set.prototype.equals = function(col) {\\n  'use strict';\\n  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col);\\n};\\n\\n\\n/**\\n * Tests whether the given collection contains all the elements in this set.\\n * Primitives are treated as equal if they have the same type and convert to the\\n * same string; objects are treated as equal if they are references to the same\\n * object.  This operation is O(n).\\n * @param {goog.structs.Collection<T>|Object} col A collection.\\n * @return {boolean} True if this set is a subset of the given collection.\\n * @deprecated Use `goog.collections.isSubsetOf(thisSet, col)`, converting\\n *     Objects to arrays using Object.values, instead for alignment with ES6\\n *     Set.\\n */\\ngoog.structs.Set.prototype.isSubsetOf = function(col) {\\n  'use strict';\\n  var colCount = goog.structs.getCount(col);\\n  if (this.getCount() > colCount) {\\n    return false;\\n  }\\n  if (!(col instanceof goog.structs.Set) && colCount > 5) {\\n    // Convert to a goog.structs.Set so that goog.structs.contains runs in\\n    // O(1) time instead of O(n) time.\\n    col = new goog.structs.Set(col);\\n  }\\n  return goog.structs.every(this, function(value) {\\n    'use strict';\\n    return goog.structs.contains(col, value);\\n  });\\n};\\n\\n\\n/**\\n * Returns an iterator that iterates over the elements in this set.\\n * @param {boolean=} opt_keys This argument is ignored.\\n * @return {!goog.iter.Iterator} An iterator over the elements in this set.\\n * @deprecated Call `values` and use native iteration, for alignment with ES6\\n *     Set.\\n */\\ngoog.structs.Set.prototype.__iterator__ = function(opt_keys) {\\n  'use strict';\\n  return this.map_.__iterator__(false);\\n};\\n\\n/**\\n * @return {!IteratorIterable<T>} An ES6 Iterator that iterates over the values\\n *     in the set.\\n */\\ngoog.structs.Set.prototype[Symbol.iterator] = function() {\\n  return this.values();\\n};\\n\\n/**\\n * Assigns to the size property to isolate supressions of const assignment\\n * to only where they are needed.\\n * @param {number} newSize The size to update to.\\n * @private\\n */\\ngoog.structs.Set.prototype.setSizeInternal_ = function(newSize) {\\n  /** @suppress {const} */\\n  this.size = newSize;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"structs\",\"Set\",\"goog.structs.Set\",\"opt_values\",\"map_\",\"Map\",\"size\",\"addAll\",\"getUid_\",\"getUid\",\"getKey_\",\"goog.structs.Set.getKey_\",\"val\",\"type\",\"slice\",\"prototype\",\"getCount\",\"goog.structs.Set.prototype.getCount\",\"add\",\"goog.structs.Set.prototype.add\",\"element\",\"set\",\"setSizeInternal_\",\"goog.structs.Set.prototype.addAll\",\"col\",\"values\",\"getValues\",\"l\",\"length\",\"i\",\"removeAll\",\"goog.structs.Set.prototype.removeAll\",\"remove\",\"delete\",\"goog.structs.Set.prototype.delete\",\"rv\",\"goog.structs.Set.prototype.remove\",\"clear\",\"goog.structs.Set.prototype.clear\",\"isEmpty\",\"goog.structs.Set.prototype.isEmpty\",\"has\",\"goog.structs.Set.prototype.has\",\"containsKey\",\"contains\",\"goog.structs.Set.prototype.contains\",\"containsAll\",\"goog.structs.Set.prototype.containsAll\",\"every\",\"intersection\",\"goog.structs.Set.prototype.intersection\",\"result\",\"value\",\"difference\",\"goog.structs.Set.prototype.difference\",\"clone\",\"goog.structs.Set.prototype.getValues\",\"goog.structs.Set.prototype.values\",\"goog.structs.Set.prototype.clone\",\"equals\",\"goog.structs.Set.prototype.equals\",\"isSubsetOf\",\"goog.structs.Set.prototype.isSubsetOf\",\"colCount\",\"__iterator__\",\"goog.structs.Set.prototype.__iterator__\",\"opt_keys\",\"Symbol\",\"iterator\",\"goog.structs.Set.prototype.setSizeInternal_\",\"newSize\"]\n}\n"]