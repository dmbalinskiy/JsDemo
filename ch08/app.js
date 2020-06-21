const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');
const spanRes = document.querySelector('.result span');

form.addEventListener('submit', e => {
    //prevent page from refreshing
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach( (val, idx) =>{
        if(val === correctAnswers[idx]){
            score += 25;
        }
    });

    window.scrollTo(0, 0);

    spanRes.textContent = `${score}%`;
    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() =>{
        spanRes.textContent = `${output}%`;
        if(output == score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);
});

//set timeout - once
// setTimeout(() =>{
//     console.log('hello');
// }, 1000);

// let i = 0;
// //set interval - continously
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i === 3){
//         //for stop
//         clearInterval(timer);
//     }
// }, 1000);