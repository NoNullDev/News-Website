const carousel = document.querySelector('.row-news');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let scrollLeft = 0;

prevBtn.addEventListener('click', () => {
  scrollLeft -= carousel.offsetWidth;
  carousel.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  scrollLeft += carousel.offsetWidth;
  carousel.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
});
