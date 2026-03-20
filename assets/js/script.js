(async function () {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileToggle = document.querySelector('[data-mobile-menu]');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((section) => {
    observer.observe(section);
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      if (!data.name.trim()) {
        showError('Please add your name.');
        return;
      }

      if (!data.email.trim() || !isValidEmail(data.email)) {
        showError('Provide a working email address.');
        return;
      }

      if (!data.message.trim()) {
        showError('Let us know how we can collaborate.');
        return;
      }

      showSuccess();
      contactForm.reset();
      setTimeout(() => {
        successMessage?.classList.add('hidden');
      }, 6000);
    });

    function showSuccess() {
      if (errorMessage) {
        errorMessage.classList.add('hidden');
      }
      successMessage?.classList.remove('hidden');
      successMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function showError(message) {
      if (errorText) {
        errorText.textContent = message;
      }
      errorMessage?.classList.remove('hidden');
      successMessage?.classList.add('hidden');
      errorMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const navLinks = document.querySelectorAll('.nav-link[data-nav]');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach((link) => {
    const target = link.getAttribute('data-nav');
    if (!target) return;
    if (currentPath.includes(target)) {
      link.classList.add('active');
    } else if (!currentPath && target === 'home') {
      link.classList.add('active');
    }
  });
})();
