import {Button} from "../abstract/button";

export class iOSButton implements Button {
    public onClick(): void {
        console.log('iOSButton onClick');
    }

    public render(): void {
        console.log('iOSButton render');
    }
}