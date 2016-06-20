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
var a11y_custom_control_component_1 = require("../shared/a11y-custom-control.component");
var a11y_value_helper_component_1 = require("../shared/a11y-value-helper.component");
var a11y_custom_button_component_1 = require("../shared/a11y-custom-button.component");
var A11yComponentRolesComponent = (function () {
    function A11yComponentRolesComponent(_a11yHelper) {
        this._a11yHelper = _a11yHelper;
        this.inputDivModel = '';
        this.buttonClicks = 0;
    }
    A11yComponentRolesComponent.prototype.onClick = function () {
        this.buttonClicks++;
    };
    A11yComponentRolesComponent.prototype.generateSkiplink = function (hash) {
        return this._a11yHelper.getInternalLink(hash, 'ComponentRoles');
    };
    A11yComponentRolesComponent.prototype.generateButtonString = function () {
        return "Button has been clicked " + this.buttonClicks + " times";
    };
    A11yComponentRolesComponent = __decorate([
        core_1.Component({
            selector: 'a11y-component-roles',
            templateUrl: './app/component-roles/a11y-component-roles.component.html',
            directives: [
                a11y_custom_control_component_1.A11yCustomControlComponent,
                a11y_value_helper_component_1.A11yValueHelperComponent,
                a11y_custom_button_component_1.A11yCustomButtonComponent
            ]
        }), 
        __metadata('design:paramtypes', [a11y_helper_service_1.A11yHelperService])
    ], A11yComponentRolesComponent);
    return A11yComponentRolesComponent;
}());
exports.A11yComponentRolesComponent = A11yComponentRolesComponent;
//# sourceMappingURL=a11y-component-roles.component.js.map