const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes

strings.push('e');
strings.pop();
strings.unshift('x')
strings.splice(2, 0, 'v')


strings[2]
console.log(strings)

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index]
  }
}

const newArray = new Array ();
console.log(newArray.get(0))