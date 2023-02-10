// задание - 1
const Check = document.querySelector('#Check')
const Inp = document.querySelector('#Input')
const Result = document.querySelector('.Result')
const regExp = /^[12]\d{13}$/

Check.onclick = () => {
    if (regExp.test(Inp.value)){
        Result.innerHTML = 'INN is correct'
        Result.style.color = 'green'
    }else{
        Result.innerHTML = 'INN is wrong'
        Result.style.color = 'red'
    }
}

// задание - 2
let position = 0
function move() {
    let box = document.querySelector('.box')
    box.style.left = `${position}px`
    position++
    if (position < 451) {
        requestAnimationFrame(move)
    }
}
move()