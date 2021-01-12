const header = document.querySelector('header');
const menuBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('.btn-close');
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', (event) => {
   const scrollDown = window.scrollY;
   const headerHeight = header.clientHeight;

   if (scrollDown > headerHeight) {
      header.classList.add('fixed-top');
   } else {
      header.classList.remove('fixed-top');
   }
});

function showMobileNav() {
   mobileNav.classList.add('show');
   header.classList.add('hidden');
   header.classList.remove('visible');
}

function hideMobileNav() {
   mobileNav.classList.remove('show');
   header.classList.remove('hidden');
   header.classList.add('visible');
}

menuBtn.addEventListener('click', showMobileNav);
closeBtn.addEventListener('click', hideMobileNav);