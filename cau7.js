function fakeFilter(arr, callback) {
    var filteredArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
var result = fakeFilter([1,2,3,4], function(e) {
    if(e % 2 === 0) {
    return true;
} else {
    return false;
}
});
console.log(result); 
