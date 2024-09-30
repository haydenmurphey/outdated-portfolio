/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

let slideIndexes = {
  projectOne: 1,
  projectTwo: 1,
  projectThree: 1
};

// Show slides for Project One by default
showSlides(slideIndexes.projectOne, 'projectOne');

showSlides(slideIndexes.projectTwo, 'projectTwo');

showSlides(slideIndexes.projectThree, 'projectThree');



// Next/previous controls for all slideshows
function plusSlides(n, project) {
  showSlides(slideIndexes[project] += n, project);
}

// Thumbnail image controls for all slideshows
function currentSlide(n, project) {
  showSlides(slideIndexes[project] = n, project);
}

function showSlides(n, project) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Get the slides and dots specific to the project
  let projectSlides = document.getElementsByClassName(project + 'Slide');
  
  if (n > projectSlides.length) {slideIndexes[project] = 1}
  if (n < 1) {slideIndexes[project] = projectSlides.length}

  // Remove "active" class from all slides for the specific project
  for (i = 0; i < projectSlides.length; i++) {
    projectSlides[i].classList.remove("active");
  }

  // Add "active" class to the current slide for the specific project
  projectSlides[slideIndexes[project] - 1].classList.add("active");

  // Optional: Handle dot visibility
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  let projectDots = Array.from(dots).slice(0, projectSlides.length); // Get corresponding dots
  projectDots[slideIndexes[project] - 1].classList.add("active");
}