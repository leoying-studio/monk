"use strict";
exports.__esModule = true;
var SuperClass = /** @class */ (function () {
    function SuperClass() {
        this._versions = 1.0;
        this._events = {};
    }
    SuperClass.prototype.getVersions = function () {
        return this._versions;
    };
    SuperClass.prototype.getEvents = function () {
        return this._events;
    };
    SuperClass.prototype.on = function (name, callback) {
        if (!this._events[name]) {
            this._events[name] = [callback];
        }
        else {
            this._events[name].push();
        }
    };
    SuperClass.prototype.emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._events[name]) {
            var events = this._events[name];
            events.forEach(function (callback) {
                callback.apply(void 0, args);
            });
        }
    };
    SuperClass.prototype.removeListen = function (name) {
        this._events[name] = [];
    };
    /**
     * 检查空指针异常
     * @param value
     * return true | false
     */
    SuperClass.prototype.checkNullPointer = function (value) {
        return typeof value !== 'undefined';
    };
    /**
     * 交换排序
     * @param collections Array
     * @param orderBy boolean
     */
    SuperClass.prototype.exchangeSort = function (collections, orderBy) {
        if (orderBy === void 0) { orderBy = true; }
        for (var i = 0; i < collections.length; i++) {
            for (var j = 0; j < i; j++) {
                var ascend = orderBy ? collections[j] > collections[i] : collections[j] < collections[i];
                if (ascend) {
                    var el = collections[i];
                    collections[i] = collections[j];
                    collections[j] = el;
                }
            }
        }
    };
    return SuperClass;
}());
exports["default"] = SuperClass;
