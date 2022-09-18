"use strict";
exports.__esModule = true;
exports.MyWindow = void 0;
var MyWindow = /** @class */ (function () {
    function MyWindow(location) {
        this.isOpen = false;
        this.location = "";
        this.location = location;
    }
    MyWindow.prototype.getIsOpen = function () {
        return this.isOpen;
    };
    MyWindow.prototype.toggle = function () {
        if (this.isOpen) {
            this.close();
            this.isOpen = false;
        }
        else {
            this.open();
            this.isOpen = true;
        }
    };
    MyWindow.prototype.open = function () {
        console.log(this.location + " Window open");
    };
    MyWindow.prototype.close = function () {
        console.log(this.location + " Window close");
    };
    return MyWindow;
}());
exports.MyWindow = MyWindow;
