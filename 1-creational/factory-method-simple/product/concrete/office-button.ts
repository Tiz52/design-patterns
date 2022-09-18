import { Button } from "../abstract/button";

export class OfficeButton implements Button {
    public onClick(): void {
        console.log('OfficeButton onClick');
    }

    public render(): void {
        console.log('OfficeButton render');
    }
}