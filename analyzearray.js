function analyzeArray(array){
    let average = findAverage(array);
    let min = lowestNumber(array);
    let max = highestNumber(array);
    let length = array.length;
    let newObject = {average, min, max, length}
    return newObject;
}

function lowestNumber(array){
    let lowestNumber = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] < lowestNumber){
            lowestNumber = array[i];
        }
    }
    return lowestNumber;
}

function highestNumber(array){
    let highestNumber = array[0];
    for (let i = 0; i < array.length ; i++){
        if (array[i] > highestNumber){
            highestNumber = array[i];
        }
    }
    return highestNumber;
}

function findAverage(array){
    let average = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return average / array.length;
}


module.exports = analyzeArray;