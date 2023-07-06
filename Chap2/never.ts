function oldEnough(age: number): never | boolean {
    if (age > 59) {
        throw Error('Too old!');
    }
    if (age <= 18) {
        return false;
    }
    return true;
}

let age = oldEnough(19);
console.log(age);