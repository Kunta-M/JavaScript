// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let a = [1, 2, 3, 4, 5]
console.log(a);

let s = ['html', 'css', 'js', 'react', 'angular']
console.log(s);

let someInfo1 = ['mariia', 'lviv', 1, 32, true]
console.log(someInfo1);

/* -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль */

let sArr = [];
// let user = {name: 'mariia', city: 'lviv'}
// for (let key in user){
//     console.log(user[key])
// }

sArr[0]=1;
sArr[1]='hello';
sArr[2]=true;

console.log(sArr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let someInfo = ['вивести 10 блоків div c довільним текстом всередині']

document.write('<div>')

for (let i = 1; i <= 10; i++) {
    const info = someInfo[i];
    document.write(`<div>
<p>${someInfo}</p>
</div>`)
}

document.write('</div>')

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

document.write('<div>')

for (let i = 0; i <=10; i++) {
    const element = someInfo[i];
    document.write(`<div>
                    ${[i]} Hello world
                    </div>`)
}
document.write('</div')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write('<div>')

for (let i = 0; i <=20; i++) {
    const element = someInfo[i];
    document.write(`<div>
                    <h1>Break news</h1>
                    </div>`)
}
document.write('</div')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write('<div>')

let i = 0;
while (i <= 20){
    document.write(`<div>
                    <h1>${[i]} Hello</h1>
                    </div>`)
    i++;
}
document.write('</div')

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbers = [1, 10, 15, 20, 25, 30, 35, 40, 45, 50]

for (let j = 0; j < numbers.length; j+=10) {
    console.log(numbers[j])
}

// for (let key in numbers){
//     console.log(numbers[key])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let users = ['mariia', 'lviv', 'sunny']

let j = 0;
while (j <users.length){
    console.log(users[j])
    i++;
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

