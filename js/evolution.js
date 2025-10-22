const DATA = [
      {
        year:1982,
        name:"spider-man 1982",
        img:"https://assets-prd.ignimgs.com/2022/01/19/parkerspiderman-sq-1642627937363.jpg",
        trailer:"https://youtu.be/895ek96vHHY?si=NC7YgLX-OSELyndj",
        era:"Golden Age (1980–1989)",
        platforms:["Atari 2600","Commodore 64","Apple II"],
        engine:"EA Proprietary (2D isometric)",
        features:["First Spiderman game", "Basic web-swinging", "Side-scrolling levels"],
        note:"Pioneering Spidey gameplay."
    },
      {
        year:1990,
        name:"The Amazing Spider-Man",
        img:"https://e.snmc.io/lk/f/x/97f5173dde52b1042c8a46406cf44a08/11908344",
        trailer:"https://youtu.be/J0f_3vSTeOc",
        era:"Silver Age (1990–1999)",
        platforms:["DOS","GameBoy","Amiga","Atari ST","Commodore 64"],
        engine:"EA Proprietary (2D side-scroller)",
        features:["Multiple levels","Boss fights"],
        note:"Classic side-scrolling action."
    },
      {
        year:1991,
        name:"Spider-Man vs. The Kingpin",
        img:"https://m.media-amazon.com/images/M/MV5BNjRiMDY5ZDUtZmM2OC00M2E1LWIyZWEtNjk4NWY5YmRlNjlkXkEyXkFqcGc@._V1_.jpg",
        trailer:"https://youtu.be/ZBp8nev_zlY",
        era:"Silver Age (1990–1999)",
        platforms:["Genesis/Mega Drive","Master System","Game Gear","Sega CD"],
        engine:"EA Proprietary (2D side-scroller)",
        features:["Web-swinging mechanics","Varied levels"],
        note:"Notable for web-swinging."
    },
      {
        year:1994,
        name:"Spider-Man and Venom: Maximum Carnage",
        img:"https://m.media-amazon.com/images/M/MV5BMjA4ZGQ3NzUtY2JlYS00NjIzLWEwOWUtODBiYTg1YTcxZmY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailer:"https://youtu.be/TK1cSct8JHE",
        era:"Silver Age (1990–1999)",
        platforms:["Super NES","Genesis/Mega Drive"],
        engine:"EA Proprietary (2D beat 'em up)",
        features:["Co-op mode","Multiple playable characters"],
        note:"Cult classic beat 'em up."
    },
      {
        year:2000,
        name:"Spider-Man (Neversoft)",
        img:"https://uk.static.webuy.com/product_images/Gaming/PC%20Games/5030917014192_l.jpg",
        trailer:"https://youtu.be/Jrm452GfO1U",
        era:"Modern Age (2000–2017)",
        platforms:["PS1","N64","Dreamcast","GameBoy Color", "PC"],
        engine:"Neversoft Proprietary",
        features:["3D open-world","Web-swinging physics","Story-driven missions"],
        note:"Breakthrough 3D Spidey game."
    },
    {
        year:2001, 
        name:"Spider-Man 2: Enter Electro", 
        era:"Modern Age (2000–2017)",
        img:"https://m.media-amazon.com/images/M/MV5BOGFkYWY0MzMtNjhlYS00OTJiLTkyOTktOTMzZmI1NTI0ZjUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailer:"https://youtu.be/FHe-y-ogblQ",
        platforms:["PS1"], 
        engine:"Neversoft Proprietary", 
        features:["Enhanced web mechanics","New villains"], 
        note:"Sequel with improved gameplay."
    },
    {
        year:2002, 
        name:"Spider-Man: The Movie",
        img:"https://m.media-amazon.com/images/I/51AvgieAIlL._AC_UF1000,1000_QL80_.jpg",
        trailer:"https://youtu.be/nPl1Cvbs2t8",
        era:"Modern Age (2000–2017)", 
        platforms:["PS2","Xbox","GameCube","PC"], 
        engine:"Neversoft Proprietary", 
        features:["Movie tie-in levels","Web-swinging in 3D"], 
        note:"Adaptation of 2002 film."
    },
    {
        year:2004, 
        name:"Spider-Man 2", 
        era:"Modern Age (2000–2017)",
        img:"https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-53655-13.jpg",
        trailer:"https://youtu.be/86G-9KC8AUA",
        platforms:["PS2","Xbox","GameCube","PC","NDS"], 
        engine:"Unreal Engine 2.0", 
        features:["Open-world NYC","Advanced web-swinging","Dynamic missions"], 
        note:"Highly acclaimed Spidey game."
    },
      {
        year:2005, 
        name:"Ultimate Spider-Man", 
        era:"Modern Age (2000–2017)",
        img:"https://m.media-amazon.com/images/M/MV5BMDM1OTcyNjAtNjk4Ny00MDZlLWE3MWYtOWI2MWI4ZGM3ZTkwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailer:"https://youtu.be/lCMyiYeXPHQ",
        platforms:["PS2","Xbox","GameCube","PC","NDS"], 
        engine:"Unreal Engine 2.0", 
        features:["Comic-style graphics","Dual playable characters"], 
        note:"Stylized comic adaptation."
    },
    {
        year:2007, 
        name:"Spider-Man: Friend or Foe", 
        era:"Modern Age (2000–2017)",
        img:"https://cdn.mobygames.com/covers/6023554-spider-man-friend-or-foe-playstation-2-front-cover.png",
        trailer:"https://youtu.be/q6DrKOJp5rs",
        platforms:["PS2","Xbox 360","Wii","PC","NDS","PSP"], 
        engine:"Unreal Engine 2.5", 
        features:["Co-op gameplay","Character upgrades"], 
        note:"Lighter, kid-friendly tone."
    },
      {
        year:2007, 
        name:"Spider-Man 3", 
        era:"Modern Age (2000–2017)",
        img:"https://media.s-bol.com/rYlMVLqLWVBL/550x775.jpg",
        trailer:"https://youtu.be/T1gFMvmTYlE",
        platforms:["PS2","Xbox 360","PS3","Wii","PC","NDS","PSP"], 
        engine:"Unreal Engine 3.0", 
        features:["Movie tie-in levels","Enhanced web mechanics"], 
        note:"Mixed reviews, movie adaptation."
    },
      {
        year:2008, 
        name:"Spider-Man: Web of Shadows", 
        era:"Modern Age (2000–2017)",
        img:"https://media.s-bol.com/7n9NppyRq4pB/82zW6Go/851x1200.jpg",
        trailer:"https://youtu.be/f_7uOrS_mvw",
        platforms:["PS2","Xbox 360","PS3","Wii","PC","NDS","PSP"], 
        engine:"Unreal Engine 3.0", 
        features:["Dynamic combat system","Multiple endings"], 
        note:"Dark storyline with symbiotes."
    },
    {
        year:2010, 
        name:"Spider-Man: Shattered Dimensions", 
        era:"Modern Age (2000–2017)",
        img:"https://m.media-amazon.com/images/I/91Bh-L5VPIL._UF1000,1000_QL80_.jpg",
        trailer:"https://youtu.be/IssycbYMyaw",
        platforms:["PS3","Xbox 360","Wii","PC","NDS","PSP"], 
        engine:"Unreal Engine 3.0", 
        features:["Four Spider"], 
        note:"Unique multiverse gameplay."
    },
    {
        year:2011, 
        name:"Spider-Man: Edge of Time",
        img:"https://dsmedia.ign.com/ds/image/object/104/104859/edgeoftimeps3final1.jpg",
        trailer:"https://youtu.be/qOs0FDULh6k",
        era:"Modern Age (2000–2017)", 
        platforms:["PS3","Xbox 360","Wii","PC","3DS","PSP"], 
        engine:"Unreal Engine 3.0", 
        features:["Time-travel mechanics","Dual timelines"], 
        note:"Story-driven action."
    },
      {
        year:2012, 
        name:"The Amazing Spider-Man", 
        era:"Modern Age (2000–2017)",
        img:"https://m.media-amazon.com/images/I/91YVbOmIcEL._AC_UF1000,1000_QL80_.jpg",
        trailer:"https://youtu.be/IOcioNyLHII",
        platforms:["PS3","Xbox 360","Wii","PC","3DS","PSP"], 
        engine:"Unreal Engine 3.0", 
        features:["Open-world NYC","Web-swinging","Stealth sections"], 
        note:"Tie-in with 2012 film."
    },
    {
        year:2014, 
        name:"The Amazing Spider-Man 2", 
        era:"Modern Age (2000–2017)",
        img:"https://m.media-amazon.com/images/I/71XH0i7oeWL.jpg",
        trailer:"https://youtu.be/AuwuWokrats",
        platforms:["PS3","Xbox 360","PS4","Xbox One","PC"], 
        engine:"Unreal Engine 2", 
        features:["Expanded open-world","New villains"], 
        note:"Sequel to 2012 game."
    },
      {
        year:2018, 
        name:"Marvel's Spider-Man", 
        era:"Insomniac Era (2018–Present)",
        img:"https://i5.walmartimages.com/seo/Marvel-s-Spider-Man-PlayStation-4_dc06e95e-43a6-45f4-9fc3-0fe8620ffbd1.4df76c8cff9d806d3b807920ba5d8e4b.jpeg",
        trailer:"https://youtu.be/q4GdJVvdxss",
        platforms:["PS4","PS5","PC"], 
        engine:"Insomniac Proprietary", 
        features:["Open-world NYC","Fluid combat system","Original story"], 
        note:"Critically acclaimed reboot."
    },
      {
        year:2020, 
        name:"Marvel's Spider-Man: Miles Morales", 
        era:"Insomniac Era (2018–Present)",
        img:"../img/miles-cover.jpg",
        trailer:"https://youtu.be/hY3qiRq0yEM",
        platforms:["PS4","PS5","PC"], 
        engine:"Insomniac Proprietary", 
        features:["New protagonist","Enhanced graphics on PS5"], 
        note:"Standalone expansion."
    },
      {
        year:2023, 
        name:"Marvel's Spider-Man 2", 
        era:"Insomniac Era (2018–Present)",
        img:"https://media.s-bol.com/YmrqRzGkDqMp/0R8DJKV/975x1200.jpg",
        trailer:"https://youtu.be/9fVYKsEmuRo",
        platforms:["PS5","PC"],
        engine:"Insomniac Proprietary", 
        features:["Dual protagonists (Peter & Miles)","Enhanced web mechanics","New villains"], 
        note:"Highly anticipated sequel."
    },
    ];

    function coverSrc(d) {
      if (d.img) return d.img;
      const svg = `
        <svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'>
          <defs>
            <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
              <stop offset='0' stop-color='#7cf6a1' />
              <stop offset='1' stop-color='#30d5c8' />
            </linearGradient>
          </defs>
          <rect width='100%' height='100%' fill='url(#g)' />
          <rect x='0' y='0' width='100%' height='100%' fill='rgba(11,13,16,0.12)' />
          <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#081018' font-family='Inter, system-ui, Arial' font-weight='800' font-size='64'>${d.year}</text>
        </svg>`;
      return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }

    // Convert common YouTube URLs to an embeddable URL; pass-through otherwise
    function toEmbed(url) {
      if (!url) return '';
      try {
        if (url.includes('youtube.com/watch')) {
          const u = new URL(url);
          const v = u.searchParams.get('v');
          return v ? `https://www.youtube.com/embed/${v}` : url;
        }
        if (url.includes('youtu.be/')) {
          const id = url.split('youtu.be/')[1].split(/[?&]/)[0];
          return id ? `https://www.youtube.com/embed/${id}` : url;
        }
      } catch (e) {
        return url;
      }
      return url;
    }

    const grid = document.getElementById('grid');
    const q = document.getElementById('q');
    const era = document.getElementById('era');
    const sort = document.getElementById('sort');
    const reset = document.getElementById('reset');

    const state = { q: '', era: '', sort: 'year-asc' };

    const by = {
      'year-asc': (a,b)=> a.year - b.year || a.name.localeCompare(b.name),
      'year-desc': (a,b)=> b.year - a.year || a.name.localeCompare(b.name),
      'name-asc': (a,b)=> a.name.localeCompare(b.name),
      'name-desc': (a,b)=> b.name.localeCompare(a.name),
    };

    function matches(entry, s) {
      if (!s) return true;
      const hay = [entry.year, entry.name, entry.era, entry.engine, ...entry.platforms, ...(entry.features||[]), entry.note].join(' ').toLowerCase();
      return hay.includes(s.toLowerCase());
    }

    function render(data) {
      grid.innerHTML = '';
      if (!data.length) {
        grid.innerHTML = `<div class="empty">No entries match your filters. Try clearing search or changing the era.</div>`;
        return;
      }
      const frag = document.createDocumentFragment();
      data.forEach(d => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          <div class="cover" role="img" aria-label="${d.name} cover">
            <img src="${coverSrc(d)}" alt="${d.name} cover" loading="lazy" />
          </div>
          <span class="chip">${d.era}</span>
          <div class="body">
            <div class="year">${d.year}</div>
            <div class="name">${d.name}</div>
            <div class="meta">${d.features?.slice(0,2).join(' • ') || ''}</div>
          </div>`;
        card.addEventListener('click', ()=> openModal(d));
        frag.appendChild(card);
      });
      grid.appendChild(frag);
    }

    function apply() {
      const filtered = DATA.filter(d => (!state.era || d.era === state.era) && matches(d, state.q)).sort(by[state.sort]);
      render(filtered);
    }

    function openModal(d) {
      const modal = document.getElementById('modal');
      const body = document.getElementById('modalBody');
      body.innerHTML = `
        <div class="modal-grid">
          <div class="modal-image">
            <img src="${coverSrc(d)}" alt="${d.name} cover" />
          </div>
          <div class="modal-content">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px;">
              <div>
                <div style="font-size:22px; font-weight:800">${d.name}</div>
                <div style="color:var(--muted); margin-top:6px">${d.era} • ${d.engine}</div>
              </div>
              <div style="font-weight:800; color:var(--brand); font-size:20px">${d.year}</div>
            </div>

            <div style="margin-top:12px">
              <div style="font-weight:700; margin-bottom:6px">Description</div>
              <div style="color:var(--muted)">${d.note || 'No description available.'}</div>
            </div>

            <div style="margin-top:12px">
              <div style="font-weight:700; margin-bottom:6px">Key features</div>
              <ul style="margin:0; padding-left:18px">${(d.features||[]).map(f=>`<li>${f}</li>`).join('')}</ul>
            </div>

            <div style="margin-top:12px">
              <div style="font-weight:700; margin-bottom:6px">Platforms</div>
              <div style="color:var(--muted)">${d.platforms.join(' • ')}</div>
            </div>

            <div style="margin-top:12px">
              <div style="font-weight:700; margin-bottom:6px">Trailer</div>
              ${d.trailer ? `<div class="video-wrap"><iframe src="${toEmbed(d.trailer)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>` : `<div style="color:var(--muted)">Trailer not available</div>`}
            </div>
          </div>
        </div>`;
      modal.showModal();
    }

    document.getElementById('closeModal').addEventListener('click', ()=> document.getElementById('modal').close());

    q.addEventListener('input', e => { state.q = e.target.value; apply(); });
    era.addEventListener('change', e => { state.era = e.target.value; apply(); });
    sort.addEventListener('change', e => { state.sort = e.target.value; apply(); });
    reset.addEventListener('click', () => { state.q=''; state.era=''; state.sort='year-asc'; q.value=''; era.value=''; sort.value='year-asc'; apply(); });

    // Keyboard focus shortcut for the search box
    window.addEventListener('keydown', (e)=>{
      if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); }
      if (e.key === 'Escape') { const dialog = document.getElementById('modal'); if (dialog.open) dialog.close(); }
    });

    // Initial render
    apply();

    // Splash screen hide after 2 seconds
    window.onload = function() {
      setTimeout(function() {
        document.getElementById('splash').style.display = 'none';
      }, 2000);
    }
    
      // Splash control: fade and remove after ready
      (function setupSplash(){
        const splash = document.getElementById('splash');
        if (!splash) return;
        const hide = ()=>{
          if (splash.classList.contains('splash-fade')) return;
          splash.classList.add('splash-fade');
          setTimeout(()=>{ if (splash && splash.parentNode) splash.parentNode.removeChild(splash); }, 700);
        };
        // Auto-hide: either after 1600ms or once content is painted (whichever later)
        window.requestAnimationFrame(()=>{
          setTimeout(hide, 1600);
        });
        // Expose for debug
        window.hideSplash = hide;
      })();