// function findFloor(arr, target) {
//   let lowIdx = 0;
//   let highIdx = arr.length - 1;

//   while (lowIdx <= highIdx) {
//     let middleIdx = Math.floor((lowIdx + highIdx) / 2);

//     console.log(lowIdx, highIdx)

//     if (lowIdx === middleIdx) {
//       return arr[lowIdx];
//     } else if (arr[middleIdx] >= target) {
//       highIdx = middleIdx;
//     } else if (arr[middleIdx] < target) {
//       if (arr[middleIdx] < arr[middleIdx + 1]) {
//         lowIdx = middleIdx + 1;
//       }
//       lowIdx = middleIdx;
//     }
//   }
//   return -1;
// }

// module.exports = findFloor


function findFloor(arr, num, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  if (num >= arr[high]) return arr[high];

  let mid = Math.floor((low + high) / 2)

  if (arr[mid] === num) return arr[mid];

  if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
    return arr[mid - 1];
  }

  if (num < arr[mid]) {
    return findFloor(arr, num, low, mid - 1);
  }

  return findFloor(arr, num, mid + 1, high)
}

module.exports = findFloor