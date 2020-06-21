const student = {
    firstname: 'Vasya',
    secondname: 'Pupkin',
    country: 'Ukraine',
    scores: {
        math: 74,
        english: 63
    },
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
};

//object destructuring
const { firstname, secondname, country } = student;
console.log(`I'm ${firstname} ${secondname} from ${country}`);

//assignment - variables were not declared previously
let f, s, a;
({firstname: f, secondname: s, age: a = 25} = student);
console.log(`I'm ${f} ${s}, I'm ${a} years old`);

//variable reassignment and default values:
const { 
    firstname : name1 = 'Placeholder1', 
    secondname: name2 = 'Placeholder2',
    thirdname : name3= 'Placeholder3',
    age = 25,
 } = student;
 console.log(`I'm ${name1} ${name2} ${name3}, my age is ${age}`);

const { secondname : surname = "Empty", scores : {
        math = 60, 
        science = 50
    }
} = student;
console.log(`Student ${surname} has ${math} scores at math ans ${science} scores at science`);

//array destructuring example
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
console.log(`r:${red} / g:${green} / b:${blue}`);

//assignment example
[r, g, b, a=1.0] = rgb;
console.log(`r:${r} / g:${g} / b:${b} / a: ${a}`);

//variable swapping:
const dimensions = [200, 300, 400];
[w, h, d] = dimensions;
console.log(`current dimensions are: w:${w} / h:${h} / d:${d}`);
[w, h, d] = [d, w, h];
console.log(`swapped dimensions are: w:${w} / h:${h} / d:${d}`);

//variable skipping
[v1, ,v2,,, v3 = 0] = rgb;
console.log(`r:${v1} / b:${v2} / nv: ${v3}`);

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [rd,, ye, ...otherColors] = rainbow;
console.log(otherColors);
const [...clonedRainbow] = rainbow;
console.log(clonedRainbow);

const {   firstname: n1, 
            secondname: n2, location: { city: c, coordinates: [, lng] },
            elements : {
                dd1, dd2, dd3
            } = {},
        } = 
            student;

console.log(`name: ${n1} ${n2} lives in ${c}: ${lng}. Elements: ${dd1}`);


let order = {
    number : 537,
    firstname: 'my simple order',
    scores: {
        math: 25,
        english: 43,
    },
    customer: {
        name: 'vasya',
        surname: 'pupkin'
    },
    items: ['grocery', 'eggs', 'butter', 'bread', ['peaches', 'plums', 'oranges']]
};

const extracted = {
    number: nmb,
    customer : {
        name: custName1,
        surname: custName2,
    },
    //extracting into inner array
    items: [,,,, [...goods]]
} = order;
console.log(`OrderId ${nmb} for ${custName1} ${custName2} is extracted: ${goods}`);
console.log(goods.length);

const fcn = ({firstname, scores: { math = 0, science = 0 } = {}} = {}) => {
    console.log('output from fcn - start');
    console.log(`name: ${firstname}, math: ${math}, science: ${science}`);
    console.log('output from fcn - end');
}
fcn(order);
fcn(student);
