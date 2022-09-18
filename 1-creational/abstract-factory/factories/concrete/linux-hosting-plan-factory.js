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
exports.LinuxHostingPlanFactory = void 0;
var hosting_plan_abstract_factory_1 = require("../abstract/hosting-plan-abstract-factory");
var linux_economy_hosting_plan_1 = require("../../products/concrete/linux-economy-hosting-plan");
var linux_deluxe_hosting_plan_1 = require("../../products/concrete/linux-deluxe-hosting-plan");
var linux_ultimate_hosting_plan_1 = require("../../products/concrete/linux-ultimate-hosting-plan");
// Factory Concreto
var LinuxHostingPlanFactory = /** @class */ (function (_super) {
    __extends(LinuxHostingPlanFactory, _super);
    function LinuxHostingPlanFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinuxHostingPlanFactory.prototype.createEconomyHosting = function () {
        return new linux_economy_hosting_plan_1.LinuxEconomyHostingPlan();
    };
    LinuxHostingPlanFactory.prototype.createDeluxeHosting = function () {
        return new linux_deluxe_hosting_plan_1.LinuxDeluxeHostingPlan();
    };
    LinuxHostingPlanFactory.prototype.createUltimateHosting = function () {
        return new linux_ultimate_hosting_plan_1.LinuxUltimateHostingPlan();
    };
    return LinuxHostingPlanFactory;
}(hosting_plan_abstract_factory_1.HostingPlanAbstractFactory));
exports.LinuxHostingPlanFactory = LinuxHostingPlanFactory;
