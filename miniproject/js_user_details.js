//На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

//Стилизация проекта -
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let userInfo = JSON.parse(localStorage.getItem('userInfo'));

for (const user of userInfo) {
    let divUser = document.createElement('div');
    divUser.classList.add('user');

    let divUId = document.createElement('div');
    divUId.innerText = `Id: ${user.id}`;

    let divUName = document.createElement('div');
    divUName.innerText = `Name: ${user.name}`;

    let divUUserName = document.createElement('div');
    divUUserName.innerText = `UserName: ${user.username}`;

    let divUEmail = document.createElement('div');
    divUEmail.innerText = `Email: ${user.email}`;

    let divUAddress = document.createElement('div');
    divUAddress.innerText = `Address: `;

    for (const adrkey in user.address) {

        if (adrkey != 'geo') {

            let divUAdr = document.createElement('div');
            divUAdr.innerText = `${adrkey}: ${user.address[adrkey]}`;

            divUAddress.append(divUAdr);

        }

    }

    for (geokey in user.address.geo) {
        let divAGeo = document.createElement('div');
        divAGeo.innerText = `geo: ${geokey}: ${user.address.geo[geokey]}`;

        divUAddress.append(divAGeo);
    }

    let divUPhone = document.createElement('div');
    divUPhone.innerText = `Phone: ${user.phone}`;

    let divUWeb = document.createElement('div');
    divUWeb.innerText = `Website: ${user.website}`;

    let divUCompany = document.createElement('div');
    divUCompany.innerText = `Company: `;

    for (const compkey in user.company) {

        let divUComp = document.createElement('div');
        divUComp.innerText = `${compkey}: ${user.company[compkey]}`;

        divUCompany.append(divUComp);
    }

    document.body.appendChild(divUser);
    divUser.append(divUId, divUName, divUUserName, divUEmail, divUAddress, divUPhone, divUWeb, divUCompany);

    let btnUser = document.createElement('button');
    btnUser.innerText = 'post of current user';
    btnUser.classList.add('btnUser');

    divUser.appendChild(btnUser);

    let wrap = document.createElement('div');
    wrap.classList.add('wrap');

    btnUser.onclick = function () {
        fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
            .then(response => response.json())
            .then(posts => {
                for (const post of posts) {

                    let divUId = document.createElement('div');
                    divUId.innerText = `UserId: ${post.userId}`;

                    let divPTitle = document.createElement('div');
                    divPTitle.innerText = `Title: ${post.title}`;
                    divPTitle.classList.add('title');

                    let btnPost = document.createElement('button');
                    btnPost.classList.add('btnPost');

                    let a = document.createElement('a');
                    a.innerText = 'Details'
                    a.href = "post_details.html"

                    btnPost.appendChild(a);

                    btnPost.onclick = function () {
                        let PostKey = 'postinfo';
                        localStorage.setItem(PostKey, JSON.stringify([]));

                        let PostInfo = JSON.parse(localStorage.getItem('postinfo'));
                        PostInfo.push(post);
                        localStorage.setItem('postInfo', JSON.stringify(PostInfo));

                    }

                    wrap.appendChild(divPTitle);
                    divPTitle.append(divUId, btnPost);

                    btnUser.disabled = true;
                }
            })
    }

    divUser.appendChild(wrap);

}