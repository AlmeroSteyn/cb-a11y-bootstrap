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
// #docregion
var noop = function () {
};
var A11Y_CUSTOM_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
    useExisting: core_1.forwardRef(function () { return A11yCustomControlComponent; }),
    multi: true
});
var A11yCustomControlComponent = (function () {
    function A11yCustomControlComponent(_a11yHelper) {
        this._a11yHelper = _a11yHelper;
        this.innerValue = '';
        this.outerValue = '';
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    A11yCustomControlComponent.prototype.onChange = function (event, value) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
        else {
            this.innerValue = this._a11yHelper.removeHtmlStringBreaks(value);
            this.onChangeCallback(this.innerValue);
        }
    };
    A11yCustomControlComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    A11yCustomControlComponent.prototype.writeValue = function (value) {
        if (value != this.innerValue) {
            this.innerValue = value;
            this.outerValue = value;
        }
    };
    A11yCustomControlComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    A11yCustomControlComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    A11yCustomControlComponent.prototype.ngOnInit = function () {
        this.uniqueId = this._a11yHelper.generateUniqueIdString();
    };
    A11yCustomControlComponent = __decorate([
        core_1.Component({
            selector: 'a11y-custom-control',
            templateUrl: './app/shared/a11y-custom-control.component.html',
            styleUrls: ['./app/shared/a11y-custom-control.component.css'],
            providers: [A11Y_CUSTOM_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [a11y_helper_service_1.A11yHelperService])
    ], A11yCustomControlComponent);
    return A11yCustomControlComponent;
}());
exports.A11yCustomControlComponent = A11yCustomControlComponent;
// #enddocregion
//# sourceMappingURL=a11y-custom-control.component.js.map