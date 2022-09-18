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
exports.MacHostingPlanFactory = void 0;
var hosting_plan_abstract_factory_1 = require("../abstract/hosting-plan-abstract-factory");
var mac_economy_hosting_plan_1 = require("../../products/concrete/mac-economy-hosting-plan");
var mac_deluxe_hosting_plan_1 = require("../../products/concrete/mac-deluxe-hosting-plan");
var mac_ultimate_hosting_plan_ts_1 = require("../../products/concrete/mac-ultimate-hosting-plan.ts");
var MacHostingPlanFactory = /** @class */ (function (_super) {
    __extends(MacHostingPlanFactory, _super);
    function MacHostingPlanFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MacHostingPlanFactory.prototype.createEconomyHosting = function () {
        return new mac_economy_hosting_plan_1.MacEconomyHostingPlan();
    };
    MacHostingPlanFactory.prototype.createDeluxeHosting = function () {
        return new mac_deluxe_hosting_plan_1.MacDeluxeHostingPlan();
    };
    MacHostingPlanFactory.prototype.createUltimateHosting = function () {
        return new mac_ultimate_hosting_plan_ts_1.MacUltimateHostingPlan();
    };
    return MacHostingPlanFactory;
}(hosting_plan_abstract_factory_1.HostingPlanAbstractFactory));
exports.MacHostingPlanFactory = MacHostingPlanFactory;
