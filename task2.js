//square of a number

var num = 10;
var sqr = Math.pow(10, 2);
console.log("square of a number:" + sqr);

//swapping 2 numbers
var a = 10;
var b = 15;
var temp = a;
var a = b;
var b = temp;
console.log("numbers after swapping:" + a, +b);

//addition of 3 numbers

var a = 1;
var b = 2;
var c = 3;
var answer = a + b + c;
console.log("addition of 3 numbers:" + answer);

//celsius to fahrenheit convertion

var cel = 30;
var fah = (cel * 1.8) + 32;
console.log("celsius to fahrenheit:" + fah);

//meter to miles

var mtr = 100;
var mile = mtr / 1609;
console.log("metre to miles:" + mile);

//pounds to kg

var pounds = 170;
var kg = pounds / 2.2046;
console.log("pounds to kg:" + kg);

//calculating batting average

var runsScored = 500;
var timesOut = 20;
var battingAvg = runsScored / timesOut;
console.log("Batting average:" + battingAvg);

//calculate five test scores and their average

var test1 = 35;
var test2 = 40;
var test3 = 40;
var test4 = 45;
var test5 = 50;
var avg = ((test1 + test2 + test3 + test4 + test5) / 5);
console.log("Average of five scores:" + avg);

//power of any number x^y

var x = 2;
var y = 3;
var pwr = Math.pow(x, y);
console.log("power of any number:" + pwr);

//calculate simple interest

var p = 1000;
var n = 10;
var r = 5;
var simpleInterest = (p * n * r) / 100;
console.log("simple Interest:" + simpleInterest);

//calculate area of equilateral triangle

var a = 10;
var area = (Math.sqrt(3) / 4) * (Math.pow(a, 2));
console.log("Area of equilateral triangle:" + area);

//area of isosceles triangle

var b = 12;
var h = 15;
var area = (b * h) / 2;
console.log("Area:" + area);

//volume of sphere

var r = 7;
var volume = ((4 / 3) * (3.14) * (Math.pow(r, 2)));
console.log("Volume of sphere:" + volume);

//Area of prism

var l = 7;
var w = 5;
var h = 10;
var v = l * w * h;
console.log("area of prism:" + v);

//Find a area of triangle

var b = 10;
var h = 15;
var area = (b * h) / 2;
console.log("Area:" + area);

//Discount of product

var actualCost = 200;
var soldCost = 180;
var discountPer = ((actualCost - soldCost) / actualCost) * 100;
console.log("Discount:" + discountPer + "%");

//Find diametre,circumference and area of a cicle

var radius=7;
var diametre=2*radius;
var circum=2*3.14*radius;
var area=3.14*radius*radius;
console.log("Diametre:"+diametre,"circumference:"+circum,"area:"+area);

//All arithmetic operations

var a=5;
var b=10;
console.log("add:"+(a+b));
console.log("sub:"+(b-a));
console.log("mul:"+(a*b));
console.log("div:"+(b/a));

//Display asterisk pattern

console.log("* * * * *");
console.log("* * * * *");
console.log("* * * * *");
console.log("* * * * *");
console.log("* * * * *");

//Electricity bill calculation

var wattsConsumed=100;
var hour=1;
var days=30;
var unitRate=10;
var bill=((wattsConsumed*hour*days)/1000)*unitRate;
console.log("EB bill Rs:"+bill);

//calculate CGPA

var sub1=92;
var sub2=93;
var sub3=99;
var sub4=98;
var totalPer=((sub1+sub2+sub3+sub4)/500)*100;
var CGPA=totalPer/9.5;
console.log("CGPA:"+CGPA);
