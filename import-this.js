export default
function caesarCipher(string,key){
    let shifted = shiftElements(key);
    let indexes = findIndex(string);
    let newString = getNewString(shifted, indexes);
    newString = newString.join('');
    let newStringUpperCase = turnUpperCase(string, newString)
    console.log(newStringUpperCase.join(''));

}



function findIndex(string){
    string = string.split("");
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let upperCaseAlphabet = alphabet.toUpperCase();
    alphabet.split("");
    let indexes = [];
    for (let i = 0; i < string.length; i++){
        let index = 0;
        index = alphabet.indexOf(string[i]);
        if (index === -1 && (/^[a-zA-Z]$/.test(string[i]) == true)){
            index = upperCaseAlphabet.indexOf(string[i]);
            indexes.push(index);
        } else if (index === -1 && (/^[a-zA-Z]$/.test(string[i]) == false)){
            indexes.push(string[i]);
        } else {
            indexes.push(index);
        }

    }
    return indexes;
}
   
function turnUpperCase(string, newString){
        const upperCaseNewString = [];
    for (let i = 0; i < string.length; i++){
        if (string[i] == string[i].toUpperCase()){
            let upperCase = '';
            upperCase = newString[i].toUpperCase();
            upperCaseNewString.push(upperCase)
        } else {
            upperCaseNewString.push(newString[i]);
        }
    }
    return upperCaseNewString;
}
   

function shiftElements(shift){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
   alphabet = alphabet.split("");
   for (let i = 0; i < shift; i ++){
       let element = alphabet.shift();
       alphabet.push(element);
   }
   
   return alphabet
}


function getNewString(shiftedAlphabet, indexes){
    const newString = [];
    for (let i = 0; i < indexes.length; i++){
        if (typeof indexes[i] === 'number'){
            newString.push(shiftedAlphabet[indexes[i]]);
        } else {
            newString.push(indexes[i]);
        }
    }
    return newString;
}
// function caesarCipher(string,key){
//     let shifted = shiftElements(key);
//     let indexes = findIndex(string);
//     let newString = getNewString(shifted, indexes);
//     newString = newString.join('');
//     let newStringUpperCase = turnUpperCase(string, newString)
//     console.log(newStringUpperCase);

// }



// function findIndex(string){
//     string = string.split("");
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let upperCaseAlphabet = alphabet.toUpperCase();
//     let indexes = [];
//     for (let i = 0; i < string.length; i++){
//         let index = 0;
//         index = alphabet.indexOf(string[i]);
//         if (index === -1 && (/^[a-zA-Z]$/.test(string[i]) == true)){
//             index = upperCaseAlphabet.indexOf(string[i]);
//             indexes.push(index);
//         } else if (index === -1 && (/^[a-zA-Z]$/.test(string[i]) == false)) {
//             indexes.push(string[i]);
//         } else {
//             indexes.push(index);
//         }
        
//     }
//     return indexes;
// }
   
// function turnUpperCase(string, newString){
//         const upperCaseNewString = [];
//     for (let i = 0; i < string.length; i++){
//         if (string[i] == string[i].toUpperCase()){
//             let upperCase = '';
//             upperCase = newString[i].toUpperCase();
//             upperCaseNewString.push(upperCase)
//         } else {
//             upperCaseNewString.push(newString[i]);
//         }
//     }
//     return upperCaseNewString;
// }
   

// function shiftElements(shift){
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//    alphabet = alphabet.split("");
//    for (let i = 0; i < shift; i ++){
//        let element = alphabet.shift();
//        alphabet.push(element);
//    }
   
//    return alphabet
// }


// function getNewString(shiftedAlphabet, indexes){
//     const newString = [];
//     for (let i = 0; i < indexes.length; i++){
//         newString.push(shiftedAlphabet[indexes[i]]);
//     }
//     return newString;
// }