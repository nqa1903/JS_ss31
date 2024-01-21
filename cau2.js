function largestOfArrs(...arrays) {
    if (!arrays || arrays.length === 0) {
        return null;
    }
    const maxNumbers = [];

    for (const array of arrays) {
        if (!array || array.length === 0) {
            maxNumbers.push(null);
        } else {
            maxNumbers.push(Math.max(...array));
        }
    }
    return maxNumbers;
}
console.log(largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]));
console.log(largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]));
console.log(largestOfArrs());
