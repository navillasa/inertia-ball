function makeNumberString(someRange) {
   var numberString = ""
   return numberString.reduce(function (someRange) {
        return String(Math.floor(Math.random() * someRange) + 1);
}, 1);
}

function fiveNumber(someRange) {
    return makeNumberString(someRange) * 5;
}

console.log(fiveNumber(69));