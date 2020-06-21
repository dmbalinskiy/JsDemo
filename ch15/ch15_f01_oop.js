const names = ['shaun', 'crystal'];
console.log(names);

const ages = new Array(20, 25, 30);
console.log(ages);

let userOne = {};
console.log(userOne);

let userTwo = new Object();
console.log(userTwo);

const name = 'mario';
console.log(name);
console.log(name.toUpperCase());

let nameTwo = new String('ryu');
console.log(nameTwo);

const nmb = new Number(5);
console.log(nmb);

userOne = {
    userName: 'ryu',
    email: 'ryu@thenetninja.co.uk',
    login() {
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
}

console.log(userOne.email, userOne.userName);
userOne.login();

userTwo = {
    userName: 'chun li',
    email: 'chun.li@thenetninja.co.uk',
    login() {
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
}

console.log(userTwo.email, userTwo.userName);
userTwo.login();

class User {
    //constructor
    constructor(username, email){
        //set up properties of an object
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    //no commas between properties/methods!
    login() {
        console.log(`${this.username} is logged IN`);
        return this;
    }
    logout() {
        console.log(`${this.username} is logged OUT`);
        return this;
    }
    incScore(){
        ++this.score;
        console.log(`${this.username} has ${this.score} scores`);
        return this;
    }
}

//extends keyword for extending
class Admin extends User {
    constructor(username, email, title){
        //calls parent class constructor with passed parameters
        //should be called anyway, or syntax error will be thrown
        super(username, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter(u => u.username !== user.username)
    }

    logout(){
        let res = super.logout();
        console.log('logout from admin');
        return res;
    }
}

const user1 = new User('mario', 'mario@thenetninja.co.uk');
console.log(user1);

const user2 = new User('luidgi', 'luidgi@thenetninja.co.uk');
console.log(user2);

user1.login().incScore().incScore().logout();;
user2.login().logout();

const user3 = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');
user3.login().logout();
console.log(user3);

let users = [user1, user2, user3];
console.log(users);
user3.deleteUser(user2);
console.log(users);


//'new keyword':
//- creates a new empty object {}
//- binds the value of 'this' to the new empty object
//- calls the cte constructo function to 'build' the object

//no-class based user constructor,
//just an ordinar function
function UserFcnBased(username, email) {
    this.username = username;
    this.email = email;

    //new methods are added here 
    // this.login = function(){
    //     console.log(`${this.username} is logged IN inner`);
    // }
}

function AdminFcnBased(username, email, title){
    UserFcnBased.call(this, username, email);
    this.title = title;
}

AdminFcnBased.prototype = Object.create(User.prototype);
AdminFcnBased.prototype.deleteUser = (user) => {

};

//method is added on user prototype
UserFcnBased.prototype.login = function(){
    console.log(`${this.username} is logged IN prototype`);
    return this;
};

UserFcnBased.prototype.logout = function(){
    console.log(`${this.username} is logged OUT prototype`);
    return this;
};

const UserFcnBased1 = new UserFcnBased('mario', 'mario@thenetninja.co.uk');
const UserFcnBased2 = new UserFcnBased('luidgi', 'luidgi@thenetninja.co.uk');
const UserFcnBased3 = new AdminFcnBased('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');

console.log(typeof(UserFcnBased));
console.log(UserFcnBased1);
console.log(UserFcnBased2);
console.log(UserFcnBased3);

UserFcnBased1.login().logout();