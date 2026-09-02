const menu = document.getElementById('menu');
const mobileNav = document.getElementById('mobile-nav');
const progress = document.getElementById('progress');

menu?.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  mobileNav.classList.toggle('flex');
});

document.querySelectorAll('#mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    mobileNav.classList.remove('flex');
  });
});

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${value}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
