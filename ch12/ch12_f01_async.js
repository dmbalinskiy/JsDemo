//simple example of async call
// console.log('1');
// console.log('2');

// setTimeout(() => {
//     console.log('callback is fired');
// }, 2000);

// console.log('3');
// console.log('4'); 
// console.log('5');

//make a request object
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        
        console.log(`ready state: ${request.readyState}`);

        if(request.readyState === 4 && request.status == 200){
            
            const data = JSON.parse(request.responseText);
            callback(undefined, data);

        }else if(request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    
    });
    
    //'https://jsonplaceholder.typicode.com/todos/'
    request.open('GET', resource);
    request.send();
};

// getTodos("todos/luidgi.json", (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);
//         })
//     })
// });
 
const getData = (url) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
        
        if(request.readyState === 4 && request.status == 200){
            
            const data = JSON.parse(request.responseText);
            resolve(data);

        }else if(request.readyState === 4) {
            reject('could not fetch data');
        }
    
    });
    
    //'https://jsonplaceholder.typicode.com/todos/'
    request.open('GET', url);
    request.send();
    });
};

// getData('todos/luidgi.json')
// .then(data => { 
//     console.log(data); 

//     //return also as promise, so we can chaining them together
//     return getData('todos/mario.json');
// })
// .then(data => {
//     console.log(data);
//     return getData('todos/shaun.json');
// })
// .then(data => {console.log(data)})

// //this is correct
// .then(d => 5)
// .then(d => { console.log("I'll throw an error"); throw 'err'; })
// .catch(error => { console.log(error); });

//compare behavior with failed data - for allSettled()...
// Promise.allSettled(
//     [
//         getData('todos/luidgi.json'), 
//         getData('todos/mario_failed.json'), 
//         getData('todos/luidgi.json')
//     ])
// .then(data => console.log(data))
// .catch(err => console.log(err));

//...and all() methods
// Promise.all(
//     [
//         getData('todos/luidgi.json'), 
//         getData('todos/mario_failed.json'), 
//         getData('todos/luidgi.json')
//     ])
// .then(data => console.log(data))
// .catch(err => console.log(err));

//fetch api
//with typos in code it will return 'resolved' response
// fetch('todos/luidgi.json')
// .then((response) => {
//     console.log('resolved', response);
//     return response.json();
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log('rejected', err);
// });

//async & await -> always returns promise
const getTodosAsync = async () => {

    const response = await fetch('todos/luidgi_.json');
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }

    const content = await response.json();

    return content;
}

getTodosAsync()
    .then(d => console.log(d))
    .catch(err => console.log(`rejected: ${err}`));
