// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

function wakeUp (coffee) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        coffee = 300;
        if (coffee <= 280){
            reject ('Need more coffee', null)
        } else resolve (null, 'Good morning')
    }, 300)
    })
}

function breakfest (food){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve ('Breakfest done');
        }, 600)
    })
}

function shower (energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve ('Ready to go');
        }, 400)
    })
}

function wayToWork (buses){
    return new Promise ((resolve, reject) =>{
        if (buses <= 1){
            resolve ('Good way', null)
        } else reject (null, 'Bad way')
    }, 1000)
}

function work (hours){
    return new Promise((resolve, reject) => {
        if (hours <= 7){
            reject ('Work harder', null)
        } else resolve (null, 'Good job')
    }, 800)
}

async function scheduleDay () {
    try {
        const a = await wakeUp(300);
        console.log('Good morning');

            const b = await breakfest();
            console.log('Breakfest done');

            const c = await shower();
            console.log('Ready to go');

            const d = await wayToWork(1);
            console.log('Good way');

            const e = await work(8)
            console.log('Good job')
        } catch (reason) {
            console.log('Work harder')
        }
}
scheduleDay()



// wakeUp(320)
// .then((value) => {
//     console.log('Good morning');
//
//     return breakfest();
// })
// .then(value => {
//     console.log('Breakfest done')
//
//     return shower ();
// })
//     .then (value => {
//         console.log('Ready to go')
//
//         return wayToWork(1)
//     })
//     .then( value => {
//         console.log('Good way')
//
//         return work(7)
//     })
//     .catch(reason => {
//         console.log('Work harder')
//     })


