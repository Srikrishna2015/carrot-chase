document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll behavior
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Video placeholder click handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            alert('This is a placeholder for an actual gameplay video. In a real website, this would play a video of the Carrot Chase game.');
        });
    }
    
    // Simple level slider functionality
    const levelSlides = document.querySelectorAll('.level-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        levelSlides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
    }
    
    // Initialize slider
    if (levelSlides.length > 0) {
        // Create navigation buttons
        const sliderNav = document.createElement('div');
        sliderNav.className = 'slider-nav';
        sliderNav.style.display = 'flex';
        sliderNav.style.justifyContent = 'center';
        sliderNav.style.gap = '10px';
        sliderNav.style.marginTop = '20px';
        
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '&lt; Previous';
        prevBtn.className = 'button secondary';
        prevBtn.style.padding = '8px 15px';
        
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = 'Next &gt;';
        nextBtn.className = 'button primary';
        nextBtn.style.padding = '8px 15px';
        
        sliderNav.appendChild(prevBtn);
        sliderNav.appendChild(nextBtn);
        
        const levelSlider = document.querySelector('.level-slider');
        levelSlider.appendChild(sliderNav);
        
        // Show first slide initially
        showSlide(currentSlide);
        
        // Add event listeners
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + levelSlides.length) % levelSlides.length;
            showSlide(currentSlide);
        });
        
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % levelSlides.length;
            showSlide(currentSlide);
        });
    }
    
    // Download button click handler
    const downloadBtn = document.querySelector('.download-button');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('The game will be available on Google Play Store soon! This button will link to the store page when published.');
        });
    }
});