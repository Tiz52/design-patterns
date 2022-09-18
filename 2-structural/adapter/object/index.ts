import {NewPrinterAdapter} from "./adapter/new-printer-adapter";
import {NewPrinter} from "./target/new-printer";
import {OldPrinter} from "./adaptee/old-printer";

function clientCode() {
    let newPrinterAdapter: NewPrinterAdapter = 
        new NewPrinterAdapter(new OldPrinter());
    newPrinterAdapter.changeColor(100, 200, 300);
    newPrinterAdapter.changeFont("Monospaced");
    newPrinterAdapter.changeDuplex(true);

    console.log("*************************************************************");

    let newPrinter: NewPrinter = new NewPrinter();
    newPrinter.changeColor(100, 200, 300);
    newPrinter.changeFont("Monospaced");
    newPrinter.changeDuplex(true);
}

clientCode();