import { Button } from "./product/abstract/button";
import { LinuxButton } from "./product/concrete/linux-button";
import { OfficeButton } from "./product/concrete/office-button";
import { OpenOfficeButton } from "./product/concrete/open-office-button";
import { WindowsButton } from "./product/concrete/windows-button";
import { HtmlButton } from "./product/concrete/html-button";
import { iOSButton } from "./product/concrete/ios-button";
import { ButtonType } from "./product/enum/button-type";

export class ButtonFactory {
    // Factory Method
    public static getConcreteButton(buttonType: ButtonType): Button {
        if (buttonType == ButtonType.WINDOWS)
            return new WindowsButton();

        if (buttonType == ButtonType.LINUX)
            return new LinuxButton();
        
        if (buttonType == ButtonType.WEB)
            return new HtmlButton();
        
        if (buttonType == ButtonType.iOS)
            return new iOSButton();

        if (buttonType == ButtonType.OFFICE)
            return new OfficeButton();

        if (buttonType == ButtonType.OPEN_OFFICE)
            return new OpenOfficeButton();
        
        return new HtmlButton();
    }
}