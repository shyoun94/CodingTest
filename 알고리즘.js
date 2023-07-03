class UltraArray {
  constructor() {
    this.arr = [];
  }
  push(...elements) {
    for (let i = 0; i < elements.length; i++) {
      this.arr[this.arr.length] = elements[i];
    }
    console.log(this.arr.length);
    return this.arr.length;
  }
  pop() {
    const popElement = this.arr[this.arr.length - 1];
    this.arr.length--;
    return popElement;
  }
  splice(index, length, add) {
    for (i = index; i < length; i++) {
      delete this.arr[i];
    }
  }
}

const myArray = new UltraArray();

myArray.push(10, 20, 30);
myArray.pop();

console.log(myArray.pop());
console.log(myArray);


