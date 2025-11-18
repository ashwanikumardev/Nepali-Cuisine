// Cuisine of Nepal - Modern JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // HEADER & MOBILE NAVIGATION
    // ============================================
    const mainNav = document.querySelector('.main-nav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');

    if (mainNav && menuToggle) {
        const icon = menuToggle.querySelector('span');

        const toggleMenu = () => {
            const isActive = mainNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll', isActive);
            if (icon) {
                icon.textContent = isActive ? '✕' : '☰';
                icon.style.fontSize = isActive ? '2rem' : '1.5rem';
            }
            menuToggle.setAttribute('aria-expanded', isActive);
        };

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when any link inside it is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

    // ============================================
    // SMOOTH SCROLLING FOR HASH LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's a hash link on the current page
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // ============================================
    // FORM VALIDATION & NOTIFICATION
    // ============================================
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = form.querySelectorAll('[required]');
            
            inputs.forEach(input => {
                input.classList.remove('invalid');
                if (!input.value.trim() || (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value))) {
                    isValid = false;
                    input.classList.add('invalid');
                }
            });
            
            if (isValid) {
                showNotification('Thank you! Your message has been sent.', 'success');
                form.reset();
            } else {
                showNotification('Please fill in all required fields correctly.', 'error');
            }
        });
    });

    // ============================================
    // GALLERY LIGHTBOX
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (img) {
                    openLightbox(img.src);
                }
            });
        });
    }
});

// Reusable Notification System
function showNotification(message, type = 'success') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Reusable Gallery Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    
    lightbox.appendChild(img);
    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('show');
        setTimeout(() => lightbox.remove(), 300);
    });
    
    document.body.appendChild(lightbox);
    document.body.classList.add('no-scroll');
    
    setTimeout(() => lightbox.classList.add('show'), 10);

    lightbox.addEventListener('transitionend', () => {
        if (!lightbox.classList.contains('show')) {
            document.body.classList.remove('no-scroll');
        }
    });
}
