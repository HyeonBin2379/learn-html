// axios 라이브러리 import
const axios = require('axios');

const url =
  'https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

axios
  .get(url) // HTTP의 GET 메서드를 사용하여 지정한 URL의 데이터를 요청
  .then((result) => {
    // 요청한 url의 JSON 객체를 정상적으로 수신했는지를 검사
    if (result.status != 200) {
      throw new Error('request fail!');
    }
    if (!result.data) {
      throw new Error('데이터가 없습니다.');
    }
    return result.data;
  })
  .then((data) => {
    // 수신한 JSON 객체의 여러 속성들 중 articleList에 관한 유효성 검사
    // articleList 자체가 없거나, 저장된 article이 없다면 에러 메시지 출력
    if (!data.articleList || data.articleList.size === 0) {
      throw new Error('영화리스트가 없습니다.');
    }
    return data.articleList; // 영화리스트 반환
  })
  .then(
    // articleList의 영화리스트에서 순위, 제목 정보를 추출
    (articles) => {
      return articles.map((article, idx) => {
        return { title: article.title, rank: idx + 1 };
      });
    }
  )
  .then((results) => {
    // 영화리스트의 순위, 제목 정보를 출력
    results.forEach((movieinfo) =>
      console.log(`[${movieinfo.rank}위] ${movieinfo.title}`)
    );
  })
  .catch((error) => {
    console.log('<<에러 발생>>');
    console.error(error);
  });
