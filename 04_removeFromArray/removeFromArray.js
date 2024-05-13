const removeFromArray = function(arr, ...args) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) break;
            if (j == args.length-1) {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
    
};

// Do not edit below this line
module.exports = removeFromArray;
