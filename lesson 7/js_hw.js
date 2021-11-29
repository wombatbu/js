//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

let arrUser = [
    new User(1, 'Oleg', 'Dorosh', 45673467),
    new User(2, 'Olya', 'Meljnyk', 87645234),
    new User(3, 'Oksana', 'Bulyha', 98756534),
    new User(4, 'Taras', 'Lutsyk', 23467487),
    new User(5, 'Ulia', 'Yamburenko', 98754378),
    new User(6, 'Andriy', 'Stratuk', 98725634),
    new User(7, 'Dima', 'Tymoshchyk', 24598567),
    new User(8, 'Vika', 'Nayda', 56728645),
    new User(9, 'Sasha', 'Moroz', 23598456),
    new User(10, 'Inna', 'Pikach', 69267416)
];

console.log(arrUser);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = arrUser.filter(user => user.id % 2 === 0);
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = arrUser.sort((u1, u2) => u2.id - u1.id);
//відсортувала по спаданню, бо він і так в мене є по зростанню
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
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

let arrClient = [
    new Client(8, 'Oleg', 'Dorosh', 'Dorosh@gmail.com', 45673467, ['cup', 'table']),
    new Client(5, 'Olya', 'Meljnyk', 'Meljnyk@gmail.com', 87645234, ['cup', 'table', 'sofa', 'pencil']),
    new Client(45, 'Oksana', 'Bulyha', 'Bulyha@gmail.com', 98756534, ['car']),
    new Client(13, 'Taras', 'Lutsyk', 'Lutsyk@gmail.com', 23467487, ['ball', 'car', 'orange', 'table']),
    new Client(6, 'Ulia', 'Yamburenko', 'Yamburenko@gmail.com', 98754378, ['pants', 'hat', 'dress']),
    new Client(17, 'Andriy', 'Stratuk', 'Stratuk@gmail.com', 98725634, ['hat', 'cup']),
    new Client(21, 'Dima', 'Tymoshchyk', 'Tymoshchyk@gmail.com', 24598567, ['hat', 'car', 'table']),
    new Client(87, 'Vika', 'Nayda', 'Nayda@gmail.com', 56728645, ['cup', 'coffee', 'bananas', 'cola']),
    new Client(6, 'Sasha', 'Moroz', 'Moroz@gmail.com', 23598456, ['orange']),
    new Client(47, 'Inna', 'Pikach', 'Pikach@gmail.com', 69267416, ['car', 'food', 'dog'])
]
console.log(arrClient);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в
// полі order по зростанню. (sort)
let sort2 = arrClient.sort((c1, c2) => c1.order.length - c2.order.length);
console.log(sort2);