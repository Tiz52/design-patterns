import {Button} from "../../product/abstract/button";
import {WindowsButton} from "../../product/concrete/windows-button";
import { DialogCreator } from "../abstract/dialog-creator";

export class WindowsDialog extends DialogCreator {
    constructor() {
        super();
    }

    // Factory Method (Concrete)
    public createButton(): Button {
        return new WindowsButton();
    }
}