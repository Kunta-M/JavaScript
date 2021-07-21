// створити функцію яка приймає масив та виводить його

let array = [1,2,3,4];
let funcInvoke = arr => {
    console.log(arr);
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
funcInvoke(array);

// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let funcElements = (num1, num2, num3) =>{
    if (num1 < num2 && num1 < num3){
        return num1;
    } else if (num2 < num3 && num2 < num1){
        return num2;
    } else {
        return num3
    }
}

console.log(funcElements(4,8,3))

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let funcElements1 = (num1, num2, num3) =>{
    if (num1 > num2 && n1 > num3){
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2
    } else {
        return num3
    }
}

console.log(funcElements1(4,8,3))

// створити функцію яка повертає найбільше число з масиву

let funcMax = (array) =>{
    let max = array[0];

    for (const arrayElement of array) {
        if (arrayElement > max)
            max = arrayElement
    } return max
}

console.log(funcMax([8,14,9,1,7,35]))

// створити функцію яка повертає найменьше число з масиву

let funcMin = (array) =>{
    let min = array[0];

    for (const arrayElement of array) {
        if (arrayElement < min)
            min = arrayElement
    } return min
}

console.log(funcMin ([8,14,9,1,7,35]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let funcSum = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement
    } return i;
}

console.log(funcSum([1,2,10]));

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let funcAverage = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement/2
    } return i;
}

console.log(funcAverage([1,2,11]))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

function getRandom (length){
    let arr = [];
    for (let i = 0; i <length; i++) {
        arr.push(Math.round(Math.random()*100))
    }
    return arr
}

console.log(getRandom(10))

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let massive = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function getKeys (arr){
    let array = [];
    for (const massiveElement of arr) {
        for (const key in massiveElement) {
            array.push(key)
        }
    }
    return array
}

console.log(getKeys(massive));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let massive1 = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function getValues(arr) {
    let array = [];
    for (const massive1Element of arr) {
        for (const key in massive1Element) {
            array.push(massive1Element[key])
        }
    }
    return array
}

console.log(getValues(massive1))