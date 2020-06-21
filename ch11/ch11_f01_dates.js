//dates & times
//new Date() object construction
const before = new Date('February 2019 7:30:59');
console.log(before);

const now = new Date();
console.log(now);
console.log(typeof(now));

//year, months, day, time
//month - starts from zero!
console.log(`year : ${now.getFullYear()} 
month : ${now.getMonth()}
date : ${now.getDate()}
hours : ${now.getHours()}
minutes : ${now.getMinutes()}
seconds: ${now.getSeconds()}
`);

//timestamps
console.log(`timestamp: ${now.getTime()}`); //ms since the beginning of 1970 year

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

let diff = now.getTime() - before.getTime();
console.log(diff);


const mins = Math.round(diff / 1000 /60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(`the blog was written ${days} ago`);

//convert timestamp into data
const timestamp = 1684783981349;
console.log(new Date(timestamp));

const clock = document.querySelector('.clock');
const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
    `;
    clock.innerHTML = html;
}

setInterval(tick, 1000);
let dateToCheck = new Date(timestamp);
console.log(dateFns.isToday(dateToCheck));
console.log(dateFns.format(dateToCheck, 'YYYY /// MMMM /// Do'));

//date comparison
const beforeDate = new Date('Fegruary 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now, dateToCheck, {addSuffix: true}));

