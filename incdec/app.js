let count = 0;
const counterDisplay = document.getElementById('counterDisplay');
const savedCountsList = document.getElementById('savedCountsList');

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

function saveCount() {
    const li = document.createElement('li');
    li.textContent = count;
    savedCountsList.appendChild(li);
}

function updateDisplay() {
    counterDisplay.textContent = count;
}
