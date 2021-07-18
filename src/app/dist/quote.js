"use strict";
exports.__esModule = true;
var Quote = /** @class */ (function () {
    function Quote(id, name, description, completeDate) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        if (description === void 0) { description = ''; }
        if (completeDate === void 0) { completeDate = (new Date); }
        this.id = id;
        this.name = name;
        this.description = description;
        this.completeDate = completeDate;
        this.showDescription = false;
    }
    return Quote;
}());
exports.Quote = Quote;

//# sourceMappingURL=quote.js.map
