class Person {
    // Hiding the msg variable inside the class itself
    constructor(private msg: string) {}
    // msg: string;

    speak() {
        this.msg = 'speak ' + this.msg;
    }
}

const tom = new Person('hello');
// tom.msg = 'hello';
tom.speak();