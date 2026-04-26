// Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
  (function animRing() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a, button, .menu-item, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%,-50%) scale(2.5)'; ring.style.opacity = '0.2'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.opacity = '0.6'; });
  });

  // Navbar scroll
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hero BG animate in
  window.addEventListener('load', () => {
    document.getElementById('heroBg').classList.add('loaded');
  });

  // Parallax
  const expBg = document.getElementById('expBg');
  window.addEventListener('scroll', () => {
    const exp = document.getElementById('exp');
    const rect = exp.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      expBg.style.transform = `scale(1.1) translateY(${(progress - 0.5) * 60}px)`;
    }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Menu tabs
  function switchTab(btn, id) {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + id).classList.add('active');
  }

  // Mobile menu
  document.getElementById('hamburger').addEventListener('click', () => document.getElementById('mobileMenu').classList.add('open'));
  document.getElementById('mobileClose').addEventListener('click', closeMobile);
  function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

  // Reservation button
  function handleReserve() {
    const btn = document.querySelector('.form-submit');
    btn.textContent = '✓ Reservation Confirmed!';
    btn.style.background = '#5a8a4a';
    btn.style.color = '#fff';
    setTimeout(() => { btn.textContent = 'Confirm Reservation'; btn.style.background = ''; btn.style.color = ''; }, 3000);
  }