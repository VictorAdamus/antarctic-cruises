const checkboxChecked = () => {
  const button = document.querySelector('.form__button');
  const messageError = document.querySelector('.form__checkbox-error');
  const checkbox = document.querySelector('.form__checkbox');

  const checkboxHandler = () => {
    if (checkbox.checked) {
      messageError.classList.remove('form__checkbox-error--show');
      button.disabled = false;
    } else {
      messageError.classList.add('form__checkbox-error--show');
      button.disabled = true;
    }
  };
  checkbox.addEventListener('change', checkboxHandler);
};

export {checkboxChecked};
