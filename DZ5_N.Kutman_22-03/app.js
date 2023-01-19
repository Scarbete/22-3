// Задание - 1
const text = 'Я известная как Аянами Рей, а ты кто?'
function createText(){
    return text.split('').reduce((a, b) => b + a);
}
console.log(createText())

// Задание - 2
const nums = [24, 56, 58, 5, 65, 35, 5, 75, 35, 67, 53, 2]
function average() {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
console.log(average())