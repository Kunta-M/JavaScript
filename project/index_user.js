// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули


const mainUsersDiv = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            console.log(user)
            const userDiv = document.createElement('div');
            const linkDetails = document.createElement('a');

            userDiv.innerText = `${user.id}. ${user.name}`;

            linkDetails.innerText = 'Details'
            linkDetails.href = `user_details.html?user=${JSON.stringify(user)}`;

            userDiv.append(linkDetails)
            mainUsersDiv.append(userDiv)
        }
    })