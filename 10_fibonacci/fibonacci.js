const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num <= 2) return 1;
    let prev = 1;
    let cur = 1;
    for (let i = 3; i <= num; i++) {
        const next = prev + cur;
        prev = cur;
        cur = next;
    }
    return cur;

};

// Do not edit below this line
module.exports = fibonacci;
