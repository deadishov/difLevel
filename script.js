'use strict';

let lang = prompt('Выберите язык/Choose language', 'ru/eng');

if (lang == 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang == 'eng') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}


switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break
    case 'eng':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break
}

let mass = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'eng': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(mass[lang]);



let namePerson = prompt('Введите имя');

console.log((namePerson == 'Артем') ? 'Директор' : (namePerson == 'Александр') ? 'Преподаватель' : ('Студент'));