function findLongestWord(string) {
    var words = string.split(' ');
    var longestWord = '';
    var num = 0;
    for (var i = 0; i < words.length; i++) {
      var currentWord = words[i];
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
        num = currentWord.length;
      }
    }
    return { longestWord, num };
  }
  var result = findLongestWord("The quick brown fox jumped over the lazy dog");
  console.log(result.longestWord);
  console.log(result.num);
  