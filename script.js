var modal = document.getElementById("myModal");
var svgIcon = document.getElementById("mySvgIcon");
var span = document.getElementsByClassName("close")[0];

// Open modal when SVG icon is clicked
svgIcon.onclick = function () {
  modal.style.display = "block";
}

// Close modal and remove active class when close button is clicked
span.onclick = function () {
  modal.style.display = "none";
}

// Close modal and remove active class when clicking outside the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function sig_website(i) {
  window.open("https://www.sig.com/")
}

function webworld_website(i) {
  window.open("https://webworld.host/")
}



// Get references to the div elements
var aboutMeDiv = document.getElementById("about_me");
var workExperienceDiv = document.getElementById("work_experience");
var projectsDiv = document.getElementById("projects");
// console.log(projectsDiv)

// Initialize the divs to be hidden except for the first one
aboutMeDiv.style.display = "block";
workExperienceDiv.style.display = "none";
projectsDiv.style.display = "none";


function toggleVisibility(elementId) {
  console.log('Toggle visibility for:', elementId);

  // Get references to the div elements
  var aboutMeDiv = document.getElementById('about_me');
  var workExperienceDiv = document.getElementById('work_experience');
  var projectsDiv = document.getElementById('projects');

  // Remove the fade-in class from all sections
  aboutMeDiv.classList.remove('fade-in');
  workExperienceDiv.classList.remove('fade-in');
  projectsDiv.classList.remove('fade-in');

  // Add the fade-out class to all sections
  aboutMeDiv.classList.add('fade-out');
  workExperienceDiv.classList.add('fade-out');
  projectsDiv.classList.add('fade-out');

  // Hide all sections after the fade-out animation completes
  setTimeout(() => {
    aboutMeDiv.style.display = 'none';
    workExperienceDiv.style.display = 'none';
    projectsDiv.style.display = 'none';

    // Remove the fade-out class
    aboutMeDiv.classList.remove('fade-out');
    workExperienceDiv.classList.remove('fade-out');
    projectsDiv.classList.remove('fade-out');

    // Show the selected section with fade-in effect
    const selectedSection = document.getElementById(elementId);
    selectedSection.style.display = 'block';
    selectedSection.classList.add('fade-in');
  }, 999); // Adjusted the timeout duration to not glitch with the fade out

  // Log the visibility status
  console.log('Visibility status:', elementId, 'display: block');
}



document.addEventListener('DOMContentLoaded', function () {
  var popover1 = new bootstrap.Popover(document.getElementById('email_setting_finder'), {
    content: function () {
      return document.getElementById('email_setting_finder_content').innerHTML;
    },
    html: true,
    placement: window.innerWidth <= 1024 ? 'top' : 'auto'
  });

  var popover2 = new bootstrap.Popover(document.getElementById('network_status_page'), {
    content: function () {
      return document.getElementById('network_status_page_content').innerHTML;
    },
    html: true,
    placement: window.innerWidth <= 1024 ? 'top' : 'auto'
  });

  var popover3 = new bootstrap.Popover(document.getElementById('hotel_booking'), {
    content: function () {
      return document.getElementById('hotel_booking_content').innerHTML;
    },
    html: true,
    placement: window.innerWidth <= 1024 ? 'top' : 'auto'
  });
});

