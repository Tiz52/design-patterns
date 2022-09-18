"use strict";
exports.__esModule = true;
exports.FileSystemComponent = void 0;
var FileSystemComponent = /** @class */ (function () {
    function FileSystemComponent(name) {
        this.name = name;
    }
    FileSystemComponent.prototype.addComponent = function (component) {
    };
    FileSystemComponent.prototype.getComponent = function (componentNum) {
        return this;
    };
    FileSystemComponent.prototype.getName = function () {
        return this.name;
    };
    return FileSystemComponent;
}());
exports.FileSystemComponent = FileSystemComponent;
