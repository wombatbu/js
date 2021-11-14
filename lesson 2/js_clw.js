//Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = +prompt('vveditj perwe chyslo');
let b = + prompt('vveditj druge chyslo');
if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a === b){
    console.log(a,b);
} else {
    console.log('vvedeno ne chysla')
}

//У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let numb = +prompt('Vvediit nomer kvartyry');
// if (numb >= 1 && numb <= 20) {
//     console.log('Perwyj pidjizd');
// } else if (numb >= 21 && numb <= 48) {
//     console.log('Drugyj pidjizd');
// } else if (numb >= 49 && numb <= 90) {
//     console.log('Tretij pidjizd');
// } else {
//     console.log('takoi kvartyry nemae u cjomu pidjizdi')
// }

//Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('vvedit chyslove znachennia');
// let asd = number === 10 ? 'Virno' : 'Nevirno';
// console.log(asd);

//Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = (6 > 3);
// console.log(typeof x);
// if (typeof x === "number") {
//     console.log(1);
// } else if (typeof x === "string") {
//     console.log(2);
// } else if (typeof x === "boolean") {
//     console.log(3);
// } else if (typeof x === "object") {
//     console.log(4);
// } else {
//     console.log('u zminnij wocj inwe')
// }

//Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = +prompt('Vvedit temperaturu');
// if (temp >= 10 && temp <= 22) {
//     console.log('Jdemo vchytysia');
// } else {
//     console.log('Sydymo vdoma i vchymosja online');
// }

//За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести
// Повідомлення - що число не вірне ... .

// let chyslo = +prompt('Vvedit chyslo vid 1 do 5 i ptrymajte pryz');
// switch (chyslo) {
//     case 1:
//         console.log('Vy vygraly telefon');
//         break;
//     case 2:
//         console.log('Vy vygraly avto');
//         break;
//     case 3:
//         console.log('Vy vygraly moto');
//         break;
//     case 4:
//         console.log('Vy vygraly kvartyru');
//         break;
//     case 5:
//         console.log('Vy vygraly podorog');
//         break;
//     default:
//         console.log('Chyslo ne virne');
// }
