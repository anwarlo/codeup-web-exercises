"use strict";
console.log("Hello from external Javascript")
alert("Welcome to my Website!");
var color=prompt("What is your favorite color?");
alert(("Great, ")+color+(" is my favorite color too!"));
var dailyFee=3;
var littleMermaid=prompt("How many days did you rent the movie 'The Little Mermaid'?");
var hercules=prompt("How many days did you rent the movie 'Hercules'?");
var brotherBear=prompt("How many days did you rent the movie 'Brother Bear'?");

var total=  dailyFee*littleMermaid+hercules+brotherBear;

alert("Your total movie rental fees are"+" "+"$"+totalPayment.toFixed(2);

var googleHourlyRateDollars=prompt("What is your G rate in dollars?");
var amazonHourlyRateDollars="What is your AZ rate in dollars?";
var facebookHourlyRateDollars="What is your FB rate in dollars?";

var googleHours=prompt("How many hour did you work for at G?");
var amazonHours;
var facebookHours;

var totalPayment;

totalWagesEarned

totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;


var classIsFull = confirm("Confirm that class is full"); // boolean
var classSchedulesCheck = confirm("Confirm that schedules check out"); // boolean

var studentEnrolled = !classFull && classSchedulesCheck;

alert("student enrollment status" + studentEnrolled)


var numberOfItems = prompt("How many items"); // number
var offerIsValid = confirm("Offer is valid"); // boolean
var isPremiumMember = confirm("You a premium member?"); // boolean

var productDiscountApplied = (premiumMember || numberOfItems > 2) && offerValid;

alert("Product discount status is:" + productDiscountApplied);