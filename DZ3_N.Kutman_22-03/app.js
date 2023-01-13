// Задание - 1
var even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(even.filter(i => i % 2 === 0))

// Задание - 2
var num;
var sum = 0

do {
    num = Number(prompt('Введите число: '))
    sum += num
}while (num > 0)

console.log('Сумма чисел: ' + sum)