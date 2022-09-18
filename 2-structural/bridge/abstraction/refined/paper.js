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
exports.Paper = void 0;
var manuscript_1 = require("../manuscript");
var Paper = /** @class */ (function (_super) {
    __extends(Paper, _super);
    function Paper(formatter) {
        return _super.call(this, formatter) || this;
    }
    Paper.prototype.getTitle = function () {
        return this.title;
    };
    Paper.prototype.changeTitle = function (title) {
        this.title = title;
    };
    Paper.prototype.getAuthor = function () {
        return this.author;
    };
    Paper.prototype.changeAuthor = function (author) {
        this.author = author;
    };
    Paper.prototype.getReferences = function () {
        return this.references;
    };
    Paper.prototype.changeReferences = function (references) {
        this.references = references;
    };
    Paper.prototype.getText = function () {
        return this.text;
    };
    Paper.prototype.changeText = function (text) {
        this.text = text;
    };
    Paper.prototype.print = function () {
        console.log(this.formatter.format("Title", this.title));
        console.log(this.formatter.format("Author", this.author));
        console.log(this.formatter.format("Text", this.text));
        console.log(this.formatter.format("References", this.references));
    };
    return Paper;
}(manuscript_1.Manuscript));
exports.Paper = Paper;
