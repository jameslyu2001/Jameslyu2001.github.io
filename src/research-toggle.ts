// Research page expand/collapse functionality
document.addEventListener('DOMContentLoaded', function() {
  const researchItems = document.querySelectorAll('.research-item');
  
  researchItems.forEach(function(item) {
    const title = item.querySelector('.research-title') as HTMLElement;
    const details = item.querySelector('.research-details') as HTMLElement;
    
    if (!title || !details) {
      return;
    }
    
    // Ensure details are initially hidden
    details.style.display = 'none';
    
    // Toggle function
    title.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        title.classList.add('expanded');
        title.setAttribute('aria-expanded', 'true');
      } else {
        details.style.display = 'none';
        title.classList.remove('expanded');
        title.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
