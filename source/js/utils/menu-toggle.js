const menuToggle = () => {
  const headerNav = document.querySelector('[data-header-nav]');
  const navToggle = document.querySelector('[data-header-toggle]');
  const promoSection = document.querySelector('[data-promo-section]');

  headerNav.classList.remove('header__nav--nojs');
  promoSection.classList.remove('promo--nojs');


  headerNav.addEventListener('click', () => {
    if (headerNav.classList.contains('header__nav--closed')) {
      headerNav.classList.remove('header__nav--closed');
      headerNav.classList.add('header__nav--opened');
    } else {
      headerNav.classList.add('header__nav--closed');
      headerNav.classList.remove('header__nav--opened')
    }
  });
}

export {menuToggle};
