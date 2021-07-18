"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        var today = new Date(); //get current date and time
        var todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime); //returns value in milliseconds
        var secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
        var dateDifferenceSeconds = dateDifference * 0.001; //converts milliseconds to seconds
        var dateCounter = dateDifferenceSeconds / secondsInDay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    DateCountPipe = __decorate([
        core_1.Pipe({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());
exports.DateCountPipe = DateCountPipe;

//# sourceMappingURL=date-count.pipe.js.map
