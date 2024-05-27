var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0


function decrement() {
    if(currentNumber <= -10) {
        return
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        currentNumberWrapper.style.color = 'rgb(236, 54, 54)';
    }
    else {
        currentNumberWrapper.style.color = 'black';
    }
}

function increment() {
    if(currentNumber >= 10) {
        return
    }

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        currentNumberWrapper.style.color = 'rgb(236, 54, 54)';
    }
    else {
        currentNumberWrapper.style.color = 'black';
    }
}