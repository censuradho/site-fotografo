const tl = new TimelineMax();


// Animação do Header
tl
  .from('nav', .5, { y: '-100%', ease: Power1.easeOut })
  .to('.rect1', .5, { rotation: -45, y: 5})
  .to('.rect2', .5, { rotation: 45 })
  .staggerFrom('header ul li', .5, { opacity: 0,x: -50, ease: Power1.easeInOut } , .5)
tl.reverse()

document.querySelector('header button')
  .addEventListener('click', () => {
    tl.reversed(!tl.reversed())
  });

const navLinks = document.querySelectorAll('header nav a')

navLinks.forEach( e => {
  e.addEventListener('click', () => {
    tl.reversed(!tl.reversed())
  });
})

// formulario

const inputs = document.querySelectorAll('input');
const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()
  alert("I will contact you soon :)")
})
inputs.forEach( e => {
  e.addEventListener('change', e => hadleChange(e) )
})

function hadleChange(e) {
  e.target.value.length > 0
  ? e.target.classList.add('notEmpty')
  : e.target.classList.remove('notEmpty')
}

// animação formulario

const tlForm = new TimelineMax()

tlForm
  .to('form button', 1, {  autoAlpha: 1 })
  .from('h2', 1, { y: 20, autoAlpha: 0 })
  .staggerFrom(inputs, 1, { y: 20, autoAlpha: 0 }, .5)