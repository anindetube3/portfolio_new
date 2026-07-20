// 신우정 포트폴리오 — script.js

/* ===== AI 프로젝트 데이터 (여기서 직접 수정하세요) ===== */
var AI_PROJECTS = {
  "01": {
    tag:   "AI 프로젝트 · ComfyUI",
    title: "Terry Sports Club \u2014 비주얼 프로젝트",
    desc:  "AI로 만든 운동화를 중심으로, 제품 클로즈업부터 착용 화보까지 다양한 이미지를 제작한 프로젝트입니다. ComfyUI를 활용해 운동화의 형태와 디테일을 유지하면서 스튜디오 컷, 로우 앵글, 패션 화보 등 여러 연출을 시도했고, AI 영상 편집을 더해 이미지가 움직이는 방식까지 함께 실험했습니다.",
    items: [
      {type:"video", yt:"JyWLaZs5bbo", portrait:true,  title:"READY TO MOVE", desc:"운동화를 신는 순간부터 움직임이 시작되는 흐름을 담아, 편안함과 활동적인 무드를 강조한 스포츠 영상."},
      {type:"image", src:"assets/product01_2.jpg", title:"AIR STEP", desc:"푸른 하늘을 배경으로, 가볍고 역동적인 움직임과 운동화의 존재감을 강조한 스포츠 비주얼."},
      {type:"image", src:"assets/product01_3.jpg", title:"CLEAN ATTITUDE", desc:"깔끔한 스튜디오 배경과 과감한 원근감을 활용해 운동화의 볼륨감과 편안한 스포티 무드를 강조한 패션 화보."}
    ]
  },
  "02": {
    tag:   "AI 프로젝트 · ComfyUI",
    title: "Terry Serum \u2014 비주얼 프로젝트",
    desc:  "AI로 만든 세럼 제품을 중심으로, 맑고 부드러운 분위기의 뷰티 이미지를 제작한 프로젝트입니다. 투명한 용기와 촉촉한 제형이 잘 드러나도록 따뜻한 피치 톤의 조명과 다양한 구도를 활용해 제품 단독 컷부터 감각적인 광고 이미지까지 자연스럽게 확장했습니다.",
    items: [
     {type:"video", yt:"x06R-NnfeyY", portrait:true,  title:"A TOUCH OF GLOW", desc:"세럼의 투명한 제형과 부드러운 사용감을 클로즈업으로 담아낸 감각적인 뷰티 영상."},
     {type:"image", src:"assets/Product02_2.jpg", title:"DROP OF GLOW", desc:"따뜻한 피치 톤과 투명한 세럼 방울로 촉촉한 질감과 은은한 광택을 강조한 뷰티 비주얼."},
     {type:"image", src:"assets/Product02_3.jpg", title:"SOFT GLOW", desc:"부드러운 피치 톤과 깊이감 있는 아웃포커싱으로 세럼의 맑고 포근한 이미지를 담은 뷰티 비주얼."}
    ]
  },
  "03": {
    tag:   "AI 프로젝트 · ComfyUI",
    title: "Terry Burger \u2014 비주얼 프로젝트",
    desc:  "AI로 만든 버거 브랜드를 중심으로, 밝고 유쾌한 분위기의 푸드 광고 이미지를 제작한 프로젝트입니다. 따뜻한 치즈 컬러와 선명한 조명을 활용해 버거의 바삭한 식감과 풍성한 구성을 강조했으며, 제품 촬영 장면부터 패키지와 매장 이미지, 직접 먹는 순간까지 사진과 영상으로 자연스럽게 이어지도록 구성했습니다.",
    items: [
     {type:"video", yt:"Dy2gPsvbugk", portrait:true,  title:"BITE THE MOMENT", desc:"버거를 촬영하는 순간부터 한입 베어 무는 장면까지 담아, 바삭한 식감과 먹음직스러운 비주얼을 강조한 푸드 광고 영상."},
     {type:"image", src:"assets/product03_2.jpg", title:"HOLD THE BITE", desc:"따뜻한 치즈 컬러와 과감한 타이포그래피로 버거의 풍성함과 바삭한 식감을 강조한 푸드 광고 비주얼."},
     {type:"image", src:"assets/Product03_3.jpg", title:"READY TO GO", desc:"따뜻한 매장 조명과 테이크아웃 패키지를 활용해, 버거를 기다리는 순간의 편안한 분위기와 브랜드 감성을 담은 푸드 비주얼."}
    ]
  },

    "04": {
    tag:   "AI 프로젝트 · Higgsfield",
    title: "Terry Chips \u2014 비주얼 프로젝트",
    desc:  "AI로 만든 감자칩 브랜드를 중심으로, 밝고 경쾌한 분위기의 스낵 광고 영상을 제작한 프로젝트입니다. 감자가 얇게 썰려 바삭한 칩으로 완성되는 과정과 패키지에서 칩이 터져 나오는 장면을 빠른 리듬으로 담아, 제품의 식감과 브랜드의 유쾌한 에너지를 표현했습니다.",
    items: [
     {type:"video", yt:"1RJSvU0jowI", portrait:true,  title:"CRUNCH IN MOTION", desc:"감자가 바삭한 칩으로 완성되고 패키지 밖으로 터져 나오는 모습을 담아, 경쾌한 움직임과 바삭한 식감을 강조한 스낵 광고 영상."}
     
    ]
  },

};

/* ===== 메인 실행 ===== */
document.addEventListener('DOMContentLoaded', function() {

  /* ---------- scroll progress + nav ---------- */
  var progressLine = document.getElementById('progressLine');
  var nav = document.getElementById('siteNav');
  var hero = document.getElementById('intro');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
  var sections = navLinks.map(function(a) { return document.querySelector(a.getAttribute('href')); });

  var ticking = false;
  function update() {
    var scrollTop = window.scrollY;
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docH > 0 ? scrollTop / docH : 0;
    if (progressLine) progressLine.style.width = (pct * 100).toFixed(2) + '%';
    var heroH = hero ? hero.offsetHeight : 0;
    if (nav) nav.classList.toggle('scrolled', scrollTop > heroH - 80);
    var active = -1;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].getBoundingClientRect().top <= window.innerHeight * 0.35) active = i;
    }
    navLinks.forEach(function(a, i) { a.classList.toggle('active', i === active); });
    ticking = false;
  }
  function onScroll() { if (!ticking) { requestAnimationFrame(update); ticking = true; } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('navBurger');
  var panel  = document.getElementById('mobilePanel');
  if (burger && panel) {
    burger.addEventListener('click', function() {
      var o = panel.classList.toggle('open');
      burger.classList.toggle('open', o);
      burger.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    panel.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        panel.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- cursor follower ---------- */
  var cursorDot = document.getElementById('cursorDot');
  if (cursorDot && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2, tx = cx, ty = cy;
    window.addEventListener('mousemove', function(e) { tx = e.clientX; ty = e.clientY; cursorDot.classList.add('ready'); });
    (function raf() {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cursorDot.style.transform = 'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)';
      requestAnimationFrame(raf);
    })();
    document.querySelectorAll('a, button, .work-card.clickable, .ai-proj-card').forEach(function(el) {
      el.addEventListener('mouseenter', function() { cursorDot.classList.add('is-link'); });
      el.addEventListener('mouseleave', function() { cursorDot.classList.remove('is-link'); });
    });
  } else if (cursorDot) {
    cursorDot.style.display = 'none';
  }

  /* ---------- hero parallax ---------- */
  var cubeParallax = document.getElementById('cubeParallax');
  if (hero && cubeParallax && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    hero.addEventListener('mousemove', function(e) {
      var r = hero.getBoundingClientRect();
      cubeParallax.style.transform = 'translate(' + (((e.clientX - r.left) / r.width - 0.5) * -28) + 'px,' + (((e.clientY - r.top) / r.height - 0.5) * -22) + 'px)';
    });
    hero.addEventListener('mouseleave', function() { cubeParallax.style.transform = 'translate(0,0)'; });
  }

  /* ---------- work filters ---------- */
  var filterBtns  = document.querySelectorAll('.filter-btn');
  var workBlocks  = document.querySelectorAll('.work-block');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var f = btn.getAttribute('data-filter');
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      workBlocks.forEach(function(block) {
        block.classList.toggle('hidden', f !== 'all' && block.getAttribute('data-category') !== f);
      });
    });
  });

  /* ---------- 기존 영상 lightbox (영상편집 + 쇼츠 카드용) ---------- */
  var lightbox   = document.getElementById('lightbox');
  var lbTag      = document.getElementById('lbTag');
  var lbTitle    = document.getElementById('lbTitle');
  var lbDesc     = document.getElementById('lbDesc');
  var lbCredits  = document.getElementById('lbCredits');
  var lbMediaWrap= document.getElementById('lbMediaWrap');
  var lbClose    = document.getElementById('lightboxClose');
  var lastFocused= null;

  function buildVideoPlayer(ytId, posterSrc, title, isPortrait) {
    lbMediaWrap.innerHTML = '';
    var wrap = document.createElement('div');
    wrap.className = 'lightbox-video' + (isPortrait ? ' portrait' : '');
    var img = document.createElement('img');
    img.className = 'video-poster'; img.src = posterSrc; img.alt = title;
    var play = document.createElement('div');
    play.className = 'video-play'; play.setAttribute('role', 'button'); play.setAttribute('aria-label', '영상 재생');
    play.addEventListener('click', function() {
      wrap.innerHTML = '';
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0&playsinline=1';
      iframe.title = title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      wrap.appendChild(iframe);
    });
    wrap.appendChild(img); wrap.appendChild(play);
    lbMediaWrap.appendChild(wrap);
  }

  function buildImageViewer(src, alt) {
    lbMediaWrap.innerHTML = '';
    var img = document.createElement('img');
    img.className = 'lightbox-image'; img.src = src; img.alt = alt;
    lbMediaWrap.appendChild(img);
  }

  function openLightbox(card) {
    var type     = card.getAttribute('data-type') || 'video';
    var tag      = card.getAttribute('data-tag')  || '';
    var title    = card.getAttribute('data-title') || '';
    var desc     = card.getAttribute('data-desc')  || '';
    var credits  = (card.getAttribute('data-credits') || '').split('|').filter(Boolean);
    var thumb    = card.querySelector('img');

    if (lbTag)    lbTag.textContent    = tag;
    if (lbTitle)  lbTitle.textContent  = title;
    if (lbDesc)   lbDesc.textContent   = desc;
    if (lbCredits) {
      lbCredits.innerHTML = '';
      credits.forEach(function(c) { var li = document.createElement('li'); li.textContent = c; lbCredits.appendChild(li); });
    }

    if (type === 'image') {
      buildImageViewer(card.getAttribute('data-src') || (thumb && thumb.src) || '', title);
    } else {
      var portrait = card.getAttribute('data-portrait') === 'true';
      buildVideoPlayer(card.getAttribute('data-yt') || '', thumb ? thumb.getAttribute('src') : '', title, portrait);
    }

    lastFocused = document.activeElement;
    if (lightbox) { lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false'); }
    document.body.style.overflow = 'hidden';
    if (lbClose) lbClose.focus();
  }

  function closeLightbox() {
    if (lightbox) { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); }
    document.body.style.overflow = '';
    if (lbMediaWrap) lbMediaWrap.innerHTML = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('.work-card.clickable').forEach(function(card) {
    card.setAttribute('tabindex', '0'); card.setAttribute('role', 'button');
    card.addEventListener('click', function() { openLightbox(card); });
    card.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(card); } });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) closeLightbox(); });

  /* =========================================================
     AI 프로젝트 갤러리
  ========================================================= */
  var agModal  = document.getElementById('aiGalleryModal');
  var agClose  = document.getElementById('agmClose');
  var agTag    = document.getElementById('agmTag');
  var agTitle  = document.getElementById('agmTitle');
  var agDesc   = document.getElementById('agmDesc');
  var agPlayer = document.getElementById('agmPlayer');
  var agThumbs = document.getElementById('agmThumbs');

  if (!agModal) {
    console.warn('AI Gallery: #aiGalleryModal not found');
  }

  function ytThumb(id) {
    return 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg';
  }

  function agShowItem(item) {
    if (!agPlayer) return;
    agPlayer.innerHTML = '';

    if (item.type === 'video') {
      var wrap = document.createElement('div');
      wrap.className = 'agm-player-video' + (item.portrait ? ' portrait' : '');

      var poster = document.createElement('img');
      poster.className = 'agm-video-poster';
      poster.src = ytThumb(item.yt);
      poster.alt = item.title;

      var playBtn = document.createElement('div');
      playBtn.className = 'agm-play-btn';
      playBtn.setAttribute('role', 'button');
      playBtn.setAttribute('aria-label', '영상 재생');
      playBtn.addEventListener('click', function() {
        wrap.innerHTML = '';
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + item.yt + '?autoplay=1&rel=0&playsinline=1';
        iframe.title = item.title;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        wrap.appendChild(iframe);
      });

      wrap.appendChild(poster);
      wrap.appendChild(playBtn);
      agPlayer.appendChild(wrap);

    } else {
      var img = document.createElement('img');
      img.className = 'agm-player-image';
      img.src = item.src;
      img.alt = item.title;
      agPlayer.appendChild(img);
    }

    var meta = document.createElement('div');
    meta.className = 'agm-item-meta';
    meta.innerHTML = '<strong>' + item.title + '</strong>' + (item.desc ? '<p>' + item.desc + '</p>' : '');
    agPlayer.appendChild(meta);
  }

  function agBuildThumbs(items, firstItem) {
    if (!agThumbs) return;
    agThumbs.innerHTML = '';

    items.forEach(function(item, idx) {
      var wrap  = document.createElement('div');
      var thumb = document.createElement('div');
      thumb.className = 'ag-thumb' + (item.portrait ? ' portrait' : '') + (idx === 0 ? ' active' : '');

      var img = document.createElement('img');
      img.src = item.type === 'video' ? ytThumb(item.yt) : item.src;
      img.alt = item.title;

      var badge = document.createElement('span');
      badge.className = 'ag-thumb-badge';
      badge.textContent = item.type === 'video' ? '▶ 영상' : '이미지';

      var label = document.createElement('span');
      label.className = 'ag-thumb-label';
      label.textContent = item.title;

      thumb.appendChild(img);
      thumb.appendChild(badge);
      thumb.addEventListener('click', function() {
        agThumbs.querySelectorAll('.ag-thumb').forEach(function(t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        agShowItem(item);
      });

      wrap.appendChild(thumb);
      wrap.appendChild(label);
      agThumbs.appendChild(wrap);
    });
  }

  function agOpenProject(card) {
    var projId = card.getAttribute('data-proj');
    var proj   = AI_PROJECTS[projId];
    if (!proj) { console.warn('No project data for', projId); return; }

    if (agTag)   agTag.textContent   = proj.tag;
    if (agTitle) agTitle.textContent = proj.title;
    if (agDesc)  agDesc.textContent  = proj.desc;

    agBuildThumbs(proj.items);
    if (proj.items && proj.items.length > 0) agShowItem(proj.items[0]);

    if (agModal) {
      agModal.classList.add('open');
      agModal.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
    if (agClose) agClose.focus();
  }

  function agClose_fn() {
    if (agModal) { agModal.classList.remove('open'); agModal.setAttribute('aria-hidden', 'true'); }
    document.body.style.overflow = '';
    if (agPlayer) agPlayer.innerHTML = '';
    if (agThumbs) agThumbs.innerHTML = '';
  }

  document.querySelectorAll('.ai-proj-card').forEach(function(card) {
    card.addEventListener('click',   function()  { agOpenProject(card); });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); agOpenProject(card); }
    });
  });

  if (agClose)  agClose.addEventListener('click', agClose_fn);
  if (agModal)  agModal.addEventListener('click', function(e) { if (e.target === agModal) agClose_fn(); });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && agModal && agModal.classList.contains('open')) agClose_fn();
  });

}); // end DOMContentLoaded
