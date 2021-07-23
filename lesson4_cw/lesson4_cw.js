// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let order = ['phones', 'earphones', 'notepad', 'battery', 'pens']

let clients = [
    new Client(1, 'Mariia', 'Kunta', 'mk@gmail.com', 123456, order),
    new Client(2, 'Ivan', 'Kokos', 'ik@gmail.com', 234567, order[1]),
    new Client(5, 'Ira', 'Deg', 'id@ukr.net', 567891, order[3]),
    new Client(3, 'Sasha', 'Abc', 'sa@gmail.com', 345678, order[4]),
    new Client(4, 'Ivanka', 'Bcd', 'ib@gmail.com', 456789, order),
    new Client(7, 'Nazar', 'Ksd', 'nk@gmail.com', 987654, order[2]),
    new Client(8, 'Sasha', 'Abc', 'sa@gmail.com', 345678, order),
    new Client(6, 'Serg', 'Bnd', 'sb@gmail.com', 894568, order[0]),
    new Client(9, 'Ivanka', 'Bcd', 'bi@gmail.com', 855684, order[5]),
    new Client(10, 'Ira', 'Deg', 'di@ukr.net', 568429, order[4]),
]

console.log(clients);

let sort = clients.sort(function (сlient1, сlient2) {
    for (elem of order) {
        if (сlient1.order <= сlient2.order) {
            return -1
        } else {
            return 1
        }
    }
})

console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Cars(model, producer, year, maxSpeed, capacity, someFn, infoFn) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
    this.drive = someFn;
    this.info = infoFn;
    this.increaseMaxSpeed = function (newSpeed) {this.maxSpeed = newSpeed};
    this.changeYear = function (newValue) {this.year = newValue};

}

let vw = new Cars('golf', 'GE', 2016, 160, 1.6,
    function drive() {console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)},

    function () {console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, max speed - ${this.maxSpeed}, 
    capacity - ${this.capacity}`)},

    function (newSpeed){this.maxSpeed = newSpeed},

    function (newValue){this.year = newValue},
)

let driver = {name: 'Ivan', age: 42, workExperience: 13}

console.log(vw);
vw.drive();
vw.info();
vw.increaseMaxSpeed(220);
vw.changeYear(2018);
console.log(vw);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, capacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
    }

    drive() {console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)};

    info() {console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, max speed - 
    ${this.maxSpeed}, capacity - ${this.capacity}`)};

    increaseMaxSpeed(newSpeed) {this.maxSpeed = newSpeed};

    changeYear(newValue) {this.year = newValue};
}

let honda = new Car('accord', 'Japan', 2013, 160, 3,)

console.log(honda);
honda.drive();
honda.increaseMaxSpeed(280);
honda.changeYear(2019);
console.log(honda);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Zoe', 19, 38),
    new Cinderella('Chloe', 20, 37),
    new Cinderella('Anne', 24, 37.5),
    new Cinderella('Mary', 18, 38),
    new Cinderella('Viki', 19, 36),
    new Cinderella('Nancy', 21, 39),
    new Cinderella('Mash', 20, 37),
    new Cinderella('Suzi', 22, 40),
    new Cinderella('Kate', 20, 38),
    new Cinderella('Hope', 28, 36),
]

class Prince {

    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
}

let prince = new Prince('William', 26, 37.5)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let trueName = [];

cinderellas.forEach(function (cinderella){
    if (cinderella.footSize === prince.shoes)
    trueName.push(cinderella)
})

console.log(trueName);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let result = cinderellas.find(function (cinderella){
    return cinderella.footSize === prince.shoes
})

console.log(result);