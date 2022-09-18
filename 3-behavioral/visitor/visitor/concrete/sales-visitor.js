"use strict";
exports.__esModule = true;
exports.SalesVisitor = void 0;
var SalesVisitor = /** @class */ (function () {
    function SalesVisitor() {
        this.bookCount = 0;
        this.laptopCount = 0;
        this.iphoneCount = 0;
        this.macCount = 0;
    }
    SalesVisitor.prototype.visitBook = function (book) {
        this.bookCount++;
    };
    SalesVisitor.prototype.visitLaptop = function (laptop) {
        this.laptopCount++;
    };
    SalesVisitor.prototype.visitIPhone = function (iphone) {
        this.iphoneCount++;
    };
    SalesVisitor.prototype.visitMacBookPro = function (mac) {
        this.macCount++;
    };
    SalesVisitor.prototype.print = function () {
        console.log("Books sold: %d \nLaptops sold: %d \niPhones sold: %d \nMacBookPro sold: %d", this.bookCount, this.laptopCount, this.iphoneCount, this.macCount);
        console.log("The store sold %d units today!", (this.bookCount + this.laptopCount + this.iphoneCount + this.macCount));
    };
    SalesVisitor.prototype.reset = function () {
        this.bookCount = 0;
        this.laptopCount = 0;
        this.iphoneCount = 0;
        this.macCount = 0;
    };
    return SalesVisitor;
}());
exports.SalesVisitor = SalesVisitor;
