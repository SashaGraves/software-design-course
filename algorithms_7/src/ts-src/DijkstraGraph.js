"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.DijkstraGraph = void 0;
var VertexDij_1 = require("./VertexDij");
var Vertex_1 = require("../Vertex");
var DijkstraGraph = /** @class */ (function () {
    function DijkstraGraph(graph) {
        this.dVerteces = [];
        this.unvisitedNodes = new Set();
        this.rememberedNeightbors = new Set();
        this.routeList = {};
        this.graph = graph;
    }
    DijkstraGraph.prototype.findAllShortestPaths = function (vertex) {
        if (!this.graph.Verteces.includes(vertex))
            throw Error('This vertex not found in graph');
        var startNode = this.initialize(vertex);
        this.doAlgorithm(startNode);
    };
    DijkstraGraph.prototype.findShortestPath = function (vertex1, vertex2) {
        var distance = 0;
        var path = [vertex2.Key];
        var result = this.doShortestPath(vertex1, vertex2, distance, path);
        return __assign(__assign({}, result), { path: result.path.reverse() });
    };
    DijkstraGraph.prototype.initialize = function (startingVertex) {
        var _this = this;
        var startingNode = null;
        this.dVerteces = this.graph.Verteces.map(function (item) {
            _this.unvisitedNodes.add(item.Key);
            if (item.Key === startingVertex.Key) {
                startingNode = new VertexDij_1.VertexDij(item.Key, true);
                return startingNode;
            }
            return new VertexDij_1.VertexDij(item.Key);
        });
        return startingNode;
    };
    DijkstraGraph.prototype.findDVertex = function (value) {
        if (typeof value === 'string') {
            return this.dVerteces.find(function (item) { return item.Key === value; });
        }
        else if (value instanceof Vertex_1.Vertex) {
            return this.dVerteces.find(function (item) { return item.Key === value.Key; });
        }
        return;
    };
    DijkstraGraph.prototype.visitNode = function (node) {
        var key = '';
        if (typeof node === 'string') {
            key = node;
        }
        else if (node instanceof Vertex_1.Vertex) {
            key = node.Key;
        }
        this.unvisitedNodes["delete"](key);
    };
    DijkstraGraph.prototype.func = function (startingNode) {
        var _this = this;
        var currentKey = startingNode.Key;
        // calculate the tentative distance to each of its unvisited neighbor nodes.
        var neightbors = this.graph.Adjacency_List[currentKey]; // ['2', '3']
        var neightborsV = [];
        neightbors.forEach(function (key) {
            if (!_this.unvisitedNodes.has(key))
                return;
            var way = currentKey + '-' + key;
            var weight = _this.graph.Weight_List[way];
            var dVertex = _this.findDVertex(key);
            if (dVertex) {
                // current mark of node ?< mark of this node + way weight
                var sum = startingNode.Mark + weight;
                var newMark = Math.min(dVertex.Mark, sum);
                if (newMark !== dVertex.Mark) {
                    // записать новую "предыдущую точку маршрута"
                    _this.routeList[dVertex.Key] = [startingNode, weight];
                }
                dVertex.Mark = newMark;
                neightborsV.push(dVertex);
            }
        });
        this.visitNode(startingNode);
        // return neightbors nodes
        if (neightborsV.length === 0)
            return;
        neightborsV.sort(function (a, b) { return a.Mark - b.Mark; });
        return neightborsV;
    };
    ;
    DijkstraGraph.prototype.doAlgorithm = function (startingNode) {
        var _this = this;
        var nextNodes = this.func(startingNode);
        if (nextNodes) {
            nextNodes.forEach(function (item) { return _this.rememberedNeightbors.add(item); });
            this.doAlgorithm(nextNodes[0]);
        }
        else {
            var previousNode = this.checkRememberedNeightbors();
            if (previousNode === 'Done') {
                return;
            }
            this.doAlgorithm(previousNode);
        }
    };
    DijkstraGraph.prototype.checkRememberedNeightbors = function () {
        for (var _i = 0, _a = this.rememberedNeightbors.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.unvisitedNodes.has(item.Key))
                return item;
            this.rememberedNeightbors["delete"](item);
        }
        return 'Done';
    };
    DijkstraGraph.prototype.doShortestPath = function (nodeFrom, nodeTo, distance, path) {
        if (nodeFrom.Key === nodeTo.Key)
            return {
                path: path,
                distance: distance
            };
        var beforeNodeTo = this.routeList[nodeTo.Key];
        if (!beforeNodeTo)
            return ({
                path: [],
                distance: Infinity
            });
        path.push(beforeNodeTo[0].Key);
        distance = distance + beforeNodeTo[1];
        return this.doShortestPath(nodeFrom, beforeNodeTo[0], distance, path);
    };
    return DijkstraGraph;
}());
exports.DijkstraGraph = DijkstraGraph;
