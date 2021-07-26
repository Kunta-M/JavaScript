let newDiv = document.createElement('div');
document.body.appendChild(newDiv)

let nameInfo = localStorage.getItem('user');
let items = JSON.parse(nameInfo);
for (const key in items) {
    newDiv.innerText = items[key];
}




