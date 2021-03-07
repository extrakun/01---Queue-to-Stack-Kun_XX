const runTest = require('./runTest')
const Stack = require('./Stack')

const queueToStack = (queueA) => {

  let s = new Stack();
  let s2 = new Stack();

  while (queueA.peek()) {
    s2.push(queueA.dequeue());
  }

  while (s2.peek()) {
    s.push(s2.pop());
  }

  // your code here
  return s;

}


// don't touch this line
runTest(queueToStack);