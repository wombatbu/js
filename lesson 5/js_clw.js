//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let Min = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
Min(6, 56, 2);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let Max = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
Max(76, 89, 45);

// - створити функцію яка повертає найбільше число з масиву
let arr = [54, 7, 24, 865, -56];
let MaxArr = (arr) => {
    let max = arr[0];
    for (const numb of arr) {
        if (numb > max) {
            max = numb;
        }
    }
    return max;
}
let result = MaxArr(arr);
console.log(result);

// - створити функцію яка повертає найменьше число з масиву
let MinArr = (arr) => {
    let min = arr[0];
    for (const nb of arr) {
        if (nb < min) {
            min = nb;
        }
    }
    return min;
}
let result2 = MinArr(arr);
console.log(result2);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let SumArr = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum = sum + num;
    }
    return sum;
}

let result3 = SumArr(arr);
console.log(result3);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let SerArf = (arr) => SumArr(arr) / arr.length;
let result4 = SerArf(arr);
console.log(result4);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
let MinMax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (const numb of arr) {
        if (numb < min) {
            min = numb;
        }
        if (numb > max) {
            max = numb
        }
    }
    console.log(max);
    return min;
}

MinMax(arr);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let array = [];
let Random = (array) => {
    for (let i = 0; i < 20; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    return array;
}
let a = Random(array);
console.log(a);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
let Random2 = (array, limit) => {
    for (let i = 0; i < 20; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
    return array;
}
let b = Random2(array, 100);
console.log(b);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let mas = [1, 2, 3];
let newMas = [];
let Reverse = (mas) => {
    for (let i = mas.length - 1, n = 0; i >= 0; i--, n++) {
        newMas[n] = mas[i];
    }
    return newMas;
}
console.log(Reverse(mas));