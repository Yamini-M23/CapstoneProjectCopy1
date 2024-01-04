$(document).ready(function() {             
    $('#loginModal').modal('show');
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    });

    
// JavaScript
function onSubmit() {
    // Get form data and perform necessary actions
    const form = document.getElementById("contact");
    const formData = new FormData(form);
  
    // You can access form data using formData object
    const plan = formData.get("plan");
    const category = formData.get("category");
    // Access other form fields as needed
  
    // Perform actions based on form data
    console.log("Form submitted with plan: " + plan + " and category: " + category);
  
    // Prevent the default form submission behavior
    return false; // To prevent the form from submitting
  }
  
  // You can also add more validation or actions as needed.
  