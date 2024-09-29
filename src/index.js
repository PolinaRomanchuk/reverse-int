module.exports = function reverse (n) {
let stringNumber = Math.abs(n).toString();
let arrNumber = stringNumber.split("");
let arrRevers = arrNumber.reverse();
return Number(arrRevers.join(""));
}
