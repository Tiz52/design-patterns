import {OldPrinter} from "../adaptee/old-printer";
import {PrintColor} from "../target/print-color";
import {Fonts} from "../enums/fonts";

export class NewPrinterAdapter implements PrintColor {
    // Composición (Dinámica)
    private oldPrinter: OldPrinter = null;

    constructor(oldPrinter: OldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    changeColor(red: number, green: number, blue: number): void {
        this.oldPrinter.changeGrayscale((red + green + blue) / 3);
    }

    changeDuplex(duplex: boolean): void {
    }

    changeFont(font: string): void {
        if (font === Fonts.TIMES) {
            this.oldPrinter.changeFontNumber(1);
        }
        if (font === Fonts.ARIAL) {
            this.oldPrinter.changeFontNumber(2);
        }
        if (Fonts.MONOSPACED) {
            this.oldPrinter.changeFontNumber(3);
        }
    }
}