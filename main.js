// Get Button Element
const buttonElement = document.querySelector('.nav__toggle');
//Add Event Listener
const navigationMenu = document.querySelector('#nav');
buttonElement.addEventListener('click', () => {
  if (navigationMenu.classList.contains('nav--visible') === false) {
    document.querySelector('#nav').classList.add('nav--visible');
  } else if (navigationMenu.classList.contains('nav--visible') === true) {
    document.querySelector('#nav').classList.remove('nav--visible');
  }
});