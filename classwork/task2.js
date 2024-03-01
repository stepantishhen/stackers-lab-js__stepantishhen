// Power of 4
//
// Напишите функцию, который возвращает true, если
// заданный параметр является степенью 4, и false,
// если не является. Если параметр не является целым
// числом (например, строкой, массивом), метод также
// должен возвращать false.

function power_of_four(n){
    let num = n
    if ( typeof(n) !== 'number') return false;
    if ((num ** (1/4)) % 1 == 0 )
        return true
    return false;
}
console.log(power_of_four(1));