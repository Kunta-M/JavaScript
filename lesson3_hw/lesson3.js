// створити функцію яка обчислює та повертає площу прямокутника висотою

function getArea (a, b){
    return a*b;
}

let S = getArea(5 , 10 )
console.log(S);

// створити функцію яка обчислює та повертає площу кола

function getAreaCircle (r) {
    return Math.PI * Math.pow(r, 2);
}

let SCirle = Math.PI * Math.pow(4, 2 )
console.log(SCirle);

// створити функцію яка обчислює та повертає площу циліндру

function getAreaCylinder (r, h){
    return 2 * Math.PI * +r * (+r + +h)
}

let SCylinder = 2 * Math.PI * 5 * (5 + 8)
console.log(SCylinder);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function RNumbers () {
    let min = arguments[0];
    let max = arguments[0];
    for (const RandomNumbers of arguments) {
        if (RandomNumbers > max)
            max = RandomNumbers;
        if (RandomNumbers < min)
            max = RandomNumbers;
    }
    console.log(max);
    return min;
}

let min = RNumbers (1,2,3,4,5,6);
console.log(min)

// створити функцію яка  створює блок з текстом. Текст задати через аргумент

function createDiv (text) {
    document.write(`<div>${text}</div>`)
}

createDiv('Текст задати через аргумент')

// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий




// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)



// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список