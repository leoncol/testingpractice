function reverse(string){
    let reversed = [];
    let separate = string.split("");
for(let i = string.length - 1; i >= 0; i--){
reversed.push(separate[i]);
}
return reversed.join("");
}

module.exports = reverse;