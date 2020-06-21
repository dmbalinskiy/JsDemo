
//for loop
for(let i = 0; i < 5; i++){
    console.log(`in for loop: ${i}`);
}
console.log('loop is finished');

const names = ['shaun', 'mario', 'luigi'];
for(let i = 0; i < names.length; i++){
    //console.log(`element ${i}: ${names[i]}`);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loop
let i = 0;
while(i < names.length){
    console.log(`while loop iteration: names[${i}] == ${names[i]}`);
    i++;
}

//if/else/else if statement
const age = 25;
if(age > 20){
    console.log('you are over 20 year old')
}

const arr = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if(arr.length > 3){    
    console.log(`that's a lot of items in array`);
}

const pwd = 'p@';
if(pwd.length > 12 && pwd.includes('@')){
    console.log('that password is very strong');
}else if(pwd.length >= 8 || pwd.includes('@') && pwd.length > 5){
    console.log('that password is strong ehough');
} else {
    console.log('password is NOT strong enough');
}

//break, continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }

    console.log(`your score is ${scores[i]}`);
    if(scores[i] === 100){
        console.log(`you've got a top score`);
        break;
    }
}

const grade = 'E';
switch(grade){
    case 'A':
        console.log('you got an A!');
        break;

    case 'B':
        console.log('you got an B!');
        break;

    case 'C':
        console.log('you got an C!');
        break;

    case 'D':
        console.log('you got an D!');
        break;

    case 'E':
        console.log('you got an E!');
        break;

    default:
        console.log('not a valid grade');
        break;
}

//global scope across file
const ageVar = 30;
if (true){
    const ageVar = 40;
    //let name = 'shaun';
    console.log(`inside 1st code block: age = ${ageVar}, name = ${name}`);

    if(true){
        const ageVar = 50;
        console.log(`inside 2nd code block: age = ${ageVar}, name = ${name}`);
        var name = 'buggy'
    }

}
console.log(`outside code block: age = ${ageVar}, name = ${name}`);
