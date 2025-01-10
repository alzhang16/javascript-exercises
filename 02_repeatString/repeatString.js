const repeatString = function(word, num) {
    let newWord = "";
    for(let i = 0; i < num; i++){
        newWord = newWord + word;
    }
    if(num < 0){
        return "ERROR";
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
