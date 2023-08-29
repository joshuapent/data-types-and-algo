const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8, 9];
const array3 = [1, 9, 10];

function compArrays(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i] != arrayB[j]) {
        break;
      } else {
        return true;
      }
    }
  }
  return false;
}

function compArrays2(arrayA, arrayB) {
  let map = {};
  for (let i = 0; i < arrayA.length; i++) {
    const iterable = arrayA[i];
    map[iterable] = true;
  }
  for (let i = 0; i < arrayB.length; i++) {
    if (map[arrayB[i]]) {
      return true;
    }
  }
  return false;
  console.log(map)
}

let result = compArrays2(array2, array3)
console.log(result) // bigO is O(n^2)
