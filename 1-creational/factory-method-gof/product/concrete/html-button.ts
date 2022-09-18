import {Button} from "../abstract/button";

export class HtmlButton implements Button {
    public onClick(): void {
        console.log('HtmlButton onClick');
    }

    public render(): void {
        console.log('HtmlButton render');
    }
}