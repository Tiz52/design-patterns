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
exports.AndroidHostingPlanFactory = void 0;
var hosting_plan_abstract_factory_1 = require("../abstract/hosting-plan-abstract-factory");
var android_economy_hosting_plan_1 = require("../../products/concrete/android-economy-hosting-plan");
var android_deluxe_hosting_plan_1 = require("../../products/concrete/android-deluxe-hosting-plan");
var android_ultimate_hosting_plan_1 = require("../../products/concrete/android-ultimate-hosting-plan");
// Factory Concreto
var AndroidHostingPlanFactory = /** @class */ (function (_super) {
    __extends(AndroidHostingPlanFactory, _super);
    function AndroidHostingPlanFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidHostingPlanFactory.prototype.createEconomyHosting = function () {
        return new android_economy_hosting_plan_1.AndroidEconomyHostingPlan();
    };
    AndroidHostingPlanFactory.prototype.createDeluxeHosting = function () {
        return new android_deluxe_hosting_plan_1.AndroidDeluxeHostingPlan();
    };
    AndroidHostingPlanFactory.prototype.createUltimateHosting = function () {
        return new android_ultimate_hosting_plan_1.AndroidUltimateHostingPlan();
    };
    return AndroidHostingPlanFactory;
}(hosting_plan_abstract_factory_1.HostingPlanAbstractFactory));
exports.AndroidHostingPlanFactory = AndroidHostingPlanFactory;
