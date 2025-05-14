// Menu responsive

const burgermenu = document.querySelector('#burgermenu')
const nav = document.querySelector('nav')

burgermenu.addEventListener('click', () => {
  nav.classList.toggle('active')
  burgermenu.classList.toggle('fa-xmark')
  burgermenu.classList.toggle('fa-bars')
})

window.addEventListener('scroll', () => {
  nav.classList.remove('active')
  burgermenu.classList.add('fa-bars')
  burgermenu.classList.remove('fa-xmark')
})
