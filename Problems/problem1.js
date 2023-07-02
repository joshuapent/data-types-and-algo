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

let result = compArrays(array2, array3)
console.log(result) // bigO is O(n^2)