//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function Min(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

Min(6, 10, 4);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function Max(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
// Max(45, 74, 106);

// - створити функцію яка повертає найбільше число з масиву
// let arr = [34, 8, 46, -5, 475, 6, 395];
//
// function ArrMax(arr) {
//     let max = arr[0];
//     for (const numb of arr) {
//         if (numb > max) {
//             max = numb;
//         }
//     }
//     return max;
// }
//
// let result = ArrMax(arr);
// console.log(result);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [34, 8, 46, -5, 475, 6, 395];
//
// function ArrMin(arr) {
//     let min = arr[0];
//     for (const numb of arr) {
//         if (numb < min) {
//             min = numb;
//         }
//     }
//     return min;
// }
//
// let result = ArrMin(arr);
// console.log(result);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1, 2, 10];
//
// function SumArr(array) {
//     let sum = 0;
//     for (const numb of array) {
//         sum = sum + numb;
//     }
//     return sum;
// }
//
// let result = SumArr(array);
// console.log(result);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function Aryfm(array) {
//     return SumArr(array) / array.length; //об'єднала з попередньою фуекцією
// }
//
// let vidp = Aryfm(array);
// console.log(vidp);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
// let arr = [34, 8, 46, -5, 475, 6, 395];
//
// function MinMax(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for (const numb of arr) {
//         if (numb < min) {
//             min = numb;
//         }
//         if (numb > max) {
//             max = numb
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// MinMax(arr);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = [];
//
// function Random(arr) {
//     for (let i = 0; i < 50; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
//
// let x = Random(arr);
// console.log(x);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr = [];
//
// function Random(arr, limit) {
//     for (let i = 0; i < 100; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
//
// let x = Random(arr, 50);
// console.log(x);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3, 4, 5, 6];
// let revArr = [];
//
// function Revers(arr) {
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         revArr[ri] = arr[i];
//     }
//     return revArr;
// }
//
// console.log(Revers(arr));
