
var siteNav = document.querySelector('.site-nav')
var siteNavButton = document.querySelector('.site-nav-button')
var versionSelect = document.querySelector('#api_version')
var sideNav = document.querySelector('.sidenav')

function toggleSiteNav (argument) {
  siteNav.classList.toggle('active')
}

function handleVersionChange (evt) {
  var version = evt.target.value
  sideNav.classList.remove('v71', 'v70', 'v01', 'v02', 'vx')
  sideNav.classList.add(version)
}

function initSideNav () {
  var defaultVersion = 'v71'
  sideNav.classList.add(stored || defaultVersion)
}

siteNavButton.addEventListener('click', toggleSiteNav)
siteNavButton.addEventListener('touchstart', toggleSiteNav)
versionSelect.addEventListener('change', handleVersionChange)

document.addEventListener('DOMContentLoaded', initSideNav)
