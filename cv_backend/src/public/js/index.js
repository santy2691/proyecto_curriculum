const botonAbout = document.getElementById('button-about');
const botonHome = document.getElementById('button-home');
const botonPortafolio = document.getElementById('button-skills');
const divHome = document.getElementById('home');
const divAbout = document.getElementById('about');


botonHome.addEventListener('click', ()=>{
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth'
  });
})

divHome.addEventListener('wheel',(event)=>{
  event.preventDefault();
  if(event.deltaY > 0) {
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    document.querySelector('#home').scrollIntoView({
      behavior:'smooth'
    })
  }
})


divAbout.addEventListener('wheel',(e)=>{
  e.preventDefault();
  if(e.deltaY > 0) {
    document.querySelector('#skills').scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    document.querySelector('#home').scrollIntoView({
      behavior:'smooth'
    })
  }
})

botonAbout.addEventListener('click', ()=>{
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
  });
})


botonPortafolio.addEventListener('click', ()=> {
  document.querySelector('#skills').scrollIntoView({
    behavior: 'smooth'
  });
})


function scrollView(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}



