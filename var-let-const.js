// var : current status dead
// let : allow it to reassign
// const : do not allow it to reassign 

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [1, 2, 3, 4, 5];
// numbers = [3, 4, 5, 6, 7]
numbers[1] = 22;
numbers.push(6, 7, 8, 9, 10);
console.log(numbers);

// object
const student = {
    name: "John Wick",
    class: 12
};
// student = {name: "Rafiq"};
student.name = "Rafiq";
console.log(student);

let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(sum);