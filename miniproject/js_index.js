//В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

//Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.classList.add('user');

            let divUId = document.createElement('div');
            divUId.innerText = `Id - ${user.id}`

            let divUName = document.createElement('div');
            divUName.innerText = `Name - ${user.name}`;

            let btnUser = document.createElement('button');

            let a = document.createElement('a');
            a.innerText = 'Details'
            a.href = "user_details.html"

            btnUser.appendChild(a);

            btnUser.onclick = function () {
                let UserKey = 'userinfo';
                localStorage.setItem(UserKey, JSON.stringify([]));

                let UserInfo = JSON.parse(localStorage.getItem('userinfo'));
                UserInfo.push(user);
                localStorage.setItem('userInfo', JSON.stringify(UserInfo));

            }

            wrap.appendChild(divUser);
            divUser.appendChild(divUId);
            divUser.appendChild(divUName);
            divUser.appendChild(btnUser);
        }
    })

