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

var googleHourlyRateDollars = prompt("What is the Google hourly rate in dollars?");
var amazonHourlyRateDollars = prompt("What is the Amazon hourly rate in dollars?");
var facebookHourlyRateDollars = prompt("What is the Facebook hourly rate in dollars?");

var googleHours = prompt("How many hours were worked at Google?");
var amazonHours = prompt("How many hours were worked at Amazon?");
var facebookHours = prompt("How many hours were worked at Facebook?");

var totalPayment;

totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;

alert("Total wages earned: $" + totalPayment.toFixed(2));


var classIsFull = confirm("Confirm that class is full"); // boolean
var classSchedulesCheck = confirm("Confirm that schedules check out"); // boolean

var studentEnrolled = !classIsFull && classSchedulesCheck;

alert("student enrollment status" + studentEnrolled);


var numberOfItems = prompt("How many items"); // number
var offerIsValid = confirm("Offer is valid"); // boolean
var isPremiumMember = confirm("You a premium member?"); // boolean

var productDiscountApplied = (isPremiumMember || numberOfItems > 2) && offerIsValid;

alert("Product discount status is:" + productDiscountApplied);