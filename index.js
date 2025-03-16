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

const navbar = () => {
    const header = document.getElementById('header');
    header.classList.add('backdrop-Color:red', 'backdrop-blur-md');




    // document.addEventListener('DOMContentLoaded', () => {
    //     const header = document.getElementById('header');
    //     const navbar = document.querySelector('.navbar');
    
    //     window.addEventListener('scroll', () => {
    //         console.log(window.scrollY);
    //         if (window.scrollY > 287) {
    //             header.classList.add('bg-gray-900', 'shadow-lg');
                
    //         }
    //     });
    // });
    
  }

 navbar();