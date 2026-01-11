// Website initialization
document.addEventListener('DOMContentLoaded', () => {
  // Add smooth scrolling for anchor links (excluding skip links)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const href = anchor.getAttribute('href');
    // Skip the skip-link itself
    if (href === '#main-content') return;
    
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
