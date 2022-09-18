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
exports.WindowsHostingPlanFactory = void 0;
var hosting_plan_abstract_factory_1 = require("../abstract/hosting-plan-abstract-factory");
var windows_economy_hosting_plan_1 = require("../../products/concrete/windows-economy-hosting-plan");
var windows_deluxe_hosting_plan_1 = require("../../products/concrete/windows-deluxe-hosting-plan");
var windows_ultimate_hosting_plan_1 = require("../../products/concrete/windows-ultimate-hosting-plan");
var WindowsHostingPlanFactory = /** @class */ (function (_super) {
    __extends(WindowsHostingPlanFactory, _super);
    function WindowsHostingPlanFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsHostingPlanFactory.prototype.createEconomyHosting = function () {
        return new windows_economy_hosting_plan_1.WindowsEconomyHostingPlan();
    };
    WindowsHostingPlanFactory.prototype.createDeluxeHosting = function () {
        return new windows_deluxe_hosting_plan_1.WindowsDeluxeHostingPlan();
    };
    WindowsHostingPlanFactory.prototype.createUltimateHosting = function () {
        return new windows_ultimate_hosting_plan_1.WindowsUltimateHostingPlan();
    };
    return WindowsHostingPlanFactory;
}(hosting_plan_abstract_factory_1.HostingPlanAbstractFactory));
exports.WindowsHostingPlanFactory = WindowsHostingPlanFactory;
