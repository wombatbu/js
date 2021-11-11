//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let array = [3, 23, 5, 35, 7, -3, 64, 4, -6, 465];
console.log(array);
let result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8] + array[9];
console.log(result);

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let book = {name: 'math', pages: 423, genre: 'naukova'};
// console.log(book);

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

// // let book = {name: 'Mesto snov', pages: 153, genre: 'fantasy', author: 'Edurd Verkin'};
// console.log(book);

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

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

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = (height * width);
console.log(s);

//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
const PI = 3.14;
let v = (PI * (dC / 2) ** 2 * heightC);
console.log(v);

//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let g = (n ** 2 + m ** 2);
// console.log(g);
let k = Math.sqrt(g);
console.log(k);
