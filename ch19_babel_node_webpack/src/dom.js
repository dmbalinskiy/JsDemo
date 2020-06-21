console.log('dom file');

const body = document.querySelector('body');
//export
const styleBody = () =>{
    body.style.background = 'peachpuff';
}
//export 
const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    console.log('add title is called!');
    body.appendChild(title);
}
//export 
const contact = 'mario@thenetninja.co.uk';

//other possible way to export items
export {styleBody, addTitle, contact};
