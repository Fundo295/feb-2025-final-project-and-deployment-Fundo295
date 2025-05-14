// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image gallery modal (would need additional HTML/CSS)
    const images = document.querySelectorAll('.image-gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            // In a real implementation, this would open a modal
            alert('Image clicked: ' + this.alt);
        });
    });

    // Current year for footer
    document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Nature's Wonders. All rights reserved.`;
});