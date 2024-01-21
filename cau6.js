function fakeFind(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
var result = fakeFind([1,2,3,4], function(e){
    if(e % 2 === 0) {
    return true;
} else {
    return false;
}
});
console.log(result);
