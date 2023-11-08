// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('.navigator a');
// forEach(link => {
//    if(link.href.includes(`${activePage}`)){
//    link.classList.add(':active');
//    }
// })

document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
      link.setAttribute('aria-current', 'page')
    }
  })