(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Math.PI * this.radius * this.radius;// TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // if (this.getArea() % 1 !== 0) {
            //     return Math.round(this.getArea());
            // }
            if (doRounding){
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
                // Better practice to do a return like this: return "Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea());


            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    circle.radius = 5;
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
