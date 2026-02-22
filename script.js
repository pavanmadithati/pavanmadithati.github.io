document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Typewriter Effect for Hero
    const heroTitle = document.getElementById('hero-title');
    const cursor = document.querySelector('.cursor');
    const textToType = "whoami --professional";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            heroTitle.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            // Add a completion line after a short delay
            setTimeout(() => {
                const terminalBody = document.getElementById('terminal-content');
                const resultLine = document.createElement('div');
                resultLine.className = 'command-result';
                resultLine.style.color = '#27c93f';
                resultLine.style.marginTop = '0.5rem';
                resultLine.textContent = '> initializing_secure_access... [SUCCESS]';
                terminalBody.appendChild(resultLine);

                // Hide cursor after completion if desired, or keep blinking
                // cursor.style.display = 'none';
            }, 500);
        }
    }

    // Start typewriter after a small delay
    setTimeout(typeWriter, 1000);

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.glass-card, .timeline-item, .section-title');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#fff';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid hsl(var(--border))';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }
});
