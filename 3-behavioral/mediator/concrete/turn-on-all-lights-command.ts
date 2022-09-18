import {Command} from "../abstract/command";
import {Mediator} from "./mediator";

//Colega Concreto
export class TurnOnAllLightsCommand implements Command {
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public execute(): void {
        this.mediator.turnOnAllLights();
    }
}