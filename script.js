// 신우정 포트폴리오 v3 — interactions

(function(){
  /* ---------- scroll progress + nav state + scroll-spy ---------- */
  var progressLine = document.getElementById('progressLine');
  var nav = document.getElementById('siteNav');
  var hero = document.getElementById('intro');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
  var sections = navLinks.map(function(a){ return document.querySelector(a.getAttribute('href')); });

  var ticking = false;
  function update(){
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? scrollTop / docHeight : 0;

    if (progressLine) progressLine.style.width = (progress * 100).toFixed(2) + '%';

    var heroH = hero ? hero.offsetHeight : 0;
    if (nav) nav.classList.toggle('scrolled', scrollTop > heroH - 80);

    var activeIndex = -1;
    for (var i = 0; i < sections.length; i++){
      if (sections[i] && sections[i].getBoundingClientRect().top <= window.innerHeight * 0.35){
        activeIndex = i;
      }
    }
    navLinks.forEach(function(a, idx){ a.classList.toggle('active', idx === activeIndex); });

    ticking = false;
  }
  function onScroll(){ if (!ticking){ requestAnimationFrame(update); ticking = true; } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('navBurger');
  var panel = document.getElementById('mobilePanel');
  if (burger && panel){
    burger.addEventListener('click', function(){
      var isOpen = panel.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    panel.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        panel.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- custom cursor follower ---------- */
  var cursorDot = document.getElementById('cursorDot');
  if (cursorDot && window.matchMedia('(hover: hover) and (pointer: fine)').matches){
    var cx = window.innerWidth/2, cy = window.innerHeight/2, tx = cx, ty = cy;
    window.addEventListener('mousemove', function(e){
      tx = e.clientX; ty = e.clientY;
      cursorDot.classList.add('ready');
    });
    function raf(){
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursorDot.style.transform = 'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)';
      requestAnimationFrame(raf);
    }
    raf();
    var hoverables = document.querySelectorAll('a, button, .work-card.clickable');
    hoverables.forEach(function(el){
      el.addEventListener('mouseenter', function(){ cursorDot.classList.add('is-link'); });
      el.addEventListener('mouseleave', function(){ cursorDot.classList.remove('is-link'); });
    });
  } else if (cursorDot){
    cursorDot.style.display = 'none';
  }

  /* ---------- hero 3D shape parallax ---------- */
  var heroDecor = document.getElementById('heroDecor');
  var cubeParallax = document.getElementById('cubeParallax');
  if (hero && cubeParallax && window.matchMedia('(hover: hover) and (pointer: fine)').matches){
    hero.addEventListener('mousemove', function(e){
      var rect = hero.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      cubeParallax.style.transform = 'translate(' + (px * -28) + 'px,' + (py * -22) + 'px)';
    });
    hero.addEventListener('mouseleave', function(){
      cubeParallax.style.transform = 'translate(0,0)';
    });
  }

  /* ---------- work lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lbTag = document.getElementById('lbTag');
  var lbTitle = document.getElementById('lbTitle');
  var lbDesc = document.getElementById('lbDesc');
  var lbCredits = document.getElementById('lbCredits');
  var lbVideoWrap = document.getElementById('lbVideoWrap');
  var lbClose = document.getElementById('lightboxClose');
  var lastFocused = null;

  function buildPoster(ytId, posterSrc, title){
    lbVideoWrap.innerHTML = '';
    var img = document.createElement('img');
    img.className = 'video-poster';
    img.src = posterSrc;
    img.alt = title;
    var play = document.createElement('div');
    play.className = 'video-play';
    play.setAttribute('role', 'button');
    play.setAttribute('aria-label', '영상 재생');
    play.addEventListener('click', function(){ playVideo(ytId, title); });
    lbVideoWrap.appendChild(img);
    lbVideoWrap.appendChild(play);
  }

  function playVideo(ytId, title){
    lbVideoWrap.innerHTML = '';
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + ytId + '?autoplay=1&rel=0&modestbranding=1';
    iframe.title = title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    lbVideoWrap.appendChild(iframe);
  }

  function openLightbox(card){
    var ytId = card.getAttribute('data-yt');
    var tag = card.getAttribute('data-tag');
    var title = card.getAttribute('data-title');
    var desc = card.getAttribute('data-desc');
    var credits = (card.getAttribute('data-credits') || '').split('|').filter(Boolean);
    var posterSrc = card.querySelector('img').getAttribute('src');

    lbTag.textContent = tag;
    lbTitle.textContent = title;
    lbDesc.textContent = desc;
    lbCredits.innerHTML = '';
    credits.forEach(function(c){
      var li = document.createElement('li');
      li.textContent = c;
      lbCredits.appendChild(li);
    });

    buildPoster(ytId, posterSrc, title);

    lastFocused = document.activeElement;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbVideoWrap.innerHTML = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('.work-card.clickable').forEach(function(card){
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('click', function(){ openLightbox(card); });
    card.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openLightbox(card); }
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e){ if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
})();
