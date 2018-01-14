function high(x){
  var value = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var score = [];
  var words = x.split(' ');
    
  function scoreWord () {
    var tally = 0;
    for (j = 0; j < words.length; j++) {
      var wordArr = words[j].split('');
      for (i=0 ; i<wordArr.length; i++) {
        var letterscore = value.indexOf(wordArr[i]);
        var wordScore = letterscore + 1 + tally;
        i++;
        score.push(wordScore);}
    }
  }
  var highScore = score.indexOf(Math.max(score));
  return words[highScore];
}