function capitalize(s){
    let solution = [];
    let evenArr = s.split("");
    let oddArr = s.split("");
    for (var i = 0; i < evenArr.length; i += 2) {
        evenArr[i] = evenArr[i].toUpperCase();
      }
    let even = evenArr.join("");
    console.log(even);
    solution.push(even);
    for (var i = 1; i < oddArr.length; i += 2) {
        oddArr[i] = oddArr[i].toUpperCase();
      }
    let odd = oddArr.join("");
    console.log(odd);
    solution.push(odd);
    return solution;
    };