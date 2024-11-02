// write an arrow function where it will do the following x^2
// a) square each array element
// b) calculate the sum of the squared element
// c) return the average of the sum of squared elements


const avgOfElementsSquare = (array) => {
    const squaredElements = [];
    for(const num of array){
        const square = num * num;
        squaredElements.push(square);
    }
    let sum = 0;
    for(const squareNum of squaredElements){
        sum = sum + squareNum;
    }
    const avg = sum / squaredElements.length;
    return avg;
}

const myArray = [1, 2, 3, 4, 5];
const result = avgOfElementsSquare(myArray);
console.log(result);