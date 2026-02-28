// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const dropdowns = document.querySelectorAll('.dropdown');

// Handle hamburger menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Handle dropdown on mobile
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Section Navigation - Show/Hide sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Show the selected section
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only handle hash links
        if (href && href.startsWith('#')) {
            e.preventDefault();
            showSection(href);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
        }
    });
});

// Handle product card clicks and back links
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link && !link.closest('.nav-menu')) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            showSection(href);
        }
    }
});

// Initialize - show home section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('#home');
});

// Smooth scroll for anchor links within sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (!anchor.classList.contains('nav-link') && !anchor.closest('.nav-menu')) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                showSection(href);
            }
        });
    }
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Add animation to founder cards on scroll
const founderCards = document.querySelectorAll('.founder-card');
founderCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Page Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Contact Form Handling (Basic validation)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (name && email && message) {
            // Create mailto link
            const subject = encodeURIComponent('Inquiry from ' + name);
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
            );
            
            // Open email client
            window.location.href = `mailto:danilafoods@gmail.com?subject=${subject}&body=${body}`;
            
            // Show success message with better instruction
            setTimeout(() => {
                const userConfirm = confirm('📧 Your email client should now open.\n\n✅ If your email app opened: Click "Send" to complete your inquiry.\n\n❌ Email didn\'t open? Click "OK" to contact us via WhatsApp instead, or "Cancel" to try again.');
                
                if (userConfirm) {
                    // Redirect to WhatsApp
                    window.open('https://wa.me/919034908692?text=Hi%20DANILA%20FOODS!%20I%27d%20like%20to%20inquire%20about%20your%20products.%20My%20details:%0AName:%20' + encodeURIComponent(name) + '%0AEmail:%20' + encodeURIComponent(email) + '%0APhone:%20' + encodeURIComponent(phone) + '%0A%0AMessage:%20' + encodeURIComponent(message), '_blank');
                }
                contactForm.reset();
            }, 1000);
        } else {
            alert('⚠️ Please fill in all required fields (Name, Email, and Message).');
        }
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll animations for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
