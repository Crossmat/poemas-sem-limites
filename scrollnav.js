window.addEventListener("scroll", function(){
    let nav = document.querySelector('#nav')
    nav.classList.toggle('scrollnav', window.scrollY > 500)
  })


