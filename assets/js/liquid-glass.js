document.addEventListener('DOMContentLoaded',()=>{
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const headerHost=document.querySelector('[data-header]');
  const updateHeaderState=()=>{
    if(!headerHost)return;
    headerHost.classList.toggle('is-scrolled',window.scrollY>24);
  };
  updateHeaderState();
  window.addEventListener('scroll',updateHeaderState,{passive:true});

  if(reduceMotion)return;
  document.querySelectorAll('.glass-surface').forEach(el=>{
    el.addEventListener('pointermove',e=>{
      const r=el.getBoundingClientRect();
      el.style.setProperty('--glass-x',`${((e.clientX-r.left)/r.width)*100}%`);
      el.style.setProperty('--glass-y',`${((e.clientY-r.top)/r.height)*100}%`);
    });
    el.addEventListener('pointerleave',()=>{
      el.style.removeProperty('--glass-x');
      el.style.removeProperty('--glass-y');
    });
  });
});
