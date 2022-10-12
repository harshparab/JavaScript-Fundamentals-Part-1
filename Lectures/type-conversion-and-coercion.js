// type conversion
const inputYear = "1998";
console.log(typeof(inputYear));
console.log(typeof((Number(inputYear))));
console.log(Number("Harsh"));
console.log(String(43));

// coercion
let inputYear2 = "1998";
console.log(typeof(inputYear2));
inputYear2 = inputYear2 + 1;
console.log(inputYear2);