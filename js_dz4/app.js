// Задание - 1
var tegs = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var result = {}
tegs.forEach(function (a) {
    result[a] = result[a] + 1 || 1;
    Object.keys(tegs.sort(((a,b) => tegs[key] - tegs[key] || b - a)))
});
for (var key in result){
    console.log('Тег: ' + key + ' - ' + result[key] + ' раза ')
}
console.log(Object.keys(result).sort((a, b) => result[b] - result[a]))

// Задание - 2
var num_list = [23, 32, 34, 3, 4, 54, 5, 23, 55, -7, 5, -45, 32, 3, 45, 23]
var max = maxFunction(num_list);

function maxFunction(arr){
    var al = arr.length;
    max = arr[al-1];
    while (al--){
        if(arr[al] > max){
            max = arr[al]
        }
    }
    return max;
}
console.log(max)