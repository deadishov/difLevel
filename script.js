'use strict';

const today = new Date();


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options.timeZone = 'UTC';
options.timeZoneName = 'short';

const now = today.toLocaleString('en-US', options);
console.log(now);

let time = document.createElement('div');
time.innerHTML = now;
document.body.appendChild(time);