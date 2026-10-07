(function(){
  const nav=document.getElementById('nav');
  const menuBtn=document.querySelector('.menu-btn');
  const menu=document.getElementById('mobileMenu');
  const updateNav=()=>nav.classList.toggle('scrolled',window.scrollY>20);
  updateNav(); window.addEventListener('scroll',updateNav,{passive:true});
  if(menuBtn){menuBtn.addEventListener('click',()=>{const open=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!open));menu.hidden=open;});}
  document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{menu.hidden=true;menuBtn?.setAttribute('aria-expanded','false')}));
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.08});
  document.querySelectorAll('.section-intro,.project-card,.danar-case,.cap,.stack-system,.archive-card,.about-grid,.contact-panel').forEach(el=>{el.classList.add('reveal');io.observe(el)});
  const canonical=document.querySelector('link[rel="canonical"]')||document.createElement('link');canonical.rel='canonical';canonical.href=window.location.origin + window.location.pathname.split('/').slice(0,-1).join('/') + '/';if(!canonical.parentNode)document.head.appendChild(canonical);
  const schema=document.getElementById('schema');if(schema){try{const data=JSON.parse(schema.textContent);data.url=window.location.origin + window.location.pathname.split('/').slice(0,-1).join('/') + '/';schema.textContent=JSON.stringify(data)}catch{}}
})();
