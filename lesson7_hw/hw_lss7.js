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

// function wakeUp (coffee) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         coffee = 300;
//         if (coffee <= 280){
//             reject ('Need more coffee', null)
//         } else resolve (null, 'Good morning')
//     }, 300)
//     })
// }
//
// function breakfast (food){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve ('Breakfast done');
//         }, 600)
//     })
// }
//
// function shower (energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve ('Ready to go');
//         }, 400)
//     })
// }
//
// function wayToWork (buses){
//     return new Promise ((resolve, reject) =>{
//         setTimeout( () => {
//             if (buses > 1){
//                 reject ('Bad way', null)
//             } else resolve (null,'Good way')
//         }, 1000)
//     })
// }
//
//
// function work (hours){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (hours <= 7){
//                 reject ('Work harder', null)
//             } else resolve (null, 'Good job')
//         }, 800)
//         })
// }
//
// function lunch (energy){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve ('Full of energy')
//         }, 500)
//     })
// }
//
// function goHome (hours){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (hours > 1){
//                 reject ('Very long', null)
//             } else resolve (null, 'Not so long')
//         }, 1000)
//     })
// }
//
// function dinner (energy){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             resolve ('Ready to study')
//         }, 500)
//     })
// }
//
// function study (hours){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (hours <= 4){
//                 reject ('Study better', null)
//             } else resolve (null, 'Good result')
//         }, 1500)
//     })
// }


// wakeUp(320)
//     .then((value) => {
//         console.log('Good morning');
//
//         return breakfast();
//     })
//     .then(value => {
//         console.log('Breakfast done')
//
//         return shower ();
//     })
//     .then (value => {
//         console.log('Ready to go')
//
//         return wayToWork(1)
//     })
//     .then( value => {
//         console.log('Good way')
//
//         return work(8)
//     })
//     .then(value => {
//         console.log('Good job')
//
//         return lunch();
//     })
//     .then (value => {
//         console.log('Full of energy')
//
//         return goHome(1)
//     })
//     .then(value => {
//         console.log('Not so long')
//
//         return dinner();
//     })
//     .then(value => {
//         console.log('Ready to study')
//
//         return study(3)
//     })
//     .catch(reason => {
//         console.log('Study better')
//     })


// async function scheduleDay () {
//     try {
//         const a = await wakeUp(100);
//         console.log('Good morning');
//
//         const b = await breakfast();
//         console.log('Breakfast done');
//
//         const c = await shower();
//         console.log('Ready to go');
//
//         const d = await wayToWork(1);
//         console.log('Good way');
//
//         const e = await work(8)
//         console.log('Good job')
//
//         const f = await lunch ();
//         console.log('Ready to work again')
//
//         const g = await goHome( 1);
//         console.log('Not so long')
//
//         const h = await dinner();
//         console.log('Ready to study')
//
//         const i = await study(3)
//         console.log('Good result')
//
//         } catch (reason) {
//             console.log('Study better')
//         }
// }
// scheduleDay()



// ***********************  CALLBACK ************************

function wakeUpCB (coffee, cb) {
    setTimeout(() => {
        if (coffee < 300) {
            console.log('Need more coffee');
            cb('Need more coffee!!!', null);
        } else {
            console.log('Good morning');
            cb(null, 'Good morning!!!');
        }
    }, 300)
}

function breakfastCB (food, cb){
        setTimeout(() => {
            food = 400;
            console.log('Breakfast done');
            cb(null, 'Breakfast done!');
        }, 600)
}

function showerCB (energy, cb) {
        setTimeout(() =>{
            energy = 300;
            console.log('Ready to go');
            cb(null, 'Ready to go!');
        }, 350)
}

function wayToWorkCb (buses, cb){
        setTimeout( () => {
            if (buses > 1){
                console.log('Bad way');
                cb('Bad way!', null);
            } else {
                console.log('Good way');
                cb(null, 'Good way!');
            }
        }, 1000)
}

function workCb (hours, cb){
        setTimeout(() => {
            if (hours <= 7){
                console.log('Work harder');
                cb ('Work harder!', null);
            } else {
               console.log('Good job');
               cb(null, 'Good job!');
            }
        }, 800)
}

function lunchCb (energy, cb){
        setTimeout(() => {
            energy = 450;
            console.log('Full of energy');
            cb(null, 'Full of energy!');
        }, 500)
}

function goHomeCb (hours, cb){
        setTimeout(() => {
            if (hours > 1){
                console.log('Very long', null);
                cb('Very long!', null)
            } else {
                console.log('Not so long');
                cb(null, 'Not so long!');
            }
        }, 1000)
}

function dinnerCb (energy, cb){
        setTimeout( () => {
            energy = 450;
            console.log('Ready to study');
            cb(null, 'Ready to study!');
        }, 500)
}

function studyCb (hours, cb){
        setTimeout(() =>{
            if (hours <= 4){
                console.log('Study better');
                cb('Study better!', null)
            } else {
                console.log('Good result');
                cb(null, 'Good result!')
            }
        }, 1500)
}

wakeUpCB (320, (error, wakedUp) => {
    if (error){
        console.log(error)
    } else {
        breakfastCB(400, (error, breakfasted) =>{
            if (error){
                console.log(error)
            } else {
                showerCB(300, (error, showered) =>{
                    if (error){
                        console.log(error)
                    } else {
                        wayToWorkCb(1, (error, wayToWorked) =>{
                            if (error){
                                console.log('Bad way')
                            } else {
                                workCb(8, (error, worked) =>{
                                    if (error){
                                        console.log(error)
                                    } else lunchCb(450, (error, lunched) =>{
                                        if (error){
                                            console.log(error)
                                        } else goHomeCb(1, (error, wentHome) =>{
                                            if (error){
                                                console.log(error)
                                            } else {
                                                dinnerCb(450, (error, dinnered) =>{
                                                    if (error){
                                                        console.log(error)
                                                    } else {
                                                        studyCb(3, (error, studied) =>{
                                                            if (error){
                                                                console.log(error)
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})









