const  Splash_Screen = () => {
  const splash = document.getElementById('splash');
  const main = document.getElementById('mainContent');

  setTimeout(() => {
    splash.classList.add('hide');

    setTimeout(() => {
      splash.style.display = 'none';
      main.classList.add('show');
      document.body.style.overflow = 'auto';
    }, 1000); // match fadeSlideOut duration
  }, 3500); // splash duration


  }

  Splash_Screen();


const troglemanu = () => {
    // Select elements
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('backdrop');

    // Function to open menu
    function openMenu() {
      mobileMenu.classList.remove('translate-x-full');
      backdrop.classList.remove('hidden');
    }

    // Function to close menu
    function closeMenu() {
      mobileMenu.classList.add('translate-x-full');
      backdrop.classList.add('hidden');
    }

    // Event listeners
    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);
  }

  troglemanu();

 
const headerColorChange = () => {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      console.log('scrolled');
      header.style.backgroundColor = 'red';
    } else {
      header.classList.remove('scrolled');
    }
  });
};
headerColorChange();






