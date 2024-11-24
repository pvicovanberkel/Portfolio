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

    // Typing effect
    try {
        const typed = new Typed('#typed-text', {
            strings: ['¡Hi I\'m Pablo Vico van Berkel!^1000', 'Data Scientist^1000'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            smartBackspace: true
        });
    } catch (error) {
        console.error('Typed.js initialization failed:', error);
    }
    
    // Scroll progress bar
    window.onscroll = function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.querySelector(".progress-bar").style.width = scrolled + "%";
    };

    // Add smooth scrolling to navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});