const navToggle = document.querySelector('.nav-toggle');
const listLinks = document.querySelector('.list-links');
const menuIcon = document.querySelector('.nav-toggle i');

navToggle.addEventListener('click', () => {
  listLinks.classList.toggle('show-links');
  menuIcon.classList.toggle('fa-times');
  menuIcon.classList.toggle('fa-bars');
});

