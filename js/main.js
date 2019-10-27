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

// Animação slideshow

const tlImages = new TimelineMax({ paused: true })

const images = document.querySelectorAll('.images');

tlImages
  .staggerFrom(images, .5, { autoAlpha: 0, ease: Power1.easeInOut }, 5)


  window.addEventListener('scroll', () => {
    fadeIn('[data-animate="two"]')
    if(window.pageYOffset + 300 >= images[0].offsetTop) {
      if(tlImages.play()) {
        return
      }
  
      tlImages.play()
    }

  })

  function fadeIn(el) {
    const element = document.querySelector(el)
    const tl = new TimelineMax({ paused: true })

    tl.to(element, 1, {autoAlpha: 1, y: 0})

    if(window.pageYOffset + 600 >= element.offsetTop) {
      tl.play()
    } 
  }

  window.addEventListener('load', fadeIn('[data-animate="one"]'))

