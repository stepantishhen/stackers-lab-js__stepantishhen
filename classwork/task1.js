// Самый высокий и самый низкий
//
// В этой задаче вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число
//
// highAndLow("1 2 3 4 5");           // return "5 1"
// highAndLow("1 2 -3 4 5");         // return "5 -3"
// highAndLow("1 9 3 4 -5");        // return "9 -5"

let numbers = "1 2 3 4 5 6";
function highAndLow(numbers) {
    let arr = numbers.split(" ");
    let res = arr.map((item) =>  parseInt(item))
    console.log(`${Math.max(...res)} ${Math.min(...res)}`);
}

highAndLow("1 2 3 4 5");           // return "5 1"
highAndLow("1 2 -3 4 5");         // return "5 -3"
highAndLow("1 9 3 4 -5");        // return "9 -5"