import { DialogCreator } from "../abstract/dialog-creator";
import {Button} from "../../product/abstract/button";
import {HtmlButton} from "../../product/concrete/html-button";

export class WebDialog extends DialogCreator {
    constructor() {
        super();
    }

    // Factory Method (Concrete)
    public createButton(): Button {
        return new HtmlButton();
    }
}