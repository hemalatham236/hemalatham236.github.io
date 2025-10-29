// script.js — dynamic site behavior

document.addEventListener('DOMContentLoaded', () => {
  // 1) Insert year
  document.getElementById('year').textContent = new Date().getFullYear();

  // 2) Simple typing/rotator for hero roles (no external library)
  const roles = ["Data Analyst", "Business Analyst", "Machine Learning Enthusiast"];
  let idx = 0, char = 0, forward = true;
  const target = document.getElementById('typed');
  function typeAnim(){
    const current = roles[idx];
    if(forward){
      char++;
      target.textContent = current.slice(0,char);
      if(char === current.length){ forward = false; setTimeout(typeAnim,1200); return; }
    } else {
      char--;
      target.textContent = current.slice(0,char);
      if(char === 0){ forward = true; idx = (idx+1)%roles.length; }
    }
    setTimeout(typeAnim, 80);
  }
  typeAnim();

  // 3) Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', () => {
    if(!nav) return;
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });

  // 4) Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#') return;
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        if(window.innerWidth < 900 && nav) nav.style.display = 'none';
      }
    });
  });

  // 5) Populate experience timeline
  const expContainer = document.getElementById('experience-timeline');
  experiences.forEach((exp, i) => {
    const side = (i % 2 === 0) ? 'left' : 'right';
    const item = document.createElement('div');
    item.className = `timeline-item ${side}`;
    item.innerHTML = `<h3>${exp.title}</h3>
                      <p class="muted">${exp.company} • ${exp.date}</p>
                      <ul>${exp.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
    expContainer.appendChild(item);
  });

  // 6) Populate projects grid
  const projectsGrid = document.getElementById('projects-grid');
  projects.forEach(p => {
    const c = document.createElement('div');
    c.className = 'card';
    c.innerHTML = `<h3>${p.title}</h3>
                   <p>${p.desc}</p>
                   <p class="meta">Tools: ${p.tools}</p>
                   <a class="view" href="${p.link}" target="_blank" rel="noopener">View Project</a>`;
    projectsGrid.appendChild(c);
  });

  // 7) Populate education
  const eduContainer = document.getElementById('education-timeline');
  education.forEach((e,i) => {
    const side = (i % 2 === 0) ? 'left' : 'right';
    const item = document.createElement('div');
    item.className = `timeline-item ${side}`;
    item.innerHTML = `<h3>${e.title}</h3><p class="muted">${e.date}</p><p>${e.desc}</p>`;
    eduContainer.appendChild(item);
  });

  // 8) Populate certifications
  const certsGrid = document.getElementById('certs-grid');
  certifications.forEach(c => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `<h3>${c.title}</h3>
                    <p class="muted">${c.issuer} • ${c.date}</p>
                    <a class="view" href="${c.url}" target="_blank" rel="noopener">View Certificate</a>`;
    certsGrid.appendChild(el);
  });

});
