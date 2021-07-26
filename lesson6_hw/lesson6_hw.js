// 1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
            let postsWrap = document.getElementsByClassName('posts-wrap')[0];
            for (const post of value) {
                let postDiv = document.createElement('div');

                let title = document.createElement('h3');
                title.innerText = post.id + ' ' + post.title

                let text = document.createElement('p');
                text.innerText = post.body

                postDiv.append(title, text)
                postsWrap.append(postDiv)
            }
        })



// 2.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value =>{
            let commentsWrap = document.getElementsByClassName('comments-wrap')[0];
            for (const comment of value) {
                let commentDiv = document.createElement('div');

                let title = document.createElement('h3');
                title.innerText = `${comment.id} - ${comment.name}`;

                let email = document.createElement('h4');
                email.innerText = comment.email;

                let info = document.createElement('p');
                info.innerText = comment.body

                commentDiv.append(title, email, info);
                commentsWrap.append(commentDiv)
            }
})