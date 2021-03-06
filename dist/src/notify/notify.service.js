var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var NotifyService = /** @class */ (function () {
    function NotifyService() {
    }
    NotifyService.prototype.info = function (message, title, options) {
        abp.notify.info(message, title, options);
    };
    NotifyService.prototype.success = function (message, title, options) {
        abp.notify.success(message, title, options);
    };
    NotifyService.prototype.warn = function (message, title, options) {
        abp.notify.warn(message, title, options);
    };
    NotifyService.prototype.error = function (message, title, options) {
        abp.notify.error(message, title, options);
    };
    NotifyService = __decorate([
        Injectable()
    ], NotifyService);
    return NotifyService;
}());
export { NotifyService };
//# sourceMappingURL=notify.service.js.map