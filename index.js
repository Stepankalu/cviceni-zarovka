console.log('funguju!');

const bulbElm = document.querySelector('.bulb');
document.addEventListener('keydown', () => {
  bulbElm.classList.toggle('bulb--on');
});  