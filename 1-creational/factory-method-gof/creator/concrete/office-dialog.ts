import {Button} from "../../product/abstract/button";
import {OfficeButton} from "../../product/concrete/office-button";
import { DialogCreator } from "../abstract/dialog-creator";

export class OfficeDialog extends DialogCreator {
    constructor() {
        super();
    }

    // Factory Method (Concrete)
    public createButton(): Button {
        return new OfficeButton();
    }
}