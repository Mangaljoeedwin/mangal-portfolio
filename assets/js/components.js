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
