/*
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
*/

const country = "India";
let continent = "Asia";
let population = "1380";
const language = "Hindi";

const halfPopulation = population/2;
const incrementPopulation = ++population;
console.log(incrementPopulation);

const populationOfFinland = 6;
console.log(population > populationOfFinland);

const avgPopulation = 33;
console.log(population < avgPopulation);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);