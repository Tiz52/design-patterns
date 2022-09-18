"use strict";
exports.__esModule = true;
var light_1 = require("./receiver/light");
var switch_1 = require("./invoker/switch");
var toggle_command_1 = require("./concrete/toggle-command");
var toggle_all_lights_command_1 = require("./concrete/toggle-all-lights-command");
function clientCode() {
    // Receptor
    var bedroomLight = new light_1.Light();
    var kitchenLight = new light_1.Light();
    var officeLight = new light_1.Light();
    // Command
    var command = new toggle_command_1.ToggleCommand(bedroomLight);
    // Invoker
    var lightSwitch = new switch_1.Switch();
    lightSwitch.invoke(command);
    lightSwitch.invoke(command);
    console.log("****************************");
    var lights = [];
    lights.push(kitchenLight);
    lights.push(bedroomLight);
    lights.push(officeLight);
    command = new toggle_all_lights_command_1.ToggleAllLightsCommand(lights);
    lightSwitch.invoke(command);
    lightSwitch.invoke(command);
}
clientCode();
