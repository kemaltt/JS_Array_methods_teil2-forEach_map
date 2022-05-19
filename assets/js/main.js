//Array Methods Teil 2=========================================

//Lev1_1-----------------------------

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortierung = () => {

    let sortLanguages = languages.sort()
    console.log(sortLanguages);
}

sortierung();

//Lev1_2----------- Array reverse()------------------

const sortierung2 = () => {

    let sortLanguages = languages.sort()
    console.log(sortLanguages);

    let reverseLanguages = sortLanguages.reverse();
    console.log(reverseLanguages);

}
sortierung2();

//Lev1_13---------------- Arrays join()------------------------

let meinText1 = ["Hello", "World"];
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"];
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"];

let join1 = meinText1.join();
let join2 = meinText1.join('');
let join3 = meinText1.join(' ');
let join4 = meinText1.join('+');

console.log(join1);
console.log(join2);
console.log(join3);
console.log(join4);

let join5 = meinText2.join();
let join6 = meinText2.join('');
let join7 = meinText2.join(' ');
let join8 = meinText2.join('+')

console.log(join5);
console.log(join6);
console.log(join7);
console.log(join8);

let join9 = meinText3.join()
let join10 = meinText3.join('')
let join11 = meinText3.join(' ')
let join12 = meinText3.join('+')

console.log(join9);
console.log(join10);
console.log(join11);
console.log(join12);

//Lev2_2--------------- sort() bigger numbers----------------

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

let sortNumArray2 = numArray2.sort((a, b) => a - b);
console.log(sortNumArray2);


//forEach/map Lev1==========================================================

//Lev1_1----------forEach()---------

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];
const myDrinks = () => {
    let sortGetraenke = getraenke.sort();
    console.log(sortGetraenke);
    let myGetraenke = sortGetraenke.forEach((el) => {
        console.log(el);
        document.write(`<p>${el}</p>`);
    })
}

myDrinks();

//Lev1_2----------- map()--------

let upperDrinks = getraenke.map((el) => { return el.toUpperCase() })
console.log(upperDrinks);


//Lev1_3----------- map()--------
let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const multiply = (arr) => {

    let multiplyArr = arr.map(el => el * 2)
    console.log(multiplyArr);
    let sortMultiplyArr = multiplyArr.sort((a, b) => a - b)
    console.log(sortMultiplyArr);
}

multiply(array);

//Lev1_4----------- map()--------
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const fahToCel = () => {
    let cel = fahrenheit.map((el) => {
        return ((el - 32) / 1.8).toFixed(0)
    })
    console.log(cel);
}
fahToCel();

//Lev1_4-----------forEach()--------
let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

let newArr = [];
checkNumber.forEach((el) => {
    if (el % 3 == 0) {
        el += 100
    }
    newArr.push(el);
})

console.log(newArr);