/* ============================================
   UICSA BRANCH QUIZ CHALLENGE - JAVASCRIPT
   ============================================ */

'use strict';

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeConfig();
    initializeButtons();
    initializeCountdown();
    initializeFAQ();
    initializeGallery();
    initializeScrollAnimations();
    initializeScrollToTop();
    initializeParticles();
    initializeHeaderScroll();
});

/* ============================================
   CONFIG INITIALIZATION
   ============================================ */
function initializeConfig() {
    // Load event details from config
    if (typeof QUIZ_CONFIG !== 'undefined') {
        // Update event details
        updateElementText('eventDateDisplay', QUIZ_CONFIG.eventDate);
        updateElementText('eventTimeDisplay', QUIZ_CONFIG.eventTime);
        updateElementText('eventDurationDisplay', QUIZ_CONFIG.eventDuration);
        updateElementText('venueDisplay', QUIZ_CONFIG.venue);
        updateElementText('modeDisplay', QUIZ_CONFIG.mode);
        updateElementText('eligibilityDisplay', QUIZ_CONFIG.eligibility);
    }
}

function updateElementText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
    }
}

/* ============================================
   BUTTON HANDLERS
   ============================================ */
function initializeButtons() {
    // Get all register and quiz start buttons
    const registerButtons = [
        document.getElementById('registerBtn'),
        document.getElementById('registerBtn2')
    ];
    
    const quizButtons = [
        document.getElementById('startQuizBtn'),
        document.getElementById('startQuizBtn2'),
        document.getElementById('startQuizBtn3')
    ];
    
    // Get modal elements
    const modal = document.getElementById('registrationModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const register1stYear = document.getElementById('register1stYear');
    const register2nd3rdYear = document.getElementById('register2nd3rdYear');
    
    // Add click handlers to register buttons - open modal instead
    registerButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                openRegistrationModal();
            });
        }
    });
    
    // Modal control functions
    function openRegistrationModal() {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }
    
    function closeRegistrationModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
    
    // Close modal handlers
    if (modalClose) {
        modalClose.addEventListener('click', closeRegistrationModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeRegistrationModal);
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeRegistrationModal();
        }
    });
    
    // Handle 1st year registration
    if (register1stYear) {
        register1stYear.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (typeof QUIZ_CONFIG !== 'undefined' && QUIZ_CONFIG.registration1stYearUrl) {
                if (QUIZ_CONFIG.registration1stYearUrl === 'PASTE_1ST_YEAR_GOOGLE_FORM_LINK_HERE') {
                    alert('⚠️ 1st Year registration link not configured yet.\n\nPlease update registration1stYearUrl in config.js');
                } else {
                    window.open(QUIZ_CONFIG.registration1stYearUrl, '_blank', 'noopener,noreferrer');
                    closeRegistrationModal();
                }
            } else {
                alert('⚠️ Configuration not loaded. Please check config.js');
            }
        });
    }
    
    // Handle 2nd/3rd year registration
    if (register2nd3rdYear) {
        register2nd3rdYear.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (typeof QUIZ_CONFIG !== 'undefined' && QUIZ_CONFIG.registration2nd3rdYearUrl) {
                if (QUIZ_CONFIG.registration2nd3rdYearUrl === 'PASTE_2ND_3RD_YEAR_GOOGLE_FORM_LINK_HERE') {
                    alert('⚠️ 2nd/3rd Year registration link not configured yet.\n\nPlease update registration2nd3rdYearUrl in config.js');
                } else {
                    window.open(QUIZ_CONFIG.registration2nd3rdYearUrl, '_blank', 'noopener,noreferrer');
                    closeRegistrationModal();
                }
            } else {
                alert('⚠️ Configuration not loaded. Please check config.js');
            }
        });
    }
    
    // Add click handlers to quiz start buttons
    quizButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', handleQuizStartClick);
        }
    });
}

function handleQuizStartClick(e) {
    e.preventDefault();
    
    if (typeof QUIZ_CONFIG !== 'undefined' && QUIZ_CONFIG.quizUrl) {
        if (QUIZ_CONFIG.quizUrl === 'PASTE_TEST_PORTAL_LINK_HERE') {
            alert('⚠️ Quiz link not configured yet.\n\nPlease update the quizUrl in config.js');
        } else {
            window.open(QUIZ_CONFIG.quizUrl, '_blank', 'noopener,noreferrer');
        }
    } else {
        alert('⚠️ Configuration not loaded. Please check config.js');
    }
}

/* ============================================
   COUNTDOWN TIMER
   ============================================ */
function initializeCountdown() {
    if (typeof QUIZ_CONFIG === 'undefined' || !QUIZ_CONFIG.quizDate) {
        console.warn('Quiz date not configured in config.js');
        return;
    }
    
    const countdownDate = new Date(QUIZ_CONFIG.quizDate).getTime();
    
    // Update countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update display
        updateElementText('days', padZero(days));
        updateElementText('hours', padZero(hours));
        updateElementText('minutes', padZero(minutes));
        updateElementText('seconds', padZero(seconds));
        
        // Check if countdown finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            showQuizStarted();
        }
    }, 1000);
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}

function showQuizStarted() {
    const timer = document.getElementById('countdownTimer');
    const message = document.getElementById('countdownMessage');
    
    if (timer) {
        timer.style.display = 'none';
    }
    
    if (message) {
        message.style.display = 'block';
    }
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
            
            // Make keyboard accessible
            question.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        }
    });
}

/* ============================================
   GALLERY & LIGHTBOX
   ============================================ */
let currentImageIndex = 0;
let galleryImages = [];

function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    // Build gallery images array
    galleryImages = Array.from(galleryItems).map(item => {
        const img = item.querySelector('img');
        return {
            src: img ? img.src : '',
            alt: img ? img.alt : ''
        };
    }).filter(img => img.src);
    
    // Add click handlers to gallery items
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            openLightbox(index);
        });
        
        // Keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
    });
    
    // Lightbox controls
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPreviousImage);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    // Close lightbox on background click
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (lightbox && lightboxImage && galleryImages[index]) {
        currentImageIndex = index;
        lightboxImage.src = galleryImages[index].src;
        lightboxImage.alt = galleryImages[index].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (lightboxImage && galleryImages[currentImageIndex]) {
        lightboxImage.src = galleryImages[currentImageIndex].src;
        lightboxImage.alt = galleryImages[currentImageIndex].alt;
    }
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (lightboxImage && galleryImages[currentImageIndex]) {
        lightboxImage.src = galleryImages[currentImageIndex].src;
        lightboxImage.alt = galleryImages[currentImageIndex].alt;
    }
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/* ============================================
   SCROLL TO TOP BUTTON
   ============================================ */
function initializeScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    
    if (!scrollButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ============================================
   HEADER SCROLL EFFECT
   ============================================ */
function initializeHeaderScroll() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            header.style.padding = '0.75rem 0';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            header.style.padding = '1rem 0';
        }
    });
}

/* ============================================
   PARTICLE ANIMATION
   ============================================ */
function initializeParticles() {
    const particleContainer = document.getElementById('particles');
    
    if (!particleContainer) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // Skip particle animation
    }
    
    // Create particles
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    
    // Random properties
    const size = Math.random() * 4 + 1;
    const startX = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.5 + 0.2;
    
    // Style particle
    Object.assign(particle.style, {
        position: 'absolute',
        width: size + 'px',
        height: size + 'px',
        background: 'rgba(255, 255, 255, ' + opacity + ')',
        borderRadius: '50%',
        left: startX + '%',
        bottom: '-10px',
        animation: 'float-up ' + duration + 's linear ' + delay + 's infinite',
        pointerEvents: 'none'
    });
    
    container.appendChild(particle);
}

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================
   FORM VALIDATION (if needed in future)
   ============================================ */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for performance
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

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   PERFORMANCE OPTIMIZATIONS
   ============================================ */

// Optimize scroll events
const optimizedScrollHandler = throttle(function() {
    // Any scroll-based updates go here
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// Optimize resize events
const optimizedResizeHandler = debounce(function() {
    // Handle responsive adjustments if needed
    console.log('Window resized');
}, 250);

window.addEventListener('resize', optimizedResizeHandler);

/* ============================================
   ERROR HANDLING
   ============================================ */
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can add custom error handling here
});

/* ============================================
   ACCESSIBILITY ENHANCEMENTS
   ============================================ */

// Trap focus in lightbox when open
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

/* ============================================
   CONSOLE MESSAGE
   ============================================ */
console.log('%c🎓 UICSA Branch Quiz Challenge', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cWebsite loaded successfully!', 'font-size: 14px; color: #06b6d4;');
console.log('%cOrganized by UICSA Technical Team', 'font-size: 12px; color: #64748b;');

if (typeof QUIZ_CONFIG === 'undefined') {
    console.warn('%c⚠️ Warning: config.js not loaded properly', 'color: #f59e0b; font-weight: bold;');
} else {
    console.log('%c✓ Configuration loaded', 'color: #10b981;');
}

/* ============================================
   SERVICE WORKER (Optional - for PWA features)
   ============================================ */
/*
// Uncomment if you want to add Progressive Web App features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function(registration) {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/

/* ============================================
   END OF SCRIPT
   ============================================ */
