var slides = document.querySelectorAll('#slides > img');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = i == n ? 'block' : 'none';
  }
}

function prevSlide() {
  current = current > 0 ? current - 1 : slides.length - 1;
  showSlides(current);
}

function nextSlide() {
  current = current < slides.length - 1 ? current + 1 : 0;
  showSlides(current);
}
