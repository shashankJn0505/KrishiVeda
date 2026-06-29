/**
 * KrishiVeda Animation Infrastructure Engine
 * Custom Cursor Transformations & Parallax Systems
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Core Layout Element Node Ingestion References
    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorRing = document.getElementById('custom-cursor-ring');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    // Check motion preference rules before allocating tracking arrays
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (window.innerWidth >= 1024 && !prefersReducedMotion) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Use custom frame tick rendering equations for tracking instead of raw events
        gsap.ticker.add(() => {
            dotX += (mouseX - dotX) * 0.25;
            dotY += (mouseY - dotY) * 0.25;
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;

            gsap.set(cursorDot, { x: dotX, y: dotY });
            gsap.set(cursorRing, { x: ringX, y: ringY });
        });

        // Setup Cursor Transformation States Rules Matrix
        setupCursorInteractions();
    }

    function setupCursorInteractions() {
        // Universal Target Definition Elements Mapping
        const interactiveSelectors = 'a, button, select, input, [role="button"]';
        
        document.querySelectorAll(interactiveSelectors).forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursorRing, { scale: 1.4, backgroundColor: 'rgba(46, 125, 50, 0.05)', duration: 0.2 });
                gsap.to(cursorDot, { scale: 0.5, duration: 0.2 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursorRing, { scale: 1, backgroundColor: 'transparent', duration: 0.2 });
                gsap.to(cursorDot, { scale: 1, duration: 0.2 });
            });
        });

        // Specialized Domain Layer Intent State Overlays
        setupContextualHover('.cursor-buy', 'BUY');
        setupContextualHover('.cursor-view', 'VIEW');
        setupContextualHover('.cursor-explore', 'OPEN');
    }

    function setupContextualHover(selector, contextText) {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.innerText = contextText;
                gsap.to(cursorRing, { width: 56, height: 56, opacity: 1, duration: 0.2 });
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.innerText = '';
                gsap.to(cursorRing, { width: 40, height: 40, opacity: 0, duration: 0.2 });
            });
        });
    }

    // Hero Floating Particle Generator Function
    (function initHeroParticles() {
        const container = document.getElementById('hero-grain-container');
        if (!container) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-1.5 h-3 bg-brandGold/30 rounded-full pointer-events-none';
            gsap.set(particle, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotation: Math.random() * 360
            });
            container.appendChild(particle);
            
            // Continuous continuous loop drift timelines setup
            gsap.to(particle, {
                y: '-=100',
                x: `+=${Math.random() * 40 - 20}`,
                rotation: '+=180',
                opacity: 0,
                duration: 4 + Math.random() * 4,
                repeat: -1,
                ease: 'none',
                delay: Math.random() * -5
            });
        }
    })();
});