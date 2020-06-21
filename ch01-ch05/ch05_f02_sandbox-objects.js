//Math object usage exampl
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

console.log(`MATH object 
is extensible: ${Object.isExtensible(Math)}/
is sealed: ${Object.isSealed(Math)}/
is frozen: ${Object.isFrozen(Math)}`);

var entries = Object.entries(Object.getOwnPropertyDescriptors(Math));
entries.forEach(element => {
    let name = element[0];
    let value = element[1];

    // console.log(`
    //     name : ${name};
    //     value : ${value.value};
    //     writable : ${value.writable};
    //     configurable : ${value.configurable};
    //     enumerable : ${value.enumerable};
    // `);
});

const area = 7.5;
console.log(`Math.round(7.5) == ${Math.round(7.5)}`);
console.log(`Math.floor(7.5) == ${Math.floor(7.5)}`);
console.log(`Math.ceil(7.5) == ${Math.ceil(7.5)}`);

console.log(`Math.round(7.1) == ${Math.round(7.1)}`);
console.log(`Math.floor(7.1) == ${Math.floor(7.1)}`);
console.log(`Math.ceil(7.1) == ${Math.ceil(7.1)}`);

//throws away decimal part of the number
console.log(`Math.trunc(7.1) == ${Math.trunc(7.1)}`);


for(i = 0; i < 5; i++){
    console.log(Math.random());
}

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`one: ${scoreOne}, two: ${scoreTwo}`);
scoreOne = 100;
console.log(`one: ${scoreOne}, two: ${scoreTwo}`);

const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.name = 'chun-li';
console.log(userOne, userTwo);