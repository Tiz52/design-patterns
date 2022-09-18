import {Button} from "../../product/abstract/button";
import {OpenOfficeButton} from "../../product/concrete/open-office-button";
import { DialogCreator } from "../abstract/dialog-creator";

export class OpenOfficeDialog extends DialogCreator {
    constructor() {
        super();
    }

    // Factory Method (Concrete)
    public createButton(): Button {
        return new OpenOfficeButton();
    }
}