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

/***** Timeline Animation for Blocks - Source Code:https://codepen.io/codyhouse/pen/OJgRvj *****/ 
document.addEventListener("DOMContentLoaded", function() {
  var timelineBlocks = document.querySelectorAll(".timeline-block");

  // hide timeline blocks which are outside the viewport
  timelineBlocks.forEach(function(block) {
    if (block.getBoundingClientRect().top > window.innerHeight * 0.75) {
      block.querySelectorAll('.timeline-icon, .timeline-content').forEach(function(elem) {
        elem.classList.add('is-hidden');
      });
    }
  });

  // on scrolling, show/animate timeline blocks when enter the viewport
  window.addEventListener("scroll", function() {
    timelineBlocks.forEach(function(block) {
      if (block.getBoundingClientRect().top <= window.innerHeight * 0.75 && block.querySelector('.timeline-icon').classList.contains('is-hidden')) {
        block.querySelectorAll('.timeline-icon, .timeline-content').forEach(function(elem) {
          elem.classList.remove('is-hidden');
          elem.classList.add('bounce-in');
        });
      }
    });
  });
});
/* Some Further Guides which helped me were:
https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect */

