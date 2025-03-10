// Theme System
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.innerHTML = theme === 'dark' 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
    };

    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.getAttribute('data-theme') === 'dark'
            ? 'light' 
            : 'dark';
        setTheme(newTheme);
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Rain particle system
function createRain() {
    const rainContainer = document.createElement('div');
    rainContainer.className = 'raindrops';
    
    // Create 150 raindrops
    for (let i = 0; i < 150; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        
        // Random horizontal position and animation delay
        raindrop.style.left = `${Math.random() * 100}vw`;
        raindrop.style.animationDelay = `${Math.random() * 2}s`;
        
        rainContainer.appendChild(raindrop);
    }
    
    document.body.appendChild(rainContainer);
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initBackToTop();
    createRain();
});