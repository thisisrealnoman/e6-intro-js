// for of use on array or string not in object
// for in use on object



// ex.1 for of (array)
const numbers = [1, 2, 3, 4, 5];
// for(let i = 0; i < numbers.length; i++){};
// while
for(const num of numbers){
    // console.log(num);
}


// ex.2 for of (string)
const nobab = "Shiraj Ud Dala";
for(const char of nobab){
    // console.log(char);
}


// ex.1 for in (object)
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

// for(const key of glass){
//     console.log(key);
// }

for(const key in glass){
    const value = glass[key];
    // console.log(key, value);
}

// optional
const keys = Object.keys(glass);
for(const key of keys){
    const value = glass[key]; 
    // here we used "glass[key]" cause "key" is a variable
    // if "key" were a property, we would use "glass.key"
    console.log(key, value);
}


