const article = document.querySelector('article');
console.log(Array.from(article.children));

// for (let child of article.children){
//     child.classList.add('article-element');
// }
const title = document.querySelector('h2');
console.log(title.parentElement);

console.log(article.previousElementSibling);
console.log(article.nextElementSibling);

// const button = document.querySelector("button");
// button.addEventListener('click', () => {
//     console.log('you clicked me!');
// })

const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');
button.addEventListener('click', () =>{
    //ul.innerHTML += '<li>something new</li>';
    const li = document.createElement('li');
    li.textContent = 'something new todo';
    //ul.append(li);
    ul.children[0].after( li);//prepend(li);
    ul.children[ul.children.length - 1].before( li);//prepend(li);
});

// const items = document.querySelectorAll('li');
// for(let li of items){
//     li.addEventListener('click', (e) => {
//         console.log(`event in li: ${e.eventPhase}`);
//     }, /*capturing phase*/ true);

//     li.addEventListener('click', (e) => {
//         console.log(`event in li: ${e.eventPhase}`);
//     }, /*bubbling phase*/ false);
// }

//capture phase
ul.addEventListener('click', e => {
    console.log(`event in ul : ${e.eventPhase}`);
}, /*capturing phase*/ true);

//bubbling phase
ul.addEventListener('click', e => {
    //console.log(`event in ul : ${e.eventPhase}`);
    console.log(e);
    if(e.target.tagName === "LI"){
        e.target.remove();
    }
}, /*capturing phase*/ false);

const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', ()=>{
    console.log('my content is copyright');
})

const box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
    //console.log(`offsetX: ${e.offsetX} / offsetY: ${e.offsetY}`);
    box.textContent = `X pos: ${e.offsetX} / Y pos: ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    
    console.log(`X: ${e.pageX} / Y: ${e.pageY}`);
})
