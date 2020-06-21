let radius = 10;
const pi = 3.1415926;

console.log("radius = %f, pi = %f", radius, pi);

//math +, -, *, /, **, %
console.log("10/2 = %i", 10/2)
console.log("radius % 3 = %f", radius % 3)

let result = pi * radius ** 2;
console.log("pi * radius ** 2 = %f", result);

//order of operations - B I D M A S
result = 5 * (10 - 3) ** 2
console.log("5 * (10 - 3) ** 2 = %f", result);

//NaN - not a number
console.log("5 / 'hello' = %f", 5 / 'hello')

//Infinity
console.log("5 / 0 = %f", 5 / 0)

let likes = 10;
result = "the blog has " + likes + " likes";
console.log(result);