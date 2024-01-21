function chunkArrayInGroups(arr, n) {
    var result = [];
    for (var i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
console.log(chunkArrayInGroups(["a" , "b" , "c" , "d"], 2));
console.log(chunkArrayInGroups(["a" , "b" , "c" , "d"], 3));
