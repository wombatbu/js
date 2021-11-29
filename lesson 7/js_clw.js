//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        return `їдемо зі швидкістю ${this.maxspeed} на годину`
    };
    this.info = function () {
        return `
        модель - ${this.model}
        виробник - ${this.producer}
        рік випуску - ${this.year}
        максимальна швидкість - ${this.maxspeed}
        об'єм двигуна - ${this.engine}`
    };
    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        return this.year = newValue;
    };
    this.addDriver = function (driver) {
        return this.driver = driver;
    };
}

let car = new Cars('Nissan', 'France', 2014, 240, 1.5);
console.log(car);
console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(20));
console.log(car.changeYear(2015));
console.log(car.addDriver('Ann'));

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Auto {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxSpeed;
        this.engine = engine;
        this.drive = function () {
            return `їдемо зі швидкістю ${this.maxspeed} на годину`
        };
        this.info = function () {
            for (const value in this) {
                if (typeof this [value] !== 'function') console.log(`${value} - ${this[value]}`);
            }
        };
        this.increaseMaxSpeed = function (newSpeed) {
            return this.maxspeed = this.maxspeed + newSpeed;
        };
        this.changeYear = function (newValue) {
            return this.year = newValue;
        };
        this.addDriver = function (driver) {
            return this.driver = driver;
        };
    }
}

let auto = new Auto('Volkswagen', 'Germany', 2015, 280, 2.0);
console.log(auto);
console.log(auto.drive());
auto.info();
console.log(auto.increaseMaxSpeed(20));
console.log(auto.changeYear(2017));
console.log(auto.addDriver('Max'));

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let arrPop = [
    new Popelushka('Diana', 18, 36),
    new Popelushka('Vika', 20, 38),
    new Popelushka('Sasha', 19, 37),
    new Popelushka('Olya', 18, 35),
    new Popelushka('Ann', 19, 38),
    new Popelushka('Inna', 20, 38),
    new Popelushka('Galya', 21, 39),
    new Popelushka('Sofia', 18, 40),
    new Popelushka('Maria', 19, 37),
    new Popelushka('Nastya', 20, 41),
]

console.log(arrPop);

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let mainPrince = new Prince('Artur', 27, 35);

let tale = (arrPop, mainPrince) => {
    for (const girl of arrPop) {
        if (girl.size === mainPrince.size) {
            return `Попелюшкою є ${girl.name}`
        }
    }
}
console.log(tale(arrPop, mainPrince));

let find = arrPop.find((woman) => woman.size === mainPrince.size);
console.log(find);