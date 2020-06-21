let fnBlocker = () => {
    console.log('fnBlocker is started')    
    console.time("m1");
    for(let i = 0; i < 2000000000; i++){
    }
    console.timeEnd("m1");
    console.log('fnBlocker is finished')    
}

// setTimeout(() =>{
//     console.log("INTERVAL FUNCTION IS CALLED")
// }, 0);

// console.log('1');
// // const p = new Promise((resolve, reject)=>{
// //     fnBlocker();

// //     reject('rejected from user code');
// // });

// p = () => {
//     fnBlocker();
//     return Promise.resolve('ok');
// }

// p().then((val) => {
//     fnBlocker();
//     console.log(`previous promise execution result is ${val}`);
//     return Promise.reject('fail_second');
//     //Promise.reject('prototype method is used for rejection');
// }).then((val) => {
//     fnBlocker();
// }).catch(reason => console.log(`promise is rejected: ${reason}`));

// let iteration = 0;
// const endless = () => {
//     return new Promise((resolve, reject) => {
//         console.log(iteration);

//     });
// }
// //fnBlocker(); 
// console.log('2');

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then(user => {
//     return Promise.reject('ouch!');
//     //return user;
// })
// .then(user => console.log(user.title))
// .catch(err => console.log(err));

// console.log('first');
// const blocker = () => {
//     return new Promise((resolve, reject) => {
//         fnBlocker();
//         resolve('one billion cycles gone');
//     });
// }
// blocker();
// console.log('second');

let delay = async (interval) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${interval / 1000}s passed`);
            return resolve();
        }, interval);
    })
}

//delay(2000).then();
//console.log('immediate after delay call...')

//await delay(2000);
const getFruit = async(name) => {
    const fruits = {
        pineapple: 'pa',
        peach: 'pe',
        strawberry: 'sb',
    };
    await delay(3000);
    //return Promise.resolve(fruits[name]);
    return fruits[name];
}

const sync = () => {return 5};

const makeSmoothie = async() => {
    const a = await getFruit('pineapple');
    const b = await getFruit('peach');
    const c = await sync();
    return [a, b, c]; 
}

const makeSmoothieFaster = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('peach');
    return await Promise.all([a, b]);
}

const badSmoothie = async () => {
    try{
        const a = getFruit('pineapple');
        const b = getFruit('peach');
        let res = await Promise.all([a, b]);

        throw('broken');
        return res;
    }
    catch (err){
        
        throw err;
    }
}

// makeSmoothie().then(r => console.log(r));
// makeSmoothieFaster().then(r => console.log(r));
// badSmoothie()
// .then(r => console.log(r))
// .catch(e => console.log(e));

//here all methods are called simultaneously, not one after another
const fruits = ['peach', 'pineapple', 'strawberry'];
const smoothie = fruits.map(async f => {
    let fruit = await getFruit(f);
    //console.log(fruit);
    return fruit;
});
console.log(smoothie);

//const smoothieNew = fruits.map(f => getFruit(f));

const iterateFruits = async () => {
    for await (const www of smoothie){
        console.log(www);
    }
}
iterateFruits();
