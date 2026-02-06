// Menu Toggle Functionality
const menuToggle = document.getElementById(‘menuToggle’);
const sideMenu = document.getElementById(‘sideMenu’);
const closeMenu = document.getElementById(‘closeMenu’);
const menuItems = document.querySelectorAll(’.menu-items a’);

// Open menu
menuToggle.addEventListener(‘click’, () => {
sideMenu.classList.add(‘active’);
});

// Close menu
closeMenu.addEventListener(‘click’, () => {
sideMenu.classList.remove(‘active’);
});

// Close menu when clicking on menu items
menuItems.forEach(item => {
item.addEventListener(‘click’, () => {
sideMenu.classList.remove(‘active’);
});
});

// Close menu when clicking outside
document.addEventListener(‘click’, (e) => {
if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
sideMenu.classList.remove(‘active’);
}
});

// Smooth Scrolling for anchor links
document.querySelectorAll(‘a[href^=”#”]’).forEach(anchor => {
anchor.addEventListener(‘click’, function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute(‘href’));

```
    if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});
```

});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector(’.navbar’);

window.addEventListener(‘scroll’, () => {
const currentScroll = window.pageYOffset;

```
if (currentScroll > 100) {
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
} else {
    navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
}

lastScroll = currentScroll;
```

});

// Add animation on scroll for elements
const observerOptions = {
threshold: 0.1,
rootMargin: ‘0px 0px -50px 0px’
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = ‘1’;
entry.target.style.transform = ‘translateY(0)’;
}
});
}, observerOptions);

// Observe sections for animation
document.querySelectorAll(’.principle, .area-card’).forEach(el => {
el.style.opacity = ‘0’;
el.style.transform = ‘translateY(20px)’;
el.style.transition = ‘opacity 0.6s ease, transform 0.6s ease’;
observer.observe(el);
});
