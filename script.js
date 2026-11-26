// ===== Menu mudah alih =====
const nav = document.querySelector('nav');
document.getElementById('menu').onclick = () => nav.classList.toggle('open');

// ===== Kesan menaip pada halaman utama =====
const t = document.querySelector('.type');
if (t) {
  const words = ['Student', 'Web Developer', 'Creative Thinker'];
  let i = 0, j = 0, deleting = false;

  (function tick() {
    const word = words[i];
    t.firstChild.textContent = word.slice(0, j);

    if (!deleting && j++ === word.length) {
      deleting = true;
      return setTimeout(tick, 1200);
    }
    if (deleting && --j < 0) {
      deleting = false;
      j = 0;
      i = (i + 1) % words.length;
    }
    setTimeout(tick, deleting ? 50 : 110);
  })();
}

// ===== Bar kemahiran =====
document.querySelectorAll('.bar-t i').forEach(bar => {
  setTimeout(() => (bar.style.width = bar.dataset.v + '%'), 200);
});

// ===== Borang komen =====
const form = document.getElementById('cf');
if (form) {
  form.onsubmit = e => {
    e.preventDefault();
    let ok = true;

    const check = (id, isValid, message) => {
      const el = document.getElementById(id);
      const bad = !isValid(el.value.trim());
      el.nextElementSibling.textContent = bad ? message : '';
      if (bad) ok = false;
    };

    check('nm', v => v.length >= 2, 'Enter your name.');
    check('em', v => /^\S+@\S+\.\S+$/.test(v), 'Enter a valid email, like name@example.com.');
    check('msg', v => v.length >= 10, 'Write at least 10 characters.');

    if (ok) {
      form.style.display = 'none';
      document.getElementById('ok').style.display = 'block';
      document.getElementById('who').textContent = document.getElementById('nm').value;
    }
  };
}

// ===== Tunjuk atau sembunyi gambar pasukan =====
function showTeam(event) {
  event.preventDefault();
  const image = document.getElementById('teamImage');
  image.style.display = image.style.display === 'none' ? 'block' : 'none';
}
