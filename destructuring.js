const actor = {
    name: "James Bond",
    age: 32,
    phone: "01234567876",
    money: 8765749387674839
}

// * classic style *
// const name = actor.name;
// const age = actor.age;
// const phone = actor.phone;



// *** destructuring ***
// if right side is an object left side of destructuring will be an object as well
// use property name as a variable that contains the property value

const {name, phone, age: boyosh} = actor;
// const {phone, age} = actor;
// const {phone} = actor;


console.log(name);
console.log(name);
console.log(name);
console.log(phone);
// console.log(age);
console.log(boyosh);



// array destructuring
const numbers = [10, 50];
const [first, second] = numbers;
const [a, b] = [1, 2];


// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom);
console.log(ditiyo);