"use strict";
exports.__esModule = true;
var new_printer_adapter_1 = require("./adapter/new-printer-adapter");
var new_printer_1 = require("./target/new-printer");
var old_printer_1 = require("./adaptee/old-printer");
function clientCode() {
    var newPrinterAdapter = new new_printer_adapter_1.NewPrinterAdapter(new old_printer_1.OldPrinter());
    newPrinterAdapter.changeColor(100, 200, 300);
    newPrinterAdapter.changeFont("Monospaced");
    newPrinterAdapter.changeDuplex(true);
    console.log("*************************************************************");
    var newPrinter = new new_printer_1.NewPrinter();
    newPrinter.changeColor(100, 200, 300);
    newPrinter.changeFont("Monospaced");
    newPrinter.changeDuplex(true);
}
clientCode();
