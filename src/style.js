


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند الضغط على أي رابط
    navLinks.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});




// This is optional code for a number counting effect
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.country-card p');
    
    const animateCounter = (element) => {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        let count = 0;
        const speed = 200; // Adjust speed as needed
        const increment = target / speed;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                element.textContent = `${Math.ceil(count).toLocaleString()} user`;
                setTimeout(updateCount, 1);
            } else {
                element.textContent = `${target.toLocaleString()} user`;
            }
        };

        updateCount();
    };

    counters.forEach(animateCounter);
});

