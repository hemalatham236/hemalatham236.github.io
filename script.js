/* script.js - render data and add UI behaviors */

// ---------------------- Basic render ----------------------
function $(s){return document.querySelector(s)}
function $all(s){return Array.from(document.querySelectorAll(s))}

document.addEventListener('DOMContentLoaded', () => {
  // Fill header/hero content from profileData (data.js)
  const nameEl = $('#hero-name')
  const roleEl = $('#hero-role')
  const aboutEl = $('#about-text')
  const resumeLink = $('#resume-link')
  const profilePhoto = $('#profile-photo')
  const emailLink = $('#contact-email')
  const githubLink = $('#contact-github')
  const linkedinLink = $('#contact-linkedin')
  const yearEl = $('#year')

  if (window.profileData) {
    nameEl.textContent = profileData.name
    roleEl.textContent = profileData.role
    aboutEl.textContent = profileData.intro
    resumeLink.href = profileData.resume || resumeLink.href
    profilePhoto.src = profileData.photo || profilePhoto.src
    emailLink.href = 'mailto:' + (profileData.email || 'hemalatham236@gmail.com')
    githubLink.href = profileData.github || githubLink.href
    linkedinLink.href = profileData.linkedin || linkedinLink.href
  }

  // Render experience timeline
  const expContainer = $('#experience-timeline')
  if (window.experiences && expContainer) {
    experiences.forEach((exp,i)=>{
      const side = (i%2===0)?'left':'right'
      const item = document.createElement('div')
      item.className = `timeline-item ${side}`
      item.innerHTML = `<h3>${escapeHtml(exp.title)}</h3>
                        <p class="muted">${escapeHtml(exp.company)} • ${escapeHtml(exp.date||'')}</p>
                        <p>${escapeHtml(exp.description||'')}</p>`
      expContainer.appendChild(item)
    })
  }

  // Projects grid
  const projectsGrid = $('#projects-grid')
  if (window.projects && projectsGrid){
    projects.forEach(p=>{
      const card = document.createElement('div')
      card.className='card project-card'
      card.innerHTML = `<h3>${escapeHtml(p.title)}</h3>
                        <p class="muted">${escapeHtml(p.description)}</p>
                        ${p.link?`<p style="margin-top:10px;"><a href="${p.link}" target="_blank">View Project</a></p>`:''}`
      projectsGrid.appendChild(card)
    })
  }

  // Education timeline
  const eduContainer = $('#education-timeline')
  if (window.education && eduContainer){
    education.forEach((ed,i)=>{
      const side = (i%2===0)?'left':'right'
      const item = document.createElement('div')
      item.className = `timeline-item ${side}`
      item.innerHTML = `<h3>${escapeHtml(ed.title)}</h3>
                        <p class="muted">${escapeHtml(ed.date||'')}</p>
                        <p>${escapeHtml(ed.note||'')}</p>`
      eduContainer.appendChild(item)
    })
  }

  // Certifications timeline
  const certContainer = $('#certs-timeline')
  if (window.certifications && certContainer){
    certifications.forEach((c,i)=>{
      const side = (i%2===0)?'left':'right'
      const item = document.createElement('div')
      item.className = `timeline-item ${side}`
      item.innerHTML = `<h3>${escapeHtml(c.title)}</h3>
                        <p class="muted">${escapeHtml(c.date||'')}</p>
                        ${c.url?`<p><a href="${c.url}" target="_blank">View Certificate</a></p>`:''}`
      certContainer.appendChild(item)
    })
  }

  // Footer year
  if (yearEl) yearEl.textContent = new Date().getFullYear()

  // Add small fade-in animation observer
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if (ent.isIntersecting) {
        ent.target.classList.add('show')
        obs.unobserve(ent.target)
      }
    })
  },{threshold:0.18})
  $all('.timeline-item, .card, .section-head, .hero-left, .hero-right').forEach(el=>{
    el.classList.add('fade-in')
    obs.observe(el)
  })

  // Make profile photo small & circular (safety)
  const p = profilePhoto
  if (p) {
    p.style.borderRadius = '12px'
    // if you prefer circle:
    // p.style.borderRadius = '50%'
  }

  // Typing-like subtitle rotation
  const roles = ['Data Analyst','Business Analyst','Machine Learning Enthusiast']
  let ridx = 0
  setInterval(()=>{
    roleEl.style.opacity = 0
    setTimeout(()=>{ roleEl.textContent = roles[ridx%roles.length]; roleEl.style.opacity = 1; ridx++ },300)
  },3000)

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle')
  const nav = document.querySelector('.nav ul')
  navToggle && navToggle.addEventListener('click', ()=>{
    if (nav.style.display === 'flex') nav.style.display = 'none'
    else { nav.style.display = 'flex'; nav.style.flexDirection='column'; nav.style.background='#fff'; nav.style.padding='10px' }
  })

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const tgt = this.getAttribute('href')
      if (tgt && tgt.startsWith('#')) {
        e.preventDefault()
        document.querySelector(tgt)?.scrollIntoView({behavior:'smooth', block:'start'})
        if (window.innerWidth < 800 && nav) nav.style.display = 'none'
      }
    })
  })

  // Highlight nav on scroll
  const sections = $all('main section[id]')
  window.addEventListener('scroll', ()=>{
    const fromTop = window.scrollY + 90
    $all('.nav a').forEach(link=>{
      const id = link.getAttribute('href')
      if (!id || !id.startsWith('#')) return
      const sec = document.querySelector(id)
      if (!sec) return
      if (sec.offsetTop <= fromTop && (sec.offsetTop + sec.offsetHeight) > fromTop) link.classList.add('active')
      else link.classList.remove('active')
    })
  })
})

// escape
function escapeHtml(s){ if(!s) return ''; return String(s).replace(/[&<>"'`=\/]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'}[c]})}
