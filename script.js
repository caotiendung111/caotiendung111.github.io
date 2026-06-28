document.addEventListener('DOMContentLoaded', () => {
  
  // Ensure translations is bound globally to window
  if (typeof translations !== 'undefined') {
    window.translations = translations;
  }
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
    const currentLang = localStorage.getItem('cv-lang') || 'ja';
    
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      text.setAttribute('data-translate', 'ui_theme_light');
      if (window.translations && translations[currentLang]) {
        text.innerHTML = translations[currentLang]['ui_theme_light'];
      } else {
        text.textContent = 'Light Mode';
      }
    } else {
      icon.className = 'fas fa-moon';
      text.setAttribute('data-translate', 'ui_theme_dark');
      if (window.translations && translations[currentLang]) {
        text.innerHTML = translations[currentLang]['ui_theme_dark'];
      } else {
        text.textContent = 'Dark Mode';
      }
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
    // To bypass browser font embedding limits (which forces >1MB size for Japanese),
    // we serve the pre-optimized lossless PNG-based PDF (483KB) directly.
    const link = document.createElement('a');
    link.href = 'CaoTienDung_CV_Japanese.pdf';
    link.download = 'CaoTienDung_CV_Japanese.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  // ==========================================================================
  // 5. DYNAMIC TRANSLATION ENGINE
  // ==========================================================================
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Set initial language from localStorage or default to 'ja'
  const initialLang = localStorage.getItem('cv-lang') || 'ja';
  setLanguage(initialLang);
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      localStorage.setItem('cv-lang', lang);
      setLanguage(lang);
    });
  });
  
  function setLanguage(lang) {
    // Update active class on language buttons
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Set Document lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Translate all elements with [data-translate]
    if (window.translations && translations[lang]) {
      const translatable = document.querySelectorAll('[data-translate]');
      translatable.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key] !== undefined) {
          el.innerHTML = translations[lang][key];
        }
      });
      
      // Update the theme toggle button's label with correct translation
      const theme = htmlElement.getAttribute('data-theme') || 'dark';
      updateThemeButtonUI(theme);
    }
  }
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
