const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const container = document.querySelector('.a4-container');

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    container.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        container.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        container.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}