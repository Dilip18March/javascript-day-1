//1.


let i;
while (i < 11) {
    console.log(i);
    
}

//2.

let n=12;
do {
    console.log(n);

}
while (n < 11);

//3.
for (let x = 0; x < 11; x++){
    console.log(x * x);
}

//4.
if (y % 2 == 0) {
  console.log("y is even");
} else {
  console.log("y is odd");
}


//5.
for (var y = 0; y < 101; y++){
     console.log(y);

    if (y % 2 == 0) {
      console.log("y is even");
    } else {
      console.log("y is odd");
    }
}

//6.
let s = 0;

for (let m = 0; m < 101; m++){
    s = s + m;
    console.log(s);
}

//6.

let number = Math.floor(Math.random() * 10); //0 to 10
let newarr = [];
newarr.push(number.toString());
newarr.push(number + '');
newarr.push(String(number));
console.log(newarr);

//7.

function makeid(length) {
   
    var result = "";
   
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      
      
  }
  return result;
}

// hexadecimal id genarate 

console.log('==========>', makeid(3));


const getRanHex = (size) => {
  let result = [];
  let hexRef = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", ];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join("");
};

console.log(getRanHex(6));
console.log(getRanHex(12));
console.log(getRanHex(3));

//random color
const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) + ")"
  );
}

var color = random_rgba();

g.fillStyle = color;
g.strokeStyle = color;


const arrr = [ "ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN","KENYA",];



//function deffination

function firstName(name = ['dilip', 'mohit', 'rohan']) {
  let index;
  
  for (index =0; index < name.length; index++)
    
  console.log('========',name[index],index);
}
firstName();

//function expression 

const lastName = function (nam = ['sharma', 'khan', 'ali', 'kumar']) {
    let index;

    for (index = 0; index < nam.length; index++)
      console.log("========", nam[index], index);
  
}
lastName();

//arrow function 

function get_random(list) {
 
  console.log( list[Math.floor(Math.random() * list.length)]);
}

get_random([2, 3, 5]);


// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b5 = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}

function num() {
  for (let num = 0; num < 10; num++){
    if (num % 2 == 0) {
      console.log('num is even');
    }
    else {
      console.log('num is odd');
    }
  }
  // console.log(num);
}
num();


function generate() {
  console.log( Math.random().toString(36).substring(2) + new Date().getTime().toString(36));
}
generate()


function getRandomId(length) {
    if (!length) {
        return '';
    }

    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let array;

    if ('Uint8Array' in self && 'crypto' in self && length <= 65536) {
        array = new Uint8Array(length);
        self.crypto.getRandomValues(array);
    } else {
        array = new Array(length);

        for (let i = 0; i < length; i++) {
            array[i] = Math.floor(Math.random() * 62);
        }
    }

    let result = '';

    for (let i = 0; i < length; i++) {
        result += possible.charAt(array[i] % 62);
    }

  console.log('==========>', result);
  

}

const colorsCbfRainbowRGB = {
  violet: [120, 28, 129],
  indigo: [64, 67, 153],
  blue: [72, 139, 194],
  green: [107, 178, 140],
  olive: [159, 190, 87],
  yellow: [210, 179, 63],
  orange: [231, 126, 49],
  red: [217, 33, 32],
};

console.log(colorsCbfRainbowRGB.yellow);



const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

console.log('========>',users)

//call back
const callback = (n) => {
  return n ** 2
}
const callback1 = (n) => {
  return n ** 2;
};


function cube(callback,callback1 ,n) {
  return (callback(n) * n)*((callback1(n)*n))
}
console.log(cube(callback, callback1, 3))



const sum = (s) => {
  const multi = (m) => {
    const div = (t) => {
      return 2 * s + 5 * m + t;
    }
    return div;
  }
  return multi;
}
console.log('============>',sum(2)(5)(20));

const team = {
  teach: {
    position: 'backend'
    ,
    type: 'teachnical',
  },
  nonTeach: {
    position: 'executive',
    type: 'non technical',
  },
  position: 'production',
  type: 'non technical',
  position: 'manager',
  type:'non/technical'
  
}

console.log("=============>",team.nonTeach)



