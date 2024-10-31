// arrow function

// multiple parameter
//ex-1
const difference = (a, b) => a - b;
// ex.2
const multiplication = (num1, num2, num3) => num1 * num2 * num3;



// single parameter or one parameter
//ex-1
const getAge = (person) => person.age;
const student = {
    name: "Abu",
    age:32
}
const age = getAge(student);
console.log(age);

// ex-2
const getThird = numbers => numbers[2];
const third = getThird([1, 2, 3, 4, 5]);
console.log(third);



// no parameter
const getPI = () => Math.PI;
console.log(getPI());


// large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}