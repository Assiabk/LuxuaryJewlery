// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Perform form validation
    if (name && email && message) {
      // Send the form data to the server or perform other actions
      console.log('Form submitted successfully!');
      // You can make an AJAX request or perform other actions here
  
      // Reset the form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      alert('Please fill in all the required fields.');
    }
  });
  