"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VertexDij = void 0;
var Vertex_1 = require("./Vertex");
var VertexDij = /** @class */ (function (_super) {
    __extends(VertexDij, _super);
    function VertexDij(key, isStarting) {
        if (isStarting === void 0) { isStarting = false; }
        var _this = _super.call(this, key) || this;
        if (isStarting) {
            _this.mark = 0;
        }
        else {
            _this.mark = Number.MAX_SAFE_INTEGER;
            ;
        }
        return _this;
    }
    Object.defineProperty(VertexDij.prototype, "Mark", {
        get: function () {
            return this.mark;
        },
        set: function (value) {
            this.mark = value;
        },
        enumerable: false,
        configurable: true
    });
    return VertexDij;
}(Vertex_1.Vertex));
exports.VertexDij = VertexDij;
