//before initializing
let age;
console.log(age, age + 3, `the age is ${age}`);

//after initializing with null
age = null;
console.log(age, age + 3, `the age is ${age}`);

//booleans & comparison
console.log(true, false, "true", "false");

//methods with boolean results
let email = "luigi@thenetninja.co.uk";
console.log(`email.includes("@") = ${email.includes("@")}`);

let names = ['mario', 'luigi', 'toad'];
console.log(`names.includes("luigi") = ${names.includes("luigi")}`);

age = 25;
console.log(`age == 25: ${age == 25}`);
console.log(`age == 30: ${age == 30}`);
console.log(`age != 25: ${age != 25}`);

console.log(`age > 25: ${age > 25}`);
console.log(`age < 25: ${age < 25}`);

console.log(`age >= 25: ${age >= 25}`);
console.log(`age <= 25: ${age <= 25}`);

let name = 'shaun';
console.log(`name == 'shaun': ${name == 'shaun'}`);
console.log(`name == 'Shaun': ${name == 'Shaun'}`);

console.log(`name > 'crystal': ${name > 'crystal'}`);
console.log(`name > 'Shaun': ${name > 'Shaun'}`);
console.log(`name > 'Crystal': ${name > 'Crystal'}`);

console.log(`age == '25': ${age == '25'}`);
console.log(`age != 25: ${age != 25}`);
console.log(`age != '25': ${age != '25'}`);

console.log(`age === 25: ${age === 25}`);
console.log(`age === '25': ${age === '25'}`);

console.log(`undefined == true : ${undefined == true}`)
console.log(`null == true : ${null == true}`)
console.log(`undefined == false : ${undefined == false}`)
console.log(`null == false : ${null == false}`)

let score = '100';
console.log(`typeof(score) == ${typeof(score)}`);
score = Number(score);
console.log(`score + 1 == ${score + 1}`);
console.log(`typeof(score) == ${typeof(score)}`);

console.log(`Number('hello') == ${Number('hello')}`);

let result = String(50);
console.log(`String(50) == ${String(50)}; typeof(String(50)) == ${typeof(String(50))}`);
