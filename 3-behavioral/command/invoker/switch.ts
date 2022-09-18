import {Command} from "../abstract/command";

//Invocador
export class Switch {
    public invoke(command: Command): void {
        command.execute();
    }
}