//store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

//also creates/updates/acquires value
localStorage.secondName = 'pupkin';

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(`${localStorage.name} is ${localStorage.age} old`);

//update data in local storage
localStorage.setItem('name', 'luidgi');
localStorage.age = '40'
name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(`${name} is ${age} old`);

//deleting one item from local storage
localStorage.removeItem('name');

//returns null if property doesn't exist
console.log(localStorage.getItem('name'));

//returns undefined if property doesn't exist
console.log(localStorage.name);

//complex objects serialization using JSON.stringify() method
const todos = [
    {text : 'play mariokart', author: 'shaun'},
    {text : 'buy some milk', author: 'mario'},
    {text : 'buy some bread', author: 'luidgi'},
];
localStorage.todos = JSON.stringify(todos);
const stored = localStorage.todos;
const acquired = localStorage.getItem('todos');
console.log(stored === localStorage.todos);
console.log(stored === acquired);
console.log(JSON.parse(stored));

//clear entire local storage
//localStorage.clear();