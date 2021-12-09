//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
let form1 = document.createElement('form');
form1.setAttribute('name', 'form1')
form1.classList.add('form');
document.body.appendChild(form1);

let impName = document.createElement('input');
impName.type = 'text';
impName.setAttribute('name', 'InpName')
form1.appendChild(impName);

let impAge = document.createElement('input');
impAge.type = 'number';
impAge.setAttribute('name', 'InpAge')
form1.appendChild(impAge);

let btn = document.createElement('button');
btn.innerText = 'save user';
form1.appendChild(btn);

let name = document.forms.form1.InpName;
let age = document.forms.form1.InpAge;
let key = 'key';

let save = function (userName, userAge) {
    let user = {
        name: userName,
        age: userAge
    }
    localStorage.setItem(key, JSON.stringify(user));
}

btn.onclick = function () {
    save(name.value, age.value);
}

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form2 = document.createElement('form');
form2.setAttribute('name', 'form2');
form2.classList.add('form');
document.body.appendChild(form2);

let input1 = document.createElement('input');
input1.setAttribute('name', 'inpModel');
input1.type = 'text';
form2.appendChild(input1);

let input2 = document.createElement('input');
input2.setAttribute('name', 'inpType');
input2.type = 'text';
form2.appendChild(input2);

let input3 = document.createElement('input');
input3.setAttribute('name', 'inpVolume');
input3.type = 'number';
form2.appendChild(input3);

let btn2 = document.createElement('button');
btn2.innerText = 'save car';
form2.appendChild(btn2);

form2.onsubmit = function () {
    let model = document.forms.form2.inpModel;
    let type = document.forms.form2.inpType;
    let volume = document.forms.form2.inpVolume;
    let car = {model: model.value, type: type.value, volume: volume.value};
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));
}
