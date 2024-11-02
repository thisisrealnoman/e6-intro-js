// write a arrow function where it will do following
// a) it will take an array where the array elements will be the name of your friends
// b) check, if the length of each elements is even,
// push elements with even length to a new array and return the result 


const myEvenFriends = (myArray) => {
    const newArrayOfEvenFriends = []; // Define outside the loop
    for(const even of myArray){
        if(even.length % 2 === 0){
            newArrayOfEvenFriends.push(even);
        }
    }
    return newArrayOfEvenFriends;
}


const myFriends = ["john", "samir", "ryan", "hafiz", "mira"];
const result = myEvenFriends(myFriends);
console.log(result);