// Promise 객체는 자바스크립트에서 비동기 실행을 동기화하는 구문으로 사용
// 콜백 함수 중 단계적으로 실행되어야 하는 작업들을 동기적으로 실행
// 약속 -> (이행 | 거절 | 대기)
// 지정한 코드는 미래의 어느 시점에서 위 3가지 상태 중 하나를 갖게 됨을 보장

const DB = [];

// DB에 저장 후 콜백 실행
function saveDB(user) {
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise(
    // 성공 시 사용자 객체 반환, 실패 시 에러 메시지 반환
    (resolve, reject) => {
      return (DB.length > oldDBSize) 
        ? resolve(user) 
        : reject(new Error('SaveDB fail!'));
    }
  );
}

// 이메일 발송 로그만 남기는 코드 실행 후 콜백 실행
function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
      return resolve(user);
    }
  );
}

// 결과를 반환하는 함수
function getResult(user) {
  return new Promise((resolve, reject) => {
      resolve(`success register ${user.name}`);
    }
  );
}


// 프로미스 실행용 함수
function registerByPromise(user) {
  // then()을 사용한 메서드 체이닝 방식을 통해 비동기 콜백 함수들을 지정한 순서대로 처리
  // 함수 saveDB 자체는 then() 호출 불가: saveDB의 반환값인 promise 객체에 의해 then()이 호출된 것
  const result = saveDB(user).then(sendEmail).then(getResult);
  
  // promise 객체로 실행된 콜백함수들의 실행이 완료되기 전까지는 pending된 상태
  console.log(result);
  return result;
}

const myUser = {email:'신세계@test.com', name:'신세계'};
const result = registerByPromise(myUser);
result.then(console.log);