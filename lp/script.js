/* =============================================
   IA Club — Script de Interações
   Alta Office Educação
   ============================================= */

/* ── Scroll Animations ─────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

/* ── Navbar scroll effect ──────────────────── */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

/* ── Smooth scroll for anchor links ───────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── CTA pulse on hover ────────────────────── */
document.querySelectorAll('.btn-ao').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 28px rgba(89,106,255,0.5)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '';
  });
});
