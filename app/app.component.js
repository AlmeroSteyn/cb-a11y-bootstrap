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
var a11y_form_controls_component_1 = require("./form-controls/a11y-form-controls.component");
var a11y_index_component_1 = require("./a11y-index.component");
var a11y_helper_service_1 = require("./services/a11y-helper.service");
var a11y_managing_focus_component_1 = require("./managing-focus/a11y-managing-focus.component");
var a11y_component_roles_component_1 = require("./component-roles/a11y-component-roles.component");
var a11y_dev_tools_component_1 = require("./dev-tools/a11y-dev-tools.component");
var router_deprecated_2 = require("@angular/router-deprecated");
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.isIndex = function () {
        var instruction = this._router.generate(['Index']);
        return this._router.isRouteActive(instruction);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/app.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                a11y_helper_service_1.A11yHelperService
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Index', component: a11y_index_component_1.A11yIndexComponent },
            { path: '/form-controls', name: 'FormControls', component: a11y_form_controls_component_1.A11yFormControlsComponent },
            { path: '/managing-focus', name: 'ManagingFocus', component: a11y_managing_focus_component_1.A11yManagingFocusComponent },
            { path: '/component-roles', name: 'ComponentRoles', component: a11y_component_roles_component_1.A11yComponentRolesComponent },
            { path: '/dev-tools/...', name: 'DevTools', component: a11y_dev_tools_component_1.A11yDevToolsComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_2.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map