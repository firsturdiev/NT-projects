//  menu

const elMenuToggle = document.querySelector(".menu");
const elMenu = document.querySelector(".sitenav");

elMenuToggle.addEventListener("click", function () {
  elMenu.classList.toggle("sitenav--open");
});

// accordion

let elsOptionToggle = document.querySelectorAll(".option__toggle");

elsOptionToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.option').classList.toggle('option--open')
  })
})
