var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produce = /** @class */ (function () {
    function Produce() {
    }
    Produce.prototype.work = function () {
        console.log("Produced");
    };
    return Produce;
}());
var Assemble = /** @class */ (function () {
    function Assemble() {
    }
    Assemble.prototype.work = function () {
        console.log(" And");
        console.log(" Assembled.");
    };
    return Assemble;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle(workShop1, workShop2) {
        this.workShop1 = workShop1;
        this.workShop2 = workShop2;
    }
    Vehicle.prototype.manufacture = function () { };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.manufacture = function () {
        console.log("Car");
        this.workShop1.work();
        this.workShop2.work();
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bike.prototype.manufacture = function () {
        console.log("Bike ");
        this.workShop1.work();
        this.workShop2.work();
    };
    return Bike;
}(Vehicle));
var vehicle1 = new Car(new Produce, new Assemble);
var vehicle2 = new Bike(new Produce, new Assemble);
vehicle1.manufacture();
console.log("----------------------------------");
vehicle2.manufacture();
