function oldEnough(age) {
    if (age > 59) {
        throw Error('Too old!');
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
var age = oldEnough(19);
console.log(age);
