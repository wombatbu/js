//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
let contentElement = document.getElementById('content');
console.log(contentElement.innerText);

//     -- отримує текст з блоку з id "rules"
let rulesElement = document.getElementById('rules');
console.log(rulesElement.innerText);

//     -- замініть текст параграфа з id 'content' на будь-який інший
contentElement.innerText = 'Hello Hello Hello';

//     -- замініть текст параграфа з id 'rules' на будь-який інший
rulesElement.innerText = 'Okten Okten Okten';

//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
let all = document.body.children;
for (const child of all) {
    child.style.background = 'red';
    child.style.color = 'blue';
}

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rulesElement.classList);

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRulesElements = document.getElementsByClassName('fc_rules');
for (const rules of fcRulesElements) {
    rules.style.color = 'red';
}
