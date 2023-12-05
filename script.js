      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Add a class to the button when it is clicked
      btn.onclick = function () {
        btn.classList.add("active");
        modal.style.display = "block";
      }

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal and remove the active class
      span.onclick = function () {
        btn.classList.remove("active");
        modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it and remove the active class
      window.onclick = function (event) {
        if (event.target == modal) {
          btn.classList.remove("active");
          modal.style.display = "none";
        }
      }

      function sig_website(i) {
        window.open("https://www.sig.com/")
      }

      function webworld_website(i) {
        window.open("https://webworld.host/")
      }

      function email_setting_website(i) {
        window.open("https://help.webworld.ie/")
      }

      function status_page_website(i) {
        window.open("http://status.webworld.ie/")
      }

      function django_website(i) {
        window.open("https://github.com/maxwitalec01/CA2")
      }

      // Get references to the div elements
      var aboutMeDiv = document.getElementById("about_me");
      var workExperienceDiv = document.getElementById("work_experience");
      var projectsDiv = document.getElementById("projects");
      console.log(projectsDiv)

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
  }, 1000); // Adjust the timeout duration to match the animation duration

  // Log the visibility status
  console.log('Visibility status:', elementId, 'display: block');
}
  