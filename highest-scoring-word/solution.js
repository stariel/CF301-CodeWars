function high(x){
    var value = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var score = [];
    var words = x.split(' ');
    var tally = 0;
    var letterscore = 0;
    for (var j = 0; j < words.length; j++) {
      var wordArr = words[j].split('');
      for (var i = 0 ; i < wordArr.length; i++) {
        letterscore = value.indexOf(wordArr[i]);
        tally = tally + letterscore + 1;
        letterscore = 0;
      }
        score.push(tally);
        tally = 0;
    }
    var highScore = score.indexOf(Math.max(...score));
    return words[highScore];
  }