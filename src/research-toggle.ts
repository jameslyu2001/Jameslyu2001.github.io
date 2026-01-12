// Research page expand/collapse functionality
document.addEventListener('DOMContentLoaded', () => {
  const researchItems = document.querySelectorAll('.research-item');
  
  researchItems.forEach(item => {
    const header = item.querySelector('.research-header');
    const title = item.querySelector('h3');
    const toggleButton = item.querySelector('.research-toggle') as HTMLButtonElement;
    const details = item.querySelector('.research-details') as HTMLElement;
    
    if (!title || !toggleButton || !details || !header) return;
    
    // Ensure details are initially hidden (CSS should handle this, but just in case)
    details.style.display = 'none';
    toggleButton.setAttribute('aria-expanded', 'false');
    
    // Toggle function
    const toggleDetails = () => {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        details.style.display = 'none';
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.classList.remove('expanded');
      } else {
        details.style.display = 'block';
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleButton.classList.add('expanded');
      }
    };
    
    // Toggle on button click
    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDetails();
    });
    
    // Also allow clicking on header (title area) to toggle
    header.addEventListener('click', (e) => {
      // Don't toggle if clicking directly on the button
      if ((e.target as HTMLElement).closest('.research-toggle')) {
        return;
      }
      toggleDetails();
    });
  });
});
