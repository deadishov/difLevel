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
