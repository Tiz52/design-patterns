import { ButtonFactory } from "./button-factory";
import { Button } from "./product/abstract/button";
import { ButtonType } from "./product/enum/button-type";

function clientCode() {
    let button: Button = ButtonFactory.getConcreteButton(ButtonType.iOS);
    button.onClick();
    button.render();
}

clientCode();