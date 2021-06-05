// Tabs

let elsTab = document.querySelectorAll(".tab");
let elsTabBtn = document.querySelectorAll(".tab__control");

elsTabBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    elsTab.forEach((tab) => {
      tab.classList.remove("tab--active");
    });

    btn.parentElement.classList.add("tab--active");
  });
});

// Accordion

let elsAccordionControl = document.querySelectorAll(".accordion__control");
let elsAccordionItem = document.querySelectorAll(".accordion__item");

elsAccordionControl.forEach((btn) => {
  btn.addEventListener("click", () => {
    elsAccordionItem.forEach((accordion) => {
      accordion.classList.remove("accordion__item--active");
    });

    btn.closest('li').classList.add('accordion__item--active');
  });
});
