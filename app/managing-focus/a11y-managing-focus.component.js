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
var a11y_helper_service_1 = require("../services/a11y-helper.service");
var common_1 = require("@angular/common");
var a11y_error_demo_component_1 = require("./a11y-error-demo.component");
var a11y_custom_button_component_1 = require("../shared/a11y-custom-button.component");
var a11y_value_helper_component_1 = require("../shared/a11y-value-helper.component");
var A11yManagingFocusComponent = (function () {
    function A11yManagingFocusComponent(_a11yHelper) {
        this._a11yHelper = _a11yHelper;
        this.buttonClicks = 0;
    }
    A11yManagingFocusComponent.prototype.generateSkiplink = function (hash) {
        return this._a11yHelper.getInternalLink(hash, 'ManagingFocus');
    };
    A11yManagingFocusComponent.prototype.onClick = function () {
        this.buttonClicks++;
    };
    A11yManagingFocusComponent.prototype.generateButtonString = function () {
        return "Button has been clicked " + this.buttonClicks + " times";
    };
    A11yManagingFocusComponent.prototype.ngOnInit = function () {
        this.countriesWorkedIn = this._a11yHelper.getCountriesWorkedIn();
    };
    A11yManagingFocusComponent = __decorate([
        core_1.Component({
            selector: 'a11y-managing-focus',
            templateUrl: './app/managing-focus/a11y-managing-focus.component.html',
            directives: [
                common_1.CORE_DIRECTIVES,
                a11y_custom_button_component_1.A11yCustomButtonComponent,
                a11y_value_helper_component_1.A11yValueHelperComponent,
                a11y_error_demo_component_1.A11yErrorDemoComponent
            ]
        }), 
        __metadata('design:paramtypes', [a11y_helper_service_1.A11yHelperService])
    ], A11yManagingFocusComponent);
    return A11yManagingFocusComponent;
}());
exports.A11yManagingFocusComponent = A11yManagingFocusComponent;
//# sourceMappingURL=a11y-managing-focus.component.js.map