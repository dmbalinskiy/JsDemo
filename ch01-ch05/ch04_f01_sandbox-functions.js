//function declaration
function greet(){
    console.log('hello there');
}

//function expression
const speak = function(){
    console.log('good day');
}; //semicolon for function expression!

//the same call for expression and declaration as well
greet();
//speak();

//function hoisting - ONLY for function declaration
//first call...
//for each call last declaration is used
func_call_before_declaration();

//then declared... -> first
function func_call_before_declaration(){
    console.log('hello there - before declaration ');
}

//for each call last declaration is used
func_call_before_declaration();

//then declared... -> second
function func_call_before_declaration(){
    console.log('hello there - before declaration new item');
}

//for each call last declaration is used
func_call_before_declaration();

//then declared... -> third
function func_call_before_declaration(){
    console.log('hello there - before declaration third item');
}

func_call_before_declaration();

//this one can't be called before declaration - no appropriate variable before
//uncomment lead to error!
//fcnExpr();

const fcnExpr = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`);
};

//'name' variable is out of scope
//console.log(name);

fcnExpr('mario', 'morning');
fcnExpr('shaun');
fcnExpr();

// const calcArea = function(radius){
//     return 3.14 * radius ** 2;
// }

//arrow function - different forms of declaration
const getFive = () => 5;
const calcArea = radius => 3.14 * radius ** 2;
const greeting = (name = 'shaun', time = 'night') => `good ${time} ${name}`;
const greetingExt = (name, time) => {
    console.log(`name is ${name}`);
    console.log(`time is ${time}`);
    return `good ${time} ${name}`;
};

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

greeting();

console.log(`area of circle with radus 5 is ${calcArea(5)}`);
let name = 'myself';
let time = 'forever';
console.log(`greeting for name '${name}' and time '${time}' is: ${greeting(name, time)}`);
console.log(`greetingExt call: ${greetingExt(name, time)}`);
console.log(`total is ${bill([10, 15, 30], 0.2)}`);


name = 'shaun';
let uppCase = name.toUpperCase();
console.log(uppCase);


//callbacks
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}
myFunc( value => console.log(value));

//callbacks for arrays
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

console.log('\nArray foreach with 3 arguments:')
people.forEach( (str, idx, arr) => {console.log(`[${idx + 1}/${arr.length}] = '${str}'`)} );

console.log('\nArray foreach with 2 arguments:')
people.forEach( (str, idx) => {console.log(`[${idx}] = '${str}'`)} );

console.log('\nArray foreach with 2 arguments and greetings:')
const greetingCallback = (str, idx) => console.log(`${idx} - hello ${str}`);
people.forEach(greetingCallback);

console.log('\nArray foreach with 1 argument:')
people.forEach( str => {console.log(`'${str}'`)} );
//with no arguments array also can be called, but it makes no sense


//simple work with html
let html = '';
people.forEach((person) => {
    //create html template
    html += `<li style="color:purple">${person}</li>`
});

console.log(html);
const ul = document.querySelector('.people');
ul.innerHTML = html;