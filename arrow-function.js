//  function declaration
// ex-1
function add(a, b){
    const result = a + b;
    return result;
}
const sum = add(5, 20);
console.log(sum);


// ex-2
function addFunc(a, b){
    return a + b;
}
const sumOfNumbs = addFunc(5, 30);
console.log(sumOfNumbs);


// function expression
const add2 = function(a, b){
    return a + b;
}


// arrow function
const add3 = (a, b) => a + b;
const sumArrowFunc = add3(50, 2);
console.log(sumArrowFunc);

// arrow func. ex-2
const mult = (num1, num2) => num1 * num2;
const result = mult(10, 12);
console.log(result);