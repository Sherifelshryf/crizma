document.addEventListener('DOMContentLoaded', () => {
  // --- 0. Theme Toggle Logic ---
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Optional: default to dark if user system prefers dark
    // For this request, user wanted light as default, so we'll just respect the user preference
    // document.documentElement.setAttribute('data-theme', 'dark');
    // themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });

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
