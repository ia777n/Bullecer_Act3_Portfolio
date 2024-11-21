document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  
  const navLinks = document.querySelectorAll('#hamburger-nav .menu-links li a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#c63e52';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = ''; 
    });
  });
  
  const menuToggle = document.querySelector('#menu-toggle');
  const menuLinks = document.querySelector('#hamburger-nav .menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  
  menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
      menuLinks.style.display = 'flex';
    } else {
      menuLinks.style.display = 'none';
    }
  });

    // Hover effect on "Start the Adventure" button
    const startButton = document.querySelector('.start-button');

    startButton.addEventListener('mouseenter', () => {
    startButton.style.transform = 'scale(1.1)';
    startButton.style.boxShadow = '0 8px 15px rgba(233, 69, 96, 0.4)';
    });

    startButton.addEventListener('mouseleave', () => {
    startButton.style.transform = 'scale(1)';
    startButton.style.boxShadow = 'none';
    });

  
  // Skill bar animation
  const skillBars = document.querySelectorAll('.skill-bar');
  const skillFillBars = document.querySelectorAll('.skill-fill');
  
  window.addEventListener('scroll', () => {
    skillBars.forEach((bar, index) => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (barPosition < screenPosition) {
        skillFillBars[index].style.width = bar.dataset.skillLevel + '%'; // Skill level should be added as data-skill-level attribute
      }
    });
  });
  
  // Fade-in animation for sections
  const fadeInElements = document.querySelectorAll('.home, .about-me, .skills-container, .experience, .projects, .contact');
  const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in'); // Adds fade-in class when element enters viewport
      }
    });
  }, { threshold: 0.1 });
  
  fadeInElements.forEach(el => fadeInObserver.observe(el));
  
  // Contact form validation
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
  
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting!');
      return;
    }
  
    alert('Thank you for your message!');
    contactForm.reset();
  });
  
  const socialIcons = document.querySelectorAll('.social-link img');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
    });
  });
  