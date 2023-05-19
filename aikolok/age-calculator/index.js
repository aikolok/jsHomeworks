// Store the current year in a variable.
const currentYear = 2023;
// Store their birth year in a variable.
const birthYear = 1989;
// Calculate their 2 possible ages based on the stored values.
const possibleAge1 = currentYear - birthYear;
const possibleAge2 = possibleAge1 - 1;
// Output them to the screen like so: "They are either NN or NN", substituting the values.
console.log(`They are either ${possibleAge1} or ${possibleAge2}.`);
