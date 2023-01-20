//1.first day code
console.log("Welcome to 30DaysOfJavaScript"); //2.Welcome to 30DaysOfJavaScript

/* 3.multiline comment which says, 
comments can make code readable, 
easy to reuse and informative
*/

//4.
let a = 5; //number
let name = "mohit"; //string
let clgName; //undefine
let firstName = null; //null,object
let bool = true; //boolean

//5.typeof

console.log(typeof a); //number
console.log(typeof firstName); //null,object
console.log(typeof bool); //boolean
console.log(typeof clgName); //undefined

//6.

let x, y, z, p; // for variable not assign value

//variable assign value

//7.

let x2 = 5,
  y2 = "dilip",
  z2 = null,
  p2;

//8.

/*firstName,
lastName,
maritalStatus,
country,
age
*/

//9.

//firstName,lastName,maritalStatus,country,age

//10.

let myAge = 21;
console.log(myAge);
let yourAge = 40;
console.log(yourAge);

//  ==========================>DAY2 Level1<======================

//1.,2.,3.,4.,5
let var1 = "30 Days Of JavaScript";
console.log(var1); //30 Days Of JavaScript
console.log(var1.length); //18
console.log(var1.toUpperCase()); //30 DAYS OF JAVASCRIPT
console.log(var1.toLowerCase()); //30 days of javascript

//6.
let myName = "DilipKumar";

console.log(myName.substring(0, 5)); //Dilip

//7.
console.log(myName.includes("p")); //true

//8.
console.log(myName.includes(p)); //false
//9.
let myfirstName = "     Dilip";
console.log(myfirstName.split());
console.log(myfirstName.split("   "));

//10.
let forCompany = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(forCompany.split());
console.log(forCompany.split(" "));
console.log(forCompany.split("")); //one one element

//11.

console.log(forCompany.replace("Facebook", "Wipro"));
//12.

let check1 = "30 Days Of JavaScript";
console.log(check1.charAt(10));

//13.
console.log(check1.charCodeAt(10));

//14.
console.log(check1.indexOf("a"));
console.log(check1.indexOf(a));
console.log(check1.indexOf("days"));

//15.
console.log(check1.lastIndexOf("Days"));

//16.
let b =
  "You cannot end a sentence with because because because is a conjunction";

console.log(b.indexOf("with"));
console.log(b.indexOf("because"));

//17.

let mobile =
  "You cannot end a sentence with because because because is a conjunction";
console.log(mobile.lastIndexOf("because"));

//18.
let mob =
  "You cannot end a sentence with because because because is a conjunction";
console.log(mobile.search("sentence"));

//19
let mob1 =
  "              You cannot end a sentence with because because because is a conjunction";
console.log(mob1.trim(" "));

//20
console.log(mob1.startsWith("cannot"));
//21

console.log(mob1.endsWith("conjunction"));

//22.
console.log(mob1.match("with"));

//23
let var2 = "happy";
console.log(var2.repeat(5));

//===========================    DAYS2 LEVEL2   ================================

//1.,2.
console.log(
  "The quote" +
    "There is no exercise better for the heart than reaching down and lifting people up." +
    "by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

//3.
let a3 = "10";
let a5 = 10;
console.log(typeof a3 === typeof a5);
console.log(typeof a3);
console.log(typeof a5);

//4.

let b3 = 10;
console.log(b3 === parseFloat("9.8"));

//5.

let on = "python";
let off = "jargon";
console.log(typeof on == typeof off);

//6.

let number = Math.floor(Math.random() * 101); //0 to 100
console.log(number);

//7.

let number2 = Math.floor(Math.random() * 255); //0 to 255
console.log(number2);
//8.

console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50); //50 t0 100 random number

let char1 = "javascript";
let char2 = char1.length;

//9.
console.log(char1.charAt(Math.floor(Math.random() * char1.length)));

//10.

//===============================DAY2 LEVEL3=================

let vari =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log((count = vari.match("love")));
console.log(count);

let variab =
  "You cannot end a sentence with because because because is a conjunction";
console.log(variab.match("because"));

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentence);

let totalAnnualIncome;
let salary = 5000;
let bonous = 10000;
let online_Course = 15000;

totalAnnualIncome = salary + bonous + online_Course;
console.log(totalAnnualIncome);

//=====================================  DATE 3 LEVEL1      ================================

//1.
let firstName1 = "mohit";
let lastName1 = "chaudhary";
let z5 = "country",
  city = "sitamarhi",
  isMarried = "no";
let yrs = 2022;
console.log(firstName1, lastName1, z5, city, isMarried);
console.log(yrs);
//2.
let a10 = 10;
let b10 = "10";
console.log(typeof 10 === typeof "10");

console.log(parseFloat("9.8") === typeof 10);

//4.
// truthly values

/* 1.
All numbers(positive and negative) are truthy except zero
2.
All strings are truthy except an empty string ('')
3.
The boolean true
4.
on
*/

//falsy values

/*
1.
ZERO(0)
2.
undefined
3.
null
4.
off
5.
NaN
6.
boolean false
7.
"",'',``(empty)

 */

//5.
//condition check (if else)
let v1 = 4;
let v2 = 3;
if (v1 > v2) {
  console.log(v1);
} else {
  console.log(v2);
}

//only console.log()

//no check with if else
console.log(v1 > v2);

let v3 = 4;
let v4 = 4;
if (v3 !== v4) {
  console.log(false);
}
console.log(true);

let v5 = 4;
let v6 = 5;
if (v6 === v5) {
  console.log(false);
}
console.log(true);

// without if else condition check
console.log(v3 !== v4);

console.log(v6 === v5);

let py = "python";
let ja = "jargon";

console.log(py.length);
console.log(py === ja);

let v7 = 4;
let v8 = 5;
let v9 = 6;
let v10 = 7;
//with no check if else
console.log(v8 > v7 && v10 > v9);

// if else
if (v8 > v7 && v10 > v9) {
  console.log(true);
}
console.log(false);

let dra = "dragon";
console.log(dra.replace("on", "no"));

let py1 = "python";
console.log(py1.replace("on", "no"));

//7.

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1); //as a number (getMonth)

console.log(now.getDate());

console.log(now.getHours(), now.getMinutes());

// 1 january 1970 to now
console.log(now.getTime());

//=====================================Level 2,3===========================

//1.
let base = 10;
let height = 30;
let tarea = prompt("Enter base & height", 0.5 * base * height);
console.log(tarea);

let a9 = 5,
  a11 = 6,
  a12 = 7;
let ptarea = prompt("Enter a9,a11,a12", a9 + a11 + a12);
console.log(ptarea);

console.log(now.getFullYear() + " " + now.getMonth() + " " + now.getDate());
console.log(now.getMonth() + " " + now.getDate() + " " + now.getFullYear());

console.log(now.getDate() + " " + now.getMonth() + " " + now.getFullYear());

//========================DAYS4 LEVEL1==========================

let age = prompt("Enter are from user");
switch (true) {
  case age > 18:
    console.log("You are old enough to drive");
    break;

  default:
    console.log("stating to wait for the number of years he needs to turn 18.");
    break;
}

let aa = 4;
let bb = 3;
if (aa > bb) {
  console.log("aa is greater than bb");
}
console.log("bb is greater than aa");

let aaa = true;
aaa ? console.log("aaa need a 5.") : console.log("No need for a num.");

let num;
if (num % 2 === 0) {
  console.log("number is even");
}
console.log("odd");

//===========================LEVEL2=================

let num1 = prompt("Enter grade of students");

if (num1 < 50) {
  console.log("grades of students F");
} else if (num1 < 60 && num1 >= 50) {
  console.log("grades of students E");
} else if (num1 < 70 && num1 >= 60) {
  console.log("grades of students D");
} else if (num1 < 80 && num1 >= 70) {
  console.log("grades of students C");
} else if (num1 < 90 && num1 >= 80) {
  console.log("grades of students B");
} else {
  console.log("grades of students A");
}

let year = prompt("Enter yrs");
if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
  console.log(" not leap yrs");
} else {
  console.log(" leap yrs");
}

//===========================================Days 5=============================

const arr = Array();
console.log(arr); //empty arrary

const ar = ["mohit", "suresh", "dinesh", 1, 2, 3];
console.log(ar.length);
console.log(ar[0]);

console.log(ar.sort());
console.log(ar.includes("ragiv"));
console.log(ar.indexOf("dinesh"));
console.log(ar.reverse());

console.log(ar.shift("rohit"));
console.log(ar.unshift());

console.log(ar.push("ravi"));
console.log(ar.pop(2));
console.log(ar.slice()); //remove

const frontEnd = ["html", "CSS", "JS", "React", "Redux"];

console.log(frontEnd.map((v) => v.toUpperCase()), "all upperCase"  );
const backEnd = ["Node", "Express", "MongoDB"];

console.log(
  backEnd.map((v) => v.toLowerCase()),
  "all lowerCase"
);
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);
console.log(ages.sort());

//https://www.programiz.com/javascript/library/array/splice
