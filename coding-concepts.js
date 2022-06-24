// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10 , this was the output because .length gives you the number of charaters within a value


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: o , this was the output because [4] was indicating the index which is the location of each character within a value 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby 
// b) Verify and explain: Ruby, this is the output because the index location of Ruby is 1. This is because arrays are zero-indexed meaning they start with zero. So, the index of "JavaScrpit" would be 0, "Ruby" would be 1, "Python" would be 2, and "C++" would be 3. 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function. This was the output because .toUpperCase is used on strings. The array would first need to be converted into a string. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: error
// b) Verify and explain: number, this is the output because typeof gives us the data type of the variable. In this case it is asking for the datatype of the length of the array which is 3, the number data type.
