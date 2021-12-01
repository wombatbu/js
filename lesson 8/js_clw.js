//1) Напишіть код, який :
//a) змінює колір тексту елемнту з ід main_header на назву групи в
// якій ви вчитесь (mon-year)
let main = document.getElementById('main_header');
main.classList.add('sep_2021');

//b) робить шириниу елементу ul 400px
let ulElement = document.getElementsByTagName('ul');
for (const ul of ulElement) {
    ul.style.width = '400';
}

//c) робить шириниу всіх елементів з класом linkList шириною 50%
let linksList = document.getElementsByClassName('linkList');
for (const link of linksList) {
    link.style.width = '50%';
}

//d) отримує текст який зберігається в елементі з класом listElement2
function addText(text) {
    document.getElementsByClassName('listElement2').innerText = text;
}

//e) отримує всі елементи li та змінює ім колір фону на сірий
let liList = document.getElementsByTagName('li');
for (const li of liList) {
    console.log(li);
    li.style.background = 'silver';
}

//f) отримує всі елементи 'a' та додає їм клас anchor
let aList = document.getElementsByTagName('a');
for (const a of aList) {
    a.classList.add('anchor');
    console.log(a.classList);
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу
//дорівнює link3, змінює йому розмір тексту на 40 пікселів
let a2List = document.getElementsByTagName('a');
for (const a2 of a2List) {
    if (a2.innerText === 'link3') {
        a2.style.fontSize = '40';
    }
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX -
//текстовий контент елементу a
let a3List = document.getElementsByTagName('a');
for (const a3 of a3List) {
    a3.classList.add(a3.innerText);
    console.log(a3.classList);
}

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
for (const sub of subHeader) {
    sub.style.background = prompt('Vvedit background')
}

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку
//якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeader2 = document.getElementsByClassName('sub-header');
for (const sub2 of subHeader2) {
    if (sub2.innerText === 'content 2 segment') {
        sub2.style.color = prompt('Vvedit color');
    }
}

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
//Текст отримати з prompt()
document.getElementsByClassName('content_1').innerText = prompt('Vvedit text');

//l) отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName('p');
for (const p of pList) {
    p.style.padding = '20';
}

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year.
//Пример sep-2021)
let textList = document.getElementsByClassName(' text2');
textList.innerText = 'sep_2021';
