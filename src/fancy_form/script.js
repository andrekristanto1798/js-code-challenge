const ERRORS_MESSAGE = {
  email: 'Your email must be a valid email',
  name: 'Your name cannot be empty',
  phone: 'Your phone number length must be between 8 and 16',
  password: 'Your password must be at least 8 characters',
};

function validateEmail(email) {
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return emailRegex.test(email);
}

function validateName(name) {
  const nameRegex = /\s+/;
  return nameRegex.test(name);
}

function validatePhone(phone) {
  const phoneRegex = /\d{8,16}/;
  return phoneRegex.test(phone);
}

function validatePassword(password) {
  const eigthCharsPassword = new RegExp('^(?=.{8,})');
  return eigthCharsPassword.test(password);
}

function checkForm(checkers) {
  let errors = [];
  checkers.forEach(({ el, fn, errorMessage }) => {
    const data = el.value;
    const isCorrect = fn(data);
    if (isCorrect) {
      el.classList.remove('error');
    } else {
      el.classList.add('error');
      errors.push(errorMessage);
    }
  });
  return errors;
}

function validateSignUp(event) {
  event.preventDefault();
  const formCheckers = [
    { el: document.getElementById('input-email'), fn: validateEmail, errorMessage: ERRORS_MESSAGE.email },
    { el: document.getElementById('input-name'), fn: validateName, errorMessage: ERRORS_MESSAGE.name },
    { el: document.getElementById('input-phone'), fn: validatePhone, errorMessage: ERRORS_MESSAGE.phone },
    { el: document.getElementById('input-password'), fn: validatePassword, errorMessage: ERRORS_MESSAGE.password },
  ];
  const errors = checkForm(formCheckers);
  if (errors.length === 0) {
    return (document.location.href = '/home.html');
  }
  document.getElementById('error-messages').innerHTML = errors.join('\n');
  return -1;
}

function validateLogin(event) {
  event.preventDefault();
  const formCheckers = [
    { el: document.getElementById('input-email'), fn: validateEmail, errorMessage: ERRORS_MESSAGE.email },
    { el: document.getElementById('input-password'), fn: validatePassword, errorMessage: ERRORS_MESSAGE.password },
  ];
  const errors = checkForm(formCheckers);
  if (errors.length === 0) {
    return (document.location.href = '/home.html');
  }
  document.getElementById('error-messages').innerHTML = errors.join('\n');
  return -1;
}
