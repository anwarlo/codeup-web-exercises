'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



//TODO Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

var languagesThree = users.filter(users => users.languages.length > 2);

console.log(languagesThree);


//TODO  Use .map to create an array of strings where each element is a user's email address


const emailList = users.map(users => users.email);

console.log(emailList);


//TODO Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const experienceList = users.reduce((total,person) => {
    return total + person.yearsOfExperience;
},0);

console.log(experienceList);

//TODO Use reduce to get the longest email from the list of users.
// iterate through array, count the length of the email and return the email with the greatest length.

// function getLongestEmail(emailList) {
//     const emails = emailList.split(' '); // transform a email list into an array of addresses
//     const emailListObject = emails.reduce((emailCount, email) => {
//         if (typeof emailCount[email] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             emailCount[email] = 1;
//         } else {
//             // otherwise increment the existing count
//             emailCount[email] += 1;
//         }
//         return emailCount[email];
//     }, {}); // start with an empty object
//     return emailListObject;
// }

// es5 format: replace with previous and current instead of emails,personEmail to help visualize workflow.
//
let longestEmail = users.reduce(function (emails,personEmail) {

    return emails.length > personEmail.email.length ? emails : personEmail.email

},);

//Trying to put it into es6 format
// let longestEmail = users.reduce((emailList,emailObj) =>{ return emailList.length > emailObj.email.length ? emailList : emailObj});

console.log(longestEmail);



//TODO Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce(function (instructors,names) {
    return instructors + names.name+" ";
},"");

let answer = "Your instructors are: " + userNames.trim().split(" ").join(",");

console.log(answer);

//TODO Use redo get the unique list of languages from the list of users.w