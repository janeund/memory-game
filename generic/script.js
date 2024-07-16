function count(x) {
  let reversed = '';
  let numToStr = x.toString();
  for (let i = numToStr.length - 1; i >= 0; i--) {
      reversed += numToStr[i];
  }
  return reversed === numToStr 
}
const arr = 509;
console.log(count(arr));  // 1
