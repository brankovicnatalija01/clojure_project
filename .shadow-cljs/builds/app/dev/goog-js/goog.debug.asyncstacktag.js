["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/debug/asyncstacktag.js"],"~:js","goog.loadModule(function(exports) {\n  function wrap(fn, name = \"anonymous\") {\n    function wrappedFn(...args) {\n      return consoleTask[\"run\"](() => {\n        return fn.call(this, ...args);\n      });\n    }\n    if (!goog.DEBUG || !createTask) {\n      return fn;\n    }\n    if (fn[assertExists(CONSOLE_TASK_SYMBOL)]) {\n      return fn;\n    }\n    const consoleTask = createTask(fn.name || name);\n    wrappedFn[assertExists(CONSOLE_TASK_SYMBOL)] = consoleTask;\n    return wrappedFn;\n  }\n  \"use strict\";\n  goog.module(\"goog.debug.asyncStackTag\");\n  goog.module.declareLegacyNamespace();\n  const {assertExists} = goog.require(\"goog.asserts\");\n  const createTask = goog.DEBUG && goog.global.console && goog.global.console.createTask ? goog.global.console.createTask.bind(goog.global.console) : undefined;\n  const CONSOLE_TASK_SYMBOL = createTask ? Symbol(\"consoleTask\") : undefined;\n  exports = {wrap};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utilites for creating and running console tasks which improve\n * stack traces of asynchronous code using the Async Stack Tagging API\n * (https://developer.chrome.com/docs/devtools/console/api/#createtask).\n */\n\ngoog.module('goog.debug.asyncStackTag');\ngoog.module.declareLegacyNamespace();\n\nconst {assertExists} = goog.require('goog.asserts');\n\n/**\n * Store a local variable with the createTask function. This prevents tests that\n * overwrite console from failing.\n * @const {(function(string): ?)|undefined}\n */\nconst createTask =\n    goog.DEBUG && goog.global.console && goog.global.console.createTask ?\n    goog.global.console.createTask.bind(goog.global.console) :\n    undefined;\n\n/** @const {symbol|undefined} */\nconst CONSOLE_TASK_SYMBOL = createTask ? Symbol('consoleTask') : undefined;\n\n/**\n * Utility to wrap the function to tag its stack at this point. If the function\n * has already been tagged, this does nothing.\n * @param {!T} fn\n * @param {string=} name\n * @return {!T}\n * @template T\n */\nfunction wrap(fn, name = 'anonymous') {\n  if (!goog.DEBUG || !createTask) return fn;\n\n  if (fn[assertExists(CONSOLE_TASK_SYMBOL)]) {\n    return fn;\n  }\n  const consoleTask = createTask(fn.name || name);\n  function wrappedFn(...args) {\n    return consoleTask['run'](() => fn.call(/** @type {?} */ (this), ...args));\n  }\n  wrappedFn[assertExists(CONSOLE_TASK_SYMBOL)] = consoleTask;\n  return wrappedFn;\n}\n\nexports = {\n  wrap,\n};","~:compiled-at",1736163560228,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.debug.asyncstacktag.js\",\n\"lineCount\":27,\n\"mappings\":\"AAAA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAsCAA,UAASA,KAAI,CAACC,EAAD,EAAKC,IAAA,GAAO,WAAZ,CAAyB;AAOpCC,YAASA,UAAS,CAAC,GAAGC,IAAJ,CAAU;AAC1B,aAAOC,WAAA,CAAY,KAAZ,CAAA,CAAmB,EAAA,IAAM;AAAA,eAAAJ,EAAGK,CAAAA,IAAH,CAA0B,IAA1B,EAAiC,GAAGF,IAApC,CAAA;AAAA,OAAzB,CAAP;AAD0B;AAN5B,QAAI,CAACG,IAAKC,CAAAA,KAAV,IAAmB,CAACC,UAApB;AAAgC,aAAOR,EAAP;AAAhC;AAEA,QAAIA,EAAA,CAAGS,YAAA,CAAaC,mBAAb,CAAH,CAAJ;AACE,aAAOV,EAAP;AADF;AAGA,UAAMI,cAAcI,UAAA,CAAWR,EAAGC,CAAAA,IAAd,IAAsBA,IAAtB,CAApB;AAIAC,aAAA,CAAUO,YAAA,CAAaC,mBAAb,CAAV,CAAA,GAA+CN,WAA/C;AACA,WAAOF,SAAP;AAXoC;AAtCtC,cAAA;AAYAI,MAAKK,CAAAA,MAAL,CAAY,0BAAZ,CAAA;AACAL,MAAKK,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAEA,QAAM,CAACH,YAAD,CAAA,GAAiBH,IAAKO,CAAAA,OAAL,CAAa,cAAb,CAAvB;AAOA,QAAML,aACFF,IAAKC,CAAAA,KAAL,IAAcD,IAAKQ,CAAAA,MAAOC,CAAAA,OAA1B,IAAqCT,IAAKQ,CAAAA,MAAOC,CAAAA,OAAQP,CAAAA,UAAzD,GACAF,IAAKQ,CAAAA,MAAOC,CAAAA,OAAQP,CAAAA,UAAWQ,CAAAA,IAA/B,CAAoCV,IAAKQ,CAAAA,MAAOC,CAAAA,OAAhD,CADA,GAEAE,SAHJ;AAMA,QAAMP,sBAAsBF,UAAA,GAAaU,MAAA,CAAO,aAAP,CAAb,GAAqCD,SAAjE;AAwBAE,SAAA,GAAU,CACRpB,IADQ,CAAV;AApDA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/debug/asyncstacktag.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Utilites for creating and running console tasks which improve\\n * stack traces of asynchronous code using the Async Stack Tagging API\\n * (https://developer.chrome.com/docs/devtools/console/api/#createtask).\\n */\\n\\ngoog.module('goog.debug.asyncStackTag');\\ngoog.module.declareLegacyNamespace();\\n\\nconst {assertExists} = goog.require('goog.asserts');\\n\\n/**\\n * Store a local variable with the createTask function. This prevents tests that\\n * overwrite console from failing.\\n * @const {(function(string): ?)|undefined}\\n */\\nconst createTask =\\n    goog.DEBUG && goog.global.console && goog.global.console.createTask ?\\n    goog.global.console.createTask.bind(goog.global.console) :\\n    undefined;\\n\\n/** @const {symbol|undefined} */\\nconst CONSOLE_TASK_SYMBOL = createTask ? Symbol('consoleTask') : undefined;\\n\\n/**\\n * Utility to wrap the function to tag its stack at this point. If the function\\n * has already been tagged, this does nothing.\\n * @param {!T} fn\\n * @param {string=} name\\n * @return {!T}\\n * @template T\\n */\\nfunction wrap(fn, name = 'anonymous') {\\n  if (!goog.DEBUG || !createTask) return fn;\\n\\n  if (fn[assertExists(CONSOLE_TASK_SYMBOL)]) {\\n    return fn;\\n  }\\n  const consoleTask = createTask(fn.name || name);\\n  function wrappedFn(...args) {\\n    return consoleTask['run'](() => fn.call(/** @type {?} */ (this), ...args));\\n  }\\n  wrappedFn[assertExists(CONSOLE_TASK_SYMBOL)] = consoleTask;\\n  return wrappedFn;\\n}\\n\\nexports = {\\n  wrap,\\n};\"],\n\"names\":[\"wrap\",\"fn\",\"name\",\"wrappedFn\",\"args\",\"consoleTask\",\"call\",\"goog\",\"DEBUG\",\"createTask\",\"assertExists\",\"CONSOLE_TASK_SYMBOL\",\"module\",\"declareLegacyNamespace\",\"require\",\"global\",\"console\",\"bind\",\"undefined\",\"Symbol\",\"exports\"]\n}\n"]