'use strict';

const month = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'];
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let myTime;
let mySecondTime;
let Y;
let M;
let D;
let d;
let h;
let m;
let s;


function getThisTime(t) {
    Y = t.getFullYear() + ' года';
    M = month[t.getMonth()].toLowerCase();
    D = t.getDate();
    d = week[t.getDay()];

    h = t.getHours();
    if (h === 1 || h === 21) {
        h = h + ' час';
    } else if (21 > h && h > 4 || h === 0) {
        h = h + ' часов';
    } else if (5 > h && h > 1 || 25 > h && h > 21) {
        h = h + ' часа';
    }

    m = t.getMinutes();
    if (m === 1 || m === 21 || m === 31 || m === 41 || m === 51) {
        m = m + ' минута';
    } else if (5 > m && m > 1 || 25 > m && m > 21 || 35 > m && m > 31 || 45 > m && m > 41 || 55 > m && m > 51) {
        m = m + ' минуты';
    } else if (21 > m && m > 4 || 31 > m && m > 24 || 41 > m && m > 34 || 51 > m && m > 44 || 60 > m && m > 54 || m === 0) {
        m = m + ' минут';
    }

    s = t.getSeconds();
    if (s === 1 || s === 21 || s === 31 || s === 41 || s === 51) {
        s = s + ' секунда';
    } else if (5 > s && s > 1 || 25 > s && s > 21 || 35 > s && s > 31 || 45 > s && s > 41 || 55 > s && s > 51) {
        s = s + ' секунды';
    } else if (21 > s && s > 4 || 31 > s && s > 24 || 41 > s && s > 34 || 51 > s && s > 44 || 60 > s && s > 54 || s === 0) {
        s = s + ' секунд';
    }

    return ('Сегодня ' + d + ', ' + D + ' ' + M + ' ' + Y + ', ' + h + ' ' + m + ' ' + s);
}

function addZero(t) {
    return (t < 10) ? '0' + t : t;
}

function getSecondTime(t) {
    D = addZero(t.getDate());
    M = addZero(t.getMonth() + 1);
    Y = t.getFullYear();
    h = addZero(t.getHours());
    m = addZero(t.getMinutes());
    s = addZero(t.getSeconds());

    return (D + '.' + M + '.' + Y + ' - ' + h + ':' + m + ':' + s);
}


setInterval(() => {
    let justTime = new Date()
    myTime = getThisTime(justTime);
    document.querySelector('.first-time').innerHTML = myTime;

    mySecondTime = getSecondTime(justTime);
    document.querySelector('.second-time').innerHTML = mySecondTime;
}, 1000);



