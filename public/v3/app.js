// wa.co — web interactions
(() => {
  // ---------- Lenis smooth scroll ----------
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/lenis@1.1.14/dist/lenis.min.js';
    s.onload = () => {
      const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    };
    document.head.appendChild(s);
  }

  // ---------- Custom cursor ----------
  const cursor = document.createElement('div');
  cursor.className = 'cursor-dot';
  document.body.appendChild(cursor);
  let cx = 0, cy = 0, tx = 0, ty = 0;
  window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
  function animCur() {
    cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
    cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
    requestAnimationFrame(animCur);
  }
  animCur();
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .service, .case, .form-option, .accordion__trigger')) cursor.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .service, .case, .form-option, .accordion__trigger')) cursor.classList.remove('is-hover');
  });

  // ---------- Nav scrolled state ----------
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 20);
    });
  }

  // ---------- Fade-up on intersect ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

  // ---------- Chat demo autoplay loop ----------
  const chatBody = document.querySelector('#chat-body');
  if (chatBody) {
    const conversation = [
      { kind: 'in', delay: 600, text: 'Hola, ¿tienen tortas para 30 personas para el viernes?' },
      { kind: 'typing', delay: 900 },
      { kind: 'out', delay: 1200, bot: true, text: '¡Hola! Sí, tenemos disponibilidad. Para 30 personas te recomiendo la torta de 3 libras 🎂' },
      { kind: 'out', delay: 600, bot: true, text: 'Opciones:\n· Clásica chocolate — $280.000\n· Tres leches — $310.000\n· Zanahoria premium — $340.000' },
      { kind: 'in', delay: 1500, text: 'La de tres leches. ¿Puedo pagar con Nequi?' },
      { kind: 'typing', delay: 800 },
      { kind: 'out', delay: 1100, bot: true, text: '¡Perfecto! Te envío el link de Nequi y agendo entrega para el viernes a las 3pm. ¿Confirmas dirección?' },
    ];

    async function play() {
      while (true) {
        chatBody.innerHTML = '';
        for (const step of conversation) {
          await new Promise(r => setTimeout(r, step.delay));
          if (step.kind === 'typing') {
            const t = document.createElement('div');
            t.className = 'chat__msg chat__msg--out show';
            t.innerHTML = '<span class="chat__typing"><span></span><span></span><span></span></span>';
            chatBody.appendChild(t);
            await new Promise(r => setTimeout(r, 1100));
            t.remove();
          } else {
            const el = document.createElement('div');
            el.className = `chat__msg chat__msg--${step.kind}`;
            const botLabel = step.bot ? '<div class="chat__bot">BOT · wa.co</div>' : '';
            const time = new Date(Date.now()).toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
            el.innerHTML = `${botLabel}${step.text.replace(/\n/g, '<br/>')}<span class="chat__time">${time}</span>`;
            chatBody.appendChild(el);
            requestAnimationFrame(() => el.classList.add('show'));
          }
          chatBody.scrollTop = chatBody.scrollHeight;
        }
        await new Promise(r => setTimeout(r, 4000));
      }
    }
    play();
  }

  // ---------- ROI calculator ----------
  const roiHours = document.querySelector('#roi-hours');
  const roiRate = document.querySelector('#roi-rate');
  const roiResult = document.querySelector('#roi-result');
  const roiHoursLabel = document.querySelector('#roi-hours-val');
  const roiRateLabel = document.querySelector('#roi-rate-val');
  function updateRoi() {
    if (!roiHours || !roiResult) return;
    const h = +roiHours.value;
    const r = +roiRate.value;
    const monthly = h * 22 * r; // 22 business days
    roiHoursLabel.textContent = h + 'h';
    roiRateLabel.textContent = '$' + r.toLocaleString('es-CO');
    roiResult.textContent = '$' + (monthly / 1000).toFixed(0) + 'k';
  }
  if (roiHours) {
    roiHours.addEventListener('input', updateRoi);
    roiRate.addEventListener('input', updateRoi);
    updateRoi();
  }

  // ---------- Multi-step form ----------
  const form = document.querySelector('#wa-form');
  if (form) {
    const screens = form.querySelectorAll('.form-screen');
    const steps = form.querySelectorAll('.form-step');
    let current = 0;
    const total = screens.length;
    const data = {};

    function show(i) {
      screens.forEach((s, idx) => s.classList.toggle('is-active', idx === i));
      steps.forEach((s, idx) => {
        s.classList.toggle('is-active', idx === i);
        s.classList.toggle('is-done', idx < i);
      });
      current = i;
    }

    form.querySelectorAll('[data-next]').forEach(btn => {
      btn.addEventListener('click', () => {
        const field = btn.dataset.field;
        if (field) {
          const group = form.querySelector(`[data-group="${field}"]`);
          if (group) {
            const sel = group.querySelector('.form-option.is-selected');
            if (!sel) { group.animate([{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}], {duration:300}); return; }
            data[field] = sel.dataset.value;
          } else {
            const input = form.querySelector(`[name="${field}"]`);
            if (input && !input.value.trim()) { input.focus(); input.style.borderColor = 'var(--guayaba-500)'; return; }
            if (input) { data[field] = input.value; input.style.borderColor = ''; }
          }
        }
        if (current < total - 1) show(current + 1);
      });
    });
    form.querySelectorAll('[data-prev]').forEach(btn => {
      btn.addEventListener('click', () => { if (current > 0) show(current - 1); });
    });

    form.querySelectorAll('[data-group]').forEach(group => {
      group.querySelectorAll('.form-option').forEach(opt => {
        opt.addEventListener('click', () => {
          group.querySelectorAll('.form-option').forEach(o => o.classList.remove('is-selected'));
          opt.classList.add('is-selected');
        });
      });
    });

    const submit = form.querySelector('[data-submit]');
    if (submit) {
      submit.addEventListener('click', () => {
        const name = form.querySelector('[name="name"]')?.value || '';
        const phone = form.querySelector('[name="phone"]')?.value || '';
        if (!name || !phone) {
          [['name', name], ['phone', phone]].forEach(([k, v]) => {
            if (!v) form.querySelector(`[name="${k}"]`).style.borderColor = 'var(--guayaba-500)';
          });
          return;
        }
        data.name = name; data.phone = phone;
        const servicio = data.servicio || 'info';
        const budget = data.budget || 'a definir';
        const text = `Hola wa.co!%0A%0ASoy ${encodeURIComponent(name)}.%0AServicio: ${encodeURIComponent(servicio)}%0APresupuesto: ${encodeURIComponent(budget)}%0ATel: ${encodeURIComponent(phone)}`;
        window.open(`https://wa.me/573001234567?text=${text}`, '_blank');
        show(total - 1);
      });
    }
  }

  // ---------- Accordion ----------
  document.querySelectorAll('.accordion__trigger').forEach(t => {
    t.addEventListener('click', () => {
      const item = t.closest('.accordion__item');
      item.classList.toggle('is-open');
    });
  });

  // ---------- Lettermark scroll morph ----------
  const morph = document.querySelector('#morph-path');
  if (morph) {
    const p1 = "M 14 42 C 14 26, 38 18, 52 30 C 62 40, 66 58, 72 78 C 78 98, 88 116, 100 116 C 112 116, 122 100, 128 82 C 134 62, 138 42, 152 30 C 166 18, 188 24, 192 42 C 196 62, 200 82, 208 100 C 214 114, 224 122, 236 116 M 286 64 C 286 44, 270 32, 252 32 C 234 32, 220 46, 220 66 C 220 86, 234 100, 252 100 C 270 100, 286 88, 286 68 M 286 46 L 286 116";
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const rot = Math.sin(y * 0.002) * 2;
      morph.style.transform = `translateY(${y * 0.02}px) rotate(${rot}deg)`;
    });
  }
})();
