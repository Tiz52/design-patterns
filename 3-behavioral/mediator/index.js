"use strict";
exports.__esModule = true;
exports.Client = void 0;
var mediator_1 = require("./concrete/mediator");
var light_1 = require("./light");
var turn_on_all_lights_command_1 = require("./concrete/turn-on-all-lights-command");
var turn_of_all_lights_command_1 = require("./concrete/turn-of-all-lights-command");
var door_1 = require("./door");
var open_all_doors_command_1 = require("./concrete/open-all-doors-command");
var close_all_doors_command_1 = require("./concrete/close-all-doors-command");
var window_1 = require("./window");
var open_all_windows_command_1 = require("./concrete/open-all-windows-command");
var close_all_windows_command_1 = require("./concrete/close-all-windows-command");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var mediator = new mediator_1.Mediator();
        var bedroomLight = new light_1.Light("Bedroom");
        var kitchenLight = new light_1.Light("Kitchen");
        var bedroomDoor = new door_1.Door("Bedroom Door");
        var kitchenDoor = new door_1.Door("Kitchen Door");
        var bedroomWindow = new window_1.MyWindow("Bedroom Window");
        var kitchenWindow = new window_1.MyWindow("Kitchen Window");
        mediator.registerLight(bedroomLight);
        mediator.registerLight(kitchenLight);
        mediator.registerDoor(bedroomDoor);
        mediator.registerDoor(kitchenDoor);
        mediator.registerWindow(bedroomWindow);
        mediator.registerWindow(kitchenWindow);
        var turnOnAllLightsCommand = new turn_on_all_lights_command_1.TurnOnAllLightsCommand(mediator);
        turnOnAllLightsCommand.execute();
        var openAllDoorsCommand = new open_all_doors_command_1.OpenAllDoorsCommand(mediator);
        openAllDoorsCommand.execute();
        var openAllWindowsCommand = new open_all_windows_command_1.OpenAllWindowsCommand(mediator);
        openAllWindowsCommand.execute();
        //-------------------------------------------------------------------------
        var turnOffAllLightsCommand = new turn_of_all_lights_command_1.TurnOffAllLightsCommand(mediator);
        turnOffAllLightsCommand.execute();
        var closeAllDoorsCommand = new close_all_doors_command_1.CloseAllDoorsCommand(mediator);
        closeAllDoorsCommand.execute();
        var closeAllWindowsCommand = new close_all_windows_command_1.CloseAllWindowsCommand(mediator);
        closeAllWindowsCommand.execute();
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.execute();
