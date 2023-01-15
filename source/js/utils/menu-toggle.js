const menuToggle = () => {
  const toggle = document.querySelector('[data-header-toggle]');
  const header = document.querySelector('[data-header]');
  const navMenu = document.querySelector('[data-header-nav]');
  const logo = document.querySelector('[data-logo-link]');
  const navLinks = document.querySelectorAll('[data-link]');
  const overlay = document.querySelector('[data-overlay]');
  const body = document.body;

  header.classList.remove('header--no-js');
  toggle.classList.remove('toggle--no-js');
  navMenu.classList.remove('nav-menu--show');
  logo.classList.remove('header__logo-link--custom');
  const openMenu = function () {
    toggle.classList.add('toggle--close');
    navMenu.classList.add('nav-menu--show');
    logo.classList.add('header__logo-link--custom');
    header.classList.add('header--menu-open');
    overlay.classList.add('overlay--menu-open');
    window.scroll(0, 0);
    body.classList.add('body--menu-open');
    navLinks.forEach((link) => {
      link.addEventListener('click', linkHandler);
    });
    overlay.addEventListener('click', overlayHandler);
  };

  const closeMenu = function () {
    toggle.classList.remove('toggle--close');
    navMenu.classList.remove('nav-menu--show');
    logo.classList.remove('header__logo-link--custom');
    header.classList.remove('header--menu-open');
    body.classList.remove('body--menu-open');
    overlay.classList.remove('overlay--menu-open');
    navLinks.forEach((link) => {
      link.removeEventListener('click', linkHandler);
    });
    overlay.removeEventListener('click', overlayHandler);
  };

  const linkHandler = () => {
    closeMenu();
  };

  const overlayHandler = () => {
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
