const introRoot = document.documentElement;
const intro = document.querySelector('.welcome-intro');

if (intro && introRoot.classList.contains('intro-pending')) {
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const skip = intro.querySelector('.welcome-skip');
  const letters = intro.querySelector('.welcome-letters');
  const previousFocus = document.activeElement;
  const background = [...document.body.children].filter(el => el !== intro && el.tagName !== 'SCRIPT');
  const previouslyInert = background.map(el => el.inert);
  let closed = false;
  let leaving = false;
  let finishTimer;
  let exitTimer;

  function finish() {
    if (closed) return;
    closed = true;
    clearTimeout(finishTimer);
    clearTimeout(exitTimer);
    clearTimeout(window.introFailsafe);
    const restoreFocus = intro.contains(document.activeElement);
    intro.hidden = true;
    introRoot.classList.remove('intro-pending');
    background.forEach((el, i) => { el.inert = previouslyInert[i]; });
    document.removeEventListener('keydown', onKey);
    motionPreference.removeEventListener('change', onMotionChange);
    window.removeEventListener('pagehide', finish);
    try { sessionStorage.setItem('treasure-welcomed', '1'); } catch {}
    if (restoreFocus) {
      const target = previousFocus !== document.body ? previousFocus : document.querySelector('.wordmark');
      target?.focus({ preventScroll: true });
    }
  }
  function leave() {
    if (leaving || closed) return;
    leaving = true;
    intro.classList.add('is-leaving');
    exitTimer = setTimeout(finish, 650);
  }
  function onKey(event) {
    if (event.key === 'Escape') { event.preventDefault(); finish(); }
    if (event.key === 'Tab') { event.preventDefault(); skip.focus({ preventScroll: true }); }
  }
  function onMotionChange(event) { if (event.matches) finish(); }

  let index = 0;
  const words = letters.textContent.split(' ');
  letters.replaceChildren();
  words.forEach((word, wordIndex) => {
    if (wordIndex) { letters.append(' '); index++; }
    const group = document.createElement('span');
    group.className = 'welcome-word';
    for (const character of word) {
      const letter = document.createElement('span');
      letter.className = 'welcome-letter';
      letter.textContent = character;
      letter.style.setProperty('--letter-delay', `${180 + index++ * 48}ms`);
      group.append(letter);
    }
    letters.append(group);
  });
  background.forEach(el => { el.inert = true; });
  intro.hidden = false;
  skip.addEventListener('click', finish, { once: true });
  document.addEventListener('keydown', onKey);
  motionPreference.addEventListener('change', onMotionChange);
  window.addEventListener('pagehide', finish, { once: true });
  clearTimeout(window.introFailsafe);
  window.introFailsafe = setTimeout(finish, 5000);
  finishTimer = setTimeout(leave, 180 + index * 48 + 1000);
}
