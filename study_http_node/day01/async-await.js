// 반환값을 promise 객체로 반환
async function myName() {
  return 'echo';
}

async function showName() {
  // myName()의 실행이 종료되어야 showName()을 실행 가능
  const name = await myName();
  console.log(name);
}   // 이름 출력 함수

console.log(showName());