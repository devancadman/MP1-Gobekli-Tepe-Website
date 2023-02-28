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

// Ref https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    navParent.classList.remove('nav--active');
    document.body.style.overflow = ''; // Restore page scroll
  }
});


/***** Show the Sticky-nav after a user has scrolled 450px  - but amended to pure JS *****/ 
/* Source Code/Idea from - https://codepen.io/Aurelian/pen/GZyaxK?editors=0110 */
window.addEventListener('scroll', function() {
    var height = window.pageYOffset;
    var stickyNav = document.querySelector('.sticky-nav');
    
    if (height >= 450) { /* Specify Scroll Amount before nav shows */
      stickyNav.classList.add('show');
    } else {
      stickyNav.classList.remove('show');
    }
  });

/***** Timeline Animation for Blocks - Source Code:https://codepen.io/codyhouse/pen/OJgRvj  - but amended to pure JS *****/ 
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


/* Source - https://stackoverflow.com/questions/14004117/create-div-and-append-div-dynamically*/
window.addEventListener('load', function() {
  /*Add back to top button*/
  const toastBackToTop = document.createElement('div');
  toastBackToTop.classList.add('back-to-top');
  document.body.appendChild(toastBackToTop);

  /* Show and hide button based on scroll location - Source: https://stackoverflow.com/questions/28547200/show-hide-menu-based-on-scroll-position & https://codepen.io/matthewcain/pen/ZepbeR*/
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 20) {
          toastBackToTop.classList.add('show');
      } else {
          toastBackToTop.classList.remove('show');
      }
  });

  /* Functionality to take user back to the top of the site */
  document.body.addEventListener('click', function(event) {
      if (event.target.classList.contains('back-to-top')) {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      }
  });

  /*Scroll to anchor when clicking a button with an anchor - helpfull ref: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link & https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2*/
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener('click', function(event) {
          const link = event.target.getAttribute('href');
          if (link.indexOf('#') > -1) {
              const rawLink = link.split('#')[0];
              const hash = link.split('#')[1];
              const pageUrl = window.location.href.split('#')[0];
              if (rawLink == pageUrl || rawLink == '') {
                  event.preventDefault();
                  const targetElement = document.getElementById(hash);
                  if (targetElement) {
                      const hashPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({
                          top: hashPosition,
                          behavior: 'smooth'
                      });
                  }
              }
          }
      });
  }
});
