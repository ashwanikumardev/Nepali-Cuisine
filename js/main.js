// Cuisine of Nepal - Modern JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // HEADER & MOBILE NAVIGATION
    // ============================================
    const headerContent = document.querySelector('.header-content');
    const mainNav = document.querySelector('.main-nav');
    const desktopCta = document.querySelector('.header-content .cta-buttons');

    if (headerContent && mainNav) {
        // Ensure mobile toggle button exists
        let menuToggle = document.querySelector('.mobile-menu-toggle');
        if (!menuToggle) {
            menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.setAttribute('aria-label', 'Toggle Menu');
            menuToggle.innerHTML = '<span>☰</span>';
            
            const headerActions = document.createElement('div');
            headerActions.className = 'header-actions';
            headerActions.appendChild(menuToggle);
            headerContent.appendChild(headerActions);
        }

        // Clone CTA buttons for the mobile menu if they don't exist
        if (desktopCta && !mainNav.querySelector('.mobile-cta-container')) {
            const mobileCtaContainer = document.createElement('div');
            mobileCtaContainer.className = 'mobile-cta-container';
            
            const clonedButtons = desktopCta.cloneNode(true);
            Array.from(clonedButtons.children).forEach(button => {
                mobileCtaContainer.appendChild(button);
            });
            
            mainNav.appendChild(mobileCtaContainer);
        }

        const icon = menuToggle.querySelector('span');

        const toggleMenu = () => {
            const isActive = mainNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll', isActive);
            if (icon) {
                icon.textContent = isActive ? '✕' : '☰';
                icon.style.fontSize = isActive ? '2rem' : '1.5rem';
            }
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
                showNotification('Thank you! Your message has been sent.', 'success');
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
        z-index: 10001;
        transform: translateX(120%);
        transition: transform 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(120%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

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
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 10px;';
    
    lightbox.appendChild(img);
    lightbox.addEventListener('click', () => {
        lightbox.style.opacity = '0';
        setTimeout(() => lightbox.remove(), 300);
    });
    
    document.body.appendChild(lightbox);
    setTimeout(() => lightbox.style.opacity = '1', 10);
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
