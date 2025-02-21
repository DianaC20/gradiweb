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
    function initializeMarquee(parentSelector) {
      const marqueeWrapper = document.querySelector(`${parentSelector} .marquee__wrapper`);
  
      const textElement = marqueeWrapper.querySelector("div");
  
      // Limpiar los clones anteriores antes de recalcular
      while (marqueeWrapper.children.length > 1) {
        marqueeWrapper.removeChild(marqueeWrapper.lastChild);
      }
  
      const textWidth = textElement.offsetWidth;
      const screenWidth = window.innerWidth;
  
      // Asegurarse de que siempre haya suficientes repeticiones
      const repetitions = Math.ceil(screenWidth / textWidth) + 1; // Agregamos +2 para evitar espacios vacíos
  
      for (let i = 0; i < repetitions; i++) {
        const clone = textElement.cloneNode(true);
        marqueeWrapper.appendChild(clone);
      }
  
      marqueeWrapper.style.width = `${repetitions * textWidth}px`;
    }
  
    // Inicializar los marquees al cargar la página
    initializeMarquee(".marquee"); // Primer marquee
    initializeMarquee(".marquee2"); // Segundo marquee
  
    // Usar debounce para optimizar el evento resize
    function debounce(func, delay) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
      };
    }
  
    // Escuchar el evento resize y ejecutar initializeMarquee para ambos marquees
    window.addEventListener(
      "resize",
      debounce(function () {
        initializeMarquee(".marquee"); // Actualizar el primer marquee
        initializeMarquee(".marquee2"); // Actualizar el segundo marquee
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