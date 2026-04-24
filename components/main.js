document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();

    // Elements
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Navbar scroll behavior
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Hide/Show on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }

        // Appearance styles
        if (currentScrollY > 40) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        lastScrollY = currentScrollY;
        highlightActiveLink();
    });

    const sections = document.querySelectorAll('section[id]');
    const navA = navLinks.querySelectorAll('a');

    function highlightActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navA.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    }

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon based on state
        if (navLinks.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '<i data-lucide="x"></i>';
        } else {
            mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
        }
        lucide.createIcons();
    });

    // Close mobile menu on link click
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
                lucide.createIcons();
            }
        });
    });

    // Intersection Observer for scroll animations
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Back to Top functionality
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
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
    }
});
