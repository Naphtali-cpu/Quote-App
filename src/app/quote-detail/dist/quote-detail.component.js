"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var quote_1 = require("../quote");
var QuoteDetailComponent = /** @class */ (function () {
    function QuoteDetailComponent() {
        this.goal = new quote_1.Quote(0, '', '', new Date());
        this.isComplete = new core_1.EventEmitter();
    }
    QuoteDetailComponent.prototype.quoteDelete = function (complete) {
        this.isComplete.emit(complete);
    };
    QuoteDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], QuoteDetailComponent.prototype, "goal");
    __decorate([
        core_1.Output()
    ], QuoteDetailComponent.prototype, "isComplete");
    QuoteDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-quote-detail',
            templateUrl: './quote-detail.component.html',
            styleUrls: ['./quote-detail.component.css']
        })
    ], QuoteDetailComponent);
    return QuoteDetailComponent;
}());
exports.QuoteDetailComponent = QuoteDetailComponent;

//# sourceMappingURL=quote-detail.component.js.map
