const elCourseInfo = document.querySelector('.course-review');
const elCourseInfoToggle = document.querySelector('.course-review__toggle');

elCourseInfoToggle.addEventListener('click', (e) => {
  e.preventDefault();

  elCourseInfo.classList.add('course-review--open');
});
