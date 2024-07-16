function findSingle(arr) {
  const obj = {};
  for (let i of arr) {
    if (!obj[i]) {
      obj[i] = 1
    } else {
      obj[i]++
    }
  }
  for (let i in obj) {
    if (obj[i] === 1) {
      return i
    }
  }
}

const arr = [10, 2, 2, 1, 0, 0, 10]
console.log(findSingle(arr));  // 1
