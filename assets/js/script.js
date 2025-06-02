'use strict';



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

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
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

// =============== PROJECT MODALS ===============
function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('project-modal-content');

  if (projectId === 'fez') {
    content.innerHTML = `
      <h3 class="h3">FEZ Smart Factory</h3>
      <p>Visiting a model factory in immersive experience. Understand Industry 4.0 with top infrastructure. A virtual, interactive, game-based training platform.</p>
      <ul>
        <li>Navigate through the factory</li>
        <li>Interact with 3D objects</li>
        <li>Follow the assembly process</li>
        <li>Use the Doorhandling machine</li>
        <li>Switch between scenes</li>
      </ul>
      <img src="./assets/images/project-fez.png" alt="FEZ Smart Factory" style="max-width:100%;margin-bottom:1em;">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_FEZ_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
    `;
  }

  if (projectId === 'gti') {
    content.innerHTML = `
      <h3 class="h3">VR Application for GTI Department (UM6P)</h3>
      <p>Explore the GTI building and labs in VR. Learn about equipment, programs, and meet the staff virtually.</p>
      <ul>
        <li>Navigate through rooms</li>
        <li>View lab equipment</li>
        <li>Learn about academic programs</li>
        <li>Desktop-based VR experience</li>
      </ul>
      <img src="./assets/images/project-gti.png" alt="GTI VR App" style="max-width:100%;margin-bottom:1em;">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_GTI_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
    `;
  }

  modal.classList.add('active');
  document.querySelector('.overlay').classList.add('active');
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('active');
  document.querySelector('.overlay').classList.remove('active');
}
