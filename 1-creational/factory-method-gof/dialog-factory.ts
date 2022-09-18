import { DialogCreator } from "./creator/abstract/dialog-creator";
import { iOSDialog } from "./creator/concrete/ios-dialog";
import { LinuxDialog } from "./creator/concrete/linux-dialog";
import { WebDialog } from "./creator/concrete/web-dialog";
import { WindowsDialog } from "./creator/concrete/windows-dialog";
import { OfficeDialog } from "./creator/concrete/office-dialog";
import { OpenOfficeDialog } from "./creator/concrete/open-office-dialog";
import {DialogType} from "./enums/dialog-type";

export class DialogFactory {
    // Factory Method
    public static getType(dialogType: DialogType): DialogCreator {
        if (dialogType == DialogType.WINDOWS)
            return new WindowsDialog();

        if (dialogType == DialogType.LINUX)
            return new LinuxDialog();
        
        if (dialogType == DialogType.WEB)
            return new WebDialog();
        
        if (dialogType == DialogType.iOS)
            return new iOSDialog();

        if (dialogType == DialogType.OFFICE)
            return new OfficeDialog();

        if (dialogType == DialogType.OPEN_OFFICE)
            return new OpenOfficeDialog();
        
        return new WebDialog();
    }
}