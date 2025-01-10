const removeFromArray = function(originArray, ...remove) {
    let newArray = [];
    originArray.forEach(element => {
        if(!remove.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
