import './style.css'

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#site-nav')
const desktop = window.matchMedia('(min-width: 1120px)')

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open))
  menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기')
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') === 'false')
})

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a')
  if (!link || desktop.matches) return

  const section = document.getElementById(link.hash.slice(1))
  if (section) section.tabIndex = -1
  setMenu(false)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false)
    menuToggle.focus()
  }
})

desktop.addEventListener('change', () => setMenu(false))

const links = [...navigation.querySelectorAll('a')]
function updateCurrentLink() {
  const currentHash = window.location.hash || '#home'
  for (const link of links) {
    if (link.hash === currentHash) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  }
}
window.addEventListener('hashchange', updateCurrentLink)
updateCurrentLink()

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  }, { threshold: 0.12 })

  for (const section of document.querySelectorAll('[data-reveal]')) observer.observe(section)
}
