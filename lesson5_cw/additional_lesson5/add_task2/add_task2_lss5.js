let name = document.forms.form.name;
let number = document.forms.form.number;
let price = document.forms.form.price;
let img = document.forms.form.image;

let btn = document.getElementById('btn');
let key = 'key';


let save = (name, number, price, img) =>{
    let store = JSON.parse(localStorage.getItem(key)) || [];

    store.push({name, number, price, img})
    localStorage.setItem(key, JSON.stringify(store))
}

btn.onclick = () =>{
    save(name.value, number.value, price.value, img.value)
}

