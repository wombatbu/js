//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let normalize = (name) => {
    return name
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ');
}
console.log(normalize('Harry..Potter'));
console.log(normalize('Ron---Whisley'));
console.log(normalize('Hermione__Granger'));
console.log(normalize('Albus__---..Dumbldor'));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = (size) => {
    arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}
console.log(random(20));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
let newArr = random(20);
newArr.sort((a, b) => a - b);
console.log(newArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let newArr1 = random(20);
console.log(newArr1);
let filter = newArr1.filter(value => value % 2 === 0);
console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let newArr2 = random(20);
console.log(newArr2);
let map = newArr2.map(value => value + '');
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let sortNums = (mas, direction) => {
    let sortArr = [];
    if (direction === 'ascending') {
        sortArr = mas.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        sortArr = mas.sort((a, b) => b - a);
    }
    return sortArr;
}
console.log(sortNums(nums, 'ascending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((c1, c2) =>
    c2.monthDuration - c1.monthDuration);
console.log(coursesAndDurationArray);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let five = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(five);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    const res = [];
    while (str.length) {
        res.push(str.substr(0, n));
        str = str.slice(n);
    }
    console.log(res);
    return res;
}

document.writeln(cutString('наслаждение', 3));