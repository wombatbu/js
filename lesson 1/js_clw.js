let array = [3, 23, 5, 35, 7, -3, 64, 4, -6, 465];
console.log(array);

let result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8] + array[9];
console.log(result);

// let book = {name: 'math', pages: 423, genre: 'naukova'};
// console.log(book);

// // let book = {name: 'Mesto snov', pages: 153, genre: 'fantasy', author: 'Edurd Verkin'};
// console.log(book);

let book = [
    {
        name: 'Mesto snov',
        pages: 153,
        genre: 'fantasy',
        author: 'Edurd Verkin',
    },

    {
        name: 'Nemezida',
        pages: 764,
        genre: 'detective',
        author: 'U Nesbe',
    },

    {
        name: 'Paren z Kolorado',
        pages: 326,
        genre: 'detective',
        author: 'Stiven King',
    },

    {
        name: 'Polunochnyi zamok',
        pages: 103,
        genre: 'modern',
        author: 'Natalia Zhylcova',
    },

    {
        name: 'Zagadochnaia natura',
        pages: 867,
        genre: 'classic',
        author: 'Anton Chehov',
    },
];

console.log(book[0]);
console.log(book[1]);
console.log(book[2]);
console.log(book[3]);
console.log(book[4]);

let height = 23;
let width = 10;
let s = (height * width);
console.log(s);

let heightC = 10;
let dC = 4;
const PI = 3.14;
let v = (PI * (dC / 2) ** 2 * heightC);
console.log(v);

let n = 3;
let m = 4;
let g = (n ** 2 + m ** 2);
// console.log(g);
let k = Math.sqrt(g);
console.log(k);
