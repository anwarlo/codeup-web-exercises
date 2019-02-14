(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    // var names = ["Marcus", "Carlo", "Arash","Jeremy"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
// console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
// for (var i = 0; i < names.length; i++){
//     console.log(names[i]);
// }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(function (names) {
    //     console.log(names);
    // });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    // function first(names) {
    //     return names[0];
    // }
    // function second(names) {
    //     return names[1];
    // }
    // function last(names){
    // return names[names.length -1];
    // }
    //
    // first();
// =======================Loops and Array Bonuses=========================
//         1.	create an array of shapes
// –	prompt the user to search for a specific shape
// –	using a for loop, iterate through the array to log the shapes until the matching shape is found
// –	once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.
//
//
//     var shapes = ['triangle','square','circle','rectangle'];
//     var question = prompt("Enter your search for a specific shape")
//     for (var i = 0; i < shapes.length; i++){
//         if (question === shapes[i]){
//             console.log("Shape is found");
//             break;
//         }
//     }


//     2.	Create a function that returns a random day of the week
//

//     var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     var d = daysOfWeek[Math.floor(Math.random()*daysOfWeek.length)];
//
//
//     function randomDay() {
//     console.log(d);
//     }
// randomDay();

//
//     3.	Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// –	someFunction("a") // returns 1
// –	someFunction("z") // returns 26
//
//     var alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//
//     var letter = prompt('Enter a letter').toLowerCase();
//
//     function alpha() {
//         for (var i = 0; i < alphabet.length; i++) {
//             if (letter === alphabet[i]) {
//                 return console.log(letter + " is the number " + i)
//             }
//         }
//     }
//
//     alpha();
//
//     4.	Create a function that returns the longest string in a given array of string elements.
//
//     var longest= '';
//
//     var words = ["whoops", "oops", "doh", "sonnawuhgun", "mothertrucker", "dangit", "zingpow", "whatduhfrenchtoast"];
//
//     function longestString(words){
//         for (var i = 0; words[i].length > longest.length;
//              i++){
//             if (words[i].length > longest){
//                 longest= words[i].length;
//             }
//
//         }
//         return words[longest];
//     }
//
// longestString()


    // var testArray = ['hell6', 'hiii', 'b', 'goodbye121212'];
    //
    // function longestStringFunction(array){
    //
    //
    //     var longestString = array[0].length;
    //
    //
    //     for(var i = 1; i < array.length; i++){
    //
    //
    //         if(array[i].length > longestString) {
    //
    //
    //             longestString = array[i];
    //             return longestString;
    //
    //         }
    //
    //     }
    //
    //     return array[0];
    //
    //
    // }
    //
    // console.log(longestStringFunction(testArray));

//
//     5.	 Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
// –	var arr1 = ['bob', 1, true, 1, 2];
// –	var arr2 = [2, null, undefined, 0, 2, "apple"]
// –	exampleFunction(arr1, arr2) // returns true


    // var arr1 = ['bob', 1, true, 1, 2];
    // var arr2 = [2, null, undefined, 0, 2, "apple"];
    //
    //
    // function sumOfElements(arr){
    //
    //     var arrAddition = 0;
    //
    //     for(var i = 0; i <= arr.length-1; i++){
    //
    //
    //         if(!isNaN(parseFloat(arr[i]))){
    //
    //             arrAddition += arr[i];
    //             console.log(arr[i]);
    //         }
    //
    //     }
    //
    //     console.log(arrAddition);
    //
    //     return arrAddition;
    // }
    //
    // function addArrayNumbers(arr1, arr2) {
    //
    //
    //     return sumOfElements(arr1) == sumOfElements(arr2);
    //
    //
    // }
    //
    // console.log(addArrayNumbers(arr1, arr2));


    // var holidays = ['new year','christmas','mlk','birthday']
    //
    // holidays.unshift(true)
    // holidays.push('halloween')

})();
