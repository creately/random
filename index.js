"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Random = /** @class */ (function () {
    function Random() {
    }
    Random.base62 = function (size) {
        var bytes = crypto.getRandomValues(new Uint8Array(size));
        var chars = [];
        for (var i = 0; i < size; ++i) {
            chars[i] = this.BASE62[bytes[i] % 62];
        }
        return chars.join('');
    };
    Random.id = function (size) {
        return this.base62(size);
    };
    Random.BASE62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    return Random;
}());
exports.Random = Random;
