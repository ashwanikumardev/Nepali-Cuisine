// Cuisine of Nepal - Modern JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================

    // Create mobile menu toggle button
    const headerContent = document.querySelector('.header-content');
    const mainNav = document.querySelector('.main-nav');

    if (headerContent && mainNav) {
        // Check if button doesn't already exist
        if (!document.querySelector('.mobile-menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.setAttribute('aria-label', 'Toggle Menu');
            menuToggle.innerHTML = '<span>☰</span>';

            // Insert after logo
            const logo = document.querySelector('.logo');
            if (logo) {
                logo.after(menuToggle);
            }

            // Toggle menu on click
            menuToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                const icon = this.querySelector('span');
                icon.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                    mainNav.classList.remove('active');
                    const icon = menuToggle.querySelector('span');
                    if (icon) icon.textContent = '☰';
                }
            });

            // Close menu when clicking on a link
            const navLinks = mainNav.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mainNav.classList.remove('active');
                    const icon = menuToggle.querySelector('span');
                    if (icon) icon.textContent = '☰';
                });
            });
        }
    }

    // ============================================
    // SMOOTH SCROLLING
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
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
    // ACTIVE NAVIGATION
    // ============================================

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================

    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
    
    // Form Validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                showNotification('Thank you! Your submission has been received. We will contact you shortly.', 'success');
                form.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
});

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @media (max-width: 768px) {
        .main-nav ul {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--dark-red);
            padding: 1rem;
        }
        
        .main-nav ul.show {
            display: flex;
        }
    }
`;
document.head.appendChild(style);

// Gallery Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 10px;';
    
    lightbox.appendChild(img);
    lightbox.addEventListener('click', () => lightbox.remove());
    
    document.body.appendChild(lightbox);
}

// Initialize gallery items
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                openLightbox(img.src);
            }
        });
    });
});

