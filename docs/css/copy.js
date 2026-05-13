document.addEventListener('click', function(e) {
  const btn = e.target.closest('button.copy');
  if (!btn) return;
  const target = btn.closest('.prompt');
  if (!target) return;
  const text = target.getAttribute('data-prompt') || target.innerText.replace(/^(PROMPT|FOLLOW-UP)\s*/i, '').replace(/\s*Copy\s*$/i, '').trim();
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copied';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1600);
  });
});
