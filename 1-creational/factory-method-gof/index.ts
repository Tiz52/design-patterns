import {DialogType} from "./enums/dialog-type";
import { DialogCreator } from "./creator/abstract/dialog-creator";
import { DialogFactory } from "./dialog-factory";

function clientCode() {
    let dialog: DialogCreator = DialogFactory.getType(DialogType.OFFICE);
    dialog.render();
}

clientCode();