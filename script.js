document.addEventListener('DOMContentLoaded', function() {
  // Simple form submission handler
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();  // Prevent default form submission
          alert("Thank you for your message!");
          // You can add actual form submission logic here (e.g., using fetch or XMLHttpRequest)
      });
  }

  // Get the rolling content element
  const rollingContent = document.querySelector('.rolling-content');

  if (rollingContent) {
      // Pause the animation when mouse enters
      rollingContent.addEventListener('mouseenter', () => {
          rollingContent.style.animationPlayState = 'paused';
      });

      // Resume the animation when mouse leaves
      rollingContent.addEventListener('mouseleave', () => {
          rollingContent.style.animationPlayState = 'running';
      });
  }
});
