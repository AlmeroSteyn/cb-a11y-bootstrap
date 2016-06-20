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
var common_1 = require("@angular/common");
var a11y_helper_service_1 = require("../services/a11y-helper.service");
var a11y_input_wrapper_component_1 = require("./a11y-input-wrapper.component");
var a11y_value_helper_component_1 = require("../shared/a11y-value-helper.component");
var a11y_custom_control_component_1 = require("../shared/a11y-custom-control.component");
var A11yFormControlsComponent = (function () {
    function A11yFormControlsComponent(_a11yHelper) {
        this._a11yHelper = _a11yHelper;
        this.inputWrappedSaveModel = '';
        this.inputDivModel = '';
        this.selectModel = 'Curiosity';
        this.radioModel = 'TypeScript';
        this.checkboxModel = ["Observables", "Components"];
    }
    A11yFormControlsComponent.prototype.generateSkiplink = function (hash) {
        return this._a11yHelper.getInternalLink(hash, 'FormControls');
    };
    A11yFormControlsComponent.prototype.isChecked = function (item) {
        return this._a11yHelper.isStringInArray(this.checkboxModel, item);
    };
    A11yFormControlsComponent.prototype.toggleCheckbox = function (item) {
        this._a11yHelper.toggleItemInArray(this.checkboxModel, item);
    };
    A11yFormControlsComponent.prototype.onSave = function () {
        this.inputWrappedSaveModel = this.inputWrappedModel;
    };
    A11yFormControlsComponent.prototype.ngOnInit = function () {
        this.checkBoxes = this._a11yHelper.getCheckboxModel();
        this.radioButtons = this._a11yHelper.getRadiobuttonsModel();
        this.selectOptions = this._a11yHelper.getSelectOptions();
    };
    A11yFormControlsComponent.prototype.updateSelect = function (value) {
        this.selectModel = value;
    };
    A11yFormControlsComponent = __decorate([
        core_1.Component({
            selector: 'a11y-form-controls',
            templateUrl: './app/form-controls/a11y-form-controls.component.html',
            directives: [
                common_1.CORE_DIRECTIVES,
                common_1.FORM_DIRECTIVES,
                a11y_custom_control_component_1.A11yCustomControlComponent,
                a11y_input_wrapper_component_1.A11yInputWrapperComponent,
                a11y_value_helper_component_1.A11yValueHelperComponent
            ]
        }), 
        __metadata('design:paramtypes', [a11y_helper_service_1.A11yHelperService])
    ], A11yFormControlsComponent);
    return A11yFormControlsComponent;
}());
exports.A11yFormControlsComponent = A11yFormControlsComponent;
//# sourceMappingURL=a11y-form-controls.component.js.map