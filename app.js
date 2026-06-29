/**
 * KrishiVeda Main Core Application Controller
 * Handles Framework Bindings, Viewports Optimization and Lazy Loading
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Core Layout Element Node Ingestion References
    const preloader = document.getElementById('preloader');
    const header = document.getElementById('main-header');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const b2bForm = document.getElementById('b2b-form');

    // 1. Structural Preloader Tear Down Sequence Execution
    window.addEventListener('load', () => {
        if(preloader) {
            preloader.classList.add('opacity-0');
            setTimeout(() => preloader.remove(), 700);
        }
    });
    // Fallback logic to protect visibility runtime configurations
    setTimeout(() => { if(preloader) preloader.remove(); }, 2500);

    // 2. Sticky Headers Transformation Execution Control
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white/95', 'shadow-md', 'border-brandLightGray');
            header.classList.remove('bg-brandBg/80');
        } else {
            header.classList.remove('bg-white/95', 'shadow-md', 'border-brandLightGray');
            header.classList.add('bg-brandBg/80');
        }
    });

    // 3. Mobile Navigation Controls Transitions Matrix Toggle
    if (mobileToggle && mobileOverlay) {
        mobileToggle.addEventListener('click', () => {
            const isOpened = mobileOverlay.classList.contains('translate-x-0');
            if (isOpened) {
                mobileOverlay.classList.remove('translate-x-0');
                mobileOverlay.classList.add('translate-x-full');
                document.body.classList.remove('overflow-hidden');
                // Reverse hamburger animations state tracking lines
                document.getElementById('hamburger-top').classList.remove('rotate-45', 'translate-y-2');
                document.getElementById('hamburger-mid').classList.remove('opacity-0');
                document.getElementById('hamburger-bot').classList.remove('-rotate-45', '-translate-y-2');
            } else {
                mobileOverlay.classList.remove('translate-x-full');
                mobileOverlay.classList.add('translate-x-0');
                document.body.classList.add('overflow-hidden');
                // Execute active transformation configurations matrix rules
                document.getElementById('hamburger-top').classList.add('rotate-45', 'translate-y-2');
                document.getElementById('hamburger-mid').classList.add('opacity-0');
                document.getElementById('hamburger-bot').classList.add('-rotate-45', '-translate-y-2');
            }
        });
    }

    // Close mobile menu on clicking any navigation link
    document.querySelectorAll('.mobile-nav-item').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.click();
        });
    });

    // 4. Performance Optimized Native Viewport Lazy Loading Implementation
    const initLazyLoading = () => {
        if ('IntersectionObserver' in window) {
            const imgObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('lazy-loaded');
                        observer.unobserve(img);
                    }
                });
            });
            document.querySelectorAll('.lazy-load').forEach(img => imgObserver.observe(img));
        } else {
            document.querySelectorAll('.lazy-load').forEach(img => img.classList.add('lazy-loaded'));
        }
    };
    initLazyLoading();

    // 5. Statistics Counters Trigger Sequence Implementation Logic
    const initCounters = () => {
        const purityEl = document.getElementById('counter-purity');
        const capacityEl = document.getElementById('counter-capacity');
        
        if (!purityEl || !capacityEl) return;

        const runAnimation = (el, target, duration, precision = 0, suffix = '') => {
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration / target));
            const timer = setInterval(() => {
                start += 1 / Math.pow(10, precision);
                if (start >= target) {
                    el.innerText = target.toFixed(precision) + suffix;
                    clearInterval(timer);
                } else {
                    el.innerText = start.toFixed(precision) + suffix;
                }
            }, stepTime);
        };

        if ('IntersectionObserver' in window) {
            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        runAnimation(purityEl, 99.9, 1500, 1, '%');
                        runAnimation(capacityEl, 5000, 1500, 0, ' MT');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            const qualitySection = document.getElementById('quality');
            if(qualitySection) sectionObserver.observe(qualitySection);
        }
    };
    initCounters();

    // 6. External Framework Lifecycle Initialization Hookups
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            disable: 'mobile' // Disable heavy transformation stacks on low compute hardware configurations
        });
    }

    // 7. B2B Mock Enterprise RFQ Intake Handler Flow
    if (b2bForm) {
        b2bForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Enterprise RFQ Pipeline Initiated successfully. A distribution agent will contact your firm within 12 standard business hours.');
            b2bForm.reset();
        });
    }
});