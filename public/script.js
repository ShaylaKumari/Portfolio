window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('blurred');
  } else {
    header.classList.remove('blurred');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('toggle-theme');
  const themeIcon = document.getElementById('theme-icon');
  const menuBtn = document.getElementById('open-menu');
  const menuIcon = menuBtn.querySelector('i');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.menu a');

  // Função de tema
  function setTheme(isDark) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    themeIcon.className = isDark ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
    localStorage.setItem('darkMode', isDark);
  }

  // Aplica tema salvo
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


document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('toggleProjects');
  const hidden = document.querySelectorAll('.hidden-project');

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
