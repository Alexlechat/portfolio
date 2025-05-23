// DOM Elements
const navbar = document.getElementById('navbar');
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const sections = document.querySelectorAll('.section');
const contactForm = document.querySelector('.contact-form form');

// Variables for navbar scroll behavior
let lastScrollTop = 0;
let isMouseNearNavbar = false;
let navbarHeight = navbar.offsetHeight;
let navbarTimeout;

// Navbar hover detection
const navbarHoverArea = 60; // Pixels from top where navbar should appear

// Function to show navbar
function showNavbar() {
    navbar.classList.remove('navbar-hidden');
    navbar.classList.add('navbar-visible');
}

// Function to hide navbar
function hideNavbar() {
    if (!isMouseNearNavbar) {
        navbar.classList.remove('navbar-visible');
        navbar.classList.add('navbar-hidden');
    }
}

// Detect mouse position for navbar
document.addEventListener('mousemove', (e) => {
    // If mouse is near the top of the screen
    if (e.clientY <= navbarHoverArea) {
        isMouseNearNavbar = true;
        showNavbar();
        
        // Clear any existing timeout
        clearTimeout(navbarTimeout);
    } else {
        isMouseNearNavbar = false;
        
        // Set a small delay before potentially hiding the navbar
        // to prevent it from disappearing immediately when mouse leaves
        clearTimeout(navbarTimeout);
        navbarTimeout = setTimeout(() => {
            if (window.scrollY > 100 && !isMouseNearNavbar) {
                hideNavbar();
            }
        }, 500);
    }
});

// Scroll Event for Navbar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Change navbar style based on scroll position
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        
        // Determine scroll direction
        if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
            // Scrolling DOWN and not at the top
            if (!isMouseNearNavbar) {
                hideNavbar();
            }
        } else {
            // Scrolling UP
            showNavbar();
        }
    } else {
        // At the top of the page
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        showNavbar();
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Burger Menu Toggle
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation
const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

sections.forEach(section => {
    section.classList.add('fade-in');
    appearOnScroll.observe(section);
});

// Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }
        
        // In a real application, you would send the form data to a server here
        // For this demo, we'll just show a success message
        alert('Merci pour votre message ! Je vous contacterai dès que possible.');
        
        // Reset form
        contactForm.reset();
    });
}

// Active navigation link based on scroll position
const navActive = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', navActive);

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to navigation links when clicked
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Set initial active link based on scroll position
    navActive();
});
