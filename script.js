document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================================================
  // 1. DYNAMIC THEME SWITCHER (Dark / Light Mode)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // Load saved theme or default to system preference
  const savedTheme = localStorage.getItem('cv-theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonUI(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('cv-theme', newTheme);
    updateThemeButtonUI(newTheme);
  });

  function updateThemeButtonUI(theme) {
    const icon = themeToggleBtn.querySelector('i');
    const text = themeToggleBtn.querySelector('span');
    
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      text.textContent = 'Light Mode';
    } else {
      icon.className = 'fas fa-moon';
      text.textContent = 'Dark Mode';
    }
  }

  // ==========================================================================
  // 2. PROJECT FILTER TABS
  // ==========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');
  const groupDividers = document.querySelectorAll('.project-group-divider');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs
      filterTabs.forEach(t => t.classList.remove('active'));
      // Activate clicked tab
      tab.classList.add('active');
      
      const filterValue = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('filtered-out');
          // Add quick scale-in animation
          card.style.animation = 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        } else {
          card.classList.add('filtered-out');
          card.style.animation = 'none';
        }
      });

      // Handle group dividers visibility during filtering
      groupDividers.forEach(divider => {
        const group = divider.getAttribute('data-group');
        if (filterValue === 'all') {
          divider.style.display = 'flex';
        } else if (filterValue === group) {
          divider.style.display = 'flex';
        } else {
          divider.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // 3. ONE-CLICK EXPORT TO PDF
  // ==========================================================================
  const printPdfBtn = document.getElementById('print-pdf');
  
  printPdfBtn.addEventListener('click', () => {
    // Briefly alert user about standard settings for best results
    const confirmPrint = confirm(
      "Click OK to open the Print Dialog.\n\n" +
      "For a perfect CV export:\n" +
      "1. Set Destination to 'Save as PDF'.\n" +
      "2. Enable 'Background graphics' (so theme highlights load correctly).\n" +
      "3. Disable 'Headers and footers' (to remove browser links)."
    );
    
    if (confirmPrint) {
      window.print();
    }
  });

  // ==========================================================================
  // 4. MICRO-INTERACTIONS (Interactive Skill tags highlight)
  // ==========================================================================
  const skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.transform = 'translateY(-1px) scale(1.05)';
      tag.style.transition = 'all 0.2s ease';
    });
    
    tag.addEventListener('mouseleave', () => {
      tag.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Keyframes injected dynamically for sleek web experience
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes scaleIn {
    0% {
      opacity: 0;
      transform: scale(0.96);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
document.head.appendChild(styleSheet);
