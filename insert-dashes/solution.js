function insertDash(num) {  
   let numArr = num.toString().split('');
   let oddArr = ['1', '3', '5', '7', '9'];
   let x = numArr.length;
   for (i=0; i < x; i++) {
   if (oddArr.includes(numArr[i]) && oddArr.includes(numArr[i+1])) {
   numArr.splice(i+1, 0, '-');
   x++;
   }
   };
   return numArr.join('');
};