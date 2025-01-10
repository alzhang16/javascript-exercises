const sumAll = function(num1, num2) {
    
    if(num1 < 0 || num2 < 0 ) return "ERROR";
     if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    
    let greatestNum = Math.max(num1, num2);
    let leastNum = Math.min(num1, num2);
    let finalSum = 0;
    for(let i = greatestNum; i > leastNum-1; i--){
        finalSum+=i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
