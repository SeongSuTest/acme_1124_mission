const slideWrapper = document.querySelector(".testimonial");
const slideContainer = slideWrapper.querySelector(".slide-container");
const slides = slideContainer.querySelectorAll("li");
const prevBtn = slideWrapper.querySelector(".prev");
const nextBtn = slideWrapper.querySelector(".next");
const slideCount = slides.length;

let currentIdx = 0;

slides.forEach((item, i) => {
  item.style.left = i * 100 + "%";
});

moveSlide(0);

function moveSlide(idx) {
  slideContainer.style.left = -idx * 100 + "%";
  currentIdx = idx;
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[idx].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  let nextIdx = (currentIdx + 1) % slideCount;
  moveSlide(nextIdx);
});
prevBtn.addEventListener("click", () => {
  let nextIdx = (currentIdx - 1 + slideCount) % slideCount;
  moveSlide(nextIdx);
});
