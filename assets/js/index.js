/***** Menu open on Click *****/
document.addEventListener("DOMContentLoaded", function() {
    var navBtn = document.querySelector(".nav-btn");
    var navMenu = document.querySelector(".nav-menu");
    navBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      navBtn.classList.toggle("is-active");
      navMenu.classList.toggle("active");
    });
  
    // Close Menu if esc key pressed
    document.addEventListener("keyup", function(e) {
      if (e.key === "Escape") {
        navBtn.classList.remove("is-active");
        navMenu.classList.remove("active");
      }
    });
  });
  
  /***** Menu onClick hide Body Scroll *****/
  document.addEventListener("DOMContentLoaded", function() {
    var navBtn = document.querySelector(".nav-btn");
    navBtn.addEventListener("click", function() {
      document.body.classList.toggle("no-scroll");
    });
  
    // Restore Scroll if esc key pressed
    document.addEventListener("keyup", function(e) {
      if (e.key === "Escape") {
        document.body.classList.remove("no-scroll");
      }
    });
  });
  