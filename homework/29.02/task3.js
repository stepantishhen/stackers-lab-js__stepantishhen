// 3. Basic Mathematical Operations
//
// Ваша задача - создать функцию, которая выполняет четыре основные математические операции.
//     Функция должна принимать три аргумента - операция(строка/знак), значение1(число), значение2(число).
//     Функция должна возвращать результат в виде числа после применения выбранной операции.
//
//     Пример:
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
function basicMathematicalOperations(operation, value1, value2) {
    let result;
    switch (operation) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
        default:
            throw new Error('Invalid operation');
    }
    return result;
}

// Test cases
console.log(basicMathematicalOperations('+', 4, 7)); // Output: 11
console.log(basicMathematicalOperations('-', 15, 18)); // Output: -3
console.log(basicMathematicalOperations('*', 5, 5)); // Output: 25
console.log(basicMathematicalOperations('/', 49, 7)); // Output: 7