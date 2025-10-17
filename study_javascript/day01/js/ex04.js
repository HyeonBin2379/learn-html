// h1 태그를 사용한 모든 요소를 탐색
window.onload = function () {
  const headers = document.querySelectorAll('h1');
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    header.style.color = 'orange';
    header.style.backgroundColor = 'green';

    // 문서 객체 내부의 문자를 조작할 때 사용하는 속성
    header.innerHTML = 'From JavaScript';
  }
};
