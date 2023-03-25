function reverseString(string){
    let final = "";
    for(let i= string.length -1; i>=0; i--){
        final += string[i];
    }
    return final;
}
module.exports = reverseString;