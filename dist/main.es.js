(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.gentle = {}));
})(this, (function (exports) { 'use strict';

    var FIND_KEY = 'id';
    var ASSIGN_KEY = 'children';

    function removeByIndexs(source, indexs) {
      var pointers = Array.from(indexs);
      pointers.sort(function (a, b) {
        return a - b;
      });

      for (var i = 0; i < pointers.length; i++) {
        for (var j = 0; j < source.length; j++) {
          if (j === pointers[i]) {
            source.splice(j, 1);
            j--;
          }
        }
      }

      return Array.from(source);
    }

    function merger(source, schema) {
      if (schema === void 0) {
        schema = {};
      }

      var mergedSource = [];
      var findKey = schema.findKey || FIND_KEY;
      var assignKey = schema.assignKey || ASSIGN_KEY;

      var find = function find(current) {
        return mergedSource.find(function (item) {
          return item[findKey] === current[findKey];
        });
      };

      source.forEach(function (item) {
        var _a;

        var el = find(item);

        if (el) {
          el[assignKey].push(item);
        } else {
          var newItem = Object.assign(item, (_a = {}, _a[assignKey] = [], _a));
          mergedSource.push(newItem);
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
