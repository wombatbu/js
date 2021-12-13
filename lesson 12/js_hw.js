//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        document.body.appendChild(wrap);

        for (const post of posts) {
            let divPost = document.createElement('div');
            divPost.classList.add('divPost');

            let divUser = document.createElement('div');
            divUser.innerText = `UserId: ${post.userId}`;
            divUser.classList.add('divUser');

            let divId = document.createElement('div');
            divId.innerText = `id: ${post.id}`;
            divId.classList.add('divId');

            let divText = document.createElement('div');

            let divTitle = document.createElement('div');
            divTitle.innerText = `Title: ${post.title}`;
            divTitle.classList.add('divText');

            let divBody = document.createElement('div');
            divBody.innerText = `Body: ${post.body}`;
            divBody.classList.add('divText');


            wrap.appendChild(divPost);
            divPost.appendChild(divUser);
            divPost.appendChild(divId);
            divPost.appendChild(divText);
            divText.appendChild(divTitle);
            divText.appendChild(divBody);
        }
    })

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         console.log(comments);
//         for (const comment of comments) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('divcomment')
//
//             let divPostId = document.createElement('div');
//             divPostId.innerText = `PostId: ${comment.postId}`;
//
//             let divId = document.createElement('div');
//             divId.innerText = `Id: ${comment.id}`;
//             divId.classList.add('id');
//
//             let divName = document.createElement('div');
//             divName.innerText = `Name - ${comment.name}`;
//             divName.classList.add('divname');
//
//             let divEmail = document.createElement('div');
//             divEmail.innerText = `Email: ${comment.email}`;
//             divEmail.classList.add('divemail');
//
//             let divBody = document.createElement('div');
//             divBody.innerText = `${comment.body}`;
//
//             document.body.appendChild(divComment);
//             divComment.appendChild(divPostId);
//             divComment.appendChild(divId);
//             divComment.appendChild(divName);
//             divComment.appendChild(divEmail);
//             divComment.appendChild(divBody);
//         }
//     })