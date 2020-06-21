// rest parameter
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num * 2);
}

const result = double(1, 3, 5, 7, 9, 2, 4, 6);
console.log(result);

// spread syntax - arrays
// spreading is passing arguments individually
const people = ['shaun', 'ryu', 'crystal'];
console.log(...people);

const members = ['mario', 'chun-li', ...people];
console.log(members);

// spread syntax - objects
const person = {name: 'shaun', age: 30, job: 'net ninja', address: { city: 'NY', street: '2nd' }};
const personClone = {...person, location: 'manchester'};

// shallow clone!
console.log(person.address === personClone.address);
console.log(personClone);

// sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

//array to set
const namesSet = new Set(namesArray);
console.log(namesSet);

//set to array
let uniqueNames = [...namesSet];
console.log(uniqueNames);

//array to set and to array again - in one line
uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

//addition and deletion elements
const ages = new Set();
ages.add(20).add(30).add(40).add(30);
ages.delete(20);

console.log(ages, ages.size);
console.log(`ages contains value 40: ${ages.has(40)}`);

ages.clear();
console.log(ages);

const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'chun-li', age: 32},
]);

for(const ninja of ninjas){
    console.log(`${ninja.name}, ${ninja.age}`);
}
console.log(ninjas.values());

// symbols - property names in objects
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');
console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja = {};
ninja.age = 30;
//the same property affected
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

//two different properties
ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';
console.log(ninja);