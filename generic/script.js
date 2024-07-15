function integerToRoman(num) {
  // your code here
  const data = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }

  let roman = '';
  for (let key in data) {
    while (num >= data[key]) {
      roman += key;
      num -= data[key]
    }
  }
  return roman

}

console.log(integerToRoman(123));
