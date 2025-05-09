// BORRADO NO NAV
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('blurred');
  } else {
    header.classList.remove('blurred');
  }
});

// ALTERNAR TEMA E MENU
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('toggle-theme');
  const themeIcon = document.getElementById('theme-icon');
  const menuBtn = document.getElementById('open-menu');
  const menuIcon = menuBtn.querySelector('i');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.menu a');

  function setTheme(isDark) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    themeIcon.className = isDark ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
    localStorage.setItem('darkMode', isDark);
  }

  const savedTheme = localStorage.getItem('darkMode') === 'true';
  setTheme(savedTheme);

  // Alterna o tema
  toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Impede fechamento do menu
    const isDark = !document.documentElement.classList.contains('dark-mode');
    setTheme(isDark);
  });

  // Alterna menu hamburguer
  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    menuIcon.classList.toggle('fa-bars', !isOpen);
    menuIcon.classList.toggle('fa-xmark', isOpen);
  });

  // Fecha ao clicar fora
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Fecha ao clicar em algum link
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    menu.classList.remove('open');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

// VER MAIS PROJETOS
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('toggleProjects');
  const hidden = document.querySelectorAll('.hidden-project');

  const isVisible = localStorage.getItem('projectsVisible') === 'true';

  hidden.forEach(el => {
    el.style.display = isVisible ? 'block' : 'none';
  });

  button.addEventListener('click', () => {
    const visibles = hidden[0].style.display === 'block';

    hidden.forEach(el => {
      el.style.display = visibles ? 'none' : 'block';
    });

    const button = document.getElementById('toggleProjects');

    if (visibles) {
      button.innerHTML = '<p>Mostrar mais projetos</p><i class="fa-solid fa-chevron-left"></i><i class="fa-solid fa-chevron-right"></i>';
    } else {
      button.innerHTML = '<p>Mostrar menos</p><i class="fa-solid fa-angle-up"></i>';
    }
  });
});

// CARROSSEL CERTIFICADOS
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
      },
      410: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      1030: {
        slidesPerView: 3.5,
      },
      1135: {
        slidesPerView: 4,
      }
    },

  });
});

// ENVIO DE EMAIL
emailjs.init('5_j7bjs718JshMdpL');
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_n2vg7zc';
    const templateID = 'template_yb25uab';

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviando…';

    emailjs.sendForm(serviceID, templateID, this)
      .then(function () {
        alert('✉️ Mensagem enviada com sucesso!');
        form.reset();
      }, function (error) {
        console.error('EmailJS erro:', error);
        alert('🚨 Ocorreu um erro. Tente novamente em instantes.');
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = 'Enviar mensagem';
      });
  });
});