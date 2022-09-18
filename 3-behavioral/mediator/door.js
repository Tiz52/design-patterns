"use strict";
exports.__esModule = true;
exports.Door = void 0;
var Door = /** @class */ (function () {
    function Door(location) {
        this.isOpen = false;
        this.location = "";
        this.location = location;
    }
    Door.prototype.getIsOpen = function () {
        return this.isOpen;
    };
    Door.prototype.toggle = function () {
        if (this.isOpen) {
            this.close();
            this.isOpen = false;
        }
        else {
            this.open();
            this.isOpen = true;
        }
    };
    Door.prototype.open = function () {
        console.log(this.location + " Door open");
    };
    Door.prototype.close = function () {
        console.log(this.location + " Door close");
    };
    return Door;
}());
exports.Door = Door;
