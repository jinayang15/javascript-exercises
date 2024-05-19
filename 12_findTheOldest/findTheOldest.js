const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        if (current.yearOfDeath == undefined) {
            current["yearOfDeath"] = new Date().getFullYear();
        }
        if (oldest.yearOfDeath == undefined) {
            oldest["yearOfDeath"] = new Date().getFullYear();
        }
        return current.yearOfDeath - current.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth ? current : oldest;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
