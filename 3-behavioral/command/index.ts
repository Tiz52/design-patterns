import {Light} from "./receiver/light";
import {Switch} from "./invoker/switch";
import {Command} from "./abstract/command";
import {ToggleCommand} from "./concrete/toggle-command";
import {ToggleAllLightsCommand} from "./concrete/toggle-all-lights-command";

function clientCode() {
    // Receptor
    let bedroomLight: Light = new Light();
    let kitchenLight: Light = new Light();
    let officeLight: Light = new Light();

    // Command
    let command: Command = new ToggleCommand(bedroomLight);

     // Invoker
    let lightSwitch: Switch = new Switch();
    lightSwitch.invoke(command);
    lightSwitch.invoke(command);
    console.log("****************************");

    let lights: Light[]= [];
    lights.push(kitchenLight);
    lights.push(bedroomLight);
    lights.push(officeLight);

    command = new ToggleAllLightsCommand(lights);
    lightSwitch.invoke(command);
    lightSwitch.invoke(command);
}

clientCode();