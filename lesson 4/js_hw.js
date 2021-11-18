//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function AreaTriangle(a, b) {
    return a * b;
}

let areaResult = AreaTriangle(3, 5);
console.log(areaResult);

//створити функцію яка обчислює та повертає площу кола з радіусом r
// function AreaCircle(r) {
//     return 3.14 * (r ** 2);
// }
//
// let areaResult = AreaCircle(5);
// console.log(areaResult);

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function AreaCylinder (h, r) {
//     return 2 * 3.14 * r * h;
// }
// let areaResult = AreaCylinder (2, 4);
// console.log(areaResult);

//створити функцію яка приймає масив та виводить кожен його елемент
// let array = [23.5, 'hello', 75, 'hi', -5, false];
//
// function outputArr(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
//
// outputArr(array);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function parText(t) {
//     document.write(`<p>${t}</p>`);
// }
//
// parText('some text');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function List(a) {
//     document.write('<ul>');
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write('</div>');
// }
//
// List('element');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function List2(size, t) {
//     document.write('<ul>');
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${t}</li>`);
//     }
//     document.write('</ul>');
// }
//
// List2(10, 'hello');

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [23.5, 'hello', 75, 'hi', -5, false];
//
// function outputArr(array) {
//     document.write('<ul>');
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write('</div>');
// }
//
// outputArr(array);

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//Для кожного об'єкту окремий блок.

// let array = [
//     {id: 1, name: 'Vasya', age: 30,},
//     {id: 2, name: 'Ivanna', age: 34,},
//     {id: 3, name: 'Ruslan', age: 41,},
//     {id: 4, name: 'Ivan', age: 20,},
//     {id: 5, name: 'Ostap', age: 18,},
//     {id: 6, name: 'Ola', age: 32,},
//     {id: 7, name: 'Vika', age: 23,},
//     {id: 8, name: 'Volodymyr', age: 19,},
//     {id: 9, name: 'Slava', age: 40,},
//     {id: 10, name: 'Ann', age: 33,},
// ];
//
// function OutputArr(array) {
//     for (const item of array) {
//         console.log(item);
//         document.write(`<div>${item.id}. ${item.name}: ${item.age}</div>`)
//     }
// }
//
// OutputArr(array);
