// 2. Sum of two lowest positive integers
// Создайте функцию, которая возвращает сумму
// двух наименьших положительных чисел для заданного
// массива, состоящего минимум из 4 положительных целых чисел.
// В массив не будут переданы числа с плавающей
// запятой или отрицательные целые числа.
// Например, когда массив передается
// как [19, 5, 42, 2, 77] вывод должен быть 7.
function sumOfTwoLowestPositiveIntegers(arr) {
    let positiveIntegers = arr.filter(num => Number.isInteger(num) && num > 0);
    positiveIntegers.sort((a, b) => a - b);
    return positiveIntegers[0] + positiveIntegers[1];
}

// Test cases
console.log(sumOfTwoLowestPositiveIntegers([19, 5, 42, 2, 77])); // Output: 7
console.log(sumOfTwoLowestPositiveIntegers([1, 3, 5, 7, 9])); // Output: 8
console.log(sumOfTwoLowestPositiveIntegers([10, 20, 30, 40, 50])); // Output: 30