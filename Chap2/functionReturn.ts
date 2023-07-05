function runMore(distance: number): number {
    return distance + 10;
}


function eat(calories: number) {
    console.log('I ate ' + calories + ' calories');
}

function sleepIn(hours: number): void {
    console.log('I slept ' + hours + ' hours');
}

let run = runMore(10);
console.log(run);
let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);