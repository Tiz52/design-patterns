import {Command} from "../abstract/command";
import {Light} from "../receiver/light";

// Comando Concreto
export class ToggleAllLightsCommand implements Command {
    //Receiver - Receptor
    private readonly lights: Light[];

    constructor(lights: Light[]) {
        this.lights = lights;
    }

    public execute(): void {
        for (const light of this.lights) {
            light.toggle();
        }
    }
}