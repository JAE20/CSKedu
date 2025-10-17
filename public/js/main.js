// ===== MAIN JAVASCRIPT FOR ACCOUNTING ACADEMY =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initAnimationsOnScroll();
    initCarousel();
});

// ===== HERO CAROUSEL =====
let currentSlideIndex = 0;
let carouselInterval;

function initCarousel() {
    // Auto-advance carousel every 5 seconds
    carouselInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Remove active class from current slide and indicator
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Calculate new index
    currentSlideIndex += direction;
    
    // Wrap around
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Add active class to new slide and indicator
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
    
    // Reset auto-advance timer
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

function currentSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Remove active class from all
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Set new index
    currentSlideIndex = index;
    
    // Add active class
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
    
    // Reset auto-advance timer
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

// ===== MOBILE MENU TOGGLE =====
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMain = document.getElementById('navMain');
    
    if (menuToggle && navMain) {
        menuToggle.addEventListener('click', function() {
            navMain.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            spans[0].style.transform = navMain.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
            spans[1].style.opacity = navMain.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMain.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMain.contains(event.target)) {
                navMain.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    }
}

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 80; // Height of sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ANIMATIONS ON SCROLL =====
function initAnimationsOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and learning path cards
    const animatedElements = document.querySelectorAll('.card, .learning-path-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ===== PROGRESS TRACKING =====
class ProgressTracker {
    constructor() {
        this.storageKey = 'accountingAcademy_progress';
        this.progress = this.loadProgress();
    }
    
    loadProgress() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : {
            completedTopics: [],
            currentPath: null,
            points: 0,
            lastVisit: new Date().toISOString()
        };
    }
    
    saveProgress() {
        this.progress.lastVisit = new Date().toISOString();
        localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
    }
    
    markTopicComplete(topicId) {
        if (!this.progress.completedTopics.includes(topicId)) {
            this.progress.completedTopics.push(topicId);
            this.progress.points += 10;
            this.saveProgress();
            this.showCompletionNotification(topicId);
        }
    }
    
    setLearningPath(path) {
        this.progress.currentPath = path;
        this.saveProgress();
    }
    
    getCompletionPercentage(pathTopics) {
        if (!pathTopics || pathTopics.length === 0) return 0;
        const completed = pathTopics.filter(topic => 
            this.progress.completedTopics.includes(topic)
        ).length;
        return Math.round((completed / pathTopics.length) * 100);
    }
    
    showCompletionNotification(topicId) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'alert alert-success';
        notification.style.position = 'fixed';
        notification.style.top = '100px';
        notification.style.right = '20px';
        notification.style.zIndex = '1000';
        notification.innerHTML = `
            <strong>✓ Topic Completed!</strong>
            <p>You earned 10 points. Keep learning!</p>
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize global progress tracker
const progressTracker = new ProgressTracker();

// ===== UTILITY FUNCTIONS =====

// Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

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

// Get URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Validate form inputs
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show/hide loading state
function setLoadingState(element, isLoading) {
    if (isLoading) {
        element.classList.add('loading');
        element.disabled = true;
        element.dataset.originalText = element.textContent;
        element.textContent = 'Loading...';
    } else {
        element.classList.remove('loading');
        element.disabled = false;
        element.textContent = element.dataset.originalText || element.textContent;
    }
}

// ===== EXPORT FOR OTHER MODULES =====
window.AccountingAcademy = {
    progressTracker,
    formatNumber,
    debounce,
    getURLParameter,
    validateEmail,
    setLoadingState
};