"use strict";
exports.__esModule = true;
exports.VisitorFactory = void 0;
var discount_visitor_1 = require("../visitor/concrete/discount-visitor");
var visitor_type_1 = require("./visitor-type");
var sales_visitor_1 = require("../visitor/concrete/sales-visitor");
var VisitorFactory = /** @class */ (function () {
    function VisitorFactory() {
    }
    // Factory Method
    VisitorFactory.getConcreteVistor = function (visitorType) {
        if (visitorType == visitor_type_1.VisitorType.DISCOUNT)
            return new discount_visitor_1.DiscountVisitor();
        if (visitorType == visitor_type_1.VisitorType.SALES)
            return new sales_visitor_1.SalesVisitor();
        return new discount_visitor_1.DiscountVisitor();
    };
    return VisitorFactory;
}());
exports.VisitorFactory = VisitorFactory;
