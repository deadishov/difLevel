'use strict';

const example = '                  Hey dude? How are you? How is everything?';



function someFunc(freeArg) {
    if (typeof freeArg != 'string') {
        console.log('Аргумент не является строкой');
    } else if (typeof freeArg == 'string' && freeArg.length < 30) {
        console.log(freeArg.trim());
    } else if (typeof freeArg == 'string' && freeArg.length > 30) {
        console.log(freeArg.trim().slice(0, 29) + '...');
    }
}


someFunc(example);