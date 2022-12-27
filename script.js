const input = document.querySelector('.input');
const text = document.querySelector('#text')

const debounce = (fn, waitTime) => {
    let timeOut;

    return () => {
        clearTimeout(timeOut);
        timeOut = setTimeout(fn, waitTime);
    };
};


const logger = () => text.textContent = input.value;

input.addEventListener('input', debounce(logger, 300))