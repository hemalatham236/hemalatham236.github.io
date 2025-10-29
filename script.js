// mobile nav toggle + smooth scroll + year
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', () => {
    if(!nav) return;
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#' || href === '') return;
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        // close nav on mobile
        if(window.innerWidth < 900 && nav) nav.style.display = 'none';
      }
    });
  });

  // set year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;
});
