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
var A11yHelperService = (function () {
    function A11yHelperService(_router) {
        this._router = _router;
    }
    A11yHelperService.prototype.getInternalLink = function (hash, instructionName) {
        var instruction = this._router.generate([instructionName]);
        var path = '/' + instruction.toUrlPath() + hash;
        return path;
    };
    A11yHelperService.prototype.generateUniqueIdString = function () {
        return (this.randomGuidSnippet() +
            this.randomGuidSnippet() + "-" +
            this.randomGuidSnippet() + "-4" +
            this.randomGuidSnippet().substr(0, 3) + "-" +
            this.randomGuidSnippet() + "-" +
            this.randomGuidSnippet() +
            this.randomGuidSnippet() +
            this.randomGuidSnippet()).toLowerCase();
    };
    A11yHelperService.prototype.getCheckboxModel = function () {
        return [
            {
                name: 'Template syntax',
                value: 'Template syntax'
            },
            {
                name: 'Observables',
                value: 'Observables'
            },
            {
                name: 'Components',
                value: 'Components'
            },
            {
                name: 'Forms',
                value: 'Forms'
            }
        ];
    };
    A11yHelperService.prototype.getRadiobuttonsModel = function () {
        return [
            {
                name: 'TypeScript',
                value: 'TypeScript'
            },
            {
                name: 'JavaScript',
                value: 'JavaScript'
            },
            {
                name: 'ES6',
                value: 'ES6'
            },
            {
                name: 'Dart',
                value: 'Dart'
            }
        ];
    };
    A11yHelperService.prototype.getSelectOptions = function () {
        return [
            {
                name: 'Curiosity',
                value: 'Curiosity'
            },
            {
                name: 'Increased userbase',
                value: 'Increased userbase'
            },
            {
                name: 'Legal reasons',
                value: 'Legal reasons'
            }
        ];
    };
    A11yHelperService.prototype.getCountriesWorkedIn = function () {
        return ['The USA', 'The Netherlands', 'South Africa', 'Germany', 'The UK'];
    };
    A11yHelperService.prototype.toggleItemInArray = function (stringArray, item) {
        var entryIndex = stringArray.indexOf(item);
        if (entryIndex != -1) {
            stringArray.splice(entryIndex, 1);
        }
        else {
            stringArray.push(item);
        }
    };
    A11yHelperService.prototype.isStringInArray = function (stringArray, item) {
        return stringArray.indexOf(item.toString()) != -1;
    };
    A11yHelperService.prototype.removeHtmlStringBreaks = function (inputValue) {
        return inputValue.replace(new RegExp('<div>', 'g'), '')
            .replace(new RegExp('</div>', 'g'), '\n')
            .replace(new RegExp('<br>', 'g'), '');
    };
    A11yHelperService.prototype.randomGuidSnippet = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    A11yHelperService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], A11yHelperService);
    return A11yHelperService;
}());
exports.A11yHelperService = A11yHelperService;
//# sourceMappingURL=a11y-helper.service.js.map