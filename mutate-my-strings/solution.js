function mutateMyStrings(stringOne, stringTwo){
  var arrOne = stringOne.split('');
  var arrTwo = stringTwo.split('');
  var answers = [arrOne.join('')];
  for (i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      arrOne[i] = arrTwo[i];
      answers.push(arrOne.join(''));
    }
  }
  return answers.join('\n') + '\n';
}