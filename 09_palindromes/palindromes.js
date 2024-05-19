const palindromes = function (str) {
    str = str.match(/[\w]/).join("");
    let left = 0;
    let right = str.length-1;
    while (left <= right) {
        if (str.charAt(left) != str.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
