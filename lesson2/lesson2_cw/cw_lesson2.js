// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [11, 22, 33, 44, 55]
console.log(numbers);

let s = ['html', 'css', 'js', 'react', 'angular']
console.log(s);

let b = ['11', '22', 1, 32, true]
console.log(b);


/* -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль */

let sArr = [];
sArr[0]=1;
sArr[1]='hello';
sArr[2]=true;

console.log(sArr);



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let someInfo = ['вивести 10 блоків div']

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

let j = 0;
while (j <= 20){
    document.write(`<div>
                    <h1>Hello</h1>
                    </div>`)
    j++;
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

let someNumbers = [1, 10, 15, 20, 25, 30, 35, 40, 45, 50]

for (let number of someNumbers){
    console.log(number);
}

// for (let j = 0; j < someNumbers.length; j++) {
//     console.log(someNumbers[j])
// }

// for (let key in someNumbers){
//     console.log(someNumbers[key])
// }



// - Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

let x = 0;
while (x < arr.length){
    console.log(arr[x]);
    x++
}



// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let one = ['name', 'surname', 'address', 3, 8, 14, false]

for (let i=0; i < one.length; i++){
    console.log(one[i])
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let type = [1, 2, 3, 'four', 'five', 'six', 'seven', false, true, 10];
for (let t of type);
if (typeof t === 'boolean'){
    console.log(t);
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let y = [1, 2, 3, 'four', 'five', 'six', 'seven', false, true, 10];
for (let i of y)
    if (typeof i === 'number'){
        console.log(i);
    }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let someElements = [1, 2, 3, 'four', 'five', 'six', 'seven', false, true, 10];
    for (let elem of someElements)
        if (typeof elem === 'string'){
            console.log(elem)
        }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let sArr2 = []

sArr2[0] = 1;
sArr2[1] = 2;
sArr2[2] = 3;
sArr2[3] = 'four';
sArr2[4] = 'five';
sArr2[5] = 'six';
sArr2[6] = 'seven'
sArr2[7] = false;
sArr2[8] = '';
sArr2[9] = 10

for (let k = 0; k < sArr2.length; k++) {
    console.log(sArr2[k]);
}

// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

document.write('<div>')
for (let k = 0; k < 10; k+=1) {
    let tmp = '';

    console.log(k[0]);
    document.write(`<div>${tmp + k + ""}</div>`)
}

document.write('</div>')


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// document.write('<div>')
// for (let k = 0; k < 100; k+=1) {
//     let tmp = '';
//
//     console.log(k);
//     document.write(`<div>${tmp + k + ""}</div>`)
// }
//
// document.write('</div>')

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// document.write('<div>')
// for (let k = 0; k < 100; k+=2) {
//     let tmp = '';
//
//     console.log(k);
//     document.write(`<div>${tmp + k + ""}</div>`)
// }
//
// document.write('</div>')


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write



