// Basic nav behavior: mobile toggle + submenu toggles
document.addEventListener('DOMContentLoaded', ()=> {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.style.display === 'block';
      menu.style.display = open ? '' : 'block';
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // handle submenu toggle buttons (for mobile)
  document.querySelectorAll('.sub-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const sub = btn.nextElementSibling;
      const open = sub && sub.style.display === 'block';
      if (sub) {
        sub.style.display = open ? '' : 'block';
        btn.setAttribute('aria-expanded', String(!open));
      }
    });
  });
});