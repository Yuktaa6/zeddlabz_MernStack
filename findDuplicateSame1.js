var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

var duplicates = [];
var sameValues = [];

// Finding duplicates
for (var i = 0; i < fullWordList.length; i++) {
  if (wordsToRemove.includes(fullWordList[i])) {
    duplicates.push(fullWordList[i]);
  }
}

// Finding same values
for (var j = 0; j < fullWordList.length; j++) {
  if (wordsToRemove.includes(fullWordList[j])) {
    sameValues.push(fullWordList[j]);
  }
}

console.log("Duplicates:", duplicates);
console.log("Same values:", sameValues);
