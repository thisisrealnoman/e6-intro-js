// default : if value is not provided, take this as a default
// ex-1
function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(10, 12);
// const sum = add(10);
const sum = add();
console.log(sum);


// ex-2
function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full;
}


// ex-3
function friends(numbs = []){

}


// ex-4

function person (human = {}){
    
}