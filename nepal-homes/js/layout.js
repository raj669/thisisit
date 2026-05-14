// Shared navbar and footer injected into every page

function getCurrentPage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function renderNavbar() {
  const page = getCurrentPage();
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'search.html', label: 'Search' },
    { href: 'map.html', label: 'Map View' },
    { href: 'insights.html', label: 'Market' },
  ];
  const el = document.getElementById('navbar');
  if (!el) return;

  const loggedIn = typeof isLoggedIn === 'function' && isLoggedIn();
  const user = loggedIn ? getCurrentUser() : null;
  const dashLink = user
    ? (user.role === 'seller' ? 'seller-dashboard.html' : user.role === 'admin' ? 'admin.html' : 'buyer-dashboard.html')
    : 'buyer-dashboard.html';
  const initials = user ? ((user.firstName || '?')[0] + (user.lastName ? user.lastName[0] : '')).toUpperCase() : '';

  const authHTML = loggedIn ? `
    <div style="position:relative;" id="userMenuWrap">
      <button class="btn-outline-terra" onclick="toggleUserMenu(event)" style="display:flex;align-items:center;gap:6px;padding:6px 12px;">
        <div style="width:24px;height:24px;background:var(--terra-500);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:0.65rem;font-weight:700;flex-shrink:0;">${initials}</div>
        <span style="max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${user.firstName}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
      </button>
      <div id="userDropdown" style="display:none;position:absolute;right:0;top:calc(100% + 8px);background:white;border:1px solid var(--stone-100);border-radius:var(--radius-lg);box-shadow:0 8px 32px rgba(0,0,0,0.12);min-width:192px;z-index:1001;overflow:hidden;">
        <div style="padding:12px 16px;border-bottom:1px solid var(--stone-50);background:var(--stone-50);">
          <div style="font-weight:700;font-size:0.88rem;color:var(--stone-900);">${user.name}</div>
          <div style="font-size:0.75rem;color:var(--stone-400);margin-top:2px;">${user.email}</div>
        </div>
        <a href="${dashLink}" style="display:flex;align-items:center;gap:8px;padding:10px 16px;font-size:0.85rem;color:var(--stone-700);text-decoration:none;transition:background 0.15s;" onmouseover="this.style.background='var(--stone-50)'" onmouseout="this.style.background='none'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
          My Dashboard
        </a>
        <a href="list-property.html" style="display:flex;align-items:center;gap:8px;padding:10px 16px;font-size:0.85rem;color:var(--stone-700);text-decoration:none;transition:background 0.15s;" onmouseover="this.style.background='var(--stone-50)'" onmouseout="this.style.background='none'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          List a Property
        </a>
        <div style="border-top:1px solid var(--stone-50);"></div>
        <button onclick="logout()" style="display:flex;align-items:center;gap:8px;padding:10px 16px;font-size:0.85rem;color:#dc2626;width:100%;text-align:left;background:none;border:none;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#fef2f2'" onmouseout="this.style.background='none'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
          Log Out
        </button>
      </div>
    </div>
  ` : `
    <a href="login.html" class="btn-terra">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/></svg>
      Sign In
    </a>
  `;

  el.innerHTML = `
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </div>
        <span>Nepal<em>Homes</em></span>
      </a>
      <div class="navbar-links">
        ${links.map(l => `<a href="${l.href}" class="${page === l.href ? 'active' : ''}">${l.label}</a>`).join('')}
      </div>
      <div class="navbar-actions">
        ${loggedIn ? '' : `<a href="list-property.html" class="btn-outline-terra">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          List Property
        </a>`}
        ${authHTML}
      </div>
      <button class="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      ${links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      <a href="list-property.html">List Property</a>
      ${loggedIn ? `<a href="${dashLink}">My Dashboard</a><a href="#" onclick="logout();return false;" style="color:#dc2626;">Log Out</a>` : `<a href="login.html">Sign In</a>`}
    </div>
  </nav>`;
}

function toggleUserMenu(e) {
  e.stopPropagation();
  const dd = document.getElementById('userDropdown');
  if (dd) dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('click', function() {
  const dd = document.getElementById('userDropdown');
  if (dd) dd.style.display = 'none';
});

function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="navbar-logo" style="margin-bottom:0">
            <div class="logo-icon"><svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></div>
            <span style="color:white;font-size:1.1rem;font-weight:700;">Nepal<em style="color:#e08052;font-style:normal;">Homes</em></span>
          </a>
          <p>Nepal's most trusted real estate platform connecting buyers, sellers, and renters across the country.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="search.html">Search Properties</a></li>
            <li><a href="map.html">Map View</a></li>
            <li><a href="insights.html">Market Insights</a></li>
            <li><a href="compare.html">Compare Properties</a></li>
          </ul>
        </div>
        <div>
          <h4>For Users</h4>
          <ul>
            <li><a href="login.html">Sign In / Register</a></li>
            <li><a href="buyer-dashboard.html">Buyer Dashboard</a></li>
            <li><a href="seller-dashboard.html">Seller Dashboard</a></li>
            <li><a href="list-property.html">List Your Property</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
            <span>Durbarmarg, Kathmandu, Nepal</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>+977-01-4567890</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>info@nepalhomes.com.np</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 NepalHomes. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof onAuthReady === 'function') {
    onAuthReady(() => { renderNavbar(); renderFooter(); });
  } else {
    renderNavbar();
    renderFooter();
  }
});
