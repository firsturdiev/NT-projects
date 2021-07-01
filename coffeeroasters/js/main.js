//  menu

const elMenuToggle = document.querySelector(".menu");
const elMenu = document.querySelector(".sitenav");

elMenuToggle.addEventListener("click", function () {
  elMenu.classList.toggle("sitenav--open");
});

// accordion

let elsOptionToggle = document.querySelectorAll(".option__toggle");

elsOptionToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.closest(".option").classList.toggle("option--open");
  });
});

// modal

let elModalOpen = document.querySelector(".order__btn");
let elModal = document.querySelector(".subscribe__modal");
let elModalInner = document.querySelector(".modal__inner");

elModalOpen.addEventListener("click", (e) => {
  e.preventDefault();
  elModal.classList.add("modal--open");
});

window.addEventListener("click", (e) => {
  if (e.target === elModal) {
    elModal.classList.remove("modal--open");
  }
});

if (elModal.classList.contains("modal--open")) {
  window.alert("wrcjc");
}
