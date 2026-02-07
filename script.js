// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuItems = document.querySelectorAll('.menu-items a');
const navbar = document.getElementById('navbar');
const contactForm = document.getElementById('contactForm');

// Menu Toggle Functionality
function openMenu() {
    sideMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
    sideMenu.classList.remove('active');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
menuOverlay.addEventListener('click', closeMenuFunc);

// Close menu when clicking on menu items and smooth scroll
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenuFunc();
        
        const targetId = item.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
        closeMenuFunc();
    }
});

// Smooth Scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animatedElements = document.querySelectorAll('.principle-card, .area-card, .feature-item, .credential-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    fadeInObserver.observe(el);
});

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Get submit button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'שולח...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            showNotification('ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // In a real application, you would send this data to your server:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     showNotification('ההודעה נשלחה בהצלחה!', 'success');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     showNotification('שגיאה בשליחת ההודעה. אנא נסה שוב.', 'error');
            // })
            // .finally(() => {
            //     submitButton.textContent = originalText;
            //     submitButton.disabled = false;
            // });
        }, 1500);
    });
}

// Notification Function
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background: ${type === 'success' ? '#6b9080' : '#e74c3c'};
        color: white;
        padding: 1.2rem 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        font-weight: 500;
        opacity: 0;
        transition: all 0.3s ease;
        max-width: 90%;
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-100px)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Active Section Highlighting in Menu
const sections = document.querySelectorAll('section[id]');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionId = section.getAttribute('id');
        const menuLink = document.querySelector(`.menu-items a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            menuItems.forEach(item => item.classList.remove('active'));
            if (menuLink) {
                menuLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Parallax Effect for Hero Circles
const heroCircles = document.querySelectorAll('.hero-circle');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    heroCircles.forEach((circle, index) => {
        const speed = 0.5 + (index * 0.2);
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Phone Number Formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 3 && value.length <= 6) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        } else if (value.length > 6) {
            value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
        }
        
        e.target.value = value;
    });
}

// Lazy Loading Images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// Prevent menu from closing when clicking inside menu content (but not on links)
document.querySelector('.menu-content').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-content') || 
        e.target.closest('.menu-header') || 
        e.target.closest('.menu-footer')) {
        return;
    }
});

// Add smooth reveal for contact methods on scroll
const contactMethods = document.querySelectorAll('.contact-method');
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

contactMethods.forEach(method => {
    method.style.opacity = '0';
    method.style.transform = 'translateX(30px)';
    method.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    contactObserver.observe(method);
});

// Print current year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
}

// Console welcome message
console.log('%c אורית אביצור - פסיכותרפיסטית ', 'background: #6b9080; color: white; font-size: 20px; padding: 10px;');
console.log('%c אתר זה נבנה עם ❤️ ', 'font-size: 14px; color: #6b9080;');

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedHighlight = debounce(highlightActiveSection, 100);
window.removeEventListener('scroll', highlightActiveSection);
window.addEventListener('scroll', debouncedHighlight);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Ensure page starts at the top
    window.scrollTo(0, 0);
    
    highlightActiveSection();
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
});

// Also ensure page starts at top on page load (before DOMContentLoaded)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
