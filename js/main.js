document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Glassmorphism Navbar Scroll Effect ---
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- 2. Smooth Scrolling for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // ignore empty links
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --- 3. Intersection Observer for Fade-Up Animations ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
  });

  // --- Hero Sticky Scroll Logic ---
  const heroScrollContainer = document.querySelector('.hero-scroll-container');
  const part2 = document.querySelector('.hero-part.part-2');
  const part3 = document.querySelector('.hero-part.part-3');

  if (heroScrollContainer && part2 && part3) {
    window.addEventListener('scroll', () => {
      const rect = heroScrollContainer.getBoundingClientRect();
      const scrolled = -rect.top;
      
      // Part 2 pops up after scrolling 30vh
      if (scrolled > window.innerHeight * 0.3) {
        part2.classList.add('visible');
      } else {
        part2.classList.remove('visible');
      }

      // Part 3 pops up after scrolling 80vh
      if (scrolled > window.innerHeight * 0.8) {
        part3.classList.add('visible');
      } else {
        part3.classList.remove('visible');
      }
    });
  }

  // --- 4. ClickSpark Button Animations ---
  // A premium micro-interaction for buttons (Antigravity aesthetic)
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Create spark element
      const spark = document.createElement('div');
      spark.style.position = 'absolute';
      spark.style.width = '20px';
      spark.style.height = '20px';
      spark.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)';
      spark.style.borderRadius = '50%';
      spark.style.pointerEvents = 'none';
      spark.style.transform = 'translate(-50%, -50%) scale(0)';
      spark.style.animation = 'spark-anim 0.5s ease-out forwards';
      
      // Calculate position relative to button
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      
      this.appendChild(spark);
      
      // Clean up after animation
      setTimeout(() => {
        spark.remove();
      }, 500);

      // Handle dummy form submissions or alerts for testing
      if (this.type === 'submit' || this.classList.contains('simulate-alert')) {
        e.preventDefault();
        const text = this.textContent.trim();
        setTimeout(() => alert(`Action Triggered: ${text}\n(In a real app, this would process your request!)`), 300);
      }
    });
  });

  // Inject keyframes for spark animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spark-anim {
      0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});
