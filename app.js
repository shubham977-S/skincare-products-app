// app.js: Handles mobile navigation toggle and Buy Now button interactions

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const buyBtns = document.querySelectorAll('.buy-btn');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = this.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    });

    // Buy Now button interactions
    buyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productCard = btn.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            alert(productName + ' added to cart!');

            // Visual feedback
            btn.textContent = 'Added!';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Buy Now';
                btn.disabled = false;
            }, 2000);
        });
    });
});