import {Button} from "../../product/abstract/button";

export abstract class DialogCreator {
    protected constructor() {
    }

    // Factory Method (Abstract)
    public abstract createButton(): Button;

    public render(): void {
        let okButton: Button = this.createButton(); // Calling to the factory method
        okButton.onClick();
        okButton.render();
    }
}