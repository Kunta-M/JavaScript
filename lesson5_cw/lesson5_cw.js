// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)

let mainHeader = document.getElementById('main_header');
mainHeader.innerText = 'june_2021';
mainHeader.style.color = 'aqua';

// b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul');
for (const ulElement of ul) {
    ulElement.style.width = '400px'
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList')
for (const linkElement of linkList) {
    linkElement.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2
let textLi2 = document.getElementsByClassName('listElement2')
for (const liListElement of textLi2) {
    console.log(liListElement.innerText)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liList = document.getElementsByTagName('li')
for (const liElement of liList) {
    liElement.style.backgroundColor = 'grey'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aList = document.getElementsByTagName('a')
for (const aListElement of aList) {
    aListElement.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aList2 = document.getElementsByTagName('a')
for (const aList2Element of aList2) {
    if (aList2Element.innerText === 'link3'){
        aList2Element.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let a = document.getElementsByTagName('a')
for (const aElement of a) {
    aElement.classList.add ('element_xxx')

    let xxx = document.createElement('p');
    xxx.innerText = aElement.innerText;
    aElement.appendChild(xxx)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header')
for (const subHeaderElement of subHeader) {
    let bgrnd = prompt ('Enter your name');
    subHeaderElement.style.backgroundColor = 'yellow'
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subHeader2 = document.getElementsByClassName('sub-header')
for (const subsubHeader2Element of subHeader2) {
    let txtcol = prompt('Enter some info');
    if (subsubHeader2Element.innerText === 'content 2 segment'){
        subsubHeader2Element.style.color = 'violet'
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1')
for (const content1Element of content1) {
    let txt = prompt ('Enter your name')
    content1Element.innerText = txt
}

// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p')
for (const pElement of p) {
    pElement.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let txtClass2 = document.getElementsByClassName('text2')
for (const txtClass2Element of txtClass2) {
    txtClass2Element.innerHTML = mainHeader.innerText
}