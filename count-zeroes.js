function countZeroes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      return arr.length - i;
    }
  }
  return 0;
}

module.exports = countZeroes