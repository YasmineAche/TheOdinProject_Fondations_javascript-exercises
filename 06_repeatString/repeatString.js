const repeatString = function(string, num) {
    if (num < 0) return "0 is not a valid input";
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += string;
    }
    return newStr;
};
// Do not edit below this line
module.exports = repeatString;
