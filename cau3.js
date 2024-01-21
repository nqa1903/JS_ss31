function confirmEnding(str, target) {
    if (target.length > str.length) {
        return false;
    }
    for (let i = 0; i < target.length; i++) {
        if (str[str.length - target.length + i] !== target[i]) {
            return false;
        }
    }
    return true;
}
console.log(confirmEnding("Hello world", "world"));
console.log(confirmEnding("Hello world", "orld"));
console.log(confirmEnding("Hello world", "world2"));
