window.onload = function () {
  const button = document.getElementById('button');
  let count = 0;

  button.onclick = function addStar() {
    count++;
    button.textContent = `버튼 - ${'★'.repeat(count)}`;
  };
};
