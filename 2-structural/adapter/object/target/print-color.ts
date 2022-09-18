export interface PrintColor {
    changeColor(red: number, green: number, blue: number): void;
    changeDuplex(duplex: boolean);
    changeFont(font: string);
}