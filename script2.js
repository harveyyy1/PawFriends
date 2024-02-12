const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    // Add the class to show the register form
    wrapper.classList.add('active');
    wrapper.querySelector('.form-box.register').style.display = 'block';
    wrapper.querySelector('.form-box.login').style.display = 'none';
});

loginLink.addEventListener('click', () => {
    // Remove the class to show the login form
    wrapper.classList.remove('active');
    wrapper.querySelector('.form-box.register').style.display = 'none';
    wrapper.querySelector('.form-box.login').style.display = 'block';
});

iconClose.addEventListener('click', () => {
    // Remove the classes to hide both forms
    wrapper.classList.remove('active');
    wrapper.querySelector('.form-box.register').style.display = 'none';
    wrapper.querySelector('.form-box.login').style.display = 'block';
});

