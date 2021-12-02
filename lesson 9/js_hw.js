//Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');
console.log(div);

// - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
console.log(div.classList);

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = 'black';
div.style.color = 'white';
div.style.fontSize = '24';
div.innerText = 'hello hello hello';

// - додати цей блок в body.
document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.
let divClone = div.cloneNode(true);
document.body.appendChild(divClone);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arr = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.getElementsByClassName('menu') [0];

for (const element of arr) {
    console.log(element);
    let li = document.createElement('li');
    li.innerText = element;

    ul.appendChild(li);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let divCourse = document.createElement('div');
    divCourse.innerText = course.title + ' ' + course.monthDuration;

    document.body.appendChild(divCourse);
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const course2 of coursesAndDurationArray2) {
    let divCourse2 = document.createElement('div');
    divCourse2.classList.add('item');
    let h1Course2 = document.createElement('h1');
    h1Course2.classList.add('heading');
    h1Course2.innerText = course2.title;
    let pCourse2 = document.createElement('p');
    pCourse2.classList.add('description');
    pCourse2.innerText = course2.monthDuration;

    document.body.appendChild(divCourse2);
    divCourse2.appendChild(h1Course2);
    divCourse2.appendChild(pCourse2);
}
