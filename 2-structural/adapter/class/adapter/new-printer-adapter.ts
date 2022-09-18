import {OldPrinter} from "../adaptee/old-printer";
import {PrintColor} from "../target/print-color";
import {Fonts} from "../enums/fonts";

// Adaptador - Herencia (Estática)
export class NewPrinterAdapter extends OldPrinter implements PrintColor {
    changeColor(red: number, green: number, blue: number): void {
        this.changeGrayscale((red + green + blue) / 3);
    }

    changeDuplex(duplex: boolean): void {
    }

    changeFont(font: string): void {
        if (font === Fonts.TIMES) {
            this.changeFontNumber(1);
        }
        if (font === Fonts.ARIAL) {
            this.changeFontNumber(2);
        }
        if (Fonts.MONOSPACED) {
            this.changeFontNumber(3);
        }
    }
}