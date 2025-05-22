document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("hgmQEjdqZgMRqxaKx"); // Your EmailJS User ID

    // Theme Management
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const themeButtons = document.querySelectorAll('.theme-btn');
    const moonIcon = document.querySelector('.theme-toggle .fa-moon');
    const sunIcon = document.querySelector('.theme-toggle .fa-sun');
    
    // Check for saved theme preference or use glitchcore theme as default
    const savedTheme = localStorage.getItem('theme') || 'glitchcore-theme';
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
    updateActiveThemeButton(savedTheme);
    
    // Theme toggle button
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('glitchcore-theme')) {
            switchTheme('light-theme');
        } else if (body.classList.contains('light-theme')) {
            switchTheme('glitchcore-theme');
        } else {
            // Handle other themes
            const currentTheme = Array.from(body.classList).find(className => className.endsWith('-theme'));
            if (currentTheme) {
                switchTheme('glitchcore-theme');
            }
        }
    });
    
    // Theme selector buttons
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            switchTheme(theme);
        });
    });
    
    function switchTheme(theme) {
        // Remove all theme classes
        body.className = body.className.split(' ').filter(cls => !cls.endsWith('-theme')).join(' ');
        
        // Add selected theme
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
        
        // Update UI
        updateThemeIcon(theme);
        updateActiveThemeButton(theme);
    }
    
    function updateThemeIcon(theme) {
        if (theme === 'glitchcore-theme') {
            moonIcon.style.opacity = '1';
            sunIcon.style.opacity = '0';
        } else if (theme === 'light-theme') {
            moonIcon.style.opacity = '0';
            sunIcon.style.opacity = '1';
        }
    }
    
    function updateActiveThemeButton(theme) {
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.theme === theme) {
                btn.classList.add('active');
            }
        });
    }
    
    // Cursor Effect
    const cursor = document.querySelector('.cursor');
    const rootStyles = getComputedStyle(document.documentElement);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add cursor effect to interactive elements
    const interactiveElements = document.querySelectorAll(
        'a, button, .project-card, .achievement-card, input, textarea, .skill-tag, .contact-item, .social-icon, .certification-card'
    );
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
            // Change cursor color based on theme
            if (body.classList.contains('cyberpunk-theme')) {
                cursor.style.backgroundColor = '#00ff9d';
            } else if (body.classList.contains('retro-spy-theme')) {
                cursor.style.backgroundColor = '#ff5e57';
            } else if (body.classList.contains('neon-noir-theme')) {
                cursor.style.backgroundColor = '#ff2a6d';
            } else if (body.classList.contains('cosmic-galaxy-theme')) {
                cursor.style.backgroundColor = '#9d65ff';
            } else if (body.classList.contains('glitchcore-theme')) {
                cursor.style.backgroundColor = '#ff00ff';
            } else {
                cursor.style.backgroundColor = rootStyles.getPropertyValue('--primary-color');
            }
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
            cursor.style.backgroundColor = rootStyles.getPropertyValue('--primary-color');
        });
    });
    
    // Social media hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            if (icon.classList.contains('linkedin')) {
                cursor.style.backgroundColor = '#0077b5';
            } else if (icon.classList.contains('github')) {
                cursor.style.backgroundColor = '#333';
            } else if (icon.classList.contains('twitter')) {
                cursor.style.backgroundColor = '#1da1f2';
            } else if (icon.classList.contains('instagram')) {
                cursor.style.backgroundColor = '#e1306c';
            } else if (icon.classList.contains('youtube')) {
                cursor.style.backgroundColor = '#ff0000';
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission with EmailJS
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send the email using EmailJS
            emailjs.sendForm('service_mtjvnzx', 'template_s39d9c9', this)
                .then(() => {
                    showFormMessage('success', 'Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }, (error) => {
                    console.error('EmailJS Error:', error);
                    showFormMessage('error', 'Oops! Something went wrong. Please try again later.');
                })
                .finally(() => {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
    
    function showFormMessage(type, message) {
        const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
        const messageClass = type === 'success' ? 'form-success' : 'form-error';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = messageClass;
        messageDiv.innerHTML = `
            <i class="fas ${iconClass}"></i>
            <p>${message}</p>
        `;
        
        contactForm.appendChild(messageDiv);
        setTimeout(() => messageDiv.remove(), 5000);
    }
    
    // Section animations
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElements(entry.target);
                entry.target.classList.add('animated');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    function animateElements(section) {
        const animatedElements = section.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el, index) => {
            // Reset animation
            el.style.animation = 'none';
            void el.offsetWidth; // Trigger reflow
            
            // Get animation properties
            const animationType = el.dataset.animate || 'fadeInUp';
            const delay = el.dataset.delay || `${index * 0.1}s`;
            
            // Set initial state based on animation type
            if (animationType === 'fadeInLeft') {
                el.style.transform = 'translateX(-20px)';
            } else if (animationType === 'fadeInRight') {
                el.style.transform = 'translateX(20px)';
            } else {
                el.style.transform = 'translateY(20px)';
            }
            el.style.opacity = '0';
            
            // Apply animation
            el.style.animation = `${animationType} 0.8s ease-out ${delay} forwards`;
        });
    }
    
    // Initialize section observations
    sections.forEach(section => {
        const elementsToAnimate = section.querySelectorAll('[data-animate]');
        elementsToAnimate.forEach(el => el.classList.add('animate-on-scroll'));
        sectionObserver.observe(section);
    });
    
    // Typewriter effect for hero section
    const typewriterTexts = [
        "Cybersecurity Specialist",
        "AI Engineer",
        "Python Developer",
        "Machine Learning Enthusiast"
    ];
    
    const typewriterElement = document.querySelector('.hero-content h3');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function typeWriter() {
        if (isPaused) return;
        
        const currentText = typewriterTexts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                isDeleting = true;
                typeWriter();
            }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typewriterTexts.length;
            setTimeout(typeWriter, 500);
        } else {
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Start typewriter effect after 1 second
    setTimeout(typeWriter, 1000);
    
    // Floating animation for elements
    const floatElements = document.querySelectorAll('.float-animation');
    floatElements.forEach(el => {
        const duration = el.dataset.duration || '6s';
        const delay = el.dataset.delay || '0s';
        el.style.animation = `float ${duration} ease-in-out infinite ${delay}`;
    });
});