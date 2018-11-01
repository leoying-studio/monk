var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Utils = /** @class */ (function (_super) {
    __extends(Utils, _super);
    function Utils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Utils.prototype.removeByIndexs = function (collections, indexs) {
        this.exchangeSort(indexs);
        indexs.reverse();
        for (var i = 0; i < indexs.length; i++) {
            for (var j = 0; j < collections.length; j++) {
                if (j === indexs[i]) {
                    collections.splice(j, 1);
                    j--;
                    break;
                }
            }
        }
        return collections.slice();
    };
    Utils.prototype.removeByValues = function (collections, values, key) {
        var list = collections.slice();
        for (var i = 0; i < values.length; i++) {
            var value = this.checkNullPointer(key) ? values[i][key] : values[i];
            for (var j = 0; j < list.length; j++) {
                var item = this.checkNullPointer(key) ? list[i][key] : list[i];
                if (value === item) {
                    list.splice(j, 1);
                    j--;
                }
            }
        }
        return list;
    };
    Utils.prototype.getIndexByAttr = function (collections, key, item) {
        for (var i = 0; i < collections.length; i++) {
            var object = collections[i];
            if (object[key] === item[key]) {
                return i;
            }
        }
    };
    Utils.countDown = function (startTime, endTime) {
        if (typeof startTime == "string" || typeof startTime == 'number') {
            startTime = new Date(startTime);
        }
        if (typeof endTime == "string" || typeof startTime == 'number') {
            endTime = new Date(endTime);
        }
        var countTime = endTime - startTime / 1000;
        var day = Math.floor(countTime / 3600 / 24);
        var hour = Math.floor((countTime / 3600) % 24);
        var minutes = Math.floor((countTime / 60) % 60);
        var second = Math.floor(countTime % 60);
        return {
            day: day,
            hour: hour,
            minutes: minutes,
            second: second
        };
    };
    return Utils;
}(SuperClass));
var util = new Utils();
var remaining = util.removeByIndexs([1, 2, 3], [2]);
util.findIndexByAttr([{ name: 'zhangsan', age: 18 }, { name: 'zhangsan', age: 18 }], "", { name: 'ss', age: 18 });
var values = util.removeByValues(['1', '2', '3'], ['1', '2']);
util.removeByIndexs(['1', '2'], []);
util.getIndexByAttr([{ name: '张三', age: 18 }], 'name', { name: '张三', age: 18, address: '' });
console.log(values);
