// console.log(process.argv);
/* БОДЛОГЫН ХАРИУГ ОЛОХ */
const lib = require("./function"); // гурав

let equation = "2x+4=10"; //нэг

// дөрөв
const indexOfX = lib.indexOf(equation, "x"); // "x"-n bairlal ni index = 1 
const indexOfplus = lib.indexOf(equation, "+"); // "+"-n bairlal ni index = 2 
const indexOfEquals = lib.indexOf(equation, "="); // "="-n bairlal ni index = 4 
// console.log(indexOfX);
// console.log(indexOfplus);
// console.log(indexOfEquals);

// дөрөв
const coEffecient = lib.isolate(equation, 0, indexOfX); // "2"-n bairlal ni index = 0 
const constant = lib.isolate(equation, indexOfplus + 1, indexOfEquals); // "4"-n bairlal ni index = 3
const answer = lib.isolate(equation, indexOfEquals + 1, equation.length); // "10"-n bairlal ni index = 6

// console.log(coEffecient);
// console.log(constant);
// console.log(answer);
console.log((answer - constant) / coEffecient);
