import { Button } from "../abstract/button";

export class WindowsButton implements Button {
    public onClick(): void {
        console.log('WindowsButton onClick');
    }

    public render(): void {
        console.log('WindowsButton render');
    }
}