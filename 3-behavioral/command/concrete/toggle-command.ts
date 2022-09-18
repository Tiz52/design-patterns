import {Command} from "../abstract/command";
import {Light} from "../receiver/light";

// Comando Concreto
export class ToggleCommand implements Command {
    //Receiver - Receptor
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.toggle();
    }
}