(() => {
  const scene = document.querySelector('.scroll-scene');
  const sticky = document.querySelector('.sticky-scene');
  const stack = document.querySelector('.flow-stack');
  const nav = document.querySelector('#site-header');
  const control = document.querySelector('#assembly-toggle');
  const stageLabel = document.querySelector('#phase');
  const progressText = document.querySelector('#percentage');
  const progressFill = document.querySelector('#progress-fill');
  const scrollLabel = document.querySelector('#scroll-label');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const shortViewport = matchMedia('(max-height: 610px)');
  const english = () => document.documentElement.lang === 'en';
  const localize = (pt, en) => english() ? en : pt;
  const clamp = n => Math.min(1, Math.max(0, n));
  let progress = 0;
  let pendingFrame = 0;
  let selectedDay = 'today';
  const tickets = [
    {id:'OS-017', day:'today', priority:1},
    {id:'OS-021', day:'today', priority:2},
    {id:'OS-038', day:'tomorrow', priority:1}
  ];
  const cloud = document.querySelector('#model-cloud');
  const ctx = cloud.getContext('2d');
  let previousCloud = '';
  function drawCloud(p) {
    if (!ctx) return;
    const w = cloud.clientWidth, h = cloud.clientHeight;
    if (!w || !h) return;
    const scale = Math.min(devicePixelRatio || 1, 2);
    const step = Math.round(p * 80);
    const key = [w, h, scale, step, selectedDay].join('/');
    if (key === previousCloud) return;
    previousCloud = key;
    if (cloud.width !== Math.round(w * scale) || cloud.height !== Math.round(h * scale)) {
      cloud.width = Math.round(w * scale);
      cloud.height = Math.round(h * scale);
    }
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const radius = Math.min(w * .39, h * .39);
    const phase = step / 80 * .9 + (selectedDay === 'today' ? 0 : 1.9);
    const yaw = .68 + phase;
    const light = ctx.createRadialGradient(w * .52,h * .48,0,w * .52,h * .48,radius * 1.44);
    light.addColorStop(0,'rgba(214,184,129,.21)'); light.addColorStop(.65,'rgba(151,192,172,.075)'); light.addColorStop(1,'rgba(151,192,172,0)');
    ctx.fillStyle = light; ctx.fillRect(0,0,w,h);
    // Project a folded surface as a field of points. Depth controls light and dot size.
    for (let row=1; row<52; row++) {
      const lat = row * Math.PI / 52;
      const a = Math.sin(lat), b = Math.cos(lat);
      const samples = Math.ceil(122 * a);
      for (let col=0; col<samples; col++) {
        const lon = col / samples * 2 * Math.PI;
        const fold = 1 + .20 * Math.sin(lon * 3 + lat * 3 + phase) * a + .09 * Math.cos(lat * 7 - lon * 2);
        const x = a * Math.cos(lon + yaw) * fold;
        const y = b * fold;
        const z = a * Math.sin(lon + yaw) * fold;
        const depth = z * .91 + y * .41;
        const sx = w * .50 + radius * (x *.92 - (y *.91 - z *.41)*.26);
        const sy = h * .50 + radius * (x *.26 + (y *.91 - z *.41)*.92);
        const lum = clamp((depth + .95) / 2);
        const copper = Math.sin(lon * 1.8 + lat + phase) > -.15;
        ctx.fillStyle = copper ? 'rgba(242,202,139,' + (.10 + .80 * lum) + ')' : 'rgba(139,221,208,' + (.10 + .72 * lum) + ')';
        const size = .47 + lum * Math.max(.52, radius*.012);
        ctx.fillRect(sx, sy, size, size);
      }
    }
  }
  function showExample() {
    const tomorrow = selectedDay === 'tomorrow';
    const word = tomorrow ? localize('amanhã','tomorrow') : localize('hoje','today');
    const filtered = tickets.filter(t => t.day === selectedDay).sort((a,b) => a.priority-b.priority);
    document.querySelector('#question').textContent = localize('Quais chamados vencem ' + word + '?', 'Which tickets are due ' + word + '?');
    document.querySelector('#code-day').textContent = word;
    document.querySelector('#answer-title').textContent = localize(
      filtered.length + (filtered.length === 1 ? ' chamado vence ' : ' chamados vencem ') + word + '.',
      filtered.length + (filtered.length === 1 ? ' ticket is due ' : ' tickets are due ') + word + '.'
    );
    const ids = filtered.map(t => t.id);
    document.querySelector('#answer-detail').textContent = ids.length === 1 ? localize('Revise ' + ids[0] + ' antes do prazo.','Review ' + ids[0] + ' before the deadline.') : localize('Priorize ' + ids[0] + '. Depois, revise ' + ids[1] + '.', 'Prioritize ' + ids[0] + ', then review ' + ids[1] + '.');
    document.querySelectorAll('[data-day]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.day === selectedDay)));
    document.querySelector('.days').setAttribute('aria-label', localize('Prazo da consulta','Query deadline'));
    drawCloud(progress);
  }
  document.querySelectorAll('[data-day]').forEach(b => b.addEventListener('click', () => {
    selectedDay = b.dataset.day;
    showExample();
  }));
  function fixedView() { return reduce.matches; }
  function scrollRange() {
    if (shortViewport.matches) return Math.max(1, Math.min(sticky.offsetHeight * .52, innerHeight * .72));
    return Math.max(1, scene.offsetHeight - sticky.offsetHeight);
  }
  function renderScroll() {
    pendingFrame = 0;
    const rect = scene.getBoundingClientRect();
    const range = scrollRange();
    progress = fixedView() ? 1 : clamp((nav.offsetHeight - rect.top) / range);
    stack.style.setProperty('--spread', 1 - progress * progress * (3 - 2 * progress));
    const percent = Math.round(100 * progress);
    progressText.textContent = percent + '%';
    progressFill.style.transform = 'scaleX(' + progress + ')';
    const names = english() ? ['Input', 'Retrieving context', 'Generating summary', 'Flow connected'] : ['Entrada de dados','Busca de contexto','Geração do resumo','Fluxo conectado'];
    stageLabel.textContent = names[percent === 100 ? 3 : percent >= 65 ? 2 : percent >= 25 ? 1 : 0];
    scrollLabel.textContent = fixedView() ? localize('Ver trajetória','View experience') : percent >= 99 ? localize('Reabrir o fluxo','Reopen workflow') : localize('Role para conectar','Scroll to connect');
    control.setAttribute('aria-label', fixedView() || percent >= 99 ? scrollLabel.textContent : localize('Conectar as etapas','Connect the stages'));
    document.body.classList.toggle('wn-hero-active', rect.bottom > nav.offsetHeight + 80);
    if (rect.bottom > 0 && rect.top < innerHeight) drawCloud(progress);
  }
  function scheduleScroll() { if (!pendingFrame) pendingFrame = requestAnimationFrame(renderScroll); }
  window.addEventListener('scroll', scheduleScroll, {passive:true});
  window.addEventListener('resize', scheduleScroll);
  window.addEventListener('pageshow', scheduleScroll);
  reduce.addEventListener('change', scheduleScroll);
  shortViewport.addEventListener('change', scheduleScroll);
  control.addEventListener('click', () => {
    if (fixedView()) { document.querySelector('#trajetoria').scrollIntoView(); return; }
    const start = scrollY + scene.getBoundingClientRect().top - nav.offsetHeight;
    window.scrollTo({top:Math.max(0,start+(progress >= .99 ? 0 : scrollRange())),behavior:'smooth'});
  });

  const lab = document.querySelector('#lab-form');
  const latency = document.querySelector('#latency');
  const cost = document.querySelector('#cost');
  const feedback = document.querySelector('#feedback');
  let labState = 'initial';
  function renderLab() {
    if (labState !== 'tested') {
      latency.textContent = cost.textContent = '—';
      feedback.textContent = labState === 'initial' ? localize('Escolha a configuração e execute o teste.','Choose a configuration and run the test.') : localize('Configuração alterada. Execute um novo teste.','Configuration changed. Run a new test.');
      return;
    }
    const servers = Number(new FormData(lab).get('nodes'));
    const cached = document.querySelector('#cache').checked;
    const credits = servers * 30 + (cached ? 15 : 0);
    const load = 900 * (cached ? .45 : 1) / (260 * servers);
    const ms = load >= 1 ? Infinity : Math.round(60 / (1 - load));
    latency.textContent = Number.isFinite(ms) ? ms + ' ms' : localize('Saturada','Saturated');
    cost.textContent = credits + localize(' créditos',' credits');
    if (load >= 1) feedback.textContent = localize('A fila continua crescendo. Aumente a capacidade ou use o cache para reduzir a carga.','The queue is growing. Add capacity or use the cache to reduce load.');
    else if (credits > 80) feedback.textContent = localize('A API atende ao volume, mas o custo ultrapassou 80 créditos. Tente reduzir o número de servidores.','The API can handle the traffic, but it costs more than 80 credits. Try fewer servers.');
    else if (ms > 300) feedback.textContent = localize('A latência ultrapassou 300 ms. Reavalie a capacidade e o cache.','Latency exceeds 300 ms. Reconsider capacity and caching.');
    else feedback.textContent = localize('Missão cumprida! A API atende às 900 requisições por segundo dentro do prazo e do orçamento.','Mission complete! The API handles 900 requests per second within the time and cost limits.');
  }
  lab.addEventListener('change', () => { labState = 'changed'; renderLab(); });
  lab.addEventListener('submit', event => { event.preventDefault(); labState = 'tested'; renderLab(); });
  const localized = [...document.querySelectorAll('[data-en]')].map(el => ({el, portuguese: el.innerHTML}));
  function localizePage() {
    for (const {el,portuguese} of localized) {
      if (english()) el.textContent = el.dataset.en;
      else el.innerHTML = portuguese;
    }
    showExample();
    renderLab();
    renderScroll();
  }
  new MutationObserver(localizePage).observe(document.documentElement, {attributes:true,attributeFilter:['lang']});
  localizePage();
})();
