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

// Animação imagens
const imgs = document.querySelectorAll('.gallery img')

TweenMax.staggerFrom(imgs, .4, { autoAlpha: 0 }, .5)