// Interfaz con la que trabaja el código cliente
export interface PrintColor {
    changeColor(red: number, green: number, blue: number): void;
    changeDuplex(duplex: boolean);
    changeFont(font: string);
}