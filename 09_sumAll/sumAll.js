const sumAll = function (a, b) {
  let sum = 0;
  a = parseInt(a);
  b = parseInt(b);
  if (isNaN(a) || isNaN(b)) return "ERROR";
  else {
    if (a > b) {
      a, (b = b), a;
    }
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  }
};
// Do not edit below this line
module.exports = sumAll;
