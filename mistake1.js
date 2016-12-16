const promise = require('bluebird');

function operation1(input) {
  return promise.resolve(input * 1).delay(500);
}

function operation2(input) {
  return promise.resolve(input * 2).delay(500);
}

function operation3(input) {
  return promise.resolve(input * 3).delay(500);
}

operation1(1)
.then((operation1Result) => {
  console.log(operation1Result);

  operation2(operation1Result)
  .then((operation2Result) => {
    console.log(operation2Result);

    operation3(operation2Result)
    .then((operation3Result) => {
      console.log(operation3Result);

      console.log('final result is', operation3Result * 4);
    })
  })
})

// operation1(1)
// .then((operation1Result) => {
//   console.log(operation1Result);
//   return operation2(operation1Result);
// })
// .then((operation2Result) => {
//   console.log(operation2Result);
//   return operation3(operation2Result);
// })
// .then((operation3Result) => {
//   console.log(operation3Result);
//   console.log('final result is', operation3Result * 4);
// })
