
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
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function initActiveClass () {
  const path = window.location.pathname
  if (path.match(/^\/docs/)) { siteNav.classList.add('docs') }
  if (path.match(/^\/blog/)) { siteNav.classList.add('blog') }
  if (path.match(/^\/pricing/)) { siteNav.classList.add('pricing') }
}

document.addEventListener('DOMContentLoaded', function () {
  if (siteNavButton) {
    siteNavButton.addEventListener('click', toggleSiteNav)
  }

  if (versionSelect) {
    versionSelect.addEventListener('change', handleVersionChange)
  }

  if (sideNav) { sideNav.classList.add('v71') }

  initActiveClass()
})
