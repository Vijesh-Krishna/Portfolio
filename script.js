// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Navbar functionality
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 100);
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });

    // Smooth scroll for navigation
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });
});

// Typing animation for hero section
const typedTextElement = document.getElementById('typed-text');
const texts = [
    'Front End Developer',
    'Full Stack Developer',
    'MERN Stack',
    'AI Technology Explorer',
    'Problem Solver',
    'Tech Enthusiast'
];
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000);
});

// VANTA.js background animation
if (typeof VANTA !== 'undefined') {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        color: 0x00fffc,
        backgroundColor: 0x000000,
        points: 15.00,
        maxDistance: 25.00,
        spacing: 20.00,
        showDots: true,
        showLines: true,
        lineWidth: 2.0,
        maxConnections: 20,
        minDistance: 30,
        glowColor: 0x00fff7,
        glowAmount: 1.5
    });
}

// Skill tags animation
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.addEventListener('mouseenter', () => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.style.animation = 'pulse 0.6s ease-in-out';
    });
    tag.addEventListener('animationend', () => {
        tag.style.animation = '';
    });
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) rotateX(5deg)';
        card.style.boxShadow = '0 25px 50px rgba(56, 189, 248, 0.3)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0deg)';
        card.style.boxShadow = '0 10px 30px rgba(56, 189, 248, 0.1)';
    });
});

// ✅ EmailJS Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Fill the hidden time input
    const timeInput = document.querySelector('input[name="time"]');
    if (timeInput) {
        timeInput.value = new Date().toLocaleString();
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    emailjs.sendForm('service_1u5nrmg', 'template_9zkm58b', contactForm)
        .then(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#10b981';

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            submitBtn.innerHTML = 'Failed to Send';
            submitBtn.style.background = '#ef4444';

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 2000);
        });
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 300);
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Floating Particles Effect
function createFloatingParticles() {
    const container = document.createElement('div');
    container.className = 'floating-particles';
    document.body.appendChild(container);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${5 + Math.random() * 5}s`;
        container.appendChild(particle);
    }
}
createFloatingParticles();
