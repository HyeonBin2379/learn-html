// axios 라이브러리 import
const axios = require('axios');

// async와 await를 사용하여 메서드 체이닝을 사용했던 top20-movie-promise.js의 가독성을 개선
// async: promise의 then(), catch() 메서드 호출하지 않더라도, 암묵적으로 반환값을 resolve하는 프로미스를 반환
async function getTop20Movies() {
  const url =
    'https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

  try {
    // 네트워크로부터 데이터를 수신하므로, await를 사용하여 대기
    const result = await axios.get(url);
    const { data } = result; // 수신한 result에는 data 프로퍼티가 존재

    if (!data.articleList || data.articleList.size === 0) {
      throw new Error('데이터가 없습니다.');
    }

    const movieinfos = data.articleList.map((article, idx) => {
      return { title: article.title, rank: idx+1 };
    });

    movieinfos.forEach((movieinfo) =>
      console.log(`[${movieinfo.rank}위] ${movieinfo.title}`)
    );
  } catch (error) {
    throw new Error(error);
  }
}

getTop20Movies();
