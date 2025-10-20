function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === 'done') {
      resolve('lol game!');
    } else {
      reject(new Error('working!'));
    }
  });
}

// 1. 프로미스와 콜백을 애매하게 섞어 사용한 예시
myWork('done').then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

// 2. 프로미스만 사용하여 1.의 코드를 개선
myWork('done')
  .then(function (value) {console.log(value)})
  .catch(function (error) {console.error(error)});