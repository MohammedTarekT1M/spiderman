// Small interactions for the hero buttons and teaser modal
(function () {
  const buy = document.getElementById('buyBtn');
  const teaser = document.getElementById('teaserBtn');

  if (buy) {
    buy.addEventListener('click', (e) => {
      // If it's a link to spiderman2.html, navigate there
      const href = buy.getAttribute('href') || '';
      if (href.endsWith('spiderman2.html')) return; // default link behavior
      e.preventDefault();
      window.location.hash = '#wallpapers';
      buy.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-4px)' },
        { transform: 'translateY(0)' }
      ], { duration: 250, easing: 'ease-out' });
    });
  }

  function ensureModal() {
    let modal = document.querySelector('.modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal__dialog" role="dialog" aria-modal="true" aria-label="Watch teaser">
        <div class="modal__header">
          <strong>Watch Teaser</strong>
          <button class="modal__close" aria-label="Close">×</button>
        </div>
        <div class="modal__body">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3wHL2VIaFcs?si=DRVl2Faw4S-cnKd9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>`;
    document.body.appendChild(modal);

    const close = () => modal.classList.remove('open');
    modal.addEventListener('click', (ev) => {
      if (ev.target === modal) close();
    });
    modal.querySelector('.modal__close').addEventListener('click', close);
    window.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') close(); });

    return modal;
  }

  if (teaser) {
    teaser.addEventListener('click', () => {
      const modal = ensureModal();
      modal.classList.add('open');
    });
  }
})();

// Splash screen: hide after load with a slight minimum delay
(function () {
  const splash = document.getElementById('splash');
  if (!splash) return;

  const minDelay = new Promise((r) => setTimeout(r, 900));
  const pageLoaded = new Promise((r) => {
    if (document.readyState === 'complete') r();
    else window.addEventListener('load', r, { once: true });
  });

  Promise.all([minDelay, pageLoaded]).then(() => {
    splash.classList.add('hide');
  });
})();
