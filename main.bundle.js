webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"exam\">\n  <mat-sidenav-container class=\"side-menu-container\" [ngStyle]=\"{'min-height.px':ui.window.height}\">\n    <mat-sidenav #sidemenu class=\"side-menu\">\n      <mat-toolbar class=\"tool-bar\" color=\"primary\">\n        <span>Questions</span>\n      </mat-toolbar>\n      <mat-nav-list>\n        <a mat-list-item class=\"side-menu-item\" [ngClass]=\"{'active':item.active}\" [routerLink]=\"item.link\" *ngFor=\"let item of menu; index as i;\" (click)=\"sidemenu.close();activeMenuItem(i);\">\n          <mat-icon>{{ item.icon }}</mat-icon>\n          &nbsp;\n          {{ item.title }}\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <div class=\"main-content\">\n      <mat-toolbar class=\"tool-bar\" color=\"primary\">\n        <button mat-icon-button (click)=\"sidemenu.open()\">\n          <mat-icon>list</mat-icon>\n        </button>\n        <span class=\"title\">\n          {{ title }}\n        </span>\n        <span class=\"spacer\"></span>\n        <button mat-icon-button (click)=\"openHint()\">\n          <mat-icon>info_outline</mat-icon>\n        </button>\n      </mat-toolbar>\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-container>\n  <div class=\"power-by\">\n    By - Bie Yaqing\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".exam .side-menu-container .side-menu .tool-bar {\n  height: 56px; }\n\n.exam .side-menu-container .side-menu .side-menu-item {\n  font-size: 14px;\n  min-width: 240px; }\n  .exam .side-menu-container .side-menu .side-menu-item.active {\n    background-color: WhiteSmoke; }\n  .exam .side-menu-container .side-menu .side-menu-item md-icon {\n    font-size: 18px;\n    height: 18px; }\n\n.exam .side-menu-container .main-content .tool-bar {\n  height: 56px; }\n  .exam .side-menu-container .main-content .tool-bar .title {\n    margin-top: 2px;\n    font-size: 16px;\n    margin-left: 20px; }\n  .exam .side-menu-container .main-content .tool-bar .spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n\n.exam .power-by {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  z-index: 999;\n  padding: 10px;\n  color: rgba(0, 0, 0, 0.2); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_question_service__ = __webpack_require__("../../../../../src/app/services/question/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_hint_hint_component__ = __webpack_require__("../../../../../src/app/components/hint/hint.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(questionServices, dialog) {
        this.questionServices = questionServices;
        this.dialog = dialog;
        this.loadQuestions = function () {
            var _this = this;
            this.questionServices.requestQuestionList(function (list) {
                for (var o in list) {
                    var q = list[o];
                    _this.menu.push({
                        title: q.title + " : " + q.difficulty,
                        icon: "code",
                        link: "/js_test/" + q.title,
                        active: false
                    });
                }
            });
        };
        this.activeMenuItem = function (idx) {
            for (var o in this.menu) {
                this.menu[o].active = false;
                if (idx == Number(o)) {
                    var item = this.menu[o];
                    item.active = true;
                    this.title = item.title;
                }
            }
        };
        this.openHint = function () {
            this.hintHit += 1;
            if (this.hintHit == 7) {
                this.hintHit = 0;
                console.log("openHint");
                var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__components_hint_hint_component__["a" /* HintComponent */], {});
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log('The dialog was closed');
                });
            }
        };
        this.ui = {
            window: {
                height: window.innerHeight
            }
        };
        this.menu = [{
                title: "JS Test",
                icon: "code",
                link: "/js_test",
                active: false
            }];
        this.hintHit = 0;
        this.loadQuestions();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_question_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_question_question_service__ = __webpack_require__("../../../../../src/app/services/question/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_js_test_page_js_test_page_component__ = __webpack_require__("../../../../../src/app/pages/js-test-page/js-test-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_question_question_component__ = __webpack_require__("../../../../../src/app/components/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_hint_hint_component__ = __webpack_require__("../../../../../src/app/components/hint/hint.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [{
        path: 'js_test',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_js_test_page_js_test_page_component__["a" /* JsTestPageComponent */]
    }, {
        path: 'js_test/:title',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_js_test_page_js_test_page_component__["a" /* JsTestPageComponent */]
    }, {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_js_test_page_js_test_page_component__["a" /* JsTestPageComponent */]
    }];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_js_test_page_js_test_page_component__["a" /* JsTestPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_hint_hint_component__["a" /* HintComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__components_hint_hint_component__["a" /* HintComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes, {}),
                __WEBPACK_IMPORTED_MODULE_8_ng2_ace_editor__["a" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatInputModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_question_question_service__["a" /* QuestionService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/hint/hint.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hint\">\n  <form (submit)=\"requestHint()\">\n    <mat-form-field class=\"hint-code\">\n      <input matInput [(ngModel)]=\"hint\" name=\"hint\" placeholder=\"Enter Code\" [disabled]=\"editor.text\">\n    </mat-form-field>\n    <button *ngIf=\"!editor.text\" mat-raised-button type=\"submit\">\n      Request\n    </button>\n    <button *ngIf=\"!editor.text\" mat-raised-button type=\"reset\">\n      Clear\n    </button>\n    <button mat-raised-button type=\"button\" (click)=\"close()\">\n      Close\n    </button>\n  </form>\n  <div *ngIf=\"editor.text\" ace-editor\n   [(text)]=\"editor.text\"\n   [mode]=\"editor.mode\"\n   [theme]=\"editor.theme\"\n   [options]=\"editor.options\"\n   [readOnly]=\"editor.readOnly\"\n   class=\"editor\" [ngStyle]=\"editor.style\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hint/hint.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hint .editor {\n  max-width: 800px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hint/hint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_question_question_service__ = __webpack_require__("../../../../../src/app/services/question/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HintComponent = (function () {
    function HintComponent(dialogRef, questionService) {
        this.dialogRef = dialogRef;
        this.questionService = questionService;
        this.requestHint = function () {
            var _this = this;
            this.questionService.requestAnswer(this.hint, function (code) {
                _this.editor.text = code;
                console.log("this.editor.text", _this.editor.text);
            });
        };
        this.close = function () {
            this.dialogRef.close();
        };
        this.hint = "";
        this.page = {
            width: window.innerWidth - 400,
            height: window.innerHeight - 200
        };
        this.editor = {
            text: null,
            mode: "javascript",
            theme: "twilight",
            options: {},
            readOnly: true,
            style: {
                "height.px": this.page.height,
                "width.px": this.page.width
            }
        };
    }
    HintComponent.prototype.ngOnInit = function () {
    };
    HintComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hint',
            template: __webpack_require__("../../../../../src/app/components/hint/hint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/hint/hint.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_2__services_question_question_service__["a" /* QuestionService */]])
    ], HintComponent);
    return HintComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!question\" class=\"default\">\n  Feel free to test your amazing logics <[]>!\n</div>\n<div *ngIf=\"question\" class=\"question\">\n  <div class=\"title\">\n    Question:\n    {{ question.title }}\n  </div>\n  <div class=\"description\">\n    {{ question.description }}\n  </div>\n  <div class=\"hint\">\n    Hint:\n    [{{ question.hint }}]\n  </div>\n  <div class=\"requirement\">\n    Requirement: {{ question.requirement }}<br>\n    Execution Limit: {{ question.executionLimit }} seconds\n  </div>\n  <div class=\"tests\">\n    <div class=\"title\">\n      Tests / Results:\n    </div>\n    <app-test [index]=\"i+1\" [test]=\"test\" *ngFor=\"let test of question.tests; index as i;\"></app-test>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/question/question.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".default {\n  font-size: 20px;\n  color: Grey; }\n\n.question .title {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 6px; }\n\n.question .description {\n  font-size: 14px;\n  color: Grey;\n  margin-bottom: 12px; }\n\n.question .hint {\n  color: GhostWhite;\n  font-size: 12px;\n  margin-bottom: 6px; }\n\n.question .requirement {\n  color: Grey;\n  font-size: 12px;\n  margin-bottom: 12px; }\n\n.question .tests {\n  color: Grey;\n  margin-bottom: 10px; }\n  .question .tests .title {\n    margin-bottom: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionComponent = (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
        console.log("this.question", this.question);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], QuestionComponent.prototype, "question", void 0);
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/components/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/question/question.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"test\">\n  <div class=\"index\">\n    {{ index }}\n  </div>\n  <div class=\"input\">\n    Input:\n    {{ test.input }}\n  </div>\n  <div class=\"output\">\n    Output:\n    {{ test.output }}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test {\n  padding: 4px 0px; }\n  .test .index {\n    font-size: 14px;\n    margin-bottom: -16px; }\n  .test .input {\n    margin-left: 24px;\n    font-size: 12px;\n    margin-bottom: 4px; }\n  .test .output {\n    margin-left: 24px;\n    font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TestComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TestComponent.prototype, "test", void 0);
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/js-test-page/js-test-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"js-test\">\n  <mat-grid-list cols=3 [rowHeight]=\"page.height\">\n    <mat-grid-tile colspan=\"2\">\n      <div ace-editor\n       [(text)]=\"editor.text\"\n       [mode]=\"editor.mode\"\n       [theme]=\"editor.theme\"\n       [options]=\"editor.options\"\n       [readOnly]=\"editor.readOnly\"\n       [autoUpdateContent]=\"editor.autoUpdateContent\"\n       [durationBeforeCallback]=\"editor.durationBeforeCallback\"\n       (textChanged)=\"onEditChange($event)\"\n       class=\"editor\" [ngStyle]=\"editor.style\"></div>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"1\">\n      <div class=\"console\">\n        <div class=\"controller\">\n          <button mat-raised-button (click)=\"runScript()\">\n            <mat-icon>play_arrow</mat-icon>\n            Run\n          </button>\n          <button mat-raised-button (click)=\"download()\">\n            <mat-icon>file_download</mat-icon>\n            Save\n          </button>\n          <button mat-raised-button (click)=\"clearCode()\">\n            <mat-icon>format_color_reset</mat-icon>\n            Reset\n          </button>\n        </div>\n        <div class=\"log\" [ngStyle]=\"log.style\">\n          <div class=\"text\" [innerHTML]=\"log.text\"></div>\n          <div class=\"result\" [innerHTML]=\"log.result\"></div>\n          <div class=\"duration\">\n            duration:\n            {{ log.duration }}\n            ms\n          </div>\n        </div>\n        <hr class=\"hr\">\n        <div class=\"question\">\n          <app-question [question]=\"question\"></app-question>\n        </div>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/js-test-page/js-test-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".js-test .editor {\n  width: 100%;\n  overflow: auto; }\n\n.js-test .console {\n  height: 100%;\n  width: 100%;\n  padding: 10px;\n  overflow-y: scroll; }\n  .js-test .console .controller {\n    margin: 10px 0px; }\n  .js-test .console .log {\n    padding: 10px;\n    border: 1px solid LightGrey;\n    border-radius: 3px;\n    overflow: scroll;\n    margin-bottom: 10px; }\n    .js-test .console .log .text {\n      color: LightBlue;\n      margin-bottom: 10px; }\n    .js-test .console .log .result {\n      color: DeepSkyBlue;\n      margin-bottom: 10px; }\n    .js-test .console .log .duration {\n      color: Grey;\n      font-size: 12px; }\n  .js-test .console .hr {\n    border: solid 1px LightGrey;\n    border-bottom: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/js-test-page/js-test-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsTestPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_codes__ = __webpack_require__("../../../../../src/app/resources/codes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_question_question_service__ = __webpack_require__("../../../../../src/app/services/question/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JsTestPageComponent = (function () {
    function JsTestPageComponent(route, questionService) {
        var _this = this;
        this.route = route;
        this.questionService = questionService;
        this.loadQuestion = function (title) {
            var _this = this;
            if (title) {
                this.questionService.requestQuestion(title, function (data) {
                    _this.question = data;
                });
            }
        };
        this.saveCode = function (code) {
            localStorage.setItem(this.page.storeKey, code);
        };
        this.loadCode = function (success) {
            var code = localStorage.getItem(this.page.storeKey);
            if (code) {
                success(code);
            }
        };
        this.clearCode = function () {
            localStorage.removeItem(this.page.storeKey);
            this.editor.text = __WEBPACK_IMPORTED_MODULE_3__resources_codes__["a" /* Codes */].DEFAULT;
        };
        this.onEditChange = function (event) {
            // console.log(event);
            this.saveCode(event);
        };
        this.runScript = function () {
            var _this = this;
            this.log.text = "";
            this.log.result = "";
            var start = new Date();
            var copyCode = this.editor.text;
            // prepare return console.log
            var myConsoleLog = "console.returnLog = function(callback, arg1, arg2, arg3, arg4) { if(arg4) { console.log(arg1, arg2, arg3, arg4); callback(arg1 + ' ' + arg2 + ' ' + arg3 + ' ' + arg4); } else if(arg3) { console.log(arg1, arg2, arg3); callback(arg1 + ' ' + arg2 + ' ' + arg3); } else if(arg2) { console.log(arg1, arg2); callback(arg1 + ' ' + arg2); } else if(arg1) { console.log(arg1); callback(arg1); } }\n";
            copyCode = copyCode.replace(/console.log\(/g, "console.returnLog(callback, ");
            copyCode = myConsoleLog + copyCode;
            // console.log(copyCode);
            var nf = new Function("cb", copyCode);
            this.log.result = "&#62;&#62;&nbsp;" + nf(function (log) {
                _this.log.text += "&#62;&nbsp;" + log + "<br>";
            });
            var end = new Date();
            this.log.duration = end.getTime() - start.getTime();
        };
        this.download = function () {
            var blob = new Blob([this.editor.text], { type: "application/javascript;charset=utf-8" });
            Object(__WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"])(blob, (this.question ? this.question.title : "js_test") + ".js");
        };
        this.page = {
            height: window.innerHeight - 56,
            storeKey: "JS_TEST_TMP"
        };
        this.editor = {
            text: __WEBPACK_IMPORTED_MODULE_3__resources_codes__["a" /* Codes */].DEFAULT,
            mode: "javascript",
            theme: "twilight",
            options: {},
            readOnly: false,
            autoUpdateContent: true,
            durationBeforeCallback: 1000,
            style: {
                "min-height.px": this.page.height
            }
        };
        this.loadCode(function (code) {
            _this.editor.text = code;
        });
        this.log = {
            text: "",
            result: "",
            duration: 0,
            style: {
                "max-height.px": this.page.height - 88
            }
        };
        this.question = null;
    }
    JsTestPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.loadQuestion(params.title);
        });
    };
    JsTestPageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    JsTestPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-js-test-page',
            template: __webpack_require__("../../../../../src/app/pages/js-test-page/js-test-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/js-test-page/js-test-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_question_question_service__["a" /* QuestionService */]])
    ], JsTestPageComponent);
    return JsTestPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resources/codes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Codes; });
var defaultCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // Write & Return your javascript code here!\n    };\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var addCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        return add(-145, 77);\n    };\n\n    function add(p1, p2) {\n        return p1 + p2;\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var powerCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        return power(2, 3);\n    };\n\n    function power(x, n) {\n        return Math.pow(x, n);\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var CounterIncrementCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        counterIncrement(10, 1, 2);\n    };\n\n    function counterIncrement(x, n, s) {\n        setInterval(() => {\n            x += n;\n            console.log(x);\n        }, s * 1000);\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var checkPalindromeCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        return checkPalindrome(\"hlbeeykoqqqqokyeeblh\");\n    };\n\n    function checkPalindrome(inputString) {\n        var size = inputString.length\n        var result = true\n        for(var i = 0; i < size/2; i++){\n            if(inputString[i] != inputString[size - i - 1]) {\n                result = false\n                break\n            }\n        }\n        return result\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var isLuckyCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        return isLucky(134008);\n    };\n\n    function isLucky(n) {\n        var nStr = \"\" + n\n        var firstHalf = 0\n        var secondHalf = 0\n        for(var i = 0; i < nStr.length / 2; i ++) {\n            firstHalf += Number(nStr[i])\n            secondHalf += Number(nStr[nStr.length / 2 + i])\n        }\n        return firstHalf == secondHalf\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var counterCallbackCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        counterCallback(0.5);\n    };\n\n    function counterCallback(s) {\n        setInterval(callbackFun, s * 1000);\n    }\n\n    function callbackFun() {\n      console.log('new logic');\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var changeButtonColorCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        changeButtonColor(\"#ff99cc\");\n    };\n\n    function changeButtonColor(color) {\n        let buttons = document.getElementsByTagName(\"button\");\n        for(let i = 0; i < buttons.length; i++) {\n            let b = buttons[i];\n            b.style.backgroundColor = color;\n        }\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var adjacentElementsProductCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        return adjacentElementsProduct([4, 1, 2, 3, 1, 5]);\n    };\n\n    function adjacentElementsProduct(inputArray) {\n        var max = -Infinity\n        for (var i = 0; i < inputArray.length - 1; i ++) {\n            var prod = (inputArray[i] * inputArray[i+1])\n            if (max < prod) {\n                max = prod\n            }\n        }\n        return max\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var almostIncreasingSequenceCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        return almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]);\n    };\n\n    function almostIncreasingSequence(sequence) {\n        var removeCount = 0\n        for(var i = 0; i < sequence.length - 1; i ++) {\n            if(sequence[i] >= sequence[i + 1]) {\n                removeCount += 1\n                var preCheck = true\n                var nexCheck = true\n                if(sequence[i - 1]) {\n                    if(sequence[i - 1] >= sequence[i + 1]) {\n                        preCheck = false\n                    }\n                }\n                if(sequence[i + 2]) {\n                    if(sequence[i] >= sequence[i + 2]) {\n                        nexCheck = false\n                    }\n                }\n                if(!preCheck && !nexCheck) {\n                    removeCount += 1\n                }\n            }\n            if(removeCount > 1) {\n                return false\n            }\n        }\n        return true\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var matrixElementsSumCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        return matrixElementsSum([[1,1,1,0],[0,5,0,1],[2,1,3,10]]);\n    };\n\n    function matrixElementsSum(matrix) {\n        var result = 0\n        for(var o in matrix) {\n            for(var p in matrix[o]){\n                if(matrix[o][p] == 0) {\n                    for(var i = matrix.length - 1; i > Number(o); i --) {\n                        matrix[i][p] = 0\n                    }\n                } else {\n                    result += matrix[o][p]\n                }\n            }\n        }\n        return result\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var reverseParenthesesCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        return reverseParentheses(\"a(bcdefghijkl(mno)p)q\");\n    };\n\n    function reverseParentheses(s) {\n        while(s.indexOf(\"(\") != -1) {\n            var openIdx = -1\n            var closeIdx = -1\n            var check = 0\n            for(var o in s) {\n                var cha = s[o]\n                if(cha == \"(\") {\n                    if(openIdx == -1) {\n                        openIdx = Number(o)\n                    }\n                    check = check + 1\n                }\n                if(cha == \")\") {\n                    check = check - 1\n                    if(check == 0) {\n                        closeIdx = Number(o)\n                        break;\n                    }\n                }\n            }\n            var content = s.substring(openIdx + 1, closeIdx);\n            content = content.split(\"\").reverse().join(\"\");\n            content = content.replace(/\\(/g, \"_\");\n            content = content.replace(/\\)/g, \"(\");\n            content = content.replace(/_/g, \")\");\n            var beforeContent = s.substring(0, openIdx);\n            var afterContent = s.substring(closeIdx + 1);\n            s = beforeContent + content + afterContent;\n        }\n        return s;\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var stringsRearrangementCode = "var JS_TEST = (function() {\n    var app = {};\n    let callback;\n    app.run = function(cb) {\n        callback = cb;\n        // The answer is here!\n        return stringsRearrangement([\"abc\", \"abx\", \"axx\", \"abx\", \"abc\"]);\n    };\n\n    function stringsRearrangement(inputArray) {\n        var b = permutations(inputArray);\n        var e = [];\n\n        for (var c = 0; c < b.length; c++) {\n            e[c] = true;\n            for (var d = 1; d < b[c].length; d++) {\n                if (!areDiffBy1Char(b[c][d - 1], b[c][d])) {\n                    e[c] = false;\n                    continue;\n                }\n            }\n            if (e[c] === true) {\n                return true\n            }\n        }\n        return false;\n    }\n\n    function permutations(arr) {\n        var arrangements = [];\n        for (var i = 0; i < arr.length; i++) {\n            var other_than_i = permutations(arr.slice(0, i).concat(arr.slice(i + 1)));\n            if(other_than_i.length === 0) {\n                arrangements.push([arr[i]]);\n            }\n            else {\n                for(var j = 0; j < other_than_i.length; j++) {\n                    arrangements.push([arr[i]].concat(other_than_i[j]));\n                }\n            }\n        }\n        return arrangements;\n    }\n\n    function areDiffBy1Char(x, y) {\n        var w = 0;\n        for(var z = 0; z < x.length; z++) {\n            if(x.charAt(z) === y.charAt(z)) {\n                w++;\n            }\n        }\n        if(w === y.length - 1) {\n            return true;\n        }\n        return false;\n    }\n\n    return app;\n})();\n\nreturn JS_TEST.run(cb);";
var Codes = (function () {
    function Codes() {
    }
    Object.defineProperty(Codes, "DEFAULT", {
        get: function () {
            return defaultCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "ADD", {
        get: function () {
            return addCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "POWER", {
        get: function () {
            return powerCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "COUNTERINCREMENT", {
        get: function () {
            return CounterIncrementCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "CHECKPALINDROME", {
        get: function () {
            return checkPalindromeCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "ISLUCKY", {
        get: function () {
            return isLuckyCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "COUNTERCALLBACK", {
        get: function () {
            return counterCallbackCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "CHANGEBUTTONCOLOR", {
        get: function () {
            return changeButtonColorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "ADJACENTELEMENTSPRODUCT", {
        get: function () {
            return adjacentElementsProductCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "ALMOSTINCREASINGSEQUENCE", {
        get: function () {
            return almostIncreasingSequenceCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "MATRIXELEMENTSSUM", {
        get: function () {
            return matrixElementsSumCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "REVERSEPARENTHESES", {
        get: function () {
            return reverseParenthesesCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Codes, "STRINGSREARRANGEMENT", {
        get: function () {
            return stringsRearrangementCode;
        },
        enumerable: true,
        configurable: true
    });
    return Codes;
}());



/***/ }),

/***/ "../../../../../src/app/resources/questions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Questions; });
var Questions = (function () {
    function Questions() {
    }
    Object.defineProperty(Questions, "ALL", {
        get: function () {
            return [{
                    title: "Add",
                    description: "Write a function that returns the sum of two numbers.",
                    hint: "ADD",
                    tests: [{
                            input: "-145, 77",
                            output: "-68"
                        }, {
                            input: "20, 564",
                            output: "584"
                        }, {
                            input: "52 90",
                            output: "142"
                        }],
                    requirement: "[input] integer p1 p2 / [output] integer",
                    executionLimit: 4,
                    difficulty: 0
                }, {
                    title: "Power",
                    description: "Write a function that returns the x power of n.",
                    hint: "POWER",
                    tests: [{
                            input: "2, 3",
                            output: "8"
                        }, {
                            input: "3, 5",
                            output: "243"
                        }, {
                            input: "7, 0",
                            output: "1"
                        }, {
                            input: "67, -2",
                            output: "0.00022276676319893073"
                        }, {
                            input: "13, -1",
                            output: "0.07692307692307693"
                        }],
                    requirement: "[input] integer x n / [output] number",
                    executionLimit: 4,
                    difficulty: 0
                }, {
                    title: "Counter Increment",
                    description: "Create a function increment the number value x by n in every s seconds. Console log value x in each iteration.",
                    hint: "COUNTERINCREMENT",
                    tests: [{
                            input: "10, 1, 2",
                            output: "undefined"
                        }, {
                            input: "12, 2, 3",
                            output: "undefined"
                        }, {
                            input: "25, 3, 1",
                            output: "undefined"
                        }],
                    requirement: "[input] integer x, n, s / [output] void",
                    executionLimit: 4,
                    difficulty: 1
                }, {
                    title: "Check Palindrome",
                    description: "Given the string, check if it is a palindrome.",
                    hint: "CHECKPALINDROME",
                    tests: [{
                            input: "\"aabaa\"",
                            output: "true"
                        }, {
                            input: "\"abac\"",
                            output: "false"
                        }, {
                            input: "\"zzzazzazz\"",
                            output: "false"
                        }, {
                            input: "\"hlbeeykoqqqqokyeeblh\"",
                            output: "true"
                        }],
                    requirement: "[input] string inputString / [output] boolean",
                    executionLimit: 4,
                    difficulty: 1
                }, {
                    title: "Is Lucky",
                    description: "Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.",
                    hint: "ISLUCKY",
                    tests: [{
                            input: "1230",
                            output: "true"
                        }, {
                            input: "239017",
                            output: "false"
                        }, {
                            input: "134008",
                            output: "true"
                        }, {
                            input: "10",
                            output: "false"
                        }, {
                            input: "11",
                            output: "true"
                        }, {
                            input: "1010",
                            output: "true"
                        }],
                    requirement: "[input] integer n / [output] boolean",
                    executionLimit: 4,
                    difficulty: 1
                }, {
                    title: "Counter Callback",
                    description: "Based on Counter Increment function, use a callback function replace the incremental logic. Replaced logic: console.log('new logic');",
                    hint: "COUNTERCALLBACK",
                    tests: [{
                            input: "1",
                            output: "undefined"
                        }, {
                            input: "0.5",
                            output: "undefined"
                        }],
                    requirement: "[input] integer s / [output] void",
                    executionLimit: 4,
                    difficulty: 1
                }, {
                    title: "Change Button Color",
                    description: "Use javascript code change all the buttons' color in this page!",
                    hint: "CHANGEBUTTONCOLOR",
                    tests: [{
                            input: "\"CornflowerBlue\"",
                            output: "undefined"
                        }, {
                            input: "\"Gold\"",
                            output: "undefined"
                        }, {
                            input: "\"OrangeRed\"",
                            output: "undefined"
                        }, {
                            input: "\"#ff99cc\"",
                            output: "undefined"
                        }, {
                            input: "\"#9999ff\"",
                            output: "undefined"
                        }],
                    requirement: "[input] string color / [output] void",
                    executionLimit: 4,
                    difficulty: 2
                }, {
                    title: "Adjacent Elements Product",
                    description: "Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.",
                    hint: "ADJACENTELEMENTSPRODUCT",
                    tests: [{
                            input: "[3, 6, -2, -5, 7, 3]",
                            output: "21"
                        }, {
                            input: "[-1, -2]",
                            output: "2"
                        }, {
                            input: "[5, 6, -4, 2, 3, 2, -23]",
                            output: "30"
                        }, {
                            input: "[-23, 4, -3, 8, -12]",
                            output: "-12"
                        }, {
                            input: "[1, 0, 1, 0, 1000]",
                            output: "0"
                        }, {
                            input: "[4, 1, 2, 3, 1, 5]",
                            output: "6"
                        }],
                    requirement: "[input] array.integer inputArray / [output] integer",
                    executionLimit: 4,
                    difficulty: 2
                }, {
                    title: "Almost Increasing Sequence",
                    description: "Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.",
                    hint: "ALMOSTINCREASINGSEQUENCE",
                    tests: [{
                            input: "[1, 3, 2, 1]",
                            output: "false"
                        }, {
                            input: "[1, 3, 2]",
                            output: "true"
                        }, {
                            input: "[1, 2, 1, 2]",
                            output: "false"
                        }, {
                            input: "[1, 4, 10, 4, 2]",
                            output: "false"
                        }, {
                            input: "[1, 2, 3, 4, 99, 5, 6]",
                            output: "true"
                        }, {
                            input: "[123, -17, -5, 1, 2, 3, 12, 43, 45]",
                            output: "true"
                        }],
                    requirement: "[input] array.integer sequence / [output] boolean",
                    executionLimit: 4,
                    difficulty: 2
                }, {
                    title: "Matrix Elements Sum",
                    description: "After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in. Help the bots calculate the total price of all the rooms that are suitable for them.",
                    hint: "MATRIXELEMENTSSUM",
                    tests: [{
                            input: "[[1,1,1,0],[0,5,0,1],[2,1,3,10]]",
                            output: "9"
                        }, {
                            input: "[[1,1,1],[2,2,2],[3,3,3]]",
                            output: "18"
                        }, {
                            input: "[[0]]",
                            output: "0"
                        }, {
                            input: "[[0,1,1,2],[0,5,0,0],[2,0,3,3]]",
                            output: "9"
                        }],
                    requirement: "[input] array.array.integer matrix / [output] integer",
                    executionLimit: 4,
                    difficulty: 3
                }, {
                    title: "Reverse Parentheses",
                    description: "You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence. Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.",
                    hint: "REVERSEPARENTHESES",
                    tests: [{
                            input: "\"a(bc)de\"",
                            output: "\"acbde\""
                        }, {
                            input: "\"a(bcdefghijkl(mno)p)q\"",
                            output: "\"apmnolkjihgfedcbq\""
                        }, {
                            input: "\"co(de(fight)s)\"",
                            output: "\"cosfighted\""
                        }, {
                            input: "\"Code(Cha(lle)nge)\"",
                            output: "\"CodeegnlleahC\""
                        }, {
                            input: "\"Where are the parentheses?\"",
                            output: "\"Where are the parentheses?\""
                        }, {
                            input: "\"abc(cba)ab(bac)c\"",
                            output: "\"abcabcabcabc\""
                        }, {
                            input: "\"The ((quick (brown) (fox) jumps over the lazy) dog)\"",
                            output: "\"The god quick nworb xof jumps over the lazy\""
                        }],
                    requirement: "[input] string s / [output] string",
                    executionLimit: 4,
                    difficulty: 4
                }, {
                    title: "Strings Rearrangement",
                    description: "Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.",
                    hint: "STRINGSREARRANGEMENT",
                    tests: [{
                            input: "[\"aba\", \"bbb\", \"bab\"]",
                            output: "false"
                        }, {
                            input: "[\"q\", \"q\"]",
                            output: "false"
                        }, {
                            input: "[\"abc\", \"abx\", \"axx\", \"abx\", \"abc\"]",
                            output: "true"
                        }],
                    requirement: "[input] array.string inputArray / [output] boolean",
                    executionLimit: 4,
                    difficulty: 5
                }];
        },
        enumerable: true,
        configurable: true
    });
    return Questions;
}());



/***/ }),

/***/ "../../../../../src/app/services/question/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_questions__ = __webpack_require__("../../../../../src/app/resources/questions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_codes__ = __webpack_require__("../../../../../src/app/resources/codes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService() {
        this.requestQuestionList = function (success) {
            var list = [];
            for (var o in this.questions) {
                var q = this.questions[o];
                list.push({
                    title: q.title,
                    difficulty: q.difficulty
                });
            }
            success(list);
        };
        this.requestQuestion = function (title, success) {
            var question = null;
            for (var o in this.questions) {
                var q = this.questions[o];
                if (q.title == title) {
                    question = q;
                    break;
                }
            }
            success(question);
        };
        this.requestAnswer = function (hint, success) {
            success(__WEBPACK_IMPORTED_MODULE_2__resources_codes__["a" /* Codes */][hint]);
        };
        this.questions = __WEBPACK_IMPORTED_MODULE_1__resources_questions__["a" /* Questions */].ALL;
    }
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map