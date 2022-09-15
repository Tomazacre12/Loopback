var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(title) {
    return function (target, key, descriptor) {
        console.log(target);
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = original.apply(this, args);
            console.log("title: ".concat(title, " ").concat(key, " with args ").concat(JSON.stringify(args), " returned\n            ").concat(JSON.stringify(result)));
            return result;
        };
        return descriptor;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log('Calculator')
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var calculator = new Calculator();
calculator.square(2);
calculator.square(3);
