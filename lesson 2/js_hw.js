//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = +prompt('vveditj hvylyny vid 0 do 59');
if (time <= 15) {
    console.log('perwa chvertj hodyny');
} else if (time >= 16 && time <= 30) {
    console.log('druga chvertj hodyny');
} else if (time >= 31 && time <= 45) {
    console.log('tretja chvertj hodyny');
} else if (time >= 46 && time <= 59) {
    console.log('chetverta chvertj hodyny');
} else {
    console.log('nevirna hvylyna');
}

//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = +prompt('vveditj denj misjacja vid 1 do 31');
// if (day >= 1 && day <= 10) {
//     console.log('ce perwa dekada misjacja');
// } else if (day >= 11 && day <= 20) {
//     console.log('ce druga dekada misjacja');
// } else if (day >= 21 && day <= 31){
//     console.log('ce tretja dekada misjacja');
// } else {
//     console.log('nevirno vvedenyj denj');
// }

//У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта
// - з коротким записом(тернаркою)

// let test =!!0;
// console.log(test);
// if (test === false) {
//     console.log('Virno');
// } else {
//     console.log('Nepravyljno');
// }
// let test =!!0;
// console.log(test);
// let asd = test === false ? 'Virno' : "Nepravyljno";
// console.log(asd);


//Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = -3;
// console.log(a);
// if (a !== 0) {
//     console.log('Virno');
// } else {
//     console.log('Nevirno')
// }

//Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let denj = +prompt('vveditj denj tygnja vid vid 1 do 7');
// switch (denj) {
//     case 1:
//         console.log('ponedilok: pracuemo nepokladauchy syl');
//         break;
//     case 2:
//         console.log('vivtorok: pracuemo shche nepokladauchy syl');
//         break;
//     case 3:
//         console.log('sereda: dosi pracuemo');
//         break;
//     case 4:
//         console.log('chetver: pracuemo shche trishky');
//         break;
//     case 5:
//         console.log('pjatnycja: ura! majge kinecj robochogo tyjnja');
//         break;
//     case 6:
//         console.log('subota: vidpochyvaemo');
//         break;
//     case 7:
//         console.log('nedilja: vidpochynj, bo zavtra na robotu');
//         break;
//     default:
//         console.log('nevirnyj denj');
// }

//Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Vveditj rik');
// let ost = year % 4;
// console.log(ost);
// if (ost === 0){
//     console.log('Vysokosnyj rik');
// } else if (ost === 1 || ost === 2 || ost === 3 ) {
//     console.log('Nevysokosnyj rik');
// } else{
//     console.log('Vy vvely nevirnyj rik');
// }

//Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let question = prompt('Яка «офіційна» назва JavaScript?');
// if (question === 'ECMAScript'){
//     document.write(`<h1>Правильно!</h1>`);
// } else {
//     document.write(`<h2>Не знаєте? ECMAScript!</h2>`);
// }
