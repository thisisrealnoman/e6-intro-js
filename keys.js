const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}


// all properties name
const keys = Object.keys(glass);
console.log(keys); // [ 'name', 'color', 'price', 'isCleaned' ]


// all properties values
const values = Object.values(glass);
console.log(values); // [ 'glass', 'golden', 12, true ]


const entries = Object.entries(glass);
console.log(entries); 
// array of array or two dimensional array
/* [
    [ 'name', 'glass' ],
    [ 'color', 'golden' ],
    [ 'price', 12 ],
    [ 'isCleaned', true ]
  ]
*/



// method: 1
// delete glass.isCleaned;
console.log(glass); // { name: 'glass', color: 'golden', price: 12 }

// method: 2
const {isCleaned, ...rest} = glass;
console.log(isCleaned);



// freeze
Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 500;
delete glass.name;
console.log(glass);


// seal
Object.seal(glass);
glass.price = 5000;
console.log(glass);