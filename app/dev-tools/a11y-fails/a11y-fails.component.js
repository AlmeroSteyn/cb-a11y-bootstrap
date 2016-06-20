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
var A11yFailsComponent = (function () {
    function A11yFailsComponent() {
        this.hideSuccessConfirmation = true;
    }
    A11yFailsComponent.prototype.submit = function () {
        this.hideSuccessConfirmation = false;
    };
    A11yFailsComponent = __decorate([
        core_1.Component({
            selector: 'a11y-fails',
            templateUrl: './app/dev-tools/a11y-fails/a11y-fails.component.html',
            styles: [
                "\n      input {\n      font-weight: bold;\n      }\n      \n      label {\n      color: #808080;\n      }\n     "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], A11yFailsComponent);
    return A11yFailsComponent;
}());
exports.A11yFailsComponent = A11yFailsComponent;
//# sourceMappingURL=a11y-fails.component.js.map