// Simple form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent default form submission
    alert("Thank you for your message!");
    // You can add actual form submission logic here (e.g., using fetch or XMLHttpRequest)
  });
  