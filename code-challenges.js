// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// declare a function named hottieTest
// set parameter (boilNum)
// Use a conditional statement to compare the parament the boiling point of 212
    // if boilNum is less than 212 return "boil is below boiling point"
    // else if boilNum is greater than 212 return "boil is above boiling point"
    // else if boilNum is strictly equal to 212 return "boil is at boiling point"
    
// const temp1 = 42
// const temp2 = 350
// const temp3 = 212

// const hottieTest = (boilNum) => {
//     if (boilNum < 212) {
//     return `${boilNum} is below boiling point.`
//     } else if (boilNum > 212){
//         return `${boilNum} is above boiling point`
//     } else if (boilNum === 212) {
//         return `${boilNum} is above boiling point`
//     } 
// }
//     console.log(hottieTest(temp1)) // output: 42 is below boiling point
//     console.log(hottieTest(temp2)) // output: 350 is above boiling point
//     console.log(hottieTest(temp3)) // output: 212 is above boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
//use an accessor method to add to the original array but not change the array
//use a built-in method .length to return the length of the variables

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]

// console.log(myNumbers1.concat(myNumbers2).length) // output: 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:
//use a built-in methods to make the string an array (.split) 
// use a built-in method that will change the originial array and reverse the letters within the array (.reverse)
//use a built-in method on the mutated array that will join the letters of the reversed array (.join)

// const currentCohort = "Delta 2022"

// console.log(currentCohort.split("").reverse().join("")) // output: 2202 atled



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
//make a loop 
//use conditional statements to decide whether the numbers is even or odd by determining if the number divide by 2 contained a remainder.
    // if the number divide by 2 contained a remainder of 1 return "odd"
    //else return "even"
    
// const myArray = [13, 34, 5, 10, 27, 42]

// for(let i = 0 ; i < myArray.length ; i++) {
//     if(myArray [i] % 2 === 1) {
//       console.log(`odd`)  
//     } else {
//         console.log(`even`)
//     }
// } // output: "odd" "even" "odd" "even"


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
//declare a fuction called bigDifference
//set parameters (digit1, digit2)
//Use conditional statements to compare the parameters 
    // if digit1 is less than digit2 return the answer to the equation digit1 - digit2
    // use else or else if to evaluate if digit1 is greater than digit2 and return a message 

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24


const bigDifference = (digit1, digit2) => {
    if (digit1 < digit2) {
    return digit2 - digit1
    }else if (digit1 > digit2) {
        return digit1 - digit2
    }else if (digit1 === digit2){
        return `${digit1} and ${digit2} are equal`
    }
}
console.log (bigDifference(number1, number2)) // 42
console.log (bigDifference(number3, number4)) // 3