import { DialogCreator } from "../abstract/dialog-creator";
import {Button} from "../../product/abstract/button";
import { iOSButton } from '../../product/concrete/ios-button';

export class iOSDialog extends DialogCreator {
    constructor() {
        super();
    }

    // Factory Method (Concrete)
    public createButton(): Button {
        return new iOSButton();
    }
}