function waitOneSecond(msg) {
  return new Promise((resolve, _) => {
    // 성공 시 1초 대기 후 메시지 출력
    setTimeout(resolve(`${msg}`), 1000);
  });
}

async function countOneToTen() {
  for (let i of [...Array(10).keys()]) {
    // 1초 대기 후 result에 결과값 저장
    // pending 상태일 때 지정한 메시지를 출력
    let result = await waitOneSecond(`${i + 1}초 대기중 ....`);
    console.log(result);

    // 0부터 9까지 loop
  }
  console.log('complete');
}

countOneToTen();
