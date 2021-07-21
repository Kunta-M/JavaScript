// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function getRandom (){
    return Math.round(Math.random()*100)
}

console.log(getRandom(0,100))

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

let randomNums = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNums(0, 100))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let nums = [1, 3, 10, 70, 9, 43]
nums.sort ((a,b) =>{
    return a-b;
})

console.log(nums);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

let rNums = [1, 3, 10, 70, 9, 43]
let result = rNums.filter (function (elem){
    return elem % 2 == 0
});

console.log(result);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

let rNums1 = [1, 3, 10, 70, 9, 43]

let newMap = rNums1.map (function (value) {
    return value.toString()
})
console.log(newMap);


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Mariia', 'Kunta', 'mk@gmail.com', 123456),
    new User (2, 'Ivan', 'Kokos', 'ik@gmail.com', 234567),
    new User (5, 'Ira', 'Deg', 'id@ukr.net', 567891),
    new User (3, 'Sasha', 'Abc', 'sa@gmail.com', 345678),
    new User (4, 'Ivanka', 'Bcd', 'ib@gmail.com', 456789),
    new User (7, 'Nazar', 'Ksd', 'nk@gmail.com', 987654),
    new User (8, 'Sasha', 'Abc', 'sa@gmail.com', 345678),
    new User(6, 'Serg', 'Bnd', 'sb@gmail.com', 894568),
    new User (9, 'Ivanka', 'Bcd', 'bi@gmail.com', 855684),
    new User (10, 'Ira', 'Deg', 'di@ukr.net', 568429),
];

console.log(users);

let people = users.filter(function (User){
    return User.id %2 == 0
})

console.log(people);

let sort = users.sort (function (User1,User2){
    return User1.id - User2.id
})

console.log(sort);





