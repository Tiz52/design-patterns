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
exports.Thesis = void 0;
var manuscript_1 = require("../manuscript");
var Thesis = /** @class */ (function (_super) {
    __extends(Thesis, _super);
    function Thesis(formatter) {
        return _super.call(this, formatter) || this;
    }
    Thesis.prototype.getTitle = function () {
        return this.title;
    };
    Thesis.prototype.changeTitle = function (title) {
        this.title = title;
    };
    Thesis.prototype.getAuthor = function () {
        return this.author;
    };
    Thesis.prototype.changeAuthor = function (author) {
        this.author = author;
    };
    Thesis.prototype.getReferences = function () {
        return this.references;
    };
    Thesis.prototype.changeReferences = function (references) {
        this.references = references;
    };
    Thesis.prototype.getText = function () {
        return this.text;
    };
    Thesis.prototype.changeText = function (text) {
        this.text = text;
    };
    Thesis.prototype.print = function () {
        console.log(this.formatter.format("Title", this.title));
        console.log(this.formatter.format("Author", this.author));
        console.log(this.formatter.format("Text", this.text));
        console.log(this.formatter.format("References", this.references));
    };
    return Thesis;
}(manuscript_1.Manuscript));
exports.Thesis = Thesis;
