const navToggle = document.querySelector('.nav-toggle');
const listLinks = document.querySelector('.list-links');

navToggle.addEventListener('click', () => {
  console.log('first');
  listLinks.classList.toggle('show-links');
});
