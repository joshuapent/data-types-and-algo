const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes

strings.push('e');
strings.pop();
strings.unshift('x')
strings.splice(2, 0, 'v')


strings[2]
// console.log(strings);

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return self.length;
  }
  pop() {
    lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--
  }
}


const newArray = new Array ();
newArray.delete(1)

// console.log(newArray.get(0))

function stringReversal(string) {
  let reversed = ''
  for (let i = string.length; i > 0; i--) {
    reversed+= string[i-1]
  }
  console.log(reversed)
}

stringReversal('happy')