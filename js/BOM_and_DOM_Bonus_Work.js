"use strict"

// ================================= MATH OBJECT BONUS
//
// Create an application that will calculate the volume of a building based on user input.
// Account for multiple rooms and a user choice of measurement (between imperial or metric).



// ================================= BOM BONUSES
//
//
// BONUS 1: Build a Jack-In-The-Box
//
// Define an object called jackBox.
var i = 0;
var jackBox = {
    triggered: false,
    play: setInterval(function()){
        if (triggered === false){
        console.log(lyrics[i]);
        i++
        }
        },1000)
    windUp: function () {
        if ()
    },
    lyrics: ["All a-...","-round the ...","mulberry...","bush, The...","monkey...","chased the...","wea-...","...-sel","The monkey...","stopped to...","pull up his...","sock,...","Pop!...","goes the...","wea-...","-sel."]
        };
var intervalId = null;


// Include properties for...
//      triggered - whether or not the box has been sprung (should be false by default)
//     intervalId - set to null
//         play() - once called, if triggered is false, console.log one new element in the lyrics array every second
//                  after the lyrics, stop the interval, set the triggered property to true, and alert POP!
//       windUp() - once called will stop the play() method and set triggered to false
//         lyrics - an array with the following elements:
//
//         "All a-...",
//         "-round the ...",
//         "mulberry...",
//         "bush, The...",
//         "monkey...",
//         "chased the...",
//         "wea-...",
//         "-sel...",
//         "The monkey...",
//         "stopped to...",
//         "pull up his...",
//         "sock,...",
//         "Pop!...",
//         "goes the...",
//         "wea-...",
//         "-sel."
//
//    Include methods for...
//
//
// ================================= DOM BONUSES
//
// Complete the following in a file called "dom-bonuses.html"...
//
// BONUS 1 (grocery list APP)
// Allow the user to enter a certain number of items and then display them on the page.
// - for each item, prompt the user for the name of the item, and store in an array of items.
// - for each item in the array of items create a new li element with the correct text and append to the DOM
// - for a simpler alternative, build an entire HTML string and set the innerHTML of an existing <ul> element
//
// BONUS 2 (custom styling)
// In the same dom-bonuses.html page, allow the user to select custom styling for the page by setting the background color, font color, and font-family for the page. Add additional style changes to have fun and experiment!
//
// BONUS 3 (profile create form)
// Create a form that will allow the user to enter the following information in text inputs:
//  firstName
//  lastName
//  username
//  email
//  address
//  age
//  shortBio
// Create a function, createUserProfileDiv() that when run will grab all data in the form inputs and build a div with the user's entered information and append it to the page. Test it by running it in the JS console.
//
//
// ================================= DOM EVENT BONUSES
//
// BONUS 1 - create a stop watch app
//
// 1) stop watch display that shows the time to the nearest 100th of a second
// 2) start button to start the stop watch
// 3) reset button to reset the time to zero
// 4) pause button to stop the stop watch
//
// Additional Features:
//    1) store a list of times in an aside div that are appended to every time the reset button is hit
//    2) add delete buttons for each stored time that removes the time from the aside div
//    3) add keyboard events to control starting, pausing, and resetting
//
// BONUS 2 - create a Hangman game
//
// Allow user 1 to enter a random word for user 2 to try to guess.
//
// - display the number of guesses
// - display the letters already attempted
// - display the word as it is being completed and the letters not already guessed with underscores
// - a form should allow the user to type a letter guess
// - do not accept inputs that are more than one letter or are not letters (ignore case)
//
// BONUS 3 - Create a zoomable font size effect with mouse scroll