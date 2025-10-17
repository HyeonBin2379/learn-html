window.onload = function () {
  const button = document.getElementById('button');
  button.onclick = function addStar() {
    button.textContent += '★';
  };
};
