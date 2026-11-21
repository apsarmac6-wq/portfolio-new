/**
 * Navigation, Mobile Menu Toggle, and Theme Persistence
 */
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const themeToggle = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');

  // 1. Mobile Navigation Toggle
  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      primaryNav.classList.toggle('is-open');
    });

    // Close mobile menu when pressing Escape
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
        mobileToggle.focus();
      }
    });
  }

  // 2. Light / Dark Editorial Theme Toggle
  const savedTheme = localStorage.getItem('apsar-portfolio-theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeLabel) themeLabel.textContent = 'LIGHT';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('apsar-portfolio-theme', 'light');
        if (themeLabel) themeLabel.textContent = 'DARK';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('apsar-portfolio-theme', 'dark');
        if (themeLabel) themeLabel.textContent = 'LIGHT';
      }
    });
  }
});