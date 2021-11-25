//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
let length1 = str1.length;
console.log(length1);
let length2 = str2.length;
console.log(length2);
let length3 = str3.length;
console.log(length3);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase1 = str1.toUpperCase();
console.log(toUpperCase1);
let toUpperCase2 = str2.toUpperCase();
console.log(toUpperCase2);
let toUpperCase3 = str3.toUpperCase();
console.log(toUpperCase3);

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toLowerCase1 = toUpperCase1.toLowerCase();
console.log(toLowerCase1);
let toLowerCase2 = toUpperCase2.toLowerCase();
console.log(toLowerCase2);
let toLowerCase3 = toUpperCase3.toLowerCase();
console.log(toLowerCase3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';
let trim = str4.trim();
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str5 = 'Каждый охотник желает знать';
let stringToarray = (str) => {
    return str.split(' ');
}
let arr = stringToarray(str5);
console.log(arr);
document.writeln(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) => {
    return str5.substr(0, length);
}
let arr2 = delete_characters(str5, 7);
console.log(arr2);
document.writeln(`<div>${arr2}</div>`);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str6 = "HTML JavaScript PHP";
let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase();
}
let arr3 = insert_dash(str6);
console.log(arr3);
document.writeln(`<div>${arr3}</div>`);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let changeStr = (arg) => {
    if (!arg) return arg;
    return arg[0].toUpperCase() + arg.slice(1);
}
let result = changeStr('каждый охотник не желает знать');
console.log(result);
document.writeln(`<div>${result}</div>`);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
console.log(capitalize('каждый охотник не желает знать'));