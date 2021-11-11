//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.writelet a = 'hello';

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let j = -999;
let h = 123;
let g = 3.14;
let l = 2.7;
let m = 16;
let o = (true);
let p = (false);

console.log(a);
alert(a);
document.write(a);

console.log(b);
alert(b);
document.write(b);

console.log(c);
alert(c);
document.write(c);

console.log(d);
alert(d);
document.write(d);

console.log(e);
alert(e);
document.write(e);

console.log(f);
alert(f);
document.write(f);

console.log(j);
alert(j);
document.write(j);

console.log(h);
alert(h);
document.write(h);

console.log(g);
alert(g);
document.write(g);

console.log(l);
alert(l);
document.write(l);

console.log(m);
alert(m);
document.write(m);

console.log(o);
alert(o);
document.write(o);

console.log(p);
alert(p);
document.write(p);

//Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

a = 'hi';
b = 'people';
c = 'howyou';
d = 'doing';
e = 2;
f = 12;
j = -3;
h = 152;
g = 9.16;
l = 1.8;
m = 456;
o = (false);
p = (true);
console.log(a);
alert(a);
document.write(a);

console.log(b);
alert(b);
document.write(b);

console.log(c);
alert(c);
document.write(c);

console.log(d);
alert(d);
document.write(d);

console.log(e);
alert(e);
document.write(e);

console.log(f);
alert(f);
document.write(f);

console.log(j);
alert(j);
document.write(j);

console.log(h);
alert(h);
document.write(h);

console.log(g);
alert(g);
document.write(g);

console.log(l);
alert(l);
document.write(l);

console.log(m);
alert(m);
document.write(m);

console.log(o);
alert(o);
document.write(o);

console.log(p);
alert(p);
document.write(p);

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)


let firstName = 'Bulyha';
let middleName = 'Victoriia';
let lastName = 'Volodymyrivna';
let person = (firstName + ' ' + middleName + ' ' + lastName);
console.log(person);

//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let r1 = prompt('vveditimia');
let r2 = prompt('vveditprizvushche');
let r3 = prompt('vveditvik');
console.log('Vitau' + ' ' + r1 + ' ' + r2 + '.' + ' ' + 'Tobi' + ' ' + r3 + ' ' + 'roky');
console.log(`Vitau ${r1} ${r2}. Tobi ${r3} roky`);

//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = (true);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

//Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true

console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 >= 6);
console.log(10 == 10);
console.log(10 >= 10);
console.log(10 != 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(123 === '123');
console.log(123 == '123');

//Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); //vyvodyt napys, bo konkatynacia
// document.write(str - a + "<br/>"); //peretvorue v chyslo, bo mat operacia
// document.write(str * "2" + "<br/>"); //peretvorue v chyslo, bo mat operacia
// document.write(str / 2 + "<br/>"); //peretvorue v chyslo, bo mat operacia




