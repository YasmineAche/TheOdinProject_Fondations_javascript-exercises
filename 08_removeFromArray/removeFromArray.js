const removeFromArray = function () {
    let args = Array.from(arguments);
    if (args.length <= 1) {
        console.log("Not enough arguments");
        return;
    }
    for(let num of args.slice(1)) {
        if (args[0].includes(num)) {
          args[0].splice(args[0].indexOf(num), 1);
        }
    }
    return args[0];
};
console.log(removeFromArray([1, 2, 3, 4],3));
// Do not edit below this line
module.exports = removeFromArray;
