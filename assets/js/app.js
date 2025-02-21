document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 250) { 
      header.classList.add('header--transparent');
    } else {
      header.classList.remove('header--transparent');
    }
  });
  const menuToggle = document.querySelector('.header__toggle');
  const menuList = document.querySelector('.header__list');
  
  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Función para inicializar el marquee
    function initializeMarquee(parentSelector) {
      const marqueeWrapper = document.querySelector(`${parentSelector} .marquee__wrapper`);
      if (!marqueeWrapper) return; 
  
      const textElement = marqueeWrapper.querySelector("div");
  
      while (marqueeWrapper.children.length > 1) {
        marqueeWrapper.removeChild(marqueeWrapper.lastChild);
      }
  
      const textWidth = textElement.offsetWidth;
      const screenWidth = window.innerWidth; 
  
      const repetitions = Math.ceil(screenWidth / textWidth) + 4;
  
      for (let i = 0; i < repetitions; i++) {
        const clone = textElement.cloneNode(true);
        marqueeWrapper.appendChild(clone);
      }
    }
  
    initializeMarquee(".marquee");
    initializeMarquee(".marquee2");
  
    function debounce(func, delay) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
      };
    }
  
    window.addEventListener(
      "resize",
      debounce(function () {
        initializeMarquee(".marquee");
        initializeMarquee(".marquee2"); 
      }, 300)
    );
  
    // View All
    const cards = document.querySelectorAll('.conatiner-cards .inner-grid__card');
    const viewAllBtn = document.getElementById('viewAllBtn');
    const initialVisibleCards = 4;
  
    cards.forEach((card, index) => {
      if (index >= initialVisibleCards) {
        card.classList.add('d-none');
      }
    });
  
    viewAllBtn.addEventListener('click', () => {
      cards.forEach(card => {
        card.classList.remove('d-none');
      });
      viewAllBtn.style.display = 'none';
    });
  });