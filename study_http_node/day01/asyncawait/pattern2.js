function myWork(work) {
  return new Promise((resolve, reject) => {
    resolve(work.toUpperCase())
  });
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === 'DONE') {
      resolve('Go Play Game');
    } else {
      reject(new Error("Don't"));
    }
  });
}

myWork('done').then(
  function (result) {
    playGame(result).then(function(value) {
      console.log(value);
    });
  },
);

// pattern1.js와 동일한 실행결과면서 가독성을 개선
myWork('done').then(playGame).then(console.log);