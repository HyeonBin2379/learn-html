// h1 태그를 사용한 모든 요소를 탐색
window.onload = function () {
  const header = this.document.getElementById('header');
  const originalText = header.innerHTML;

  // innerHTML: html 형식을 문자열 형태로 입력하면 이를 html 문서로 변환하여 출력
  // 최근에는 보안 문제로 인해 innerHTML 사용을 지양하는 편.
  header.innerHTML = '<i> i 태그입니다.</i><br/>';
  header.innerHTML += '&lt;i&gt;i 태그입니다. &lt;/i&gt;';

  // textContent: 지정한 문자열을 웹사이트에 출력
  header.textContent = '<i> i 태그입니다.';
};
