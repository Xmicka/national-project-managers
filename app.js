/**
 * AIESEC in Sri Lanka - NPM 26.27 Recruitment Portal
 * Interactive features
 */

(function () {
  'use strict';

  // ── Configuration ──
  const SCROLL_OFFSET = 80; // Fixed header height offset

  // ── DOM Elements ──
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const headerNav = document.getElementById('headerNav');
  const functionTabs = document.getElementById('functionTabs');
  const functionBannerName = document.getElementById('functionBannerName');
  const functionBannerDesc = document.getElementById('functionBannerDesc');
  const roleCardsGrid = document.getElementById('roleCardsGrid');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const roleDrawer = document.getElementById('roleDrawer');
  const drawerContent = document.getElementById('drawerContent');
  const drawerFunctionBadge = document.getElementById('drawerFunctionBadge');
  const drawerClose = document.getElementById('drawerClose');
  const floatingCta = document.getElementById('floatingCta');

  // ── State ──
  let activeFunction = FUNCTIONS[0].id;
  let isDrawerOpen = false;

  // ═══════════════════════════════════════════
  // INITIALIZATION
  // ═══════════════════════════════════════════

  function init() {
    renderFunctionTabs();
    renderRoleCards(activeFunction);
    updateFunctionBanner(activeFunction);
    setupScrollEffects();
    setupMobileMenu();
    setupDrawerEvents();
    setupScrollReveal();
    setupSmoothScroll();
  }

  // ═══════════════════════════════════════════
  // FUNCTION TABS
  // ═══════════════════════════════════════════

  function renderFunctionTabs() {
    // "All" tab
    const allTab = document.createElement('button');
    allTab.className = 'function-tab';
    allTab.setAttribute('role', 'tab');
    allTab.setAttribute('aria-selected', 'false');
    allTab.dataset.function = 'all';
    allTab.innerHTML = `All <span class="tab-count">${getTotalRoles()}</span>`;
    allTab.addEventListener('click', () => switchFunction('all'));
    functionTabs.appendChild(allTab);

    // Individual function tabs
    FUNCTIONS.forEach(fn => {
      const tab = document.createElement('button');
      tab.className = 'function-tab';
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', fn.id === activeFunction ? 'true' : 'false');
      tab.dataset.function = fn.id;
      if (fn.id === activeFunction) tab.classList.add('active');

      tab.innerHTML = `${fn.name} <span class="tab-count">${fn.roles.length}</span>`;
      tab.addEventListener('click', () => switchFunction(fn.id));

      functionTabs.appendChild(tab);
    });
  }

  function getTotalRoles() {
    return FUNCTIONS.reduce((sum, fn) => sum + fn.roles.length, 0);
  }

  function switchFunction(fnId) {
    activeFunction = fnId;

    // Update tabs
    document.querySelectorAll('.function-tab').forEach(tab => {
      const isActive = tab.dataset.function === fnId;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update banner
    updateFunctionBanner(fnId);

    // Re-render cards with animation
    renderRoleCards(fnId);
  }

  function updateFunctionBanner(fnId) {
    const banner = document.getElementById('functionBanner');
    if (fnId === 'all') {
      functionBannerName.textContent = 'All Functions';
      functionBannerDesc.textContent = `Explore all ${getTotalRoles()} NPM roles across ${FUNCTIONS.length} functions.`;
    } else {
      const fn = FUNCTIONS.find(f => f.id === fnId);
      functionBannerName.textContent = `${fn.fullName} (${fn.name})`;
      functionBannerDesc.textContent = fn.description;
    }

    // Animate banner
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(10px)';
    requestAnimationFrame(() => {
      banner.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      banner.style.opacity = '1';
      banner.style.transform = 'translateY(0)';
    });
  }

  // ═══════════════════════════════════════════
  // ROLE CARDS
  // ═══════════════════════════════════════════

  function renderRoleCards(fnId) {
    roleCardsGrid.innerHTML = '';

    const rolesToRender = fnId === 'all'
      ? FUNCTIONS.flatMap(fn => fn.roles.map(role => ({ ...role, function: fn })))
      : FUNCTIONS.filter(fn => fn.id === fnId)
          .flatMap(fn => fn.roles.map(role => ({ ...role, function: fn })));

    rolesToRender.forEach((roleData, index) => {
      const card = createRoleCard(roleData, index);
      roleCardsGrid.appendChild(card);
    });
  }

  function createRoleCard(roleData, index) {
    const fn = roleData.function;

    const card = document.createElement('article');
    card.className = 'role-card';
    card.style.setProperty('--card-accent', fn.color);
    card.style.setProperty('--card-accent-bg', hexToRgba(fn.color, 0.12));
    card.style.setProperty('--card-accent-border', hexToRgba(fn.color, 0.25));

    // Staggered animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 80);

    const skillsPreview = roleData.skills.slice(0, 3).map(s =>
      `<span class="role-card-skill">${s}</span>`
    ).join('');

    card.innerHTML = `
      <div class="card-glow" aria-hidden="true"></div>
      <div class="role-card-header">
        <span class="role-card-function">${fn.name}</span>
        <span class="role-card-positions">${roleData.positions} Position${roleData.positions > 1 ? 's' : ''}</span>
      </div>
      <h3 class="role-card-title">${roleData.title}</h3>
      <p class="role-card-desc">${roleData.description}</p>
      <div class="role-card-footer">
        <div class="role-card-skills">${skillsPreview}</div>
        <div class="role-card-arrow" aria-hidden="true">→</div>
      </div>
    `;

    card.addEventListener('click', () => openDrawer(roleData));
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${roleData.title}`);

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDrawer(roleData);
      }
    });

    return card;
  }

  // ═══════════════════════════════════════════
  // ROLE DETAIL DRAWER
  // ═══════════════════════════════════════════

  function openDrawer(roleData) {
    const fn = roleData.function;
    isDrawerOpen = true;

    // Set function badge
    drawerFunctionBadge.textContent = fn.fullName;
    drawerFunctionBadge.style.background = hexToRgba(fn.color, 0.15);
    drawerFunctionBadge.style.color = fn.color;
    drawerFunctionBadge.style.border = `1px solid ${hexToRgba(fn.color, 0.3)}`;

    // Build content
    drawerContent.innerHTML = `
      <h2 class="drawer-title">${roleData.title}</h2>
      <div class="drawer-positions">
        <span>${roleData.positions} Open Position${roleData.positions > 1 ? 's' : ''}</span>
        <span class="dot" aria-hidden="true"></span>
        <span>${fn.fullName}</span>
      </div>

      <div class="drawer-section">
        <h3 class="drawer-section-title">Job Description</h3>
        <p class="drawer-description">${roleData.description}</p>
      </div>

      <div class="drawer-section">
        <h3 class="drawer-section-title">Skills & Knowledge Required</h3>
        <ul class="drawer-list">
          ${roleData.skills.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>

      <div class="drawer-section">
        <h3 class="drawer-section-title">KPIs / Measures of Success</h3>
        <div class="drawer-kpi-grid">
          ${roleData.kpis.map(k => `<div class="drawer-kpi">${k}</div>`).join('')}
        </div>
      </div>

      <div class="drawer-section">
        <h3 class="drawer-section-title">Learning Outcomes</h3>
        <ul class="drawer-list">
          ${roleData.learningOutcomes.map(l => `<li>${l}</li>`).join('')}
        </ul>
      </div>

      ${roleData.questions.length > 0 && roleData.questions[0] !== 'Provided inside the central application workflow.' ? `
      <div class="drawer-section">
        <h3 class="drawer-section-title">Role-Specific Application Questions</h3>
        <ol class="drawer-questions">
          ${roleData.questions.map(q => `<li>${q}</li>`).join('')}
        </ol>
      </div>
      ` : `
      <div class="drawer-section">
        <h3 class="drawer-section-title">Role-Specific Application Questions</h3>
        <p class="drawer-description" style="font-style: italic; color: var(--color-text-tertiary);">Questions are provided inside the central application workflow. Click "Apply for this Role" below to access them.</p>
      </div>
      `}
    `;

    // Open drawer
    modalBackdrop.classList.add('open');
    roleDrawer.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Scroll drawer to top
    roleDrawer.scrollTop = 0;

    // Focus management
    drawerClose.focus();
  }

  function closeDrawer() {
    isDrawerOpen = false;
    modalBackdrop.classList.remove('open');
    roleDrawer.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function setupDrawerEvents() {
    drawerClose.addEventListener('click', closeDrawer);
    modalBackdrop.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        closeDrawer();
      }
    });
  }

  // ═══════════════════════════════════════════
  // SCROLL EFFECTS
  // ═══════════════════════════════════════════

  function setupScrollEffects() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Header shadow on scroll
          header.classList.toggle('scrolled', scrollY > 50);

          // Floating CTA visibility (show after hero)
          const heroHeight = document.getElementById('hero').offsetHeight;
          floatingCta.classList.toggle('visible', scrollY > heroHeight * 0.6);

          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ═══════════════════════════════════════════
  // MOBILE MENU
  // ═══════════════════════════════════════════

  function setupMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = headerNav.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close menu on nav link click
    headerNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        headerNav.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ═══════════════════════════════════════════
  // MOUSE-FOLLOW GLOW ON CARDS
  // ═══════════════════════════════════════════

  function setupMouseGlowCards() {
    const cards = document.querySelectorAll('.role-card, .about-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const glow = card.querySelector('.card-glow');
        if (!glow) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(3, 126, 243, 0.08), transparent 60%)`;
      });

      card.addEventListener('mouseleave', () => {
        const glow = card.querySelector('.card-glow');
        if (glow) glow.style.background = '';
      });
    });
  }

  // ═══════════════════════════════════════════
  // SCROLL REVEAL (IntersectionObserver)
  // ═══════════════════════════════════════════

  function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      revealElements.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    revealElements.forEach(el => observer.observe(el));
  }

  // ═══════════════════════════════════════════
  // SMOOTH SCROLL
  // ═══════════════════════════════════════════

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#apply') return; // Let external links pass through

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ═══════════════════════════════════════════
  // UTILITIES
  // ═══════════════════════════════════════════

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // ═══════════════════════════════════════════
  // BOOT
  // ═══════════════════════════════════════════

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
