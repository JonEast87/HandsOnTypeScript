var Person = /** @class */ (function () {
    // Hiding the msg variable inside the class itself
    function Person(msg) {
        this.msg = msg;
    }
    // msg: string;
    Person.prototype.speak = function () {
        this.msg = 'speak ' + this.msg;
    };
    return Person;
}());
var tom = new Person('hello');
// tom.msg = 'hello';
tom.speak();
