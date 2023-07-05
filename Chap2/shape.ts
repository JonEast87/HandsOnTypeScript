class Person {
    name: String;
}

const jill: {
    name: String
} = {
    name: 'jill'
}

const person: Person = jill;
console.log(person)