"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Random() {
    var BASE62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    var base62 = function (size) {
        var bytes = crypto.getRandomValues(new Uint8Array(size));
        var chars = [];
        for (var i = 0; i < size; ++i) {
            chars[i] = BASE62[bytes[i] % 62];
        }
        return chars.join('');
    };
    return {
        id: function (size) { return base62(size); }
    };
}
exports.Random = Random;
