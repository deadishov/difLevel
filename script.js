'use strict';

// Усложненное задание №1

let screenPrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
}

const asking = function () {
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?').trim();
    } while (!isNumber(screenPrice));

    return screenPrice;
}


screenPrice = asking();


console.log(screenPrice);


// Усложненное задание №2

let x = 100



const arr = ['23124', '345463', '56745', '4785646', '3222344', '23457', '56656556']

for (let i = 0; i < 7; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

nextNumber:
for (let i = 2; i <= x; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            continue nextNumber;
        }
    }
    console.log(i + 'Делители этого числа ' + i);
}

