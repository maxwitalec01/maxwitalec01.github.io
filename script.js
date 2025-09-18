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
var educationDiv = document.getElementById("education");


// Initialize the divs to be hidden except for the first one
aboutMeDiv.style.display = "block";
workExperienceDiv.style.display = "none";
projectsDiv.style.display = "none";
educationDiv.style.display = "none";



function toggleVisibility(elementId) {
  console.log('Toggle visibility for:', elementId);

  // Get references to the div elements
  var aboutMeDiv = document.getElementById('about_me');
  var workExperienceDiv = document.getElementById('work_experience');
  var projectsDiv = document.getElementById('projects');
  var educationDiv = document.getElementById('education')



  // Remove the fade-in class from all sections
  aboutMeDiv.classList.remove('fade-in');
  workExperienceDiv.classList.remove('fade-in');
  projectsDiv.classList.remove('fade-in');
  educationDiv.classList.remove('fade-in');

  // Add the fade-out class to all sections
  aboutMeDiv.classList.add('fade-out');
  workExperienceDiv.classList.add('fade-out');
  projectsDiv.classList.add('fade-out');
  educationDiv.classList.add('fade-out');

  // Hide all sections after the fade-out animation completes
  setTimeout(() => {
    aboutMeDiv.style.display = 'none';
    workExperienceDiv.style.display = 'none';
    projectsDiv.style.display = 'none';
    educationDiv.style.display = 'none';

    // Remove the fade-out class
    aboutMeDiv.classList.remove('fade-out');
    workExperienceDiv.classList.remove('fade-out');
    projectsDiv.classList.remove('fade-out');
    educationDiv.classList.remove('fade-out');

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



document.addEventListener('DOMContentLoaded', function() {
  var currentYear = 1; 
  var maxYear = 3; 
  var isAnimating = false;

  var gradeData = {
      1: [
          { course: "Software Development 1", grade: "B+" },
          { course: "Computer Architecture", grade: "B" },
          { course: "Visual Design & User Exp", grade: "A" },
          { course: "Business & Information Sys", grade: "B+" },
          { course: "Discrete Mathematics 1", grade: "B" },
          { course: "Critical Skills Development", grade: "B" },
          { course: "Software Development 2", grade: "C+" },
          { course: "Systems Analysis", grade: "C+" },
          { course: "Social Media Communications", grade: "B+" },
          { course: "Statistics", grade: "C+" },
          { course: "Database Fundamentals", grade: "B+" },
          { course: "Operating Syst Fundamentals", grade: "B" },
          
      ],
      2: [
          { course: "Software Development 3", grade: "B" },
          { course: "Software Qual Ass & Testing", grade: "B" },
          { course: "Network Fundementals", grade: "B+" },
          { course: "Adv Database Technologies", grade: "B+" },
          { course: "Discrete Mathematics 2", grade: "A" },
          { course: "Client side Web Development", grade: "C+" },
          { course: "Software Development 4", grade: "C+" },
          { course: "Routing & Switching", grade: "B" },
          { course: "Management Science", grade: "B+" },
          { course: "Database Admin & Analysis", grade: "B" },
          { course: "Information Security", grade: "B" },
          { course: "Project", grade: "B" },
          
      ],
      3:[
        { course: "Server-side Web Development", grade: "B-" },
        { course: "Operating Systems", grade: "B-" },
        { course: "Cloud Service & Distrib Comp", grade: "C" },
        { course: "Big Data Technologies", grade: "B-" },
        { course: "Data Structures & Algorithms", grade: "B+" },
        { course: "Data Analysis", grade: "C" },
        { course: "EXPERIENTAL LEARNING", grade: "PASS" },

      ]

  };


  var table = document.querySelector('.grade-table');
  var tableBody = table.querySelector('tbody');
  var yearDisplay = document.getElementById('yearDisplay');

  function updateTable(year, animate = false) {
      if(isAnimating) return; // Prevent animation if one is already in progress
      isAnimating = true;

      // Update the year display
      yearDisplay.innerText = `Year ${year}`;

      function handleAnimationEnd() {
          if (animate) {
              // Clear existing table data after fade-out
              tableBody.innerHTML = '';
              table.classList.remove('fade-out');

              // Populate table with new data
              gradeData[year].forEach(function(item) {
                  var row = `<tr><td>${item.course}</td><td>${item.grade}</td></tr>`;
                  tableBody.innerHTML += row;
              });

              // Apply fade-in animation to the whole table
              table.classList.add('fade-in');
          } else {
              // Immediate update without animation
              tableBody.innerHTML = '';
              gradeData[year].forEach(function(item) {
                  var row = `<tr><td>${item.course}</td><td>${item.grade}</td></tr>`;
                  tableBody.innerHTML += row;
              });
              isAnimating = false;
          }
      }

      if (animate) {
          // Apply fade-out animation to the whole table
          table.classList.add('fade-out');
          table.addEventListener('animationend', handleAnimationEnd, { once: true });
      } else {
          handleAnimationEnd();
      }
  }

  // Reset the animation flag after fade-in
  table.addEventListener('animationend', function() {
      if (table.classList.contains('fade-in')) {
          table.classList.remove('fade-in');
          isAnimating = false;
      }
  });

  // Event listeners for buttons
  document.getElementById('prevYear').addEventListener('click', function() {
      if (currentYear > 1 && !isAnimating) {
          currentYear--;
          updateTable(currentYear, true);
      }
  });

  document.getElementById('nextYear').addEventListener('click', function() {
      if (currentYear < maxYear && !isAnimating) {
          currentYear++;
          updateTable(currentYear, true);
      }
  });

  // Initialize table with the first year without animation
  updateTable(currentYear);
});