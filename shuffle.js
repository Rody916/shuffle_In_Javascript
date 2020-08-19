Array.prototype.shuffle = function () {
  var input = this;
  for (var i = input.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}

function shuffleCSV(inputFile) {
  const fs = require('fs');
  const iconv = require('iconv-lite');
  var unorderedList = [];

  fs.createReadStream(inputFile)
    .pipe(iconv.decodeStream('Big5'))
    .on('data', (row) => {
      unorderedList = (String(row).replace(/\r\n/g, " ").split(" "));
    })
    .on('end', () => {
      console.log(unorderedList.shuffle());
    })
}

shuffleCSV('r07.csv');
shuffleCSV('r08.csv');