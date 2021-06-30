"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bar = exports.foo = exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
        // this.id = id;
        var foo = ''; // Variable
        function bar() { } // Funktion
    }
    // Methode
    Customer.prototype.foobar = function (foo) {
        var _this = this;
        console.log('first', this.id);
        // Arrow-Funktion besitzt keinen eigenen this-Kontext
        setTimeout(function () {
            console.log('foo', _this.id);
        }, 2000);
        return '';
    };
    return Customer;
}());
exports.Customer = Customer;
exports.foo = '';
function bar() { }
exports.bar = bar;
//# sourceMappingURL=customer.js.map