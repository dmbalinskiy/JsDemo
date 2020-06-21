//const content = document.querySelector('p');
const content = document.querySelector('p');
console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

let tags = document.querySelectorAll('body>p');
for(const tag of tags){
    if(tag.innerText.includes('error', 0)){
        tag.classList.add('error');
    }
    else if(tag.innerText.includes('success', 0)){
        tag.classList.add('success');
    }
}


const title = document.querySelector('.title');
title.classList.toggle('test');
//title.classList.toggle('test');