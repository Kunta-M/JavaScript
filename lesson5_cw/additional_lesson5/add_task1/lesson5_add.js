// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

let login = document.forms.login;
let nameInput = login.name;

login.addEventListener('click', (ev) => {
    let name = nameInput.value;
    let user = {name: name};

    let jsonUser = JSON.stringify(user);
    localStorage.setItem('user', jsonUser);
});

