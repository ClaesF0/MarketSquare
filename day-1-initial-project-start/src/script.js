////          true    true    true
//console.log(true && true && true); // true
//            // true    false
//console.log((true && true && false));
//
//
//console.log(("potato" && true && true));
//
//
//const isHappy = false;
//
////  condition ?  // condition true : // condition is false
//// consider it as false
//undefined ? console.log("yes i am happy ") : console.log("no i am not happy")
//
//
//
//
//// filter
//
//const myArray = [
//    { id: 1, name: 'Alice' },
//    { id: 2, name: 'Bob' },
//    { id: 3, name: 'Charlie' }
//];
//
//const idToFilter = 2;
//
//const filteredArray = myArray.filter(name => name.id !== idToFilter);
//
//console.log(filteredArray);
//
//// [ { id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' } ]
//
//
//
//let name = "hesham"
//
//
//function greet(name: string) {
//    console.log(`Hello, ${name}!`);
//}
//
//greet("Alice");
//
//let name: string = "Alice";
//let age: number = 30;
//let isStudent: boolean = true;
//
//console.log(`My name is ${name}, I am ${age} years old, and I am a student: ${isStudent}`);

// .some method

const number = [1, 3, 4, 5, 7, 8, 9];

const hasEvenNumber = numbers.some((num) => num % 2 === 0); // check all, see if remainder is zero is true -> even number

console.log(hasEvenNumber); //true

const strings = ["apple", "banana", "dade", "orange"];

const hasStringWithA = strings.some((str) => str.includes("a"));

console.log(hasStringWithA);
