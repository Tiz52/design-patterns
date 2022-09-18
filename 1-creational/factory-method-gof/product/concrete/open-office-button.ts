import {Button} from "../abstract/button";

export class OpenOfficeButton implements Button {
    public onClick(): void {
        console.log('OpenOfficeButton onClick');
    }

    public render(): void {
        console.log('OpenOfficeButton render');
    }
}