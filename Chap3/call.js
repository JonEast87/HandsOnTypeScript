const callerObj = {
    name: 'jon'
}

function checkMyThisAge(age) {
    console.log(`What is this ${this}`);
    console.log(`Do I have a name? ${this.name}`);
    this.age = age;
    console.log(`What is my age ${this.age}`);
}

checkMyThisAge();
checkMyThisAge.call(callerObj, 25);

