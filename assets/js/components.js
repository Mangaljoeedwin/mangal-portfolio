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
document.querySelectorAll('[data-header]').forEach(el=>el.innerHTML=`<header class="site-header"><div class="header-inner"><a class="brand" href="index.html"><span>M</span><div><b>Mangal Joe Edwin</b><small>PRODUCT MARKETING LEADER</small></div></a><nav aria-label="Main navigation"><a href="work.html"${active('work.html')}>Work</a><a href="operating-system.html"${active('operating-system.html')}>Operating System</a><a href="writing.html"${active('writing.html')}>Field Notes</a><a href="about.html"${active('about.html')}>About</a></nav><a class="header-cta" href="contact.html">Let’s talk ↗</a></div></header>`);
document.querySelectorAll('[data-footer]').forEach(el=>el.innerHTML=`<footer><div class="wrap"><div class="footer-grid"><div><a class="brand footer-brand" href="index.html"><span>M</span><div><b>Mangal Joe Edwin</b><small>PRODUCT MARKETING LEADER</small></div></a><p>Creating clarity across products, markets and growth.</p></div><div><small>EXPLORE</small><a href="work.html">Work</a><a href="operating-system.html">Operating System</a><a href="writing.html">Field Notes</a><a href="about.html">About</a></div><div><small>CONNECT</small><a href="mailto:mangal.joe.edwin@gmail.com">Email</a><a href="https://linkedin.com/in/mangaljoeedwin">LinkedIn ↗</a></div></div><div class="copyright"><span>© 2026 Mangal Joe Edwin</span><span>Built around clarity, not clutter.</span></div></div></footer>`);
