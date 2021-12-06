//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться
// на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let f1 = document.createElement('form');
f1.classList.add('forms');
f1.setAttribute('name', 'f1')
let input1 = document.createElement('input');
input1.setAttribute('name', 'input1');
let input2 = document.createElement('input');
input2.setAttribute('name', 'input2');

let f2 = document.createElement('form');
f2.classList.add('forms');
f2.setAttribute('name', 'f2')
let input3 = document.createElement('input');
input3.setAttribute('name', 'input3');
let input4 = document.createElement('input');
input4.setAttribute('name', 'input4');

let btn = document.createElement('button');
btn.innerText = 'Вивести інформацію в консоль';
btn.classList.add('btn');

document.body.appendChild(f1);
document.body.appendChild(f2);
document.body.appendChild(btn);
f1.appendChild(input1);
f1.appendChild(input2);
f2.appendChild(input3);
f2.appendChild(input4);

btn.addEventListener('click', function () {
    console.log(document.forms.f1.input1.value);
    console.log(document.forms.f1.input2.value);
    console.log(document.forms.f2.input3.value);
    console.log(document.forms.f2.input4.value);
})

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let div = document.createElement('div');
let inp1 = document.createElement('input');
let inp2 = document.createElement('input');
let inp3 = document.createElement('input');
let but = document.createElement('button');
but.classList.add('btn');
but.innerText = 'Створити таблицю';

document.body.appendChild(div);
div.appendChild(inp1);
div.appendChild(inp2);
div.appendChild(inp3);
div.appendChild(but);

but.addEventListener('click', function () {
    let tr = inp2.value;
    let td = inp1.value;
    let text = inp3.value;

    function MakeTable(tr, td, textIn) {
        let divT = document.createElement('div');
        let table = document.createElement('table');

        document.body.appendChild(divT);
        divT.appendChild(table);

        for (let r = 0; r < tr; r++) {
            let tr = document.createElement('tr');
            tr.style.border = '1px solid black';
            tr.style.background = 'red';
            tr.style.color = 'white';
            for (let s = 0; s < td; s++) {
                let td = document.createElement('td');
                td.innerText = `${textIn}`;
                table.appendChild(tr);
                tr.appendChild(td);
            }
        }
    }

    MakeTable(tr, td, text)
})


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let badarr = ['ідіотка', 'дурень', 'ідіот', 'дура']; //ahaha :D
let inpute = document.createElement('input');
inpute.type = 'text';
let butPer = document.createElement('button');
butPer.innerText = 'Перевірити слово';
butPer.classList.add('btn');

document.body.appendChild(inpute);
document.body.appendChild(butPer);

butPer.addEventListener('click', function () {
    let badText = inpute.value;
    let kontrol = true;
    for (const bad of badarr) {
        if (bad === badText) {
            alert('Є поганим словом з масиву');
            inpute.value = '';
            return;
        }
        if (badText) {
            kontrol = false;
            inpute.value = '';
        }
    }
    if (!kontrol) {
        alert('Не є поганим словом з масиву');
    }
})

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let badarr2 = ['ідіотка', 'дурень', 'ідіот', 'дура'];
let inpute2 = document.createElement('input');
inpute2.type = 'text';
let butPer2 = document.createElement('button');
butPer2.innerText = 'Перевірити вміст речення';
butPer2.classList.add('btn');

document.body.appendChild(inpute2);
document.body.appendChild(butPer2);

butPer2.addEventListener('click', function () {
    let badText2 = inpute2.value;
    let kontrol2 = true;
    for (const bad2 of badarr2) {
        if (badText2.includes(bad2)) {
            alert('Речення містить погане слово з масиву');
            inpute2.value = '';
            return;
        }
        if (badText2) {
            kontrol2 = false;
            inpute2.value = '';
        }
    }
    if (!kontrol2) {
        alert('Речення не містить поганого слова з масиву');
    }
})