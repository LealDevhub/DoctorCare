window.addEventListener('scroll', onScroll)

const navigation = document.querySelector('#navigation')
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  scrollOnHome()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 55 + 0) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 650,
  reset: true
}).reveal(
  `#home ,
  #home header,
  #home .content,
  #home img,
 #home .stats,
 #services,
 #services header,
 #services header h4,
 #services header h2,
 #services .card,
 #about,
 #about header,
 #about .content,
 #about .content img,
 #about .content p,
 #contact,
 #contact header h2
 #contact .content,
 #contact .content ul,
 #contact .content .button,
 #contact .content img,
 footer,
 footer .logo,
 footer p,
 footer .social-links`
)

/*scroll nas sections */
console.log(scrollY)
function scrollOnHome() {
  const homeButton = document.querySelector('#homeButton')
  const servicesButton = document.querySelector('#servicesButton')
  const aboutButton = document.querySelector('#aboutButton')
  if (scrollY >= 0 && scrollY <= 685) {
    /*home */
    homeButton.classList.add('active')
    aboutButton.classList.remove('active')
    servicesButton.classList.remove('active')
  } else if (scrollY >= 686 && scrollY <= 1700) {
    /*services */
    aboutButton.classList.remove('active')
    homeButton.classList.remove('active')
    servicesButton.classList.add('active')
  } else if (scrollY >= 1701 && scrollY <= 2400) {
    /*Sobre */
    aboutButton.classList.add('active')
    homeButton.classList.remove('active')
    servicesButton.classList.remove('active')
  } else {
    /*contact */
    homeButton.classList.remove('active')
    servicesButton.classList.remove('active')
    aboutButton.classList.remove('active')
  }
}
