(function(){
    "use strict";
    //
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    console.log(planetsString);

    var planetsArray = planetsString.split('|');

    console.log(planetsArray);

    // TODO: Convert planetsString to an array, save it to planetsArray.

    console.log(planetsArray.join("<br>"));

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful? So that they can view in descending order.

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

// ====================ARRAYS=====================-
//         6.	Write a function that returns the sum of an array of numbers

    // function addArrays(array) {
    //     return array.join()
    // }


//     7.	Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//     1) add a student
//     2) delete a student
//     3) view all students in alphabetical order
//     4) view all students in reverse alphabetical



})();
