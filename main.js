const navToggle = document.querySelector('.nav-toggle');
const listLinks = document.querySelector('.list-links');
const menuIcon = document.querySelector('.nav-toggle i');
const teamContainer = document.querySelector('.team-box-container');
const btnSeeMore = document.querySelector('.btn-see-more');
const btnSeeMoreSpan = document.querySelector('.btn-see-more span');
const btnSeeMoreIcon = document.querySelector('.btn-see-more i');

const data = [{
  id: 1,
  name: 'Yochai Benkler',
  image: './images/speakers/speaker-1.jpg',
  description: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  attainments: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
},
{
  id: 2,
  name: 'Kilnam Chon',
  image: './images/speakers/speaker-2.jpg',
  description: 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons.',
  attainments: 'In 2012, he was inducted into the inaugural class of the Internet Societys (ISOC) Internet Hall of Fame.',
},
{
  id: 3,
  name: 'Sohyeong Nohr',
  image: './images/speakers/speaker-3.jpg',
  description: 'Director of Art Centre Nabi and a board member of CC Korea',
  attainments: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
},
{
  id: 4,
  name: 'Julia Leda',
  image: './images/speakers/speaker-4.jpg',
  description: 'President of Young Pirates of Europe',
  attainments: 'European ingetration, political democracy and participation of youth through online as her major condemn, Redas report outlining potential changes to EU copyright law was approved by the Parliament in July.',
},
{
  id: 5,
  name: 'Lila Tretikov',
  image: './images/speakers/speaker-5.jpg',
  description: 'Executive Director of the Wikimedia Foundation',
  attainments: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag- es and used by nearly half a billion people around the world every month.',
},
{
  id: 6,
  name: 'Ryan Merkley',
  image: './images/speakers/speaker-6.jpg',
  description: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
  attainments: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement',
}];

navToggle.addEventListener('click', () => {
  listLinks.classList.toggle('show-links');
  menuIcon.classList.toggle('fa-times');
  menuIcon.classList.toggle('fa-bars');
});

const arrHtmlDesktop = data.map((el, i) => `<div class="team-box u-margin-bottom-medium">
              <div class="team-img">
                <img
                  src="./images/background/background-image-4.png"
                  alt=""
                  class="team-img-back"
                />
                <img
                  src="./images/speakers/speaker-${i + 1}.jpg"
                  alt=""
                  class="team-img-front"
                />
              </div>
              <div class="team-profile">
                <span class="team-name">${data[i].name}</span>
                <span class="team-description">${data[i].description}</span>
                <p class="team-text paragraph">${data[i].attainments}</p>
              </div>
            </div>`).join('');

const arrHtmlMobile = data.map((el, i) => {
  if (i < 2) {
    return `<div class="team-box u-margin-bottom-medium">
              <div class="team-img">
                <img
                  src="./images/background/background-image-4.png"
                  alt=""
                  class="team-img-back"
                />
                <img
                  src="./images/speakers/speaker-${i + 1}.jpg"
                  alt=""
                  class="team-img-front"
                />
              </div>
              <div class="team-profile">
                <span class="team-name">${data[i].name}</span>
                <span class="team-description">${data[i].description}</span>
                <p class="team-text paragraph">${data[i].attainments}</p>
              </div>
            </div>`;
  }
  return null;
}).join('');

function renderFeaturedTeam() {
  if (this.screen.width < 768) {
    teamContainer.innerHTML = '';
    teamContainer.insertAdjacentHTML('afterbegin', arrHtmlMobile);
  }

  if (this.screen.width >= 768) {
    teamContainer.innerHTML = '';
    teamContainer.insertAdjacentHTML('afterbegin', arrHtmlDesktop);
  }
}

window.addEventListener('load', renderFeaturedTeam);

window.addEventListener('resize', renderFeaturedTeam);

let isOpen = false;

btnSeeMore.addEventListener('click', () => {
  if (!isOpen) {
    teamContainer.innerHTML = '';
    teamContainer.insertAdjacentHTML('afterbegin', arrHtmlDesktop);
    btnSeeMoreSpan.textContent = 'Less';
    btnSeeMoreIcon.classList.toggle('fa-chevron-down');
    btnSeeMoreIcon.classList.toggle('fa-chevron-up');
    isOpen = true;
  } else {
    teamContainer.innerHTML = '';
    teamContainer.insertAdjacentHTML('afterbegin', arrHtmlMobile);
    btnSeeMoreSpan.textContent = 'More';
    btnSeeMoreIcon.classList.toggle('fa-chevron-down');
    btnSeeMoreIcon.classList.toggle('fa-chevron-up');
    isOpen = false;
  }
});