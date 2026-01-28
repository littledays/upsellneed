document.addEventListener('DOMContentLoaded', () => {
    const particleCount = 25; // Keep it lightweight
    const container = document.body;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
});

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random positioning and size
    const size = Math.random() * 2 + 1 + 'px'; // 1px to 3px
    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = Math.random() * 100 + 'vw';
    
    // Randomize movement dynamics
    const duration = Math.random() * 15 + 10 + 's'; // Slow float (10-25s)
    particle.style.setProperty('--duration', duration);
    particle.style.animationDelay = '-' + (Math.random() * 20) + 's'; // Start at random times
    
    // Random drift direction (slightly left or right)
    const drift = (Math.random() - 0.5) * 50 + 'px';
    particle.style.setProperty('--drift', drift);

    container.appendChild(particle);
}
