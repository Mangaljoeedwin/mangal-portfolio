const page=(location.pathname.split('/').pop()||'index.html');
const active=x=>page===x?' aria-current="page"':'';

[
  ['icon','image/x-icon','favicon.ico'],
  ['icon','image/png','favicon-32x32.png','32x32'],
  ['icon','image/png','favicon-16x16.png','16x16'],
  ['apple-touch-icon','image/png','apple-touch-icon.png','180x180']
].forEach(([rel,type,href,sizes])=>{
  const link=document.createElement('link');
  link.rel=rel;
  link.type=type;
  link.href=href+'?v=20260903-1';
  if(sizes)link.sizes=sizes;
  document.head.appendChild(link);
});

const ensureStylesheet=(href,id)=>{
  if(document.getElementById(id)||document.querySelector(`link[href^="${href.split('?')[0]}"]`))return;
  const link=document.createElement('link');
  link.id=id;
  link.rel='stylesheet';
  link.href=href;
  document.head.appendChild(link);
};
ensureStylesheet('assets/css/liquid-glass.css?v=20260903-4','liquid-glass-base');
ensureStylesheet('assets/css/liquid-glass-refraction.css?v=20260903-4','liquid-glass-refraction');
ensureStylesheet('assets/css/mobile-refinements.css?v=20260903-1','mobile-refinements');
ensureStylesheet('assets/css/sacred-geometry.css?v=20260903-7','sacred-geometry');
if(page!=='index.html')ensureStylesheet('assets/css/liquid-glass-inner.css?v=20260903-2','liquid-glass-inner');

document.querySelectorAll('[data-header]').forEach(el=>el.innerHTML=`<header class="site-header"><div class="header-inner"><a class="brand" href="index.html"><span>M</span><div><b>Mangal Joe Edwin</b><small>PRODUCT MARKETING LEADER</small></div></a><nav aria-label="Main navigation"><a href="work.html"${active('work.html')}>Work</a><a href="operating-system.html"${active('operating-system.html')}>Operating System</a><a href="writing.html"${active('writing.html')}>Field Notes</a><a href="about.html"${active('about.html')}>About</a></nav><a class="header-cta" href="contact.html">Let’s talk ↗</a><button class="mobile-menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span class="menu-glyph"><span></span></span><span>Menu</span></button></div><div class="mobile-menu" id="mobile-nav"><div><div class="mobile-menu-panel"><a href="work.html"${active('work.html')}>Work <span>↗</span></a><a href="operating-system.html"${active('operating-system.html')}>Operating System <span>↗</span></a><a href="writing.html"${active('writing.html')}>Field Notes <span>↗</span></a><a href="about.html"${active('about.html')}>About <span>↗</span></a><a class="mobile-contact" href="contact.html">Let’s talk <span>↗</span></a></div></div></div></header>`);

document.querySelectorAll('[data-footer]').forEach(el=>el.innerHTML=`<footer><div class="wrap"><div class="footer-grid"><div><a class="brand footer-brand" href="index.html"><span>M</span><div><b>Mangal Joe Edwin</b><small>PRODUCT MARKETING LEADER</small></div></a><p>Creating clarity across products, markets and growth.</p></div><div><small>EXPLORE</small><a href="work.html">Work</a><a href="operating-system.html">Operating System</a><a href="writing.html">Field Notes</a><a href="about.html">About</a></div><div><small>CONNECT</small><a href="mailto:mangal.joe.edwin@gmail.com">Email</a><a href="https://linkedin.com/in/mangaljoeedwin">LinkedIn ↗</a></div></div><div class="copyright"><span>© 2026 Mangal Joe Edwin</span><span>Built around clarity, not clutter.</span></div></div></footer>`);

const headerHost=document.querySelector('[data-header]');
const updateHeaderState=()=>{
  if(headerHost)headerHost.classList.toggle('is-scrolled',window.scrollY>24);
};
updateHeaderState();
window.addEventListener('scroll',updateHeaderState,{passive:true});

document.querySelectorAll('.mobile-menu-toggle').forEach(toggle=>{
  const header=toggle.closest('.site-header');
  const menu=header?.querySelector('.mobile-menu');
  const closeMenu=()=>{
    if(!header)return;
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded','false');
  };
  toggle.addEventListener('click',()=>{
    if(!header)return;
    const open=!header.classList.contains('menu-open');
    header.classList.toggle('menu-open',open);
    toggle.setAttribute('aria-expanded',String(open));
  });
  menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
  document.addEventListener('click',e=>{
    if(header?.classList.contains('menu-open')&&!header.contains(e.target))closeMenu();
  });
});

const hero=document.querySelector('.hero');
const flowerWrap=hero?.querySelector('.hero-flower-wrap');
if(hero&&flowerWrap&&window.matchMedia('(hover:hover)').matches){
  hero.addEventListener('pointermove',e=>{
    const r=flowerWrap.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width)*100;
    const y=((e.clientY-r.top)/r.height)*100;
    flowerWrap.style.setProperty('--flower-x',`${x}%`);
    flowerWrap.style.setProperty('--flower-y',`${y}%`);
    const inside=e.clientX>=r.left-130&&e.clientX<=r.right+130&&e.clientY>=r.top-130&&e.clientY<=r.bottom+130;
    hero.classList.toggle('geometry-active',inside);
  });
  hero.addEventListener('pointerleave',()=>{
    hero.classList.remove('geometry-active');
    flowerWrap.style.removeProperty('--flower-x');
    flowerWrap.style.removeProperty('--flower-y');
  });
}

if(page==='index.html'){
  const svg={
    seed:`<svg viewBox="0 0 600 600" aria-hidden="true"><circle cx="300" cy="300" r="92"/><circle cx="392" cy="300" r="92"/><circle cx="346" cy="379.67" r="92"/><circle cx="254" cy="379.67" r="92"/><circle cx="208" cy="300" r="92"/><circle cx="254" cy="220.33" r="92"/><circle cx="346" cy="220.33" r="92"/><circle cx="300" cy="300" r="245"/></svg>`,
    metatron:`<svg viewBox="0 0 600 600" aria-hidden="true"><circle cx="300" cy="300" r="55"/><circle cx="300" cy="135" r="55"/><circle cx="443" cy="217" r="55"/><circle cx="443" cy="383" r="55"/><circle cx="300" cy="465" r="55"/><circle cx="157" cy="383" r="55"/><circle cx="157" cy="217" r="55"/><path d="M300 135 443 217 443 383 300 465 157 383 157 217Z M300 135 300 465 M157 217 443 383 M443 217 157 383 M300 300 300 135 M300 300 443 217 M300 300 443 383 M300 300 300 465 M300 300 157 383 M300 300 157 217"/></svg>`,
    spiral:`<svg viewBox="0 0 600 600" aria-hidden="true"><path d="M302 302c0-17 14-31 31-31 28 0 50 23 50 50 0 45-36 81-81 81-72 0-130-58-130-130 0-115 93-208 208-208 92 0 171 50 214 125"/><circle cx="300" cy="300" r="245"/></svg>`,
    grid:`<svg viewBox="0 0 600 600" aria-hidden="true"><circle cx="300" cy="300" r="225"/><path d="M300 75 495 188 495 412 300 525 105 412 105 188Z M300 75 300 525 M105 188 495 412 M495 188 105 412 M105 188 495 188 M105 412 495 412 M202 132 398 468 M398 132 202 468"/><circle cx="300" cy="300" r="112"/></svg>`,
    sri:`<svg viewBox="0 0 600 600" aria-hidden="true"><circle cx="300" cy="300" r="240"/><path d="M300 105 455 390 145 390Z M300 495 438 210 162 210Z M300 150 420 365 180 365Z M300 450 405 235 195 235Z M300 195 390 340 210 340Z M300 405 375 260 225 260Z"/></svg>`,
    torus:`<svg viewBox="0 0 600 600" aria-hidden="true"><ellipse cx="300" cy="300" rx="235" ry="120"/><ellipse cx="300" cy="300" rx="120" ry="235"/><ellipse cx="300" cy="300" rx="205" ry="205"/><ellipse cx="300" cy="300" rx="110" ry="110"/><path d="M65 300c0-130 105-235 235-235s235 105 235 235-105 235-235 235S65 430 65 300Z"/></svg>`,
    vesica:`<svg viewBox="0 0 600 600" aria-hidden="true"><circle cx="245" cy="300" r="190"/><circle cx="355" cy="300" r="190"/><circle cx="300" cy="300" r="245"/></svg>`
  };

  const addGeometry=(el,type)=>{
    if(!el||el.querySelector(':scope > .sacred-symbol'))return;
    const symbol=document.createElement('div');
    symbol.className=`sacred-symbol sacred-${type}`;
    symbol.setAttribute('aria-hidden','true');
    symbol.innerHTML=`<div class="geo-rest">${svg[type]}</div><div class="geo-lit">${svg[type]}</div>`;
    el.classList.add('has-sacred-geometry');
    el.prepend(symbol);
    if(window.matchMedia('(hover:hover)').matches){
      el.addEventListener('pointermove',e=>{
        const r=symbol.getBoundingClientRect();
        symbol.style.setProperty('--geo-x',`${((e.clientX-r.left)/r.width)*100}%`);
        symbol.style.setProperty('--geo-y',`${((e.clientY-r.top)/r.height)*100}%`);
        const inside=e.clientX>=r.left-120&&e.clientX<=r.right+120&&e.clientY>=r.top-120&&e.clientY<=r.bottom+120;
        el.classList.toggle('geometry-active',inside);
      });
      el.addEventListener('pointerleave',()=>{
        el.classList.remove('geometry-active');
        symbol.style.removeProperty('--geo-x');
        symbol.style.removeProperty('--geo-y');
      });
    }
  };

  /* Intentionally no geometry in the belief / clarity section. */
  document.querySelectorAll('.capability-card').forEach((el,i)=>addGeometry(el,['seed','metatron','spiral'][i%3]));
  document.querySelectorAll('.work-card').forEach((el,i)=>addGeometry(el,['sri','torus','metatron','seed'][i%4]));
  addGeometry(document.querySelector('.system-map'),'grid');
  addGeometry(document.querySelector('.notes-section'),'spiral');
  addGeometry(document.querySelector('.closing'),'vesica');
}
