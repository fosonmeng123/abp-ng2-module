var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.prototype.debug = function (logObject) {
        abp.log.debug(logObject);
    };
    LogService.prototype.info = function (logObject) {
        abp.log.info(logObject);
    };
    LogService.prototype.warn = function (logObject) {
        abp.log.warn(logObject);
    };
    LogService.prototype.error = function (logObject) {
        abp.log.error(logObject);
    };
    LogService.prototype.fatal = function (logObject) {
        abp.log.fatal(logObject);
    };
    LogService = __decorate([
        Injectable()
    ], LogService);
    return LogService;
}());
export { LogService };
//# sourceMappingURL=log.service.js.map