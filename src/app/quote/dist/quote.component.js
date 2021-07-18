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
var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.quotes = [
            new quote_1.Quote(1, 'Naphtali Makori', 'Coding a day keeps the doctor away', new Date(2019, 3, 4)),
            new quote_1.Quote(2, 'Natasha Wachira', 'Eat anything because we will leave our bodies on earth', new Date(2018, 1, 4)),
        ];
    }
    QuoteComponent.prototype.addNewQuote = function (quote) {
        console.log(quote);
        var quoteLength = this.quotes.length;
        // quoteLength.id = quoteLength+1;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.toggleDetails = function (index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    };
    QuoteComponent.prototype.deleteQuote = function (isComplete, index) {
        if (isComplete) {
            var toDelete = confirm("Are you sure you want to delete " + this.quotes[index].name + "?");
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    };
    QuoteComponent.prototype.displayInfo = function (index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    };
    QuoteComponent.prototype.ngOnInit = function () { };
    QuoteComponent = __decorate([
        core_1.Component({
            selector: 'app-quote',
            templateUrl: './quote.component.html',
            styleUrls: ['./quote.component.css']
        })
    ], QuoteComponent);
    return QuoteComponent;
}());
exports.QuoteComponent = QuoteComponent;

//# sourceMappingURL=quote.component.js.map
