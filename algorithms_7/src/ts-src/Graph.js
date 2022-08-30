"use strict";
exports.__esModule = true;
exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = {};
        this.weightList = {};
        this.verteces = [];
        this.vividWeightList = [];
    }
    Graph.prototype.addVertex = function (v) {
        // добавляет вершину в список вершин 
        if (this.Verteces.includes(v))
            return;
        this.adjacencyList[v.Key] = [];
        this.adjacencyList[v.Key] = [];
        this.verteces.push(v);
    };
    ;
    Graph.prototype.addEdge = function (from, to, weight) {
        // проверяет есть ли вершины в списке
        var areVertecesExist = this.Verteces.includes(from) && this.Verteces.includes(to);
        if (!areVertecesExist)
            return;
        // добавляет список смежности
        this.adjacencyList[from.Key].push(to.Key);
        // и добавляяет весы для каждой грани
        var weightKey = from.Key + '-' + to.Key;
        this.weightList[weightKey] = weight;
        var vivdWeight = { verteces: [from, to], weight: weight };
        this.vividWeightList.push(vivdWeight);
    };
    ;
    Object.defineProperty(Graph.prototype, "Verteces", {
        get: function () {
            return this.verteces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, "Vivid_Weight_List", {
        get: function () {
            return this.vividWeightList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, "Adjacency_List", {
        get: function () {
            return this.adjacencyList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, "Weight_List", {
        get: function () {
            return this.weightList;
        },
        enumerable: false,
        configurable: true
    });
    return Graph;
}());
exports.Graph = Graph;
