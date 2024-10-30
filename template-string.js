const first = "Ameer";
const last = "Ali";
const greet = "Good Morning";
const name = first + ' ' + last;
const fullSentence = greet + ' ' + name;
console.log(fullSentence);


const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a+b);
console.log(result);


// *** using backtick ***
const math = `The sum of ${a} and ${b} is ${a+b}`;
console.log(math);


const email = 'Hi John, \n' +
'Wanna fight?\n' +
'lets fight!';
console.log(email);

// using backtick
const challenge = `Hi John,
wanna fight?
lets fight!
lesgooo!!`;
console.log(challenge);


const numbers = [1, 2, 3, 4, 5];
const personInfo = {
    name: "John Cena",
    age: 40
};

const personAgePlusArray = `The sum of ${numbers[0]} and ${personInfo.age} is ${numbers[0] + personInfo.age}`;
console.log(personAgePlusArray);