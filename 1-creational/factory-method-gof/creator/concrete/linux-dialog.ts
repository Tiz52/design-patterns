import { DialogCreator } from "../abstract/dialog-creator";
import {Button} from "../../product/abstract/button";
import { LinuxButton } from "../../product/concrete/linux-button";

export class LinuxDialog extends DialogCreator {
    constructor() {
        super();
    }

    // Factory Method (Concrete)
    public createButton(): Button {
        return new LinuxButton();
    }
}