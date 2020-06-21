const users = [
    { name: 'mario', premium: true },
    { name: 'luigi', premium: false },
    { name: 'yoshi', premium: true },
    { name: 'toad', premium: true },
    { name: 'peach', premium: false },
];

//only one default export per file
//export default users;

//export 
const getPremUsers = (userArray) => {
    return userArray.filter(u => u.premium);
}

//another way to do the same combined export
export {getPremUsers, users as default};