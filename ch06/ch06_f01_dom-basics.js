//query selector - only first element retrieved!
const para = document.querySelector('p');
console.log(para);

const err = document.querySelector('.error');
console.log(err);

const err2 = document.querySelector('div.error');
console.log(err2);

//query selector all - all elements are retrieved
const paras = document.querySelectorAll('p');
console.log(paras);

for(const p of paras)
{   
    console.log(p);
}

const paras2 = document.querySelectorAll(".error");
console.log(paras2);


//get element by id
const title = document.getElementById('page-title');
console.log(title);

//get element by class name
const errors = document.getElementsByClassName('error');
console.log(errors);

document.getele

for(let tv of errors)
{
    console.log(tv);
}

const paras3 = document.getElementsByTagName('p');
console.log(paras3);


const queryP = document.querySelector("div > p");
//console.log(queryP.innerText);
//queryP.innerText += " => my new awesome text";

const paras4 = document.querySelectorAll('p');
for(const p of paras4){
    console.log(p.innerText);
    p.innerText += ' new text';
}

const content = document.querySelector('.content');
//console.log(content.innerHTML);
// content.innerHTML += '<h3>THIS IS A NEW H3</h3>'

const people = ['mario', 'luigi', 'yoshi'];
for(let p of people){
    content.innerHTML += `<p style="font-weight:bold">${p}</p>`;
}

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The netNinja website';

const msg = document.querySelector('p.error');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color : green;')

const header = document.querySelector('h1');
//console.log(header.style);
console.log(header.style.color);
header.style.margin = '50px';
header.style.color = 'crimson';
header.style['fontSize'] = '30px';

//deletion property from style
title.style.margin = '';




//is not correct - totally overrides style for element
//title.setAttribute('style', 'margin: 50px;');
