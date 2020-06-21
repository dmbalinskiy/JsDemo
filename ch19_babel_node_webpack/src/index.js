//do not use extension in import
import {styleBody, addTitle, contact} from './dom'

//using default import
import users, { getPremUsers } from './data';

console.log('index file');
addTitle('test');
styleBody();
console.log(contact);
console.log(users);

const premUsers = getPremUsers(users);
console.log(premUsers);

console.log('hello from index.js')