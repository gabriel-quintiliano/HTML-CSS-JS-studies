function CreateCounter(value) {
    const initial = value
    let counter = initial;
    
    function increment() {counter++; return counter}
    function decrement() {counter--; return counter}
    function reset() {counter = initial; return counter}

    return {increment, decrement, reset}
}

let myCounter = CreateCounter(5)

console.log(myCounter.increment())
console.log(myCounter.increment())
console.log(myCounter.increment())
console.log(myCounter.decrement())
console.log(myCounter.reset())
console.log(myCounter.decrement())
