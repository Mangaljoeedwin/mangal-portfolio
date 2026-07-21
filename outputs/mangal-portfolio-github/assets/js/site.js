document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-filter]').forEach(bar=>bar.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;bar.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');const kind=b.dataset.kind;document.querySelectorAll(bar.dataset.targets).forEach(el=>el.hidden=kind!=='All'&&el.dataset.kind!==kind)}));
  const search=document.querySelector('[data-search]');if(search)search.addEventListener('input',()=>{const q=search.value.toLowerCase();document.querySelectorAll('.notes-cards article').forEach(x=>x.hidden=!x.textContent.toLowerCase().includes(q))});
});
