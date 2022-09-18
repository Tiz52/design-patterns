"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FolderComponent = void 0;
var file_system_component_1 = require("../component/file-system-component");
// Composite
var FolderComponent = /** @class */ (function (_super) {
    __extends(FolderComponent, _super);
    function FolderComponent(name) {
        var _this = _super.call(this, name) || this;
        _this.folderContent = [];
        return _this;
    }
    FolderComponent.prototype.addComponent = function (fileSystemComponent) {
        this.folderContent.push(fileSystemComponent);
    };
    FolderComponent.prototype.getComponent = function (location) {
        return this.folderContent[location];
    };
    FolderComponent.prototype.getComponentSize = function () {
        var sizeOfAllFiles = 0;
        for (var _i = 0, _a = this.folderContent; _i < _a.length; _i++) {
            var child = _a[_i];
            sizeOfAllFiles = sizeOfAllFiles + (child.getComponentSize());
        }
        return sizeOfAllFiles;
    };
    return FolderComponent;
}(file_system_component_1.FileSystemComponent));
exports.FolderComponent = FolderComponent;
