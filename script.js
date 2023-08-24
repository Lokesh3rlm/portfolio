const navbar = document.querySelector('.navbar');
const stickyOffset = navbar.offsetTop;

function handleScroll() {
  if (window.pageYOffset >= stickyOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.addEventListener('scroll', handleScroll);

// Scroll-to-top button
const scrollUpBtn = document.querySelector('.scroll-up-btn');

function toggleScrollUpBtn() {
  if (window.pageYOffset > 300) {
    scrollUpBtn.classList.add('show');
  } else {
    scrollUpBtn.classList.remove('show');
  }
}

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', toggleScrollUpBtn);

// Form submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const response = await fetch('your-server-endpoint', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // Display success message or redirect
      console.log('Form submitted successfully');
    } else {
      // Display error message
      console.error('Error submitting form');
    }
  });
}