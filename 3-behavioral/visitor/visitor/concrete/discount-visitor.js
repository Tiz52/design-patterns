"use strict";
exports.__esModule = true;
exports.DiscountVisitor = void 0;
var DiscountVisitor = /** @class */ (function () {
    function DiscountVisitor() {
    }
    DiscountVisitor.prototype.visitBook = function (book) {
        var discount = 0.0;
        if (book.getPrice() < 20.00) {
            discount = book.getDiscount(0.10);
            console.log("DISCOUNTED: Book #" + book.getId() + " is now " + (book.getPrice() - discount));
        }
        else {
            console.log("FULL PRICE: Book #" + book.getId() + " is " + (book.getPrice()));
        }
        this.savings += discount;
    };
    DiscountVisitor.prototype.visitLaptop = function (laptop) {
        var discount = laptop.getDiscount(0.20);
        console.log("SUPER SAVINGS: Laptop #" + laptop.getId() + " is now " + (laptop.getPrice() - discount));
        this.savings += discount;
    };
    DiscountVisitor.prototype.visitIPhone = function (iphone) {
        var discount = iphone.getDiscount(0.50);
        console.log("SUPER SAVINGS: IPhone #" + iphone.getId() + " is now " + (iphone.getPrice() - discount));
        this.savings += discount;
    };
    DiscountVisitor.prototype.visitMacBookPro = function (mac) {
        var discount = mac.getDiscount(0.50);
        console.log("SUPER SAVINGS: MacBookPro #" + mac.getId() + " is now " + (mac.getPrice() - discount));
        this.savings += discount;
    };
    DiscountVisitor.prototype.print = function () {
    };
    DiscountVisitor.prototype.reset = function () {
        this.savings = 0.0;
    };
    DiscountVisitor.prototype.getSavings = function () {
        return this.savings;
    };
    return DiscountVisitor;
}());
exports.DiscountVisitor = DiscountVisitor;
