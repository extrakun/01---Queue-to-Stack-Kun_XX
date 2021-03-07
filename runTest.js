const { createQueueFromInput } = require('./util')
const runTest = (func) => {

  let queueA = createQueueFromInput();

  let s = func(queueA);
  s.data.traverse(n => console.log(n.getData()));

}

module.exports = runTest;