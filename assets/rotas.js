(() => {
  const one = selector => document.querySelector(selector);
  const all = selector => [...document.querySelectorAll(selector)];
  const en = () => document.documentElement.lang === 'en';
  const label = (pt, english) => en() ? english : pt;
  const places = {Base:[13,70], A:[32,22], B:[76,64], C:[57,32], D:[40,81]};
  const letters = ['A','B','C','D'];
  const chosen = [];
  let compared = false;
  const plot = one('#route-plot');
  const ctx = plot.getContext('2d');
  const compare = one('#route-compare');
  const stopButtons = all('button[data-stop]');
  function lengthOf(order) {
    let sum = 0;
    for (let i=1;i<order.length;i++) {
      const a=places[order[i-1]], b=places[order[i]];
      sum += Math.hypot((b[0]-a[0])*.10,(b[1]-a[1])*.06);
    }
    return sum;
  }
  let shortest = null;
  function visit(prefix, remaining) {
    if (remaining.length) {
      remaining.forEach(point => visit([...prefix,point], remaining.filter(p => p !== point)));
      return;
    }
    const order = ['Base', ...prefix, 'Base'];
    const km = lengthOf(order);
    if (!shortest || km < shortest.km - .000001) shortest = {order,km};
  }
  visit([],letters);
  const route = () => ['Base',...chosen,...(chosen.length === letters.length ? ['Base'] : [])];
  const kmText = km => km.toLocaleString(en() ? 'en-US' : 'pt-BR', {minimumFractionDigits:1,maximumFractionDigits:1}) + ' km';
  function draw() {
    if (!ctx) return;
    const box=plot.getBoundingClientRect(), w=box.width, h=box.height;
    if (!w || !h) return;
    const dpr=Math.min(window.devicePixelRatio || 1,2);
    const pixelW=Math.round(w*dpr), pixelH=Math.round(h*dpr);
    if (plot.width!==pixelW || plot.height!==pixelH) { plot.width=pixelW; plot.height=pixelH; }
    ctx.setTransform(pixelW/w,0,0,pixelH/h,0,0);
    ctx.fillStyle='#d5e2ce'; ctx.fillRect(0,0,w,h);
    ctx.save();
    ctx.translate(w*.51,h*.48); ctx.rotate(-.18);
    const unit=Math.max(24,w/14);
    for (let ix=-11;ix<12;ix++) for (let iy=-11;iy<12;iy++) {
      const type=((ix*29+iy*11)%13+13)%13;
      ctx.fillStyle=type<3?'#b8d1b5':type<9?'#e1e6d6':'#d0dbc7';
      ctx.strokeStyle='#c3d0bc'; ctx.lineWidth=1;
      const x=ix*unit, y=iy*unit*.7;
      ctx.fillRect(x+1,y+1,unit-3,unit*.7-3);
      ctx.strokeRect(x+3,y+3,unit-7,unit*.7-7);
      if (type>5) {ctx.beginPath();ctx.moveTo(x+unit*.55,y+3);ctx.lineTo(x+unit*.55,y+unit*.7-4);ctx.stroke();}
    }
    ctx.restore();
    function curve(color,width,points) {
      ctx.strokeStyle=color; ctx.lineWidth=width; ctx.lineCap='round'; ctx.beginPath();
      ctx.moveTo(points[0]*w,points[1]*h);
      ctx.bezierCurveTo(points[2]*w,points[3]*h,points[4]*w,points[5]*h,points[6]*w,points[7]*h); ctx.stroke();
    }
    curve('#a2cbc0',w*.032,[-.1,.31,.46,.74,.55,-.16,1.1,.24]);
    curve('#f5f0d9',4,[-.08,.77,.30,.32,.64,.95,1.1,.48]);
    function path(order,color,width,dash=[]) {
      ctx.beginPath(); ctx.setLineDash(dash); ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineJoin='round';
      order.forEach((name,index) => { const [x,y]=places[name]; if(index) ctx.lineTo(x*w/100,y*h/100); else ctx.moveTo(x*w/100,y*h/100); });
      ctx.stroke();ctx.setLineDash([]);
    }
    path(route(),'#faf7e6',6); path(route(),'#a65025',3.5);
    if (compared) path(shortest.order,'#12574e',2.5,[7,6]);
  }
  function updateRoute() {
    stopButtons.forEach(button => {
      const selected=chosen.includes(button.dataset.stop);
      button.disabled=selected;
      button.setAttribute('aria-label',label('Parada ','Stop ') + button.dataset.stop);
    });
    compare.disabled=chosen.length!==letters.length || compared;
    const order=route(), km=lengthOf(order);
    one('#route-status').textContent=chosen.length ? order.join(' → ') : label('Saída da base','Leaving base');
    one('#route-distance').textContent=kmText(km);
    let result;
    if (compared) {
      const delta=km-shortest.km;
      const opt=(delta < .001 ? order : shortest.order).join(' → ');
      result=delta < .001 ? label('Sua rota já é a mais curta! ','Your route is already the shortest! ') :
        label('A rota mais curta economiza ','The shortest route saves ') + kmText(delta) + '. ';
      result+=label('Traçado verde pontilhado','Dotted green route') + ' · ' + opt + ' · ' + kmText(shortest.km) + '.';
    } else if (chosen.length===4) result=label('Circuito completo. Compare sua rota com a mais curta.','Circuit complete. Compare your route with the shortest one.');
    else if (!chosen.length) result=label('Escolha a primeira parada.','Choose your first stop.');
    else result=label('Paradas visitadas','Stops visited') + ' · ' + chosen.length + '/4. ' + label('Escolha a próxima.','Choose the next one.');
    one('#route-result').textContent=result;
    draw();
  }
  stopButtons.forEach(button => button.addEventListener('click', () => {
    const stop=button.dataset.stop;
    if (chosen.includes(stop)) return;
    chosen.push(stop);
    updateRoute();
    if (chosen.length===letters.length) compare.focus({preventScroll:true});
  }));
  compare.addEventListener('click', () => { compared=true;updateRoute(); });
  one('#route-reset').addEventListener('click', () => { chosen.length=0;compared=false;updateRoute(); });
  new ResizeObserver(draw).observe(one('.plot-wrap'));
  new MutationObserver(updateRoute).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
  updateRoute();
})();
