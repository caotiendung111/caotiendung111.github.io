// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadNavbar();
  initFilters();
});

// ==========================================
// 1. THEME MANAGEMENT
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('portfolio-theme', newTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeBtn = document.getElementById('theme-toggle');
  if (!themeBtn) return;
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const icon = themeBtn.querySelector('i');
  if (currentTheme === 'dark') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}

// ==========================================
// 2. NAVBAR LOADING & ACTIVE STATE
// ==========================================
async function loadNavbar() {
  const placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  try {
    const response = await fetch('navbar.html');
    if (!response.ok) throw new Error('Fetch failed');
    const html = await response.text();
    placeholder.innerHTML = html;
  } catch (error) {
    console.warn('Could not fetch navbar.html (likely CORS on file://). Injecting fallback navbar.');
    placeholder.innerHTML = getFallbackNavbar();
  }

  // After navbar is loaded, initialize its components
  updateThemeIcon();
  
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Set active link
  setActiveNavLink();
}

function setActiveNavLink() {
  const links = document.querySelectorAll('.nav-item a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function getFallbackNavbar() {
  return `
    <nav class="navbar">
      <div class="nav-container">
        <a href="index.html" class="nav-logo">CaoTien<span>Dung</span></a>
        <ul class="nav-menu" id="nav-menu">
          <li class="nav-item"><a href="index.html">Trang chủ</a></li>
          <li class="nav-item"><a href="about.html">Giới thiệu</a></li>
          <li class="nav-item"><a href="projects.html">Dự án</a></li>
          <li class="nav-item"><a href="certifications.html">Chứng chỉ</a></li>
          <li class="nav-item"><a href="contact.html">Liên hệ</a></li>
        </ul>
        <div style="display:flex; align-items:center; gap:15px;">
          <button class="theme-toggle" id="theme-toggle"><i class="fas fa-sun"></i></button>
          <button class="hamburger" id="hamburger-menu"><i class="fas fa-bars"></i></button>
        </div>
      </div>
    </nav>
  `;
}

// ==========================================
// 3. PROJECT FILTERING
// ==========================================
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card-item');

  if (filterBtns.length === 0 || cards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
