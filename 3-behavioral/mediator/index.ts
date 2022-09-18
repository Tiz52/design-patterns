import {Mediator} from "./concrete/mediator";
import {Light} from "./light";
import {Command} from "./abstract/command";
import {TurnOnAllLightsCommand} from "./concrete/turn-on-all-lights-command";
import {TurnOffAllLightsCommand} from "./concrete/turn-of-all-lights-command";
import {Door} from "./door";
import {OpenAllDoorsCommand} from "./concrete/open-all-doors-command";
import {CloseAllDoorsCommand} from "./concrete/close-all-doors-command";
import {MyWindow} from "./window";
import {OpenAllWindowsCommand} from "./concrete/open-all-windows-command";
import {CloseAllWindowsCommand} from "./concrete/close-all-windows-command";

export class Client {
    public execute(): void {
        let mediator: Mediator = new Mediator();

        let bedroomLight: Light = new Light("Bedroom");
        let kitchenLight: Light = new Light("Kitchen");

        let bedroomDoor: Door = new Door("Bedroom Door");
        let kitchenDoor: Door = new Door("Kitchen Door");

        let bedroomWindow: MyWindow = new MyWindow("Bedroom Window");
        let kitchenWindow: MyWindow = new MyWindow("Kitchen Window");

        mediator.registerLight(bedroomLight);
        mediator.registerLight(kitchenLight);

        mediator.registerDoor(bedroomDoor);
        mediator.registerDoor(kitchenDoor);

        mediator.registerWindow(bedroomWindow);
        mediator.registerWindow(kitchenWindow);

        let turnOnAllLightsCommand: Command = new TurnOnAllLightsCommand(mediator);
        turnOnAllLightsCommand.execute();
        
        let openAllDoorsCommand: Command = new OpenAllDoorsCommand(mediator);
        openAllDoorsCommand.execute();

        let openAllWindowsCommand: Command = new OpenAllWindowsCommand(mediator);
        openAllWindowsCommand.execute();

        //-------------------------------------------------------------------------
        let turnOffAllLightsCommand: Command = new TurnOffAllLightsCommand(mediator);
        turnOffAllLightsCommand.execute();

        let closeAllDoorsCommand: Command = new CloseAllDoorsCommand(mediator);
        closeAllDoorsCommand.execute();
        
        let closeAllWindowsCommand: Command = new CloseAllWindowsCommand(mediator);
        closeAllWindowsCommand.execute();
    }
}

const client: Client = new Client();
client.execute();