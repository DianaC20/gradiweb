document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 250) { 
      header.classList.add('header--transparent');
    } else {
      header.classList.remove('header--transparent');
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const marqueeWrapper = document.querySelector(".marquee .marquee__wrapper");
    const textElement = marqueeWrapper.querySelector("div");
    const textWidth = textElement.offsetWidth;
    const screenWidth = window.innerWidth; 

    const repetitions = Math.ceil(screenWidth / textWidth) + 1;

    for (let i = 0; i < repetitions; i++) {
        const clone = textElement.cloneNode(true);
        marqueeWrapper.appendChild(clone);
    }
    marqueeWrapper.style.width = `${repetitions * textWidth}px`;
});