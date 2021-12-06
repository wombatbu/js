//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
let element = document.createElement('div');
element.id = 'text';
document.body.appendChild(element);

let btn = document.createElement('button')
btn.id = 'btn';
btn.innerText = 'click to hide element';
document.body.appendChild(btn);

btn.onclick = function () {
    element.style.display = 'none';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn1 = document.createElement('button');
btn1.id = 'btn1';
btn1.innerText = 'click to hide'
document.body.appendChild(btn1);

btn1.onclick = function () {
    btn1.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.createElement('input');
document.body.appendChild(input);
input.type = 'number';
let btn2 = document.createElement('button');
btn2.innerText = 'submit age';
btn2.id = 'btn2';
document.body.appendChild(btn2);

btn2.onclick = function () {
    if (input.value >= 18) {
        alert('korystyvachy e 18 :)');
    } else if (input.value < 18) {
        alert('korystyvachu nemae 18 :(');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.createElement('div');
menu.classList.add('menu');
document.body.appendChild(menu);
menu.innerText = 'Menu';

let ul = document.createElement('ul');
menu.appendChild(ul);

let li1 = document.createElement('li');
li1.innerText = 'Punkt1';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'Punkt2';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerText = 'Punkt3';
ul.appendChild(li3);

menu.onclick = function () {
    ul.classList.toggle('hide')
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let seasons = [
    {
        title: 'Winter',
        body: 'December, January, February'
    },
    {
        title: 'Spring',
        body: 'March, April, May'
    },
    {
        title: 'Summer',
        body: 'June, July, August'
    },
    {
        title: 'Autumn',
        body: 'September, October, November'
    }
];

for (const season of seasons) {
    let el1 = document.createElement('div');
    el1.innerText = season.title;
    el1.classList.add('season')

    let el2 = document.createElement('div');
    el2.innerText = season.body;

    let btn3 = document.createElement('button');
    btn3.innerText = `btn of ${season.title}`;
    btn3.classList.add('btn3');

    document.body.appendChild(el1);
    document.body.appendChild(el2);
    document.body.appendChild(btn3);

    btn3.onclick = function () {
        el2.classList.toggle('hide');
    }
}