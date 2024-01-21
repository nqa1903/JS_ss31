/* 
Phương thức Array.prototype.reduce() là một phương thức mạnh mẽ trong JavaScript, được sử dụng để giảm (reduce) một mảng thành một giá trị duy nhất dựa trên một hàm callback.

Cú pháp của reduce() là: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

callback: Một hàm được gọi một lần cho mỗi phần tử trong mảng, nhận vào bốn tham số (accumulator, currentValue, currentIndex, array).
accumulator: Giữ giá trị tích lũy của quá trình giảm mảng.
currentValue: Giá trị hiện tại của mảng đang được xem xét.
currentIndex: Chỉ số của currentValue trong mảng.
array: Mảng đang được giảm.
initialValue: Giá trị khởi đầu của accumulator. Nếu được cung cấp, reduce() sẽ bắt đầu từ initialValue, nếu không, nó sẽ bắt đầu từ phần tử đầu tiên của mảng và accumulator sẽ là phần tử đầu tiên của mảng.
*/
function fakeReduce(arr, callback, initialValue) {
    var accumulator = initialValue !== undefined ? initialValue : arr[0];
    var startIndex = initialValue !== undefined ? 1 : 0;
    for (var i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
var numbers = [1, 2, 3, 4, 5];
var sum = fakeReduce(numbers, function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); 
