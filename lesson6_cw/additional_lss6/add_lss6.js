// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(value => {
    let usersDiv = document.getElementsByClassName('user_block')[0];
    for (const user of value) {

        let userInfo = document.createElement('h5');
        userInfo.innerText = `${user.id}. ${user.name}`;

        let btn = document.createElement('button');
        btn.innerText = 'Post';
        btn.addEventListener("click", () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(value => value.json())
                .then(posts => {

                    let postsBox = document.getElementsByClassName('posts-box')[0];
                    postsBox.innerHTML = '';
                    for (const post of posts) {
                        let postDiv = document.createElement('p');
                        postDiv.innerText = post.body;

                        let btnComment = document.createElement('button');
                        btnComment.innerText = 'Comment';
                        btnComment.addEventListener("click", ()=>{
                            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                .then(value => value.json())
                                .then(comments =>{

                                    let commentsBox = document.getElementsByClassName('comments-box')[0];
                                    commentsBox.innerHTML = '';
                                    for (const comment of comments) {
                                        let commentDiv = document.createElement('p');
                                        commentDiv.innerText = comment.body;

                                        commentsBox.append(commentDiv)
                                    }
                                })
                        })
                        postsBox.append(postDiv)
                        postDiv.append(btnComment)
                    }
                })
        })
        userInfo.append(btn)
        usersDiv.append(userInfo)
    }
})