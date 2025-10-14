// Mobile Navigation - Removed since nav-links were removed from HTML

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Mobile menu functionality removed
        }
    });
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to navigation links on scroll
    const sections = document.querySelectorAll('section');
    // Navigation items removed since nav-links were removed
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');

    // Debug: Check if elements exist
    console.log('Header element:', header);
    console.log('Hero element:', hero);
    console.log('Hero height:', hero ? hero.offsetHeight : 'Hero not found');

    // Test: Add click handler to test header animation
    document.addEventListener('click', function() {
        console.log('Click detected - toggling header');
        header.classList.toggle('visible');
    });

    window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Navigation active state removed since nav-links were removed

    // Apple-style header behavior: show header when scrolled past hero section
    if (hero && header) {
        const heroHeight = hero.offsetHeight;
        const scrollThreshold = heroHeight * 0.8; // Show header when 80% past hero
        
        console.log('Scroll Y:', window.scrollY, 'Hero Height:', heroHeight, 'Threshold:', scrollThreshold);
        
        if (window.scrollY > scrollThreshold) {
            header.classList.add('visible');
            console.log('Header should be visible');
        } else {
            header.classList.remove('visible');
            console.log('Header should be hidden');
        }
    }
    });
}); // Close DOMContentLoaded

// Add animation to elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and project cards
document.querySelectorAll('section, .project-card').forEach(element => {
    observer.observe(element);
});

// Mobile navigation CSS removed since nav-links were removed from HTML 