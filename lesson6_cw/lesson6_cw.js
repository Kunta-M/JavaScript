// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        let postsWrap = document.getElementsByClassName('posts-wrap')[0];
        for (const post of value) {
            let postDiv = document.createElement('div');

            let title = document.createElement('p');
            title.innerText = `${post.id}: ${post.title}`;

            let btn = document.createElement('button');
            btn.innerText = 'comments'
            btn.addEventListener("click", () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(value => {

                        let postComments = document.getElementsByClassName('comments')[0];
                        postComments.innerHTML = '';
                        for (const valueElement of value) {
                            let comment = document.createElement('p');
                            comment.innerText = valueElement.body;
                            postComments.append(comment)
                        }
                    })
            })
            postDiv.append(title, btn)
            postsWrap.append(postDiv)
        }
    })

