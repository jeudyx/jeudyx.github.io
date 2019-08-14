
var siteNav = document.querySelector('.site-nav')
var siteNavButton = document.querySelector('.site-nav-button')
var versionSelect = document.querySelector('#api_version')
var docsSourceSelect = document.querySelector('#docs_source')
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

function handleDocsSourceChange (evt) {
  console.log(evt.target.value);
  if (evt.target.value === 'uacf') {
    window.location = '/docs';
  }
}

function initActiveClass () {
  const path = window.location.pathname
  if (path.match(/^\/docs/)) { siteNav.classList.add('docs') }
  if (path.match(/^\/blog/)) { siteNav.classList.add('blog') }
  if (path.match(/^\/signup/)) { siteNav.classList.add('signup') }
}

document.addEventListener('DOMContentLoaded', function () {
  if (siteNavButton) {
    siteNavButton.addEventListener('click', toggleSiteNav)
  }

  if (versionSelect) {
    versionSelect.addEventListener('change', handleVersionChange)
  }

  if (docsSourceSelect) {
    versionSelect.addEventListener('change', handleDocsSourceChange)
  }

  if (sideNav) {
    var pattern = /\?version\=(\w+)/
    var qs = window.location.search
    var override = qs.match(pattern)
    var version = 'v71' // default

    if (override && override[1]) {
      version = override[1]
    }

    sideNav.classList.add(version)
  }

  initActiveClass()
})
