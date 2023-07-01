//base js

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(100).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log(t1-t0, 'milliseconds')
}

// findNemo(nemo);
// findNemo(everyone); // O(n) --> Linear Time

function compressFirstBox(boxes) {
  console.log(boxes[0])
} // O(1) Constant Time

// compressFirstBox([2, 3, 4, 5])
// compressFirstBox([6, 7])
// compressFirstBox([8])

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0], boxes[1]);
} //O(2) Constant Time which is always O(1)

function nestedLoop(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

// nestedLoop([1, 2, 3, 4]) //O(n^2)

function printSumPairs(nums) {
  console.log('The numbers are: ');
  nums.forEach((num) => {
    console.log(num)
  })

  console.log('And their sums are: ');
  nums.forEach((num) => {
    nums.forEach((num2) => {
      console.log(num + num2)
    });
  });
}

printSumPairs([1, 2])