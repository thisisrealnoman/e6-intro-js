// write an arrow function that will take 3 parameters, will multiply the parameters
// and will return the results

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(10, 12, 2);
console.log(result);




// write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat Biriyani.

const sentences = `I am a web developer.
I love to code.
I love to eat Biriyani.`;
console.log(sentences);




// write an array function that will take 2 parameters,
// one parameters will come from you
// and the other parameter will be a default parameter
// add these two parameters and return the result

const sum = (num1, num2 = 0) => num1 + num2;
const resultOfSum = sum(100);
console.log(resultOfSum);