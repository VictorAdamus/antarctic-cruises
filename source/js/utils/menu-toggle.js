const menuToggle = () => {
  const toggle = document.querySelector('[data-header-toggle]');
  const header = document.querySelector('[data-header]');
  const navMenu = document.querySelector('[data-header-nav]');
  const logo = document.querySelector('[data-logo-link]');
  const navLinks = document.querySelectorAll('[data-link]');
  header.classList.remove('header--no-js');
  toggle.classList.remove('toggle--no-js');
  const openMenu = function () {
    toggle.classList.add('toggle--close');
    navMenu.classList.add('nav-menu--show');
    logo.classList.add('header__logo-link--custom');
    header.classList.add('header--menu-open');
    navLinks.forEach((link) => {
      link.addEventListener('click', linkHandler);
    });
  };

  const closeMenu = function () {
    toggle.classList.remove('toggle--close');
    navMenu.classList.remove('nav-menu--show');
    logo.classList.remove('header__logo-link--custom');
    header.classList.remove('header--menu-open');
    navLinks.forEach((link) => {
      link.removeEventListener('click', linkHandler);
    });
  };

  const linkHandler = () => {
    closeMenu();
  };

  const toggleHandler = function () {
    if (toggle.classList.contains('toggle--close')) {
      closeMenu();
    } else {
      openMenu();
    }
  };
  toggle.addEventListener('click', toggleHandler);
};


export {menuToggle};
