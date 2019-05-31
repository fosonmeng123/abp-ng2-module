(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs', '@angular/common/http'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.abpModule = {}), global.ng.core, global.rxjs, global.http));
}(this, function (exports, core, rxjs, http) { 'use strict';

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var AbpSessionService = /** @class */ (function () {
        function AbpSessionService() {
        }
        Object.defineProperty(AbpSessionService.prototype, "userId", {
            get: function () {
                return abp.session.userId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbpSessionService.prototype, "tenantId", {
            get: function () {
                return abp.session.tenantId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbpSessionService.prototype, "impersonatorUserId", {
            get: function () {
                return abp.session.impersonatorUserId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbpSessionService.prototype, "impersonatorTenantId", {
            get: function () {
                return abp.session.impersonatorTenantId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbpSessionService.prototype, "multiTenancySide", {
            get: function () {
                return abp.session.multiTenancySide;
            },
            enumerable: true,
            configurable: true
        });
        AbpSessionService = __decorate([
            core.Injectable()
        ], AbpSessionService);
        return AbpSessionService;
    }());

    var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var PermissionCheckerService = /** @class */ (function () {
        function PermissionCheckerService() {
        }
        PermissionCheckerService.prototype.isGranted = function (permissionName) {
            return abp.auth.isGranted(permissionName);
        };
        PermissionCheckerService = __decorate$1([
            core.Injectable()
        ], PermissionCheckerService);
        return PermissionCheckerService;
    }());

    var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var FeatureCheckerService = /** @class */ (function () {
        function FeatureCheckerService() {
        }
        FeatureCheckerService.prototype.get = function (featureName) {
            return abp.features.get(featureName);
        };
        FeatureCheckerService.prototype.getValue = function (featureName) {
            return abp.features.getValue(featureName);
        };
        FeatureCheckerService.prototype.isEnabled = function (featureName) {
            return abp.features.isEnabled(featureName);
        };
        FeatureCheckerService = __decorate$2([
            core.Injectable()
        ], FeatureCheckerService);
        return FeatureCheckerService;
    }());

    var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var LocalizationService = /** @class */ (function () {
        function LocalizationService() {
        }
        Object.defineProperty(LocalizationService.prototype, "languages", {
            get: function () {
                return abp.localization.languages;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LocalizationService.prototype, "currentLanguage", {
            get: function () {
                return abp.localization.currentLanguage;
            },
            enumerable: true,
            configurable: true
        });
        LocalizationService.prototype.localize = function (key, sourceName) {
            return abp.localization.localize(key, sourceName);
        };
        LocalizationService.prototype.getSource = function (sourceName) {
            return abp.localization.getSource(sourceName);
        };
        LocalizationService = __decorate$3([
            core.Injectable()
        ], LocalizationService);
        return LocalizationService;
    }());

    var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var SettingService = /** @class */ (function () {
        function SettingService() {
        }
        SettingService.prototype.get = function (name) {
            return abp.setting.get(name);
        };
        SettingService.prototype.getBoolean = function (name) {
            return abp.setting.getBoolean(name);
        };
        SettingService.prototype.getInt = function (name) {
            return abp.setting.getInt(name);
        };
        SettingService = __decorate$4([
            core.Injectable()
        ], SettingService);
        return SettingService;
    }());

    var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
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
        NotifyService = __decorate$5([
            core.Injectable()
        ], NotifyService);
        return NotifyService;
    }());

    var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var MessageService = /** @class */ (function () {
        function MessageService() {
        }
        MessageService.prototype.info = function (message, title, isHtml) {
            return abp.message.info(message, title, isHtml);
        };
        MessageService.prototype.success = function (message, title, isHtml) {
            return abp.message.success(message, title, isHtml);
        };
        MessageService.prototype.warn = function (message, title, isHtml) {
            return abp.message.warn(message, title, isHtml);
        };
        MessageService.prototype.error = function (message, title, isHtml) {
            return abp.message.error(message, title, isHtml);
        };
        MessageService.prototype.confirm = function (message, titleOrCallBack, callback, isHtml) {
            if (typeof titleOrCallBack == 'string') {
                return abp.message.confirm(message, titleOrCallBack, callback, isHtml);
            }
            else {
                return abp.message.confirm(message, undefined, titleOrCallBack, isHtml);
            }
        };
        MessageService = __decorate$6([
            core.Injectable()
        ], MessageService);
        return MessageService;
    }());

    var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
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
        LogService = __decorate$7([
            core.Injectable()
        ], LogService);
        return LogService;
    }());

    var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var AbpMultiTenancyService = /** @class */ (function () {
        function AbpMultiTenancyService() {
        }
        Object.defineProperty(AbpMultiTenancyService.prototype, "isEnabled", {
            get: function () {
                return abp.multiTenancy.isEnabled;
            },
            enumerable: true,
            configurable: true
        });
        AbpMultiTenancyService = __decorate$8([
            core.Injectable()
        ], AbpMultiTenancyService);
        return AbpMultiTenancyService;
    }());

    var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var TokenService = /** @class */ (function () {
        function TokenService() {
        }
        TokenService.prototype.getToken = function () {
            return abp.auth.getToken();
        };
        TokenService.prototype.getTokenCookieName = function () {
            return abp.auth.tokenCookieName;
        };
        TokenService.prototype.clearToken = function () {
            abp.auth.clearToken();
        };
        TokenService.prototype.setToken = function (authToken, expireDate) {
            abp.auth.setToken(authToken, expireDate);
        };
        TokenService = __decorate$9([
            core.Injectable()
        ], TokenService);
        return TokenService;
    }());

    var __decorate$a = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var UtilsService = /** @class */ (function () {
        function UtilsService() {
        }
        UtilsService.prototype.getCookieValue = function (key) {
            return abp.utils.getCookieValue(key);
        };
        UtilsService.prototype.setCookieValue = function (key, value, expireDate, path) {
            abp.utils.setCookieValue(key, value, expireDate, path);
        };
        UtilsService.prototype.deleteCookie = function (key, path) {
            abp.utils.deleteCookie(key, path);
        };
        UtilsService = __decorate$a([
            core.Injectable()
        ], UtilsService);
        return UtilsService;
    }());

    var iBlob = /** @class */ (function () {
        function iBlob(texts, options) {
        }
        return iBlob;
    }());
    var iFileReader = /** @class */ (function () {
        function iFileReader() {
        }
        iFileReader.prototype.readAsText = function (blob) {
            if (typeof this.onload === 'function') {
                this.onload();
            }
        };
        return iFileReader;
    }());
    var Blob = window['Blob'] || iBlob;
    var FileReader = window['FileReader'] || iFileReader;

    var __decorate$b = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var AbpHttpConfiguration = /** @class */ (function () {
        function AbpHttpConfiguration(_messageService, _logService) {
            this._messageService = _messageService;
            this._logService = _logService;
            this.defaultError = {
                message: 'An error has occurred!',
                details: 'Error details were not sent by server.'
            };
            this.defaultError401 = {
                message: 'You are not authenticated!',
                details: 'You should be authenticated (sign in) in order to perform this operation.'
            };
            this.defaultError403 = {
                message: 'You are not authorized!',
                details: 'You are not allowed to perform this operation.'
            };
            this.defaultError404 = {
                message: 'Resource not found!',
                details: 'The resource requested could not be found on the server.'
            };
        }
        AbpHttpConfiguration.prototype.logError = function (error) {
            this._logService.error(error);
        };
        AbpHttpConfiguration.prototype.showError = function (error) {
            if (error.details) {
                return this._messageService.error(error.details, error.message || this.defaultError.message);
            }
            else {
                return this._messageService.error(error.message || this.defaultError.message);
            }
        };
        AbpHttpConfiguration.prototype.handleTargetUrl = function (targetUrl) {
            if (!targetUrl) {
                location.href = '/';
            }
            else {
                location.href = targetUrl;
            }
        };
        AbpHttpConfiguration.prototype.handleUnAuthorizedRequest = function (messagePromise, targetUrl) {
            var _this = this;
            var self = this;
            if (messagePromise) {
                messagePromise.done(function () {
                    _this.handleTargetUrl(targetUrl || '/');
                });
            }
            else {
                self.handleTargetUrl(targetUrl || '/');
            }
        };
        AbpHttpConfiguration.prototype.handleNonAbpErrorResponse = function (response) {
            var self = this;
            switch (response.status) {
                case 401:
                    self.handleUnAuthorizedRequest(self.showError(self.defaultError401), '/');
                    break;
                case 403:
                    self.showError(self.defaultError403);
                    break;
                case 404:
                    self.showError(self.defaultError404);
                    break;
                default:
                    self.showError(self.defaultError);
                    break;
            }
        };
        AbpHttpConfiguration.prototype.handleAbpResponse = function (response, ajaxResponse) {
            var newResponse;
            if (ajaxResponse.success) {
                newResponse = response.clone({
                    body: ajaxResponse.result
                });
                if (ajaxResponse.targetUrl) {
                    this.handleTargetUrl(ajaxResponse.targetUrl);
                }
            }
            else {
                newResponse = response.clone({
                    body: ajaxResponse.result
                });
                if (!ajaxResponse.error) {
                    ajaxResponse.error = this.defaultError;
                }
                this.logError(ajaxResponse.error);
                this.showError(ajaxResponse.error);
                if (response.status === 401) {
                    this.handleUnAuthorizedRequest(null, ajaxResponse.targetUrl);
                }
            }
            return newResponse;
        };
        AbpHttpConfiguration.prototype.getAbpAjaxResponseOrNull = function (response) {
            if (!response || !response.headers) {
                return null;
            }
            var contentType = response.headers.get('Content-Type');
            if (!contentType) {
                this._logService.warn('Content-Type is not sent!');
                return null;
            }
            if (contentType.indexOf("application/json") < 0) {
                this._logService.warn('Content-Type is not application/json: ' + contentType);
                return null;
            }
            var responseObj = JSON.parse(JSON.stringify(response.body));
            if (!responseObj.__abp) {
                return null;
            }
            return responseObj;
        };
        AbpHttpConfiguration.prototype.handleResponse = function (response) {
            var ajaxResponse = this.getAbpAjaxResponseOrNull(response);
            if (ajaxResponse == null) {
                return response;
            }
            return this.handleAbpResponse(response, ajaxResponse);
        };
        AbpHttpConfiguration.prototype.blobToText = function (blob) {
            return new rxjs.Observable(function (observer) {
                if (!blob) {
                    observer.next("");
                    observer.complete();
                }
                else {
                    var reader = new FileReader();
                    reader.onload = function () {
                        observer.next(this.result);
                        observer.complete();
                    };
                    reader.readAsText(blob);
                }
            });
        };
        AbpHttpConfiguration = __decorate$b([
            core.Injectable(),
            __metadata("design:paramtypes", [MessageService,
                LogService])
        ], AbpHttpConfiguration);
        return AbpHttpConfiguration;
    }());
    var AbpHttpInterceptor = /** @class */ (function () {
        function AbpHttpInterceptor(configuration) {
            this._tokenService = new TokenService();
            this._utilsService = new UtilsService();
            this._logService = new LogService();
            this.configuration = configuration;
        }
        AbpHttpInterceptor.prototype.intercept = function (request, next) {
            var _this = this;
            var interceptObservable = new rxjs.Subject();
            var modifiedRequest = this.normalizeRequestHeaders(request);
            next.handle(modifiedRequest)
                .subscribe(function (event) {
                _this.handleSuccessResponse(event, interceptObservable);
            }, function (error) {
                return _this.handleErrorResponse(error, interceptObservable);
            });
            return interceptObservable;
        };
        AbpHttpInterceptor.prototype.normalizeRequestHeaders = function (request) {
            var modifiedHeaders = new http.HttpHeaders();
            modifiedHeaders = request.headers.set("Pragma", "no-cache")
                .set("Cache-Control", "no-cache")
                .set("Expires", "Sat, 01 Jan 2000 00:00:00 GMT");
            modifiedHeaders = this.addXRequestedWithHeader(modifiedHeaders);
            modifiedHeaders = this.addAuthorizationHeaders(modifiedHeaders);
            modifiedHeaders = this.addAspNetCoreCultureHeader(modifiedHeaders);
            modifiedHeaders = this.addAcceptLanguageHeader(modifiedHeaders);
            modifiedHeaders = this.addTenantIdHeader(modifiedHeaders);
            return request.clone({
                headers: modifiedHeaders
            });
        };
        AbpHttpInterceptor.prototype.addXRequestedWithHeader = function (headers) {
            if (headers) {
                headers = headers.set('X-Requested-With', 'XMLHttpRequest');
            }
            return headers;
        };
        AbpHttpInterceptor.prototype.addAspNetCoreCultureHeader = function (headers) {
            var cookieLangValue = this._utilsService.getCookieValue("Abp.Localization.CultureName");
            if (cookieLangValue && headers && !headers.has('.AspNetCore.Culture')) {
                headers = headers.set('.AspNetCore.Culture', cookieLangValue);
            }
            return headers;
        };
        AbpHttpInterceptor.prototype.addAcceptLanguageHeader = function (headers) {
            var cookieLangValue = this._utilsService.getCookieValue("Abp.Localization.CultureName");
            if (cookieLangValue && headers && !headers.has('Accept-Language')) {
                headers = headers.set('Accept-Language', cookieLangValue);
            }
            return headers;
        };
        AbpHttpInterceptor.prototype.addTenantIdHeader = function (headers) {
            var cookieTenantIdValue = this._utilsService.getCookieValue('Abp.TenantId');
            if (cookieTenantIdValue && headers && !headers.has('Abp.TenantId')) {
                headers = headers.set('Abp.TenantId', cookieTenantIdValue);
            }
            return headers;
        };
        AbpHttpInterceptor.prototype.addAuthorizationHeaders = function (headers) {
            var authorizationHeaders = headers ? headers.getAll('Authorization') : null;
            if (!authorizationHeaders) {
                authorizationHeaders = [];
            }
            if (!this.itemExists(authorizationHeaders, function (item) { return item.indexOf('Bearer ') == 0; })) {
                var token = this._tokenService.getToken();
                if (headers && token) {
                    headers = headers.set('Authorization', 'Bearer ' + token);
                }
            }
            return headers;
        };
        AbpHttpInterceptor.prototype.handleSuccessResponse = function (event, interceptObservable) {
            var self = this;
            if (event instanceof http.HttpResponse) {
                if (event.body instanceof Blob && event.body.type && event.body.type.indexOf("application/json") >= 0) {
                    var clonedResponse = event.clone();
                    self.configuration.blobToText(event.body).subscribe(function (json) {
                        var responseBody = json == "null" ? {} : JSON.parse(json);
                        var modifiedResponse = self.configuration.handleResponse(event.clone({
                            body: responseBody
                        }));
                        interceptObservable.next(modifiedResponse.clone({
                            body: new Blob([JSON.stringify(modifiedResponse.body)], { type: 'application/json' })
                        }));
                        interceptObservable.complete();
                    });
                }
                else {
                    interceptObservable.next(event);
                    interceptObservable.complete();
                }
            }
            else {
                interceptObservable.next(event);
            }
        };
        AbpHttpInterceptor.prototype.handleErrorResponse = function (error, interceptObservable) {
            var _this = this;
            var errorObservable = new rxjs.Subject();
            if (!(error.error instanceof Blob)) {
                interceptObservable.error(error);
                interceptObservable.complete();
                return rxjs.of({});
            }
            this.configuration.blobToText(error.error).subscribe(function (json) {
                var errorBody = (json == "" || json == "null") ? {} : JSON.parse(json);
                var errorResponse = new http.HttpResponse({
                    headers: error.headers,
                    status: error.status,
                    body: errorBody
                });
                var ajaxResponse = _this.configuration.getAbpAjaxResponseOrNull(errorResponse);
                if (ajaxResponse != null) {
                    _this.configuration.handleAbpResponse(errorResponse, ajaxResponse);
                }
                else {
                    _this.configuration.handleNonAbpErrorResponse(errorResponse);
                }
                errorObservable.complete();
                interceptObservable.error(error);
                interceptObservable.complete();
            });
            return errorObservable;
        };
        AbpHttpInterceptor.prototype.itemExists = function (items, predicate) {
            for (var i = 0; i < items.length; i++) {
                if (predicate(items[i])) {
                    return true;
                }
            }
            return false;
        };
        AbpHttpInterceptor = __decorate$b([
            core.Injectable(),
            __metadata("design:paramtypes", [AbpHttpConfiguration])
        ], AbpHttpInterceptor);
        return AbpHttpInterceptor;
    }());

    var __decorate$c = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var AbpUserConfigurationService = /** @class */ (function () {
        function AbpUserConfigurationService(_http) {
            this._http = _http;
        }
        AbpUserConfigurationService.prototype.initialize = function () {
            this._http.get('/AbpUserConfiguration/GetAll')
                .subscribe(function (result) {
                jQuery.extend(true, abp, JSON.parse(JSON.stringify(result)));
            });
        };
        AbpUserConfigurationService = __decorate$c([
            core.Injectable(),
            __metadata$1("design:paramtypes", [http.HttpClient])
        ], AbpUserConfigurationService);
        return AbpUserConfigurationService;
    }());

    var __decorate$d = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var AbpModule = /** @class */ (function () {
        function AbpModule() {
        }
        AbpModule = __decorate$d([
            core.NgModule({
                declarations: [],
                providers: [
                    AbpSessionService,
                    PermissionCheckerService,
                    FeatureCheckerService,
                    LocalizationService,
                    SettingService,
                    NotifyService,
                    MessageService,
                    LogService,
                    AbpMultiTenancyService,
                    AbpUserConfigurationService,
                    AbpHttpConfiguration,
                    TokenService,
                    UtilsService
                ]
            })
        ], AbpModule);
        return AbpModule;
    }());

    /**
     * @module
     * @description
     * Entry point for all public APIs of the Angular Module
     */

    exports.AbpModule = AbpModule;
    exports.AbpUserConfigurationService = AbpUserConfigurationService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
