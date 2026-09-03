const menu = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobile-nav');
const progress = document.getElementById('progress');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

/* ============================= */
/* FOOTER REVEAL */
/* ============================= */

const footer = document.querySelector("#footer");

if (footer) {
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("footer-active");
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  footerObserver.observe(footer);
}



menu?.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  mobileNav.classList.toggle('flex');
  menu.setAttribute('aria-expanded', String(!mobileNav.classList.contains('hidden')));
});

document.querySelectorAll('#mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    mobileNav.classList.remove('flex');
    menu.setAttribute('aria-expanded', 'false');
  });
});

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  if (progress) progress.style.width = `${value}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
