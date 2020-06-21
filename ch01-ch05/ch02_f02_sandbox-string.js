//strings
let email = 'mario@thenetninja.co.uk';
console.log("email = %s", email);

//index of
let result = email.indexOf("@");
console.log("email.indexOf('@') = %d", result);

//last index of
result = email.lastIndexOf(".");
console.log("email.lastIndexOf('.') =  %d", result);

//slice - 2nd parameter is also index, NOT LENGTH
result = email.slice(6, 10);
console.log("email.slice(6, 19) = %s", result)

//substring - 2nd parameter is LENGTH
result = email.substr(6, 5);
console.log("email.substr(6, 4) = %s", result)

//replace - replaces only FIRST occurence
result = email.replace("n", "__");
console.log("email.replace('n', '__') = %s", result)

//strings concatenation
let first = "Brandon";
let last = "Sanderson";
let fullname = first + " " + last;
console.log("fullname = %c%s", "color : green", fullname);

//getting characters
console.log("fullname[0] = %s", fullname[0]);

//string length
console.log("fullname.length = %i", fullname.length)

//string methods
console.log("fullname.toUpperCase() = %s", fullname.toUpperCase());
result = fullname.toLowerCase();
console.log("fullname.toLowerCase() = %s", result);

//template strings
const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

//concatenation
result = "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(result);

//template string
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

//html templates
let html = `
<h2>${title}</h2>
<p>By ${author} </p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);