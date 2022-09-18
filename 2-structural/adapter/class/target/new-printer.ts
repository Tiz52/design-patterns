import {PrintColor} from "./print-color";

export class NewPrinter implements PrintColor {
    public changeColor(red: number, green: number, blue: number): void {
        console.log("New Printer changeColor");
    }

    public changeDuplex(duplex: boolean): void {
        console.log("New Printer changeDuplex");
    }

    public changeFont(font: string): void {
        console.log("New Printer changeFont");
    }
}