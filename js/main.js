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

// Configuration de la toile d'araignée
class SpiderWeb {
    constructor() {
        this.canvas = document.getElementById('spider-web');
        this.ctx = this.canvas.getContext('2d');
        this.points = [];
        this.maxPoints = 50;
        this.connectionRadius = 150;
        this.mousePosition = { x: 0, y: 0 };
        this.pointLifespan = 50;

        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        this.setupEventListeners();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
            
            if (this.points.length < this.maxPoints) {
                this.addPoint(e.clientX, e.clientY);
            }
        });
    }

    addPoint(x, y) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1;
        
        this.points.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: this.pointLifespan
        });
    }

    drawWeb() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = this.points.length - 1; i >= 0; i--) {
            const point = this.points[i];
            
            point.x += point.vx;
            point.y += point.vy;
            point.life--;

            if (point.life <= 0) {
                this.points.splice(i, 1);
                continue;
            }

            for (let j = i + 1; j < this.points.length; j++) {
                const otherPoint = this.points[j];
                const dx = otherPoint.x - point.x;
                const dy = otherPoint.y - point.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionRadius) {
                    const opacity = (1 - distance / this.connectionRadius) * 
                                  (point.life / this.pointLifespan) * 
                                  (otherPoint.life / this.pointLifespan);
                    
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(point.x, point.y);
                    this.ctx.lineTo(otherPoint.x, otherPoint.y);
                    this.ctx.stroke();
                }
            }

            const pointOpacity = point.life / this.pointLifespan;
            this.ctx.beginPath();
            this.ctx.fillStyle = `rgba(255, 255, 255, ${pointOpacity})`;
            this.ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    animate() {
        this.drawWeb();
        requestAnimationFrame(() => this.animate());
    }
}

// Effet machine à écrire
function typeWriter(text, element, speed = 25) {
    let i = 0;
    element.innerHTML = '<span class="typed-text"></span><span class="cursor">|</span>';
    const typedText = element.querySelector('.typed-text');
    
    function type() {
        if (i < text.length) {
            typedText.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Gestion de la navigation
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser l'effet machine à écrire
    const typewriterText = "En reconversion professionnelle, je me forme aux métiers du code et de la cybersécurité. Passionné par la protection des systèmes et la sécurité informatique, je cherche à mettre mes compétences au service de votre entreprise.";
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
        typeWriter(typewriterText, typewriterElement);
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    const changeSection = (sectionId) => {
        sections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        const targetSection = document.getElementById(sectionId);
        const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
        
        if (targetSection && targetLink) {
            targetSection.classList.add('active');
            targetLink.classList.add('active');

            // Réinitialiser l'effet machine à écrire si on revient à l'accueil
            if (sectionId === 'accueil') {
                typewriterElement.innerHTML = '<span class="typed-text"></span><span class="cursor">|</span>';
                typeWriter(typewriterText, typewriterElement);
            }
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            changeSection(sectionId);
        });
    });

    document.addEventListener('keydown', (e) => {
        const currentSection = document.querySelector('.section.active');
        const currentIndex = Array.from(sections).indexOf(currentSection);
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            const nextIndex = (currentIndex + 1) % sections.length;
            const nextSection = sections[nextIndex].id;
            changeSection(nextSection);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
            const prevSection = sections[prevIndex].id;
            changeSection(prevSection);
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message envoyé !');
        contactForm.reset();
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupMobileNav();
    setupSmoothScroll();
    
    // Animation au défilement
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Vérifier les éléments visibles au chargement
});
