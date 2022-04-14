(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.gentle = {}));
})(this, (function (exports) { 'use strict';

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function removeByIndexs(source, indexs) {
    for (var i = 0; i < indexs.length; i++) {
      for (var j = 0; j < source.length; j++) {
        if (j === indexs[i]) {
          source.splice(j, 1);
          j--;
        }
      }
    }

    return Array.from(source);
  }

  function merger(source) {
    var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mergedSource = [];
    var findKey = schema.findKey || "id";
    var assignKey = schema.assignKey || "children";

    var find = function find(current) {
      return mergedSource.find(function (item) {
        return item[findKey] === current[findKey];
      });
    };

    source.forEach(function (item) {
      var el = find(item);

      if (el) {
        el[assignKey] = [].concat(_toConsumableArray(el[assignKey]), [item]);
      } else {
        mergedSource.push(item);
      }
    });
    return mergedSource;
  }

  function flatten() {}

  var isInteger = function isInteger(value) {
    return typeof value === 'number' && value % 1 === 0;
  };

  exports.flatten = flatten;
  exports.isInteger = isInteger;
  exports.merger = merger;
  exports.removeByIndexs = removeByIndexs;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
