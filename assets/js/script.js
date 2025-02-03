'use strict';

// Dark mode functionality
const initDarkMode = () => {
  const darkModeToggle = document.querySelector('[data-theme-toggle]');
  const body = document.body;
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }

  darkModeToggle?.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
  });
}

// Loading spinner
const showLoadingSpinner = () => {
  const spinner = document.createElement('div');
  spinner.className = 'loading-spinner';
  document.body.appendChild(spinner);
}

const hideLoadingSpinner = () => {
  const spinner = document.querySelector('.loading-spinner');
  spinner?.remove();
}

// Enhanced form validation
const enhanceFormValidation = () => {
  const form = document.querySelector('[data-form]');
  const inputs = form?.querySelectorAll('input, textarea');

  inputs?.forEach(input => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    input.after(errorDiv);

    input.addEventListener('input', () => validateInput(input));
  });
}

const validateInput = (input) => {
  const errorDiv = input.nextElementSibling;
  let isValid = true;
  let errorMessage = '';

  if (input.type === 'email' && !input.value.includes('@')) {
    isValid = false;
    errorMessage = 'Please enter a valid email address';
  } else if (input.tagName === 'TEXTAREA' && input.value.length < 10) {
    isValid = false;
    errorMessage = 'Message must be at least 10 characters long';
  }

  errorDiv.textContent = errorMessage;
  return isValid;
}

function setInterac(){
  // element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {
    const item = filterItems[i];
      
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.remove('hidden');
      setTimeout(() => item.classList.add('active'), 10);
    } else {
      item.classList.remove('active');
      setTimeout(() => item.classList.add('hidden'), 300);
    }
  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Initialize new features
initDarkMode();
enhanceFormValidation();

}

// Add loading spinner on page load
document.addEventListener('DOMContentLoaded', () => {
  showLoadingSpinner();
  setTimeout(hideLoadingSpinner, 1000); // Hide after 1 second
});