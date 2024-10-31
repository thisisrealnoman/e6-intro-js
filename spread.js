const max = Math.max(1, 22, 3, 456, 5, 66, 589);
// console.log(max);


const numbers = [12, 233, 4, 56, 423];
const arrayMax = Math.max(...numbers);
// console.log(numbers);
console.log(arrayMax);

 

// use spread operator to copy

const nums1 = [23, 45, 6, 12];
const nums2 = nums1; // copied the value of nums1
nums2.push(100);
console.log(nums2); // [ 23, 45, 6, 12, 100 ]
console.log(nums1); // [ 23, 45, 6, 12, 100 ] {giving unwanted value(100)}



// to avoid unwanted value/values we will use spread operator

// just copy by spread operator
const friends = [10, 45, 20, 65];
const homies = [...friends]; // copy
homies.push(100);
console.log(homies);
console.log(friends);


 
// advanced

// copy + add extra elements
const fam = [...friends, 1000]; // add extra element while copy
console.log(fam);

