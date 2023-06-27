const navToggle = document.querySelector('.nav-toggle');
const listLinks = document.querySelector('.list-links');

navToggle.addEventListener('click', () => {
  listLinks.classList.toggle('show-links');
});
