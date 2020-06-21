const scores = [10, 30, 15, 25, 50, 40, 5];

//FILTER METHOD
//returns elements which matches the conditions
// const filtered = scores.filter((element) => {
//     return element > 20;
// })

// console.log(filtered);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true},
];

const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);

//MAP METHOD
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const salePrices = prices.map(price => price / 2);
console.log(salePrices);

const products = [
    {name : 'gold star', price : 20},
    {name : 'mushroom', price : 40},
    {name : 'green shells', price : 30},
    {name : 'banana skin', price : 10},
    {name : 'red shells', price : 50},
];

const saleProducts = products.map(p => {
    if(p.price > 30){
        return { name : p.name, price : p.price / 2}
    }
    else {
        return p;
    }
})

console.log(saleProducts);

//REDUCE METHOD
const scores1 = [10, 20, 60, 40, 70, 90, 30];
const result = scores1.reduce((acc, curr) => {
    if(curr > 50){
        acc++;
    }
    return acc;
}, 0);
console.log(result);

const users2 = [
    {name: 'mario', score: 50 },
    {name: 'yoshi', score: 30 },
    {name: 'mario', score: 70 },
    {name: 'crystal', score: 60 },
    {name: 'mario', score: 80 },
    {name: 'yoshi', score: 30 },
    {name: 'mario', score: 90 },
    {name: 'crystal', score: 60 },
];
const marioTotal = users2.reduce((acc, value) => {
    if(value.name === 'mario'){
        acc += value.score;
    }
    return acc;
}, 0);
console.log(marioTotal);

//FIND METHOD
const scores3 = [10, 5, 0, 40, 30, 10, 20, 70];
const firstHighScore = scores3.find( score => {
    return score > 50;
});
console.log(firstHighScore);

//SORT METHOD
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luidgi'];
names.sort();
names.reverse();
console.log(names);

const scores4 = [10, 50, 20, 5, 35, 70, 45];
scores4.sort((f, s) => s - f);
console.log(scores4);

users2.sort((a, b) => a.score - b.score);
console.log(users2);

//ARRAY METHODS CHAINING
const filtered = 
products
.filter(p => p.price > 20)
.map(p => `the ${p.name} is ${p.price / 2} pounds`);
console.log(filtered);
