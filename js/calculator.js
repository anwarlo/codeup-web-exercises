"use strict"

var inputString = "";

function updateString(p1){
    inputString += p1;
    document.getElementById("outputBox").value = inputString;
    return inputString;
}