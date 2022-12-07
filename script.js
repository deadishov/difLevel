'use strict';

const example = '            Hey dude! How are you? How is everything?                   ';



function someFunc(freeArg) {
    if (typeof freeArg != 'string') {
        console.log('Аргумент не является строкой');
    }

    console.log(freeArg.trim().slice(0, 29) + '...');
}



someFunc(example);