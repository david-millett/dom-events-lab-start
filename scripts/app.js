// * Read the instructions inside the readme file carefully

// * Remember to "go live" below. The browser will automatically reload when you save your code.

function init() {

  // ? Task 1

const toggleButtonElement = document.querySelector('#toggle');
const circleElement = document.querySelector('.circle');

toggleButtonElement.addEventListener('click', () => {
  circleElement.classList.toggle('pulse');
});

  // ? Task 2

const cityDropdownElement = document.querySelector('#cities');
const currentCityElement = document.querySelector('#city');

cityDropdownElement.addEventListener('change', () => {
  currentCityElement.textContent = cityDropdownElement.value;
});
  
  //  ? Task 3

const nameElements = document.querySelectorAll('.name');
const currentName = document.querySelector('#current');

nameElements.forEach(nameElement => {
  nameElement.addEventListener('mouseover', () => {
    currentName.textContent = nameElement.textContent;
  })
  nameElement.addEventListener('mouseleave', () => {
    currentName.textContent = '';
  })
});

  // ? Task 4

const subscribeElement = document.querySelector('#subscribe');
const submitButtonElement = document.querySelector('.submit');

subscribeElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitButtonElement.classList.add('submitted');
  submitButtonElement.innerHTML = 'Submitted!';
})

  // ? Task 5

const mainHeadingElement = document.querySelector('h1');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    mainHeadingElement.classList.add('fadeOutUp')
  } 
  else {
    mainHeadingElement.classList.remove('fadeOutUp')
  }
})

}

window.addEventListener('DOMContentLoaded', init)
