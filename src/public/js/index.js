import anime from '/animejs/anime.es.js';

window.addEventListener('load', ()=>{
    const nombre = document.getElementById('name');
    anime({
        targets: ['#name'],
        points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
        baseFrequency: 0,
        scale: 1,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutExpo'
      });
})