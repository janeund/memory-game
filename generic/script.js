function count(str) {
  let obj = {};
  let max = 0;
  let result = null;
  for (let i of str) {
    if (!obj[i]) {
      obj[i] = 1
    } else {
      obj[i]++
    }
  }
  for (let i in obj) {
    if (obj[i] > max) {
      max = obj[i];
      result = i;
    } else if (obj[i] === max) {
      result = [...result, i]
    }
  } 
  return result
}

console.log(count('aabbc')); 
