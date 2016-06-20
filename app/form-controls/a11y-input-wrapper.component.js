"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// #docregion
var A11yInputWrapperComponent = (function () {
    function A11yInputWrapperComponent() {
        this.onSave = new core_1.EventEmitter();
    }
    A11yInputWrapperComponent.prototype.save = function () {
        this.onSave.emit(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], A11yInputWrapperComponent.prototype, "onSave", void 0);
    A11yInputWrapperComponent = __decorate([
        core_1.Component({
            selector: 'a11y-input-wrapper',
            templateUrl: './app/form-controls/a11y-input-wrapper.component.html',
            styleUrls: ['./app/form-controls/a11y-input-wrapper.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], A11yInputWrapperComponent);
    return A11yInputWrapperComponent;
}());
exports.A11yInputWrapperComponent = A11yInputWrapperComponent;
// #enddocregion
//# sourceMappingURL=a11y-input-wrapper.component.js.map