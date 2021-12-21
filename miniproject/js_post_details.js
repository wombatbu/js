//На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизация проекта -
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment
// визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

let postInfo = JSON.parse(localStorage.getItem('postInfo'));

for (const post of postInfo) {
    console.log(post);
    let divPost = document.createElement('div');
    divPost.classList.add('post');

    let divPUId = document.createElement('div');
    divPUId.innerText = `UserId: ${post.userId}`;

    let divPId = document.createElement('div');
    divPId.innerText = `Id: ${post.id}`;

    let divPTitle = document.createElement('div');
    divPTitle.innerText = `Title: ${post.title}`;

    let divPBody = document.createElement('div');
    divPBody.innerText = `Body: ${post.body}`;

    let btnPost = document.createElement('button');
    btnPost.innerText = 'comments of current post'

    let wrap = document.createElement('div');
    wrap.classList.add('wrap');

    btnPost.onclick = function () {
        fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
            .then(response => response.json())
            .then(comments => {
                for (const comment of comments) {

                    let divComment = document.createElement('div');
                    divComment.classList.add('comment')

                    let divCPId = document.createElement('div');
                    divCPId.innerText = `PostId: ${comment.postId}`;

                    let divCId = document.createElement('div');
                    divCId.innerText = `Id: ${comment.id}`;

                    let divCName = document.createElement('div');
                    divCName.innerText = `Name: ${comment.name}`;

                    let divCEmail = document.createElement('div');
                    divCEmail.innerText = `Email: ${comment.email}`;

                    let divCBody = document.createElement('div');
                    divCBody.innerText = `Body: ${comment.body}`;

                    wrap.appendChild(divComment);
                    divComment.append(divCPId, divCId, divCName, divCEmail, divCBody);

                    btnPost.disabled = true
                }
            })
    }

    document.body.appendChild(divPost);
    divPost.append(divPUId, divPId, divPTitle, divPBody, btnPost, wrap);

}
