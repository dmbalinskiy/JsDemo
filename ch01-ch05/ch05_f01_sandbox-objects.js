//object literals
'use strict'


let user = { 
    //key - value pair
    name : 'crystal',
    age : 30,
    email : 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs:  [
        { title: '10 things to make', likes: 30},
        { title: 'why cheese rules', likes: 50},
    ],
    login : () => console.log('the user logged in'),
    logout : () => console.log('the user logged out'),

    //Keep in mind: arrow functions in object literals will be called with
    //outside context
    logBlogsArrow: () => {

        console.log("logBlogs() arrow is called:");
        console.log(this);
        //this.blogs.forEach((val) => console.log(`${val}`));
    },

    logBlogsFcn: function()  {
        console.log("logBlogs() function is called");
        this.blogs.forEach((value, idx) => {
            console.log(`[${idx}]\t:\t${value.title}/${value.likes}`);
        });
    },

    Address : {
        postalCodel : 552211,
        "street" : "new value street",

        //NESTING ISN'T AFFECTED
        getFullAddress : () => {
            console.log("full address method is called...");
            console.log(this);
        },
        
        getSimpleAddress() {
            console.log("simple address is:")
            console.log(this);

            //...and only here object will be a nesting
            let object = {
                data: 1,
                getObj: () => console.log(this),
            }
            object.getObj();
        }

    }
 };
 console.log(user);
 console.log(user.name);

 user.age = 35;
 console.log(user.age);
 console.log(user["email"]);
 
const key = 'location';
user[key] = "moscow";
console.log(user[key]);

 user['name'] = 'chun-li';
 console.log(user.name);
 console.log(typeof(user));

user.login();
user.logout();

let proto = Object.getPrototypeOf(user);
Object.defineProperty(
    user, 
    'placeholder',
    { 
        value : 'enter text...',
        enumerable: true
        //get : () => { return "value"}
    });

console.log(user.placeholder);

// Object.entries(user)
//     .forEach((val, idx) => { 
//         console.log(`[${idx}]: ${val[0]} = ${val[1]}`)
//     });

function f1() {
    console.log(this);
}

f1.call(this);
f1.call(user);

user.logBlogsFcn();
user.Address.getFullAddress();
user.Address.getSimpleAddress();
