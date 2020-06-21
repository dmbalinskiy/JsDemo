console.log("sdfsdfasdf");

//array declaration
let ninjas = ["shaun", "ryu", "chun-li"];
ninjas[1] = "ken";

//array indexation
console.log(`ninjas[1] = ${ninjas[1]}`);
let ages = [20, 25, 30, 35];
console.log(`ages[2] = ${ages[2]}`);

//combination of different types inside array
let arbitrary = ['shaun', 'crystal', 30, 20];
console.log(arbitrary);

//array.length
console.log(`ninjas.length = ${ninjas.length}`);

//array.join()
console.log(`ninjas.join(" / ") = ${ninjas.join(" / ")}`);

//array.indexOf()
console.log(`ninjas.indexOf('chun-li') = ${ninjas.indexOf('chun-li')}`);

//array.concat()
let result = ninjas.concat(arbitrary);
console.log(`ninjas.concat(arbitrary) = ${result}`);
console.log(`ninjas.concat(['ken', 'crystal']) = ${ninjas.concat(['ken', 'crystal'])}`);

//array.push()
result = ninjas.push('crystal');
console.log(`
ninjas.push(['ryu', 'crystal']) = ${result}, 
ninjas[ninjas.length - 1] = ${ninjas[ninjas.length - 1]}`);

result = ninjas.pop();
console.log(`ninjas.pop = ${result}; ninjas = ${ninjas}`);

//some other array functions usage
const names = ['shaun', 'mario', 'luigi'];
result = names.map(x => x.length).reduce((total, num) => total + num);
console.log(`total symbols in array: ${result}`);

result = names.map(e => e[0].toUpperCase()).map(e => `${e} `).join("/ ");
console.log(`first symbols in array elements: ${result}`);

names.forEach(n => {console.log(`uppercase name is: ${n.toUpperCase()}`)});
console.log(`any name contains 'l': ${names.some(n => n.includes('l'))}` )
console.log(`all names contains 'l': ${names.every(n => n.includes('l'))}` )
