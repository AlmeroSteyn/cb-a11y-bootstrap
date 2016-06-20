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
var A11yCustomButtonComponent = (function () {
    function A11yCustomButtonComponent() {
        this.click = new core_1.EventEmitter();
    }
    A11yCustomButtonComponent.prototype.onKeyDown = function () {
        this.click.emit(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], A11yCustomButtonComponent.prototype, "click", void 0);
    A11yCustomButtonComponent = __decorate([
        core_1.Component({
            selector: 'a11y-custom-button',
            templateUrl: './app/shared/a11y-custom-button.component.html',
            host: {
                'role': 'button',
                'tabindex': '0',
                'class': 'btn btn-primary',
                '(keydown.space)': 'onKeyDown()',
                '(keydown.enter)': 'onKeyDown()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], A11yCustomButtonComponent);
    return A11yCustomButtonComponent;
}());
exports.A11yCustomButtonComponent = A11yCustomButtonComponent;
// #enddocregion
//# sourceMappingURL=a11y-custom-button.component.js.map