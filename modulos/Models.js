var User = (function () {
    function User(name, age) {
        this._name = name;
        this._age = age;
    }
    User.prototype.imprimirUser = function () {
        console.log(this._name + " tiene: " + this._age);
    };
    return User;
})();
var Car = (function () {
    function Car(llantas, marca) {
        this._llantas = llantas;
        this._marca = marca;
    }
    return Car;
})();
exports["default"] = {
    User: User, Car: Car
};
