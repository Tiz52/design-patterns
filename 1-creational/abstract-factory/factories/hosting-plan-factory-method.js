"use strict";
exports.__esModule = true;
exports.HostingPlanFactoryMethod = void 0;
var os_type_1 = require("../enums/os-type");
var windows_hosting_plan_factory_1 = require("./concrete/windows-hosting-plan-factory");
var linux_hosting_plan_factory_1 = require("./concrete/linux-hosting-plan-factory");
var mac_hosting_plan_factory_1 = require("./concrete/mac-hosting-plan-factory");
var android_hosting_plan_factory_1 = require("./concrete/android-hosting-plan-factory");
var HostingPlanFactoryMethod = /** @class */ (function () {
    function HostingPlanFactoryMethod() {
    }
    // Factory Method
    HostingPlanFactoryMethod.getType = function (osType) {
        if (osType == os_type_1.OSType.WINDOWS) {
            return new windows_hosting_plan_factory_1.WindowsHostingPlanFactory();
        }
        if (osType == os_type_1.OSType.LINUX) {
            return new linux_hosting_plan_factory_1.LinuxHostingPlanFactory();
        }
        if (osType == os_type_1.OSType.MAC) {
            return new mac_hosting_plan_factory_1.MacHostingPlanFactory();
        }
        if (osType == os_type_1.OSType.ANDROID) {
            return new android_hosting_plan_factory_1.AndroidHostingPlanFactory();
        }
        return new linux_hosting_plan_factory_1.LinuxHostingPlanFactory();
    };
    return HostingPlanFactoryMethod;
}());
exports.HostingPlanFactoryMethod = HostingPlanFactoryMethod;
