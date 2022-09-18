"use strict";
exports.__esModule = true;
exports.Client = void 0;
var book_1 = require("./element/concrete/book");
var laptop_1 = require("./element/concrete/laptop");
var object_structure_1 = require("./object-structure/object-structure");
var iphone_1 = require("./element/concrete/iphone");
var macbookpro_1 = require("./element/concrete/macbookpro");
var factory_1 = require("./factory/factory");
var visitor_type_1 = require("./factory/visitor-type");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var items = this.initElements();
        var cart = new object_structure_1.ObjectStructure(items);
        var visitor = factory_1.VisitorFactory.getConcreteVistor(visitor_type_1.VisitorType.DISCOUNT);
        cart.applyVisitor(visitor);
    };
    Client.prototype.initElements = function () {
        var items = [];
        items.push(new macbookpro_1.MacBookPro(63251, 14000));
        items.push(new macbookpro_1.MacBookPro(63250, 15000));
        items.push(new macbookpro_1.MacBookPro(63250, 12000));
        items.push(new iphone_1.IPhone(55324, 7000));
        items.push(new iphone_1.IPhone(78910, 8000));
        items.push(new book_1.Book(12345, 10));
        items.push(new book_1.Book(63254, 15));
        items.push(new laptop_1.Laptop(11198, 1500));
        return items;
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
