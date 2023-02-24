/***** Toggle Nav-btn on Click and remove page scroll *****/
const navBtn = document.querySelector('.nav-btn');
const navParent = navBtn.parentElement;

navBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navParent.classList.toggle('nav--active');

  if (navParent.classList.contains('nav--active')) {
    document.body.style.overflow = 'hidden'; // Remove page scroll
  } else {
    document.body.style.overflow = ''; // Restore page scroll
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    navParent.classList.remove('nav--active');
    document.body.style.overflow = ''; // Restore page scroll
  }
});


/***** Show the Sticky-nav after a user has scrolled 450px *****/ 
window.addEventListener('scroll', function() {
    var height = window.pageYOffset;
    var stickyNav = document.querySelector('.sticky-nav');
    
    if (height >= 450) { /* Specify Scroll Amount before nav shows */
      stickyNav.classList.add('show');
    } else {
      stickyNav.classList.remove('show');
    }
  });
  