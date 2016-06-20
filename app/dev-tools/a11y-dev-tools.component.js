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
var router_deprecated_1 = require("@angular/router-deprecated");
var a11y_fails_component_1 = require("./a11y-fails/a11y-fails.component");
var a11y_pass_component_1 = require("./a11y-pass/a11y-pass.component");
var a11y_dev_tools_index_component_1 = require("./a11y-dev-tools-index.component");
var A11yDevToolsComponent = (function () {
    function A11yDevToolsComponent() {
    }
    A11yDevToolsComponent = __decorate([
        core_1.Component({
            selector: 'a11y-dev-tools',
            templateUrl: './app/dev-tools/a11y-dev-tools.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'A11yDevToolsIndex', component: a11y_dev_tools_index_component_1.A11yDevToolsIndexComponent, useAsDefault: true },
            { path: '/fail-demo', name: 'A11yFails', component: a11y_fails_component_1.A11yFailsComponent },
            { path: '/pass-demo', name: 'A11yPass', component: a11y_pass_component_1.A11yPassComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], A11yDevToolsComponent);
    return A11yDevToolsComponent;
}());
exports.A11yDevToolsComponent = A11yDevToolsComponent;
//# sourceMappingURL=a11y-dev-tools.component.js.map