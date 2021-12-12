//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let divPost = document.createElement('div');
            divPost.classList.add('divPost');

            let divPostId = document.createElement('div');
            divPostId.innerText = `Id: ${post.id}`;
            divPostId.classList.add('divPostId')

            let divTitle = document.createElement('div');
            divTitle.innerText = `Title: ${post.title}`;

            let divPostBody = document.createElement('div');
            divPostBody.innerText = `${post.body}`;

            let btn = document.createElement('button');
            btn.innerText = 'View comments'
            btn.classList.add('btn')

            document.body.appendChild(divPost);
            divPost.appendChild(divPostId);
            divPost.appendChild(divTitle);
            divPost.appendChild(divPostBody);
            divPost.appendChild(btn);

            btn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divCom = document.createElement('div');
                                divCom.classList.add('divCom')

                                let divId = document.createElement('div');
                                divId.innerText = `Id: ${comment.id}`;
                                divId.classList.add('divId');


                                let divName = document.createElement('div');
                                divName.innerText = `Name - ${comment.name}`;

                                let divEmail = document.createElement('div');
                                divEmail.innerText = `${comment.email}`;
                                divEmail.classList.add('divEmail');

                                let divBody = document.createElement('div');
                                divBody.innerText = `${comment.body}`;

                                divPost.appendChild(divCom);
                                divCom.appendChild(divId);
                                divCom.appendChild(divName);
                                divCom.appendChild(divEmail);
                                divCom.appendChild(divBody);
                            }
                        }
                    })
            }
        }
    })