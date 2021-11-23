// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let AreaTriangle = (a, b) => a * b;
console.log(AreaTriangle(3, 5));

// - створити функцію яка обчислює та повертає площу кола
let AreaCircle = (r) => 3.14 * (r ** 2);
console.log(AreaCircle(6));

// - створити функцію яка обчислює та повертає площу циліндру
let AreaCylinder = (h, r) => 2 * 3.14 * r * h;
console.log(AreaCylinder(6, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [45, false, 7, 'hello', -56, true, 'hi'];
let OutputArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
OutputArr(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let Paragr = (t) => document.write(`<div>${t}</div>`);
Paragr('hello');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let Spysok = (t) => {
    document.write('<ul>');
    document.write(`<li>${t}</li>`);
    document.write(`<li>${t}</li>`);
    document.write(`<li>${t}</li>`);
    document.write('</ul>');
}
Spysok('text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let Spysok2 = (t, size) => {
    document.write('<ul>');
    for (let i = 0; i < size; i++) {
        document.write(`<li>${t}</li>`);
    }
    document.write('</ul>');
}
Spysok2('some text', 20);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [100, 76, 'hello', true, -76, 543, 'hi'];
let BuildArray = (array) => {
    for (const item of array) {
        console.log(item);
    }
}
BuildArray(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let ObjArr = [
    {id: 1, name: 'Vasya', age: 30,},
    {id: 2, name: 'Ivanna', age: 34,},
    {id: 3, name: 'Ruslan', age: 41,},
    {id: 4, name: 'Ivan', age: 20,},
    {id: 5, name: 'Ostap', age: 18,},
    {id: 6, name: 'Ola', age: 32,},
    {id: 7, name: 'Vika', age: 23,},
    {id: 8, name: 'Volodymyr', age: 19,},
    {id: 9, name: 'Slava', age: 40,},
    {id: 10, name: 'Ann', age: 33,},
];

let Output = (ObjArr) => {
    for (const obj of ObjArr) {
        console.log(obj);
        document.write(`<div>${obj.id}. ${obj.name}: ${obj.age}</div>`)
    }
}

Output(ObjArr);