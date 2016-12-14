
var siteNav = document.querySelector('.site-nav')
var siteNavButton = document.querySelector('.site-nav-button')

siteNavButton.addEventListener('click', toggleSiteNav)
siteNavButton.addEventListener('touchstart', toggleSiteNav)


function toggleSiteNav (argument) {
  siteNav.classList.toggle('active')
}

