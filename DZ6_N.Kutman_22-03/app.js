// Задание - 1
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        console.log('clicked');
    })
})

// Задание - 2
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue - 1;
});

plusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;
});