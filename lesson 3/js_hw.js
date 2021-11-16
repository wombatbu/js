//створити масив з:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль

let charr = [23, 56, -7, 23, -5];
console.log(charr);
let sarr = ['hello', 'hola', 'привіт', 'cześć ', 'bonjour'];
console.log(sarr);
let marr = ['hello', 76, true, false, 9];
console.log(marr);

//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array [0] = 56;
// array [1] = 'hello';
// array [2] = false;
// array [3] = 'bonjour';
// array [4] = -56;
// array [5] = true;
// array [6] = 7;
// array [7] = 'hi';
// console.log(array);

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>some text</div>');
// }

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 1; i < 11; i++) {
//     document.write(`<div>some text ${i}</div>`);
// }

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині

// let i = 0;
// while (i < 20) {
//     document.write('<h1>some text</h1>');
//     i++;
// }

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині

// let i = 1;
// while (i < 21) {
//     document.write(`<h1>some text ${i}</h1>`);
//     i++;
// }

//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let charr = [5, -45, 0, 65, -47, 7, 38, -5, 9, 34];
// for (let i = 0; i < charr.length; i++) {
//     console.log(charr[i]);
// }

//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let sarr = ['hello', 'hola', 'привіт', 'cześć ', 'bonjour'];
// for (i = 0; i < sarr.length; i++) {
//     console.log(sarr[i]);
// }

//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі

// let barr = ['hello', 76, 'привіт', 0, 'bonjour'];
// for (i = 0; i < barr.length; i++) {
//     console.log(barr[i]);
// }

//Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

// let firstmarr = [65, 'hello', false, 98, 'hi', 5, true, 345, false, 'bonjour'];
// for (i = 0; i < firstmarr.length; i++) {
//     if (typeof firstmarr[i] === "boolean") {
//         console.log(firstmarr[i]);
//     }
// }

//Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

// let secondmarr = [65, 'hello', false, 98, 'hi', 5, true, 345, false, 'bonjour'];
// for (i = 0; i < secondmarr.length; i++) {
//     if (typeof secondmarr[i] === "number") {
//         console.log(secondmarr[i]);
//     }
// }

//Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// let thirdmarr = [65, 'hello', false, 98, 'hi', 5, true, 345, false, 'bonjour'];
// for (i = 0; i < thirdmarr.length; i++) {
//     if (typeof thirdmarr[i] === "string") {
//         console.log(thirdmarr[i]);
//     }
// }

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let array = [];
// array [0] = 755;
// array [1] = 'hello';
// array [2] = false;
// array [3] = 'bonjour';
// array [4] = -9;
// array [5] = true;
// array [6] = 'hola'
// array [7] = false;
// array [8] = 65;
// array [9] = 'hi';
// for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (i = 1; i < 100; i += 2) {
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }