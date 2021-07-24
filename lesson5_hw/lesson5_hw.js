// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let content = document.getElementById('content')
console.log(content.innerText)

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules')
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText ='будь-який інший'

console.log(content);

// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML = 'ще один будь-який інший'

console.log(rules);

// -- змініть кожному елементу колір фону на червоний
rules.style.backgroundColor = 'red';
content.style.backgroundColor = 'red'

// -- змініть кожному елементу колір тексту на синій
rules.style.color = 'blue';
content.style.color = 'blue'

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesList = document.getElementById('rules');
console.log(rulesList.classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let fcRules = document.getElementsByClassName('fc_rules')
for (const fcRule of fcRules) {
    fcRule.addEventListener('click', function (){
        console.log(fcRule.innerHTML)
    })

    fcRule.addEventListener('click', function (){
        alert('Hello')
    })
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcList2 = document.getElementsByClassName('fc_rules')
for (const fcListElement of fcList2) {
    fcListElement.style.color = 'red'
}
