// 이벤트 연결

window.onload = function () {
  // 이벤트를 연결할 버튼 객체를 선택한다.
  let button = this.document.getElementById('button');

  // 선택한 버튼 객체에 이벤트를 연결한다. - 버튼 클릭 시 경고창을 출력
  // onclick: 웹 브라우저가 제공 -> 이벤트 리스너까지 포함
  button.onclick = function () {
    alert('click event');
  };
};
