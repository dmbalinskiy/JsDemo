const form = document.querySelector('.signup-form');
let feedback = document.querySelector('.feedback');
const userNamePattern = /^[a-zA-Z]{6,12}/;

form.addEventListener('submit', e => {
    e.preventDefault();
    
    //reference to element inside form by its id
    const username = form.username.value;
    if(userNamePattern.test(username)){
        feedback.textContent = 'that username is valid'
    } else{
        feedback.textContent = 'should contains something else...'
    }
})

//testing RegEx
const username = '23421asdfshaundc';
const pattern = /^[a-zA-Z]{6,12}/;

// let result = pattern.test(username);
// if(result){
//     console.log('regext test passed');
// } else {
//     console.log('regex text failed');
// }

let result = username.search(pattern);
console.log(result);


//live feedback
form.username.addEventListener('keyup', e => {
    //console.log(e.target.value);
    console.log(e);
    if(userNamePattern.test(e.target.value)){
        form.username.classList.remove('error');
        form.username.classList.add('success');
        //console.log('passed');
    } else {
        form.username.classList.add('error');
        form.username.classList.remove('success');
        //console.log('failed');
    }

})