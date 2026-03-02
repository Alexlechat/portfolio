/* ============================================================
   MATRIX RAIN
============================================================ */
(function () {
    const canvas = document.getElementById('matrix-canvas');
    const ctx    = canvas.getContext('2d');
    const chars  = '01アイウエオカキクサシスセソタチツハヒフヘホラリルレロ';
    const fs     = 13;
    let cols, drops;

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        cols  = Math.floor(canvas.width / fs);
        drops = Array(cols).fill(1);
    }
    resize();
    window.addEventListener('resize', resize);

    function tick() {
        ctx.fillStyle = 'rgba(5,9,18,0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00d4ff';
        ctx.font = fs + 'px monospace';
        for (let i = 0; i < cols; i++) {
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, drops[i] * fs);
            if (drops[i] * fs > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(tick, 55);
}());

/* ============================================================
   TYPING EFFECT
============================================================ */
(function () {
    const phrases = [
        'Étudiant Développeur | En reconversion vers la Cybersécurité',
        'Langage C · Bash · Linux · Architecture Réseaux',
        'École 42 Lyon · Security Minded Developer'
    ];
    let pi = 0, ci = 0, deleting = false;
    const el = document.getElementById('typedText');

    function type() {
        const current = phrases[pi];
        if (!deleting) {
            el.textContent = current.slice(0, ++ci);
            if (ci === current.length) {
                setTimeout(() => { deleting = true; }, 2800);
                return setTimeout(type, 2900);
            }
        } else {
            el.textContent = current.slice(0, --ci);
            if (ci === 0) {
                deleting = false;
                pi = (pi + 1) % phrases.length;
            }
        }
        setTimeout(type, deleting ? 35 : 55);
    }
    setTimeout(type, 900);
}());

/* ============================================================
   NAVBAR SCROLL
============================================================ */
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
}, { passive: true });

/* ============================================================
   MOBILE BURGER
============================================================ */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
}));

/* ============================================================
   SCROLL REVEAL
============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   SKILL BAR ANIMATION
============================================================ */
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.skill-fill').forEach(bar => {
                const w = getComputedStyle(bar).getPropertyValue('--w').trim();
                bar.style.transform = `scaleX(${w})`;
                bar.classList.add('active');
            });
            barObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card').forEach(c => barObserver.observe(c));
