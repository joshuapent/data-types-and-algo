//base js

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array

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
findNemo(nemo);

