AOS.init();


document.addEventListener("DOMContentLoaded", function () {
    // Detect the language from the URL or default to 'fr'
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLang = urlParams.get('lang') || 'fr';

    // Show and hide content based on selected language
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = el.getAttribute('data-lang') === selectedLang ? 'block' : 'none';
    });

    // Update the page's language attribute
    document.documentElement.setAttribute('lang', selectedLang);

    // Set the state of the language switch based on the current language
    const langSwitch = document.getElementById('lang-switch');
    langSwitch.checked = (selectedLang === 'en');

    // Handle language switch
    langSwitch.addEventListener('change', function() {
        changeLanguage();
    });
});

function changeLanguage() {
    const isChecked = document.getElementById('lang-switch').checked;
    const newLang = isChecked ? 'en' : 'fr';
    
    // Update the URL query parameter for language
    window.location.search = `?lang=${newLang}`;
}


document.addEventListener("DOMContentLoaded", function () {
    const techSkillsSection = document.getElementById('tech-skills');
    const softSkillsSection = document.getElementById('soft-skills');

    // Ajouter un écouteur de clic sur la section des compétences techniques
    techSkillsSection.addEventListener('click', function() {
        techSkillsSection.style.display = 'none'; // Masquer les compétences techniques
        softSkillsSection.style.display = 'block'; // Afficher les soft skills
    });

    // Ajouter un écouteur de clic sur la section des soft skills
    softSkillsSection.addEventListener('click', function() {
        softSkillsSection.style.display = 'none'; // Masquer les soft skills
        techSkillsSection.style.display = 'block'; // Afficher les compétences techniques
    });
});






  document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Ajouter la classe "visible" quand la section est visible
          observer.unobserve(entry.target); // Arrêter l'observation une fois l'élément visible
        }
      });
    }, { threshold: 0.5 }); // Observer quand 50% de l'élément est visible
  
    // Observer la section
    observer.observe(aboutSection);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner toutes les barres de progression
    const progressBars = document.querySelectorAll('.progress');
  
    // Fonction pour observer la visibilité des éléments
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Lorsqu'une barre devient visible, ajouter la classe 'fill-progress'
          entry.target.classList.add('fill-progress');
          observer.unobserve(entry.target); // Arrêter l'observation après la première activation
        }
      });
    }, { threshold: 0.5 }); // Observer quand 50% de la barre est visible
  
    // Observer chaque barre de progression
    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  });

  window.addEventListener('scroll', function () {
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        footer.classList.add('visible');
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const mainContent = document.getElementById('main-content');
  
  // Lorsque l'utilisateur défile vers le bas
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {  // Le seuil où on commence à cacher le header
          header.style.opacity = 0; // Rendre le header transparent
          mainContent.classList.add('show'); // Afficher le contenu principal
          document.body.classList.add('scrolled'); // Appliquer la classe scrolled pour cacher le header
      } else {
          header.style.opacity = 1; // Rendre le header visible à nouveau
          mainContent.classList.remove('show'); // Masquer le contenu principal
          document.body.classList.remove('scrolled'); // Retirer la classe scrolled
      }
  });
});
document.querySelector('.scroll-down').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.querySelector('#main-content');
  if (target) {
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
      // Ajoute un délai pour la transition après le scroll
      setTimeout(() => {
          target.classList.add('show');
      }, 500); // Ajustez le délai si nécessaire
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const text = "Hello, World!"; // Texte à afficher
  const speed = 100; // Vitesse en ms entre chaque lettre
  const target = document.querySelector(".console-text");

  let index = 0;

  function typeLetter() {
      if (index < text.length) {
          target.textContent += text[index];
          index++;
          setTimeout(typeLetter, speed);
      }
  }

  typeLetter(); // Démarrer l'animation
});




