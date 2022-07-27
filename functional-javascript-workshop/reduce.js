function countWords(inputWords) {
  return inputWords.reduce((countObj, word) => {
    if (countObj[word] === undefined) {
      countObj[word] = 1;
    } else {
      countObj[word]++;
    }

    return countObj;
  }, {});
}

module.exports = countWords;