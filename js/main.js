/* ════════════════════════════════════════
   Leon Boltendal — main.js
   ════════════════════════════════════════ */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Nav scroll state ── */
  const nav = document.querySelector('.nav');

  if (nav) {
    function updateNav() {
      nav.classList.toggle('scrolled', window.scrollY > 32);
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ── Fade animaties ── */
  if (!prefersReducedMotion) {

    // Foto + intro + manifesto header + eerste sectie: staggered op load
    document.querySelectorAll('.photo-header .fade, .intro-section .fade, .manifesto-header .fade, .manifesto-section:first-child .fade').forEach(function (el, i) {
      setTimeout(function () { el.classList.add('in'); }, 60 + i * 90);
    });

    // Alle overige .fade elementen: op scroll
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(function () { entry.target.classList.add('in'); }, delay);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.fade:not(.in)').forEach(function (el) { io.observe(el); });

  } else {
    document.querySelectorAll('.fade').forEach(function (el) { el.classList.add('in'); });
  }

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

}());
