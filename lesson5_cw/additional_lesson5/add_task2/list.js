let listDiv = document.getElementById('list');
let key = 'key';
let store = JSON.parse(localStorage.getItem(key) || []);

let orderList = () =>{
    if (!store.length){
        let empty = document.createElement('h5');
        empty.innerText = 'List is empty';
        listDiv.appendChild(empty)
    }

    let buttonAll = document.createElement('button');
    for (let item of store){
        let itemDiv = document.createElement('div');
        let nameE = document.createElement('div');
        let numberE = document.createElement('div')
        let priceE = document.createElement('div');
        let imgE = document.createElement('img');
        let button = document.createElement('button')

        nameE.innerText = `Name: ${item.name}`;
        numberE.innerText = `Number: ${item.number}`;
        priceE.innerText = `Price: ${item.price}`;
        imgE.src = item.img;
        button.innerText = 'Delete';
        buttonAll.innerText = 'Delete All';

        button.onclick = () =>{
            deleteItem (item.id)
        }
        itemDiv.append(nameE, numberE, priceE, imgE, button);
        listDiv.appendChild(itemDiv)
}
    buttonAll.onclick = () =>{
        deleteAll()
    }
    listDiv.appendChild(buttonAll)
}

let deleteItem = () =>{
    localStorage.setItem(key, JSON.stringify(store))
    listDiv.innerHTML = '';
    orderList();
}

let deleteAll = () =>{
    localStorage.clear()
    orderList();
    listDiv.innerHTML = 'List is empty'
}

orderList();



