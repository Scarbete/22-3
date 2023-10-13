// 1 -  ⁃ дан массив [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50].
// Пройдитесь циклом и выведите только те числа, которые начинаются на 2 и 5.
// Результат должен вывестись в новом массиве newArray

const array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
const newArr = []

array.forEach(number => {
    const num = number.toString()
    if (num.startsWith('2') || num.startsWith('5')) {
        newArr.push(+num)
    }
})

console.log(newArr)

// 2 -  ⁃ Дан список тегов  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol’, ‘br’].
// Вам нужно посчитать каких тегов сколько штук.  Обязательные условия:
// Конечный результат должен вывестись как объект {}, где ключ - это сам тег,
// а значение - это количество сколько раз этот тег встречается в массиве.

const arr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
const result = {}

arr.forEach(tag => {
    if (result[tag]) {
        result[tag] += 1
    }
    else {
        result[tag] = 1
    }
})

console.log(result)

// 3 - ДОП ДЗ:
// - полученный результат отсортировать от большего к меньшему.
// Используйте метод sort (прочитайте про него)

const sortedRes = Object.entries(result).sort((a, b) => b[1] - a[1])

console.log(sortedRes)