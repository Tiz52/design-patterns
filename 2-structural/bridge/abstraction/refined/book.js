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
exports.Book = void 0;
var manuscript_1 = require("../manuscript");
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(formatter) {
        return _super.call(this, formatter) || this;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.changeTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.changeAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.getText = function () {
        return this.text;
    };
    Book.prototype.changeText = function (text) {
        this.text = text;
    };
    Book.prototype.print = function () {
        console.log(this.formatter.format("Title", this.title));
        console.log(this.formatter.format("Author", this.author));
        console.log(this.formatter.format("Text", this.text));
    };
    return Book;
}(manuscript_1.Manuscript));
exports.Book = Book;
