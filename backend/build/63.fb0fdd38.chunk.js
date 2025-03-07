(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[63],{

/***/ 47443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(42118);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 1196:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 48983:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(40371);

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ 41848:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 42118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(41848),
    baseIsNaN = __webpack_require__(62722),
    strictIndexOf = __webpack_require__(42351);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 62722:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 45652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(88668),
    arrayIncludes = __webpack_require__(47443),
    arrayIncludesWith = __webpack_require__(1196),
    cacheHas = __webpack_require__(74757),
    createSet = __webpack_require__(23593),
    setToArray = __webpack_require__(21814);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 23593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(58525),
    noop = __webpack_require__(50308),
    setToArray = __webpack_require__(21814);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 42351:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 88016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiSize = __webpack_require__(48983),
    hasUnicode = __webpack_require__(62689),
    unicodeSize = __webpack_require__(21903);

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ 21903:
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ 50308:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 20573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P1": () => (/* binding */ createSelector)
});

// UNUSED EXPORTS: createSelectorCreator, createStructuredSelector, defaultEqualityCheck, defaultMemoize

;// CONCATENATED MODULE: ./node_modules/reselect/es/defaultMemoize.js
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}
// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}
;// CONCATENATED MODULE: ./node_modules/reselect/es/index.js



function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}
var createSelector = /* #__PURE__ */createSelectorCreator(defaultMemoize);
// Manual definition of state and output arguments
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

/***/ }),

/***/ 53192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export subNavWidth */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Grid_Grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11276);





const p = `${232 / 16}rem`, s = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .r)`
  width: ${p};
  background: ${({ theme: r }) => r.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme: r }) => r.colors.neutral200};
  z-index: 1;
`, l = ({ ariaLabel: r, ...o }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(s, {
  "aria-label": r,
  as: "nav",
  ...o
});
l.propTypes = {
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
};



/***/ }),

/***/ 38702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ u)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.js
var Searchbar = __webpack_require__(49123);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/SearchForm.js
var SearchForm = __webpack_require__(8509);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/usePrevious.js

const usePrevious_s = (r) => {
  const e = (0,react.useRef)();
  return (0,react.useEffect)(() => {
    e.current = r;
  }), e.current;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.js














const d = (0,styled_components_browser_esm["default"])(Divider/* Divider */.i)`
  width: ${24 / 16}rem;
  background-color: ${({ theme: l }) => l.colors.neutral200};
`, u = ({ as: l, label: f, searchLabel: s, searchable: g, onChange: h, value: b, onClear: E, onSubmit: S, id: y }) => {
  const [a, c] = (0,react.useState)(!1), m = usePrevious_s(a), C = (0,useId/* useId */.M)("subnav-searchbar-clear", y), o = (0,react.useRef)(), i = (0,react.useRef)();
  (0,react.useEffect)(() => {
    a && o.current && o.current.focus(), m && !a && i.current && i.current.focus();
  }, [a, m]);
  const v = () => {
    c((t) => !t);
  }, B = (t) => {
    E(t), o.current.focus();
  }, T = (t) => {
    t.relatedTarget?.id !== C && c(!1);
  }, R = (t) => {
    t.key === keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE && c(!1);
  };
  return a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 4,
    paddingTop: 5,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(SearchForm/* SearchForm */.U, null, /* @__PURE__ */ react.createElement(Searchbar/* Searchbar */.w, {
    name: "searchbar",
    value: b,
    onChange: h,
    placeholder: "e.g: strapi-plugin-abcd",
    onKeyDown: R,
    ref: o,
    onBlur: T,
    onClear: B,
    onSubmit: S,
    clearLabel: "Clear",
    size: "S"
  }, s)), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 2,
    paddingTop: 4
  }, /* @__PURE__ */ react.createElement(d, null))) : /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 6,
    paddingTop: 6,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    variant: "beta",
    as: l
  }, f), g && /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, {
    ref: i,
    onClick: v,
    label: s,
    icon: /* @__PURE__ */ react.createElement(dist.Search, null)
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingTop: 4
  }, /* @__PURE__ */ react.createElement(d, null)));
};
u.defaultProps = {
  as: "h2",
  searchable: !1,
  onChange() {
  },
  onClear() {
  },
  onSubmit() {
  },
  value: "",
  searchLabel: "",
  id: void 0
};
u.propTypes = {
  as: prop_types.string,
  id: prop_types.string,
  label: prop_types.string.isRequired,
  onChange: prop_types.func,
  onClear: prop_types.func,
  onSubmit: prop_types.func,
  searchLabel: prop_types.string,
  searchable: prop_types.bool,
  value: prop_types.string
};



/***/ }),

/***/ 52305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41363);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75515);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11047);
/* harmony import */ var _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63507);








const $ = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme: e }) => e.colors.neutral800};
  svg > * {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }

  &.active {
    ${({ theme: e }) => `
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`, s = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__.Dot)`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme: e, $active: o }) => o ? e.colors.primary600 : e.colors.neutral600};
  }
`, b = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`, n = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({ children: e, icon: o, withBullet: c, as: m, isSubSectionChild: d, ...u }, f) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement($, {
  as: m,
  icon: o,
  background: "neutral100",
  paddingLeft: d ? 9 : 7,
  paddingBottom: 2,
  paddingTop: 2,
  ref: f,
  ...u
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k, null, o ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(b, null, o) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(s, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
  paddingLeft: 2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
  as: "span"
}, e))), c && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
  as: _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k,
  paddingRight: 4
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(s, {
  $active: !0
}))));
n.displayName = "SubNavLink";
n.defaultProps = {
  as: _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_6__/* .BaseLink */ .f,
  icon: null,
  isSubSectionChild: !1,
  withBullet: !1
};
n.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_7__.elementType,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7__.node.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_7__.element,
  isSubSectionChild: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  withBullet: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool
};



/***/ }),

/***/ 29489:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ p)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.js
var Badge = __webpack_require__(30190);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSectionLabel.js







const i = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  border: none;
  padding: 0;
  background: transparent;
`, f = styled_components_browser_esm["default"].div`
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, SubNavSectionLabel_m = ({ collapsable: t, label: a, onClick: d, ariaExpanded: o, ariaControls: c }) => t ? /* @__PURE__ */ react.createElement(i, {
  as: "button",
  onClick: d,
  "aria-expanded": o,
  "aria-controls": c,
  textAlign: "left"
}, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
  paddingRight: 1
}, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
  variant: "sigma",
  textColor: "neutral600"
}, a)), t && /* @__PURE__ */ react.createElement(f, {
  rotated: o
}, /* @__PURE__ */ react.createElement(dist.CarretDown, {
  "aria-hidden": !0
}))) : /* @__PURE__ */ react.createElement(i, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
  paddingRight: 1
}, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
  variant: "sigma",
  textColor: "neutral600"
}, a)));
SubNavSectionLabel_m.defaultProps = {
  ariaControls: null,
  ariaExpanded: null,
  collapsable: !1,
  onClick() {
  }
};
SubNavSectionLabel_m.propTypes = {
  ariaControls: prop_types.string,
  ariaExpanded: prop_types.bool,
  collapsable: prop_types.bool,
  label: prop_types.string.isRequired,
  onClick: prop_types.func
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.js








const C = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral500};
    }
  }
`, p = ({ collapsable: r, label: s, badgeLabel: o, children: d, id: m }) => {
  const [a, c] = (0,react.useState)(!0), n = (0,useId/* useId */.M)("subnav-list", m), u = () => {
    c((i) => !i);
  };
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(C, {
    paddingLeft: 6,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    position: "relative",
    paddingRight: o ? 6 : 0
  }, /* @__PURE__ */ react.createElement(SubNavSectionLabel_m, {
    onClick: u,
    ariaExpanded: a,
    ariaControls: n,
    collapsable: r,
    label: s
  }), o && /* @__PURE__ */ react.createElement(Badge/* Badge */.C, {
    backgroundColor: "neutral150",
    textColor: "neutral600",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)"
  }, o))), (!r || a) && /* @__PURE__ */ react.createElement("ol", {
    id: n
  }, react.Children.map(d, (i, g) => /* @__PURE__ */ react.createElement("li", {
    key: g
  }, i))));
};
p.defaultProps = {
  badgeLabel: null,
  collapsable: !1,
  id: void 0
};
p.propTypes = {
  badgeLabel: prop_types.string,
  children: prop_types.node.isRequired,
  collapsable: prop_types.bool,
  id: prop_types.string,
  label: prop_types.string.isRequired
};



/***/ }),

/***/ 34446:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Stack_Stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7681);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41580);




const c = ({ children: r, ...t }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, {
  paddingTop: 2,
  paddingBottom: 4
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_2__/* .Stack */ .K, {
  as: "ol",
  spacing: 2,
  ...t
}, react__WEBPACK_IMPORTED_MODULE_0__.Children.map(r, (o, p) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
  key: p
}, o))));
c.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.node.isRequired
};



/***/ }),

/***/ 14484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function l(e) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: 0.5,
      y: 0.5,
      width: 31,
      height: 23,
      rx: 2.5,
      fill: "#EAFBE7",
      stroke: "#C6F0C2"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M19.5 7h-7A4.505 4.505 0 008 11.5c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5S21.981 7 19.5 7zm0 8a3.5 3.5 0 110-7 3.5 3.5 0 010 7z",
      fill: "#328048"
    })]
  });
}



/***/ }),

/***/ 85038:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function v(m) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...m,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: 0.5,
      y: 0.5,
      width: 31,
      height: 23,
      rx: 2.5,
      fill: "#F6F6F9",
      stroke: "#DCDCE4"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.535 8.768c0 .116-.011.229-.032.339l3.013 1.776 2.985-1.76a1.768 1.768 0 11.519.93l-2.982 1.757v2.477a1.768 1.768 0 11-1.048-.044v-2.435l-2.997-1.767a1.768 1.768 0 11.542-1.274z",
      fill: "#666687"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M13.503 9.107l-.05-.01-.006.035.03.018.026-.043zm3.013 1.776l-.025.043.025.014.025-.014-.025-.043zm2.985-1.76l.025.044.031-.018-.007-.035-.05.01zm.518.93l.035-.036-.027-.026-.033.02.026.042zm-2.98 1.757l-.026-.043-.025.014v.029h.05zm0 2.477h-.05v.035l.032.012.017-.047zm-1.049-.044l.013.048.037-.01v-.038h-.05zm0-2.435h.05v-.029l-.024-.014-.026.043zm-2.997-1.767l.025-.043-.033-.019-.027.027.035.035zm.559-.925c.022-.113.033-.23.033-.348h-.1c0 .112-.01.223-.031.33l.098.018zm2.99 1.723l-3.014-1.775-.05.086 3.013 1.775.05-.086zm2.933-1.758l-2.984 1.758.05.086 2.985-1.758-.05-.086zm-.06-.313c0 .125.013.247.037.366l.098-.02a1.723 1.723 0 01-.035-.346h-.1zm1.818-1.818a1.818 1.818 0 00-1.818 1.818h.1c0-.949.769-1.718 1.718-1.718v-.1zm1.817 1.818a1.818 1.818 0 00-1.817-1.818v.1c.948 0 1.717.769 1.717 1.718h.1zm-1.817 1.817a1.818 1.818 0 001.817-1.817h-.1c0 .948-.769 1.717-1.717 1.717v.1zm-1.248-.495c.326.307.765.495 1.248.495v-.1c-.457 0-.872-.178-1.18-.468l-.068.073zm-2.921 1.763l2.98-1.757-.05-.086-2.981 1.757.05.086zm.024 2.434V11.81h-.1v2.477h.1zm-.067.047a1.718 1.718 0 011.14 1.618h.1c0-.79-.503-1.46-1.206-1.712l-.034.094zm1.14 1.618c0 .948-.77 1.717-1.718 1.717v.1a1.817 1.817 0 001.817-1.817h-.1zm-1.718 1.717a1.718 1.718 0 01-1.718-1.717h-.1c0 1.004.814 1.817 1.818 1.817v-.1zm-1.718-1.717c0-.797.543-1.467 1.278-1.66l-.026-.098a1.818 1.818 0 00-1.352 1.758h.1zm1.215-4.144v2.435h.1v-2.435h-.1zm-2.973-1.723l2.998 1.766.05-.086-2.997-1.767-.05.087zm-1.2.5c.49 0 .934-.193 1.26-.507l-.069-.072c-.309.296-.728.48-1.19.48v.1zM9.95 8.768c0 1.003.814 1.817 1.818 1.817v-.1a1.718 1.718 0 01-1.718-1.717h-.1zm1.818-1.818A1.818 1.818 0 009.95 8.768h.1c0-.949.769-1.718 1.717-1.718v-.1zm1.817 1.818a1.818 1.818 0 00-1.818-1.818v.1c.95 0 1.718.769 1.718 1.718h.1z",
      fill: "#666687"
    })]
  });
}



/***/ }),

/***/ 34668:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function c(h) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...h,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",
      fill: "#FDF4DC",
      stroke: "#FAE7B9"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.934 7.495V6h1.45v1.495h5.232V6h1.45v1.495h.314c1.385 0 1.602.249 1.62 1.463V16.5c0 1.062-.096 1.5-1.4 1.5h-9.19c-1.306 0-1.41-.318-1.41-1.607V9.105c.018-1.025.117-1.61 1.5-1.61h.434zm-.774 8.687c0 .406.123.433.388.433h8.953c.265 0 .34-.007.34-.413v-6.087c-.008-.314-.11-.369-.316-.369h-9.072c-.206 0-.296.045-.293.287v6.15z",
      fill: "#D9822F"
    })]
  });
}



/***/ }),

/***/ 65531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function r(e) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: 0.5,
      y: 0.5,
      width: 31,
      height: 23,
      rx: 2.5,
      fill: "#F6F6F9",
      stroke: "#DCDCE4"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M20.573 8c-1.484 0-2.666.745-3.397 1.37l-.026.023-.416.452.919 1.51.68-.682c.711-.6 1.506-.93 2.24-.93 1.48 0 2.685 1.171 2.685 2.612 0 1.44-1.205 2.613-2.685 2.613-2.25 0-3.78-2.974-3.795-3.004C16.69 11.784 14.75 8 11.428 8 8.985 8 7 9.954 7 12.355c0 2.401 1.986 4.355 4.427 4.355 1.196 0 2.373-.476 3.404-1.376l.022-.02.413-.45-.919-1.51-.683.686c-.712.616-1.465.928-2.237.928-1.48 0-2.685-1.172-2.685-2.613 0-1.44 1.205-2.613 2.685-2.613 2.25 0 3.78 2.974 3.795 3.004.088.18 2.028 3.964 5.35 3.964 2.442 0 4.428-1.954 4.428-4.355C25 9.954 23.014 8 20.573 8z",
      fill: "#666687"
    })]
  });
}



/***/ }),

/***/ 73145:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function h(t) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: 0.5,
      y: 0.5,
      width: 31,
      height: 23,
      rx: 2.5,
      fill: "#FCECEA",
      stroke: "#F5C0B8"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M16.767 17.49c.724 0 1.428-.089 1.962-.253v-1.093c-.383.143-1.128.239-1.86.239-2.905 0-4.744-1.764-4.744-4.546v-.014c0-2.734 1.839-4.641 4.484-4.641 2.598 0 4.307 1.62 4.307 4.088v.013c0 1.402-.444 2.304-1.135 2.304-.417 0-.656-.287-.656-.772V9.157h-1.38v.82h-.124c-.273-.608-.868-.97-1.6-.97-1.367 0-2.296 1.135-2.296 2.789v.014c0 1.73.943 2.884 2.365 2.884.793 0 1.353-.362 1.64-1.052h.123l.007.04c.158.636.78 1.033 1.62 1.033 1.655 0 2.687-1.367 2.687-3.534v-.014c0-3.008-2.242-5.072-5.517-5.072-3.418 0-5.776 2.324-5.776 5.694v.014c0 3.431 2.331 5.687 5.893 5.687zm-.342-4.053c-.718 0-1.149-.602-1.149-1.586v-.014c0-.991.431-1.586 1.156-1.586.724 0 1.182.608 1.182 1.586v.014c0 .977-.458 1.585-1.19 1.585z",
      fill: "#D02B20"
    })]
  });
}



/***/ }),

/***/ 82574:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function l(a) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...a,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: 0.5,
      y: 0.5,
      width: 31,
      height: 23,
      rx: 2.5,
      fill: "#F6ECFC",
      stroke: "#E0C1F4"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.167 7a1.167 1.167 0 100 2.333 1.167 1.167 0 000-2.333zm0 4.03a1.167 1.167 0 100 2.334 1.167 1.167 0 000-2.334zM9 16.23a1.167 1.167 0 112.333 0 1.167 1.167 0 01-2.333 0zm4.005-9.02a.4.4 0 00-.4.4v1.11c0 .22.18.4.4.4H22.6a.4.4 0 00.4-.4V7.61a.4.4 0 00-.4-.4h-9.594zm-.399 4.432a.4.4 0 01.4-.4H22.6c.22 0 .4.18.4.4v1.11a.4.4 0 01-.4.4h-9.594a.4.4 0 01-.4-.4v-1.11zm.4 3.63a.4.4 0 00-.4.4v1.11c0 .22.18.4.4.4H22.6a.4.4 0 00.4-.4v-1.11a.4.4 0 00-.4-.4h-9.594z",
      fill: "#9736E8"
    })]
  });
}



/***/ }),

/***/ 60133:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function l(e) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: 0.5,
      y: 0.5,
      width: 31,
      height: 23,
      rx: 2.5,
      fill: "#EAF5FF",
      stroke: "#B8E1FF"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.243 11.907v.157c.835.093 1.287.516 1.287 1.223V14.5c0 .693.236.959.855.959h.216V16.5h-.364c-1.459 0-2.078-.56-2.078-1.857v-.973c0-.722-.314-.992-1.159-1.002v-1.366c.84-.005 1.16-.275 1.16-1.002v-.968c0-1.282.618-1.832 2.077-1.832h.364v1.041h-.216c-.624 0-.855.266-.855.958v1.184c0 .713-.452 1.135-1.287 1.224zm15.804.181v-.157c-.835-.088-1.287-.51-1.287-1.223V9.495c0-.693-.236-.954-.855-.954h-.216V7.5h.363c1.454 0 2.073.56 2.073 1.852v.973c0 .722.32.997 1.165 1.002v1.366c-.845.005-1.165.28-1.165 1.002v.973c0 1.282-.613 1.832-2.073 1.832h-.363v-1.046h.216c.619 0 .855-.26.855-.954v-1.188c0-.708.452-1.13 1.287-1.224zM13.15 13a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2z",
      fill: "#0C75AF"
    })]
  });
}



/***/ }),

/***/ 74525:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function d(l) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...l,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: 0.5,
      y: 0.5,
      width: 31,
      height: 23,
      rx: 2.5,
      fill: "#F6ECFC",
      stroke: "#E0C1F4"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 8.759a2 2 0 00-2-2h-8c-1.105 0-2 .902-2 2.006v6.068a2 2 0 00.985 1.724l3.66-3.74 3.31 3.381 1.471-1.502 1.731 1.769c.51-.363.843-.958.843-1.632V8.76zM18.5 9c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5S19.34 9 18.5 9z",
      fill: "#9736E8"
    })]
  });
}



/***/ }),

/***/ 31666:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function t(l) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...l,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: 0.5,
      y: 0.5,
      width: 31,
      height: 23,
      rx: 2.5,
      fill: "#FCECEA",
      stroke: "#F5C0B8"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M9.815 16h1.475V8.954H9.82L8 10.22v1.328l1.729-1.201h.087V16zm3.394 0h5.083v-1.187h-3.106v-.112l1.304-1.216c1.284-1.186 1.7-1.85 1.7-2.651v-.015c0-1.215-1.016-2.046-2.466-2.046-1.543 0-2.598.928-2.598 2.28l.005.02h1.362v-.024c0-.67.474-1.128 1.162-1.128.674 0 1.084.42 1.084 1.02v.015c0 .493-.268.85-1.26 1.812l-2.27 2.24V16zm9.067.156c1.646 0 2.744-.864 2.744-2.143v-.01c0-.957-.683-1.563-1.733-1.66v-.03c.825-.17 1.47-.742 1.47-1.62v-.01c0-1.123-.977-1.885-2.49-1.885-1.48 0-2.471.82-2.574 2.08l-.005.059h1.358l.005-.044c.058-.586.522-.962 1.216-.962.693 0 1.098.361 1.098.947v.01c0 .571-.478.962-1.22.962h-.787v1.05h.806c.855 0 1.357.37 1.357 1.044v.01c0 .596-.493 1.016-1.245 1.016-.761 0-1.264-.39-1.328-.938l-.005-.053h-1.41l.004.063c.098 1.26 1.148 2.114 2.74 2.114z",
      fill: "#D02B20"
    })]
  });
}



/***/ }),

/***/ 48394:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function i(a) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...a,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",
      fill: "#F0F0FF",
      stroke: "#D9D8FF"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21.375 16.316c.417-.407.625-.904.625-1.492 0-.589-.206-1.089-.618-1.5l-1.53-1.53a2.042 2.042 0 00-1.5-.617 2.06 2.06 0 00-1.529.646l-.646-.646c.43-.422.646-.934.646-1.537a2.03 2.03 0 00-.61-1.493l-1.515-1.522a2.014 2.014 0 00-1.5-.625 2.03 2.03 0 00-1.492.61l-1.081 1.074A2.006 2.006 0 0010 9.176c0 .589.206 1.089.618 1.5l1.53 1.53c.41.412.91.617 1.5.617a2.06 2.06 0 001.529-.646l.646.646a2.069 2.069 0 00-.646 1.537c0 .588.203 1.086.61 1.493l1.514 1.522c.407.417.907.625 1.5.625a2.03 2.03 0 001.493-.61l1.081-1.074zm-5.956-6.678a.68.68 0 00-.205-.5l-1.515-1.522a.68.68 0 00-.5-.206.71.71 0 00-.5.199l-1.081 1.073a.672.672 0 00-.206.493.68.68 0 00.206.5l1.53 1.53a.678.678 0 00.5.198.71.71 0 00.529-.228l-.14-.136a4.46 4.46 0 01-.158-.158 1.756 1.756 0 01-.11-.14.593.593 0 01-.122-.39.68.68 0 01.206-.5.68.68 0 01.5-.206.59.59 0 01.39.121c.064.047.11.084.14.111.03.027.082.08.158.158l.136.14a.713.713 0 00.242-.537zm5.168 5.187a.68.68 0 00-.206-.5l-1.529-1.53a.68.68 0 00-.5-.205.7.7 0 00-.53.235l.14.136c.079.076.132.129.159.158.027.03.063.076.11.14a.591.591 0 01.121.39.681.681 0 01-.206.5.681.681 0 01-.5.206.591.591 0 01-.39-.121 1.746 1.746 0 01-.14-.111 4.395 4.395 0 01-.157-.158 20.642 20.642 0 00-.136-.14.714.714 0 00-.037 1.037l1.515 1.522a.678.678 0 00.5.198.708.708 0 00.5-.19l1.08-1.074a.672.672 0 00.206-.493z",
      fill: "#4945FF"
    })]
  });
}



/***/ }),

/***/ 21210:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function i(t) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: 0.5,
      y: 0.5,
      width: 31,
      height: 23,
      rx: 2.5,
      fill: "#EAFBE7",
      stroke: "#C6F0C2"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M8.62 16h1.857l.627-2.05h2.982l.627 2.05h1.863l-2.941-8.455h-2.08L8.619 16zm3.925-6.768h.105l1.032 3.393h-2.174l1.037-3.393zM21.65 16.1c1.612 0 2.62-1.26 2.62-3.323v-.011c0-2.075-.985-3.323-2.62-3.323-.884 0-1.605.434-1.933 1.137h-.106V7.082h-1.71V16h1.71v-1.002h.106c.334.697 1.02 1.102 1.933 1.102zm-.585-1.418c-.903 0-1.471-.715-1.471-1.899v-.011c0-1.184.574-1.91 1.47-1.91.903 0 1.465.726 1.465 1.904v.011c0 1.19-.556 1.905-1.465 1.905z",
      fill: "#328048"
    })]
  });
}



/***/ }),

/***/ 3963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function s(e) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",
      fill: "#F0F0FF",
      stroke: "#D9D8FF"
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M14.907 9.438c0 .375 0 .738.118 1.078-1.243 1.46-4.526 5.317-4.832 5.611a.582.582 0 00-.193.433c0 .245.15.481.277.614.19.2 1.004.952 1.154.808.444-.433.533-.548.715-.727.274-.268-.029-.816.066-1.039.096-.222.197-.265.361-.3.165-.034.456.084.684.087.24.003.369-.098.548-.265.144-.133.248-.257.25-.45.007-.26-.368-.603-.089-.877.28-.274.684.178.981.144.297-.035.658-.447.695-.623.038-.176-.337-.629-.28-.886.02-.086.197-.288.33-.317.132-.029.72.199.853.17.162-.034.35-.205.502-.3.447.193.854.271 1.376.271C20.4 12.87 22 11.33 22 9.432 22 7.534 20.399 6 18.423 6s-3.516 1.54-3.516 3.438zm5.247-.669a.923.923 0 11-1.847 0 .923.923 0 011.847 0z",
      fill: "#4945FF"
    })]
  });
}



/***/ })

}]);