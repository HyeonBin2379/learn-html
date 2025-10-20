// axios 라이브러리 import
const axios = require('axios');

// async와 await를 사용하여 메서드 체이닝을 사용했던 top20-movie-promise.js의 가독성을 개선
async function getTop20Movies() {
  const url =
    'https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

  try {
    // 네트워크로부터 데이터를 수신하므로, await를 사용하여 대기
    // 즉, await 키워드가 붙은 axios.get(url)가 정상적으로 실행 종료되어야 getTop20Movies()의 나머지 코드 실행 가능
    // axios.get(url)이 resolve되면 result에 promise 객체를 할당
    const result = await axios.get(url);

    // 여기서부터는 동기적으로 실행되는 코드
    const { data, status } = result; 

    if (status != 200) {
      throw new Error('request fail!');
    }

    if (!data && !data.articleList || data.articleList.size === 0) {
      throw new Error('데이터가 없습니다.');
    }

    const movieinfos = data.articleList.map((article, idx) => {
      return { title: article.title, rank: idx+1 };
    });

    movieinfos.forEach((movieinfo) =>
      console.log(`[${movieinfo.rank}위] ${movieinfo.title}`)
    );

    // return문을 사용하지 않았으나, async 함수이므로 항상 promise 객체를 반환
  } catch (error) {
    throw new Error(error);
  }
}

getTop20Movies();
