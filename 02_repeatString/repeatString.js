const repeatString = function(string, number) {
    let finalString = '';
    let i = 0;
    if (number < 0) return "ERROR";
    else
    while (i < number) {
        finalString += string;
        i++
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
