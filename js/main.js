// Données des projets
const projects = [
    {
        title: "E-commerce",
        description: "Site e-commerce responsive avec panier d'achat",
        image: "images/project1.jpg",
        technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"]
    },
    {
        title: "Application Web",
        description: "Application web progressive avec React",
        image: "images/project2.jpg",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Site Vitrine",
        description: "Site vitrine pour restaurant local",
        image: "images/project3.jpg",
        technologies: ["WordPress", "CSS", "JavaScript"]
    }
];

// Charger les projets dans la grille du portfolio
function loadProjects() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        `;
        
        portfolioGrid.appendChild(projectCard);
    });
}

// Animation au défilement
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Navigation mobile
function setupMobileNav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        burger.classList.toggle('toggle');
    });
}

// Gestion du formulaire de contact
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Ici, vous pouvez ajouter le code pour envoyer les données à votre backend
        console.log('Données du formulaire:', data);
        
        // Réinitialiser le formulaire et afficher un message de confirmation
        form.reset();
        alert('Merci pour votre message ! Je vous recontacterai bientôt.');
    });
}

// Navigation fluide
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupMobileNav();
    handleContactForm();
    setupSmoothScroll();
    
    // Animation au défilement
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Vérifier les éléments visibles au chargement
});
