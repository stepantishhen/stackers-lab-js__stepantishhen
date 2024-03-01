const createArray = (el, step) => {
    const arr = []
    if (step <= 0) return arr;
    for (let index = 1; index <= step; index++) {
        arr.push(el)
        el = el ** 2
    }
    return arr;
}
console.log(createArray(3, 3));
