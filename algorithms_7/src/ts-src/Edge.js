"use strict";
exports.__esModule = true;
exports.Edge = void 0;
var Edge = /** @class */ (function () {
    function Edge(vertex1, vertex2, weight) {
        this.from = vertex1;
        this.to = vertex2;
        this.weight = weight;
    }
    Object.defineProperty(Edge.prototype, "To", {
        get: function () {
            return this.to;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "From", {
        get: function () {
            return this.from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "Weight", {
        get: function () {
            return this.weight;
        },
        enumerable: false,
        configurable: true
    });
    return Edge;
}());
exports.Edge = Edge;
