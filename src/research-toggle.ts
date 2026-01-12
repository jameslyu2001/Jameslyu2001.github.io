// Research page expand/collapse functionality
document.addEventListener('DOMContentLoaded', () => {
  const researchItems = document.querySelectorAll('.research-item');
  
  researchItems.forEach(item => {
    const title = item.querySelector('.research-title') as HTMLElement;
    const details = item.querySelector('.research-details') as HTMLElement;
    
    if (!title || !details) return;
    
    // Ensure details are initially hidden
    details.style.display = 'none';
    title.setAttribute('aria-expanded', 'false');
    
    // Toggle function
    const toggleDetails = () => {
      const isExpanded = title.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        details.style.display = 'none';
        title.setAttribute('aria-expanded', 'false');
        title.classList.remove('expanded');
      } else {
        details.style.display = 'block';
        title.setAttribute('aria-expanded', 'true');
        title.classList.add('expanded');
      }
    };
    
    // Toggle on title click
    title.addEventListener('click', toggleDetails);
  });
});
