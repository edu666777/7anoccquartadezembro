/* =========================================================
   WIDGETS INTERATIVOS
   ========================================================= */
const mixCor = (a, b, t) => { const h = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16)); const A = h(a), B = h(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };

const WIDGETS = {
  /* ---------------- GEOGRAFIA ---------------- */
  mapaCO(el) {
    let cam = 'estados';
    const POL = { MT: '40,40 250,30 275,95 258,190 215,215 120,215 60,200 30,120', GO: '275,95 340,95 365,150 350,235 300,285 240,270 215,215 258,190', MS: '120,215 215,215 240,270 225,340 175,365 120,330 100,270' };
    const COR = { MT: '#ffd8a8', GO: '#c7e9c0', MS: '#cfe0ff' };
    const EST = {
      MT: ['Mato Grosso', 'Capital: <b>Cuiabá</b>. Tem Cerrado, <b>Amazônia</b> (norte) e <b>Pantanal</b>. Grande produtor de soja, milho e algodão. Abriga o Parque Indígena do <b>Xingu</b>.'],
      GO: ['Goiás', 'Capital: <b>Goiânia</b>. Planaltos e chapadas (<b>Chapada dos Veadeiros</b>), Cerrado e polo farmacêutico de <b>Anápolis</b>. Vila Boa de Goiás nasceu do ouro.'],
      MS: ['Mato Grosso do Sul', 'Capital: <b>Campo Grande</b>. <b>Pantanal</b>, <b>Bonito</b> (ecoturismo), <b>Maciço do Urucum</b> em Corumbá (ferro e manganês) e povos Guarani-Kaiowá.'],
      DF: ['Distrito Federal', '<b>Brasília</b>, capital do Brasil desde 1960. Economia de <b>serviços</b> (setor terciário): governo e administração pública.']
    };
    const BIO = {
      cer: ['Cerrado', 'Bioma que <b>predomina</b> na região: árvores tortas de casca grossa e raízes profundas. Já perdeu <b>mais da metade</b> da vegetação.'],
      ama: ['Amazônia', 'Floresta Amazônica no <b>norte de Mato Grosso</b>.'],
      pan: ['Pantanal', '<b>Maior planície inundável</b> do planeta (MT e MS). No verão chuvoso, os rios transbordam: é o <b>pulso de inundação</b>.']
    };
    const draw = (info = '') => {
      let s = `<svg viewBox="0 0 400 400" class="ilus mapa" role="img" aria-label="Mapa esquemático do Centro-Oeste">
        <defs><clipPath id="coClip">${Object.values(POL).map(p => `<polygon points="${p}"/>`).join('')}</clipPath>
        ${[['mA', '#1d6fb8'], ['mT', '#7b4fd0'], ['mP', '#d4621f']].map(([i, c]) => `<marker id="${i}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${c}"/></marker>`).join('')}</defs>
        <rect width="400" height="400" rx="16" fill="#f4f1e8"/>
        <text x="22" y="270" class="sv-t" fill="#888">BOLÍVIA</text><text x="40" y="378" class="sv-t" fill="#888">PARAGUAI</text>
        <text x="392" y="60" class="sv-t" text-anchor="end" fill="#b3261e">🚫🌊 sem litoral!</text>`;
      Object.keys(POL).forEach(e => {
        const f = cam === 'estados' ? COR[e] : cam === 'biomas' ? '#e3c76a' : '#eeeae0';
        s += `<polygon points="${POL[e]}" fill="${f}" stroke="${INK}" stroke-width="2.5" ${cam === 'estados' ? `data-e="${e}"` : cam === 'biomas' ? 'data-b="cer"' : ''} class="clicavel"/>`;
      });
      if (cam === 'biomas') s += `<g clip-path="url(#coClip)"><polygon points="20,20 260,20 266,64 160,90 30,86" fill="#2f8f46" data-b="ama" class="clicavel"/><ellipse cx="140" cy="250" rx="34" ry="50" fill="#5fb3c9" data-b="pan" class="clicavel"/></g>
        <text x="140" y="62" class="sv-b" text-anchor="middle" fill="#fff">AMAZÔNIA</text><text x="140" y="254" class="sv-b" text-anchor="middle" fill="#fff">PANTANAL</text><text x="300" y="210" class="sv-b" text-anchor="middle">CERRADO</text>`;
      if (cam === 'bacias') s += `<g fill="none" stroke-width="4" stroke-linecap="round">
          <path d="M210,175 C215,120 200,80 205,16" stroke="#1d6fb8" marker-end="url(#mA)"/><path d="M150,178 C140,120 130,80 120,20" stroke="#1d6fb8" marker-end="url(#mA)"/>
          <path d="M250,232 C262,180 270,130 266,56" stroke="#7b4fd0" marker-end="url(#mT)"/><path d="M312,150 C318,120 320,90 318,40" stroke="#7b4fd0" marker-end="url(#mT)"/>
          <path d="M110,150 C122,220 114,290 124,386" stroke="#d4621f" marker-end="url(#mP)"/><path d="M332,232 C300,292 262,332 238,388" stroke="#d4621f" marker-end="url(#mP)"/></g>
        <text x="160" y="14" class="sv-b" text-anchor="middle" fill="#1d6fb8">⬆ Bacia Amazônica</text><text x="330" y="32" class="sv-b" text-anchor="middle" fill="#7b4fd0">⬆ Tocantins-Araguaia</text>
        <text x="200" y="396" class="sv-b" text-anchor="middle" fill="#d4621f">⬇ Bacia Platina (Paraguai e Paraná)</text>
        <text x="230" y="150" class="sv-t" text-anchor="middle">⛰️ planaltos =</text><text x="230" y="163" class="sv-t" text-anchor="middle">divisores de águas</text>`;
      if (cam === 'estados') s += `<text x="150" y="130" class="sv-b" text-anchor="middle">MT</text><text x="322" y="132" class="sv-b" text-anchor="middle">GO</text><text x="170" y="262" class="sv-b" text-anchor="middle">MS</text>
        <rect x="300" y="160" width="26" height="18" fill="#ffd23f" stroke="${INK}" stroke-width="2" data-e="DF" class="clicavel"/><text x="313" y="194" class="sv-t" text-anchor="middle">DF ★</text>
        ${[['Cuiabá', 160, 185], ['Goiânia', 290, 214], ['Campo Grande', 182, 302]].map(([n, x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="${INK}"/><text x="${x + 7}" y="${y + 4}" class="sv-t">${n}</text>`).join('')}`;
      s += '</svg>';
      el.innerHTML = `<div class="jogo"><span class="tag">🗺️ Mapa do Centro-Oeste (toque nas regiões)</span>
        <div class="row">${[['estados', '📍 Estados'], ['biomas', '🌳 Biomas'], ['bacias', '💧 Bacias']].map(([k, t]) => `<button class="btn sm ${cam === k ? 'on' : 'ghost'}" data-c="${k}">${t}</button>`).join('')}</div>
        <div class="mapa-box">${s}</div><p class="msg">${info || (cam === 'bacias' ? 'Os rios que nascem nos planaltos correm para <b>três bacias diferentes</b>: por isso a região é o <b>"berço das águas"</b>.' : '👆 Toque numa parte do mapa.')}</p><p class="center"><small>Mapa esquemático, fora de escala.</small></p></div>`;
      $$('[data-c]', el).forEach(b => b.onclick = () => { cam = b.dataset.c; draw(); });
      $$('[data-e]', el).forEach(p => p.onclick = () => { const d = EST[p.dataset.e]; draw(`<b>${d[0]}</b>: ${d[1]}`); });
      $$('[data-b]', el).forEach(p => p.onclick = () => { const d = BIO[p.dataset.b]; draw(`<b>${d[0]}</b>: ${d[1]}`); });
    };
    draw();
  },

  clima(el) {
    const M = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const CH = [250, 210, 200, 110, 40, 12, 8, 15, 50, 140, 210, 260];
    const AG = [.75, .9, 1, .9, .7, .5, .35, .2, .12, .2, .4, .6];
    el.innerHTML = `<div class="jogo"><span class="tag">📅 Arraste para mudar o mês</span><input type="range" min="0" max="11" value="0" id="cm"><div id="cc"></div></div>`;
    const upd = () => {
      const m = +$('#cm', el).value, chuva = m <= 2 || m >= 9, fogo = m >= 6 && m <= 8, ag = AG[m];
      let bars = `<svg viewBox="0 0 360 140" class="ilus chuva">`;
      CH.forEach((v, i) => { const h = v / 270 * 100, x = 12 + i * 29; bars += `<rect x="${x}" y="${110 - h}" width="22" height="${h}" rx="4" fill="${i === m ? '#1d6fb8' : (i <= 2 || i >= 9) ? '#9ccbf0' : '#f2c27a'}" stroke="${i === m ? INK : 'none'}" stroke-width="2"/><text x="${x + 11}" y="126" text-anchor="middle" class="sv-t" ${i === m ? 'font-weight="800"' : ''}>${M[i]}</text>`; });
      bars += `<text x="8" y="12" class="sv-t">chuva (mm)</text></svg>`;
      const wy = 96 - ag * 46;
      const pan = `<svg viewBox="0 0 300 120" class="ilus">
        <rect width="300" height="120" rx="12" fill="${chuva ? '#cfe3f3' : fogo ? '#f6d2a8' : '#f4ead0'}"/>
        ${chuva ? Array.from({ length: 14 }, (_, k) => `<line x1="${10 + k * 21}" y1="${8 + (k % 3) * 6}" x2="${4 + k * 21}" y2="${22 + (k % 3) * 6}" stroke="#1d6fb8" stroke-width="2" class="gota" style="animation-delay:${k * 70}ms"/>`).join('') : `<circle cx="262" cy="24" r="14" fill="#ffd23f"/>`}
        <path d="M0,96 Q150,${92 - ag * 4} 300,96 L300,120 L0,120 Z" fill="#a7c957"/>
        <rect x="0" y="${wy}" width="300" height="${120 - wy}" fill="#4fa3dc" opacity=".7"/>
        ${[40, 120, 200, 260].map(x => `<rect x="${x}" y="58" width="5" height="40" fill="#7a4a24"/><circle cx="${x + 2}" cy="54" r="12" fill="${fogo ? '#b5a24a' : '#5a9a3a'}"/>`).join('')}
        ${fogo ? '<text x="80" y="92" font-size="22">🔥</text><text x="220" y="92" font-size="22">🔥</text>' : ''}${ag > .7 ? '<text x="150" y="104" font-size="16">🐊</text>' : ''}
        <text x="10" y="114" class="sv-t" fill="#fff">nível da água do Pantanal</text></svg>`;
      $('#cc', el).innerHTML = `${bars}<div class="duo"><div>${pan}</div><div class="estacao ${chuva ? 'chu' : 'sec'}"><b>${chuva ? '🌧️ VERÃO CHUVOSO' : '☀️ INVERNO SECO'}</b><small>${chuva ? 'outubro a março' : 'abril a setembro'}</small>
        <p>${chuva ? 'Muita chuva nos planaltos → os rios enchem e <b>alagam o Pantanal</b> (pulso de inundação). Época de plantio da soja.' : fogo ? 'Ar e vegetação muito secos + <b>uso irregular do fogo</b> → risco altíssimo de <b>queimadas</b> 🔥' : 'Quase não chove. A água do Pantanal vai baixando.'}</p></div></div>`;
    };
    $('#cm', el).oninput = upd; upd();
  },

  ocupacao(el) {
    const E = [['Séc. XVIII', '⛏️', 'Ciclo do ouro', 'Bandeirantes paulistas encontram <b>ouro</b> em Goiás e Mato Grosso. Surgem <b>Vila Boa de Goiás</b> e <b>Cuiabá</b>.'],
      ['Anos 1940', '🚩', 'Marcha para o Oeste', 'O governo <b>Getúlio Vargas</b> incentiva a ocupação do interior, com colônias agrícolas e estradas.'],
      ['1960', '🏛️', 'Brasília', 'JK inaugura <b>Brasília</b> em <b>21/04/1960</b>, no Planalto Central. Rodovias como a <b>Belém-Brasília</b> e a <b>Cuiabá-Santarém</b> integram o interior ao país.'],
      ['1967', '🗺️', 'Sudeco', 'Órgão criado para <b>planejar o desenvolvimento</b> do Centro-Oeste.'],
      ['Anos 1970', '🧪', 'Fronteira agrícola', 'A <b>Embrapa</b> difunde a <b>calagem</b>, adubos e sementes adaptadas. Chegam migrantes, principalmente do <b>Sul</b>, e o Cerrado vira lavoura.'],
      ['Hoje', '🏙️', 'Região urbana', 'Cerca de <b>90%</b> da população vive em cidades (<b>Brasília, Goiânia, Campo Grande, Cuiabá</b>). As cidades médias dão apoio ao agronegócio.']];
    let i = 0;
    const draw = () => {
      el.innerHTML = `<div class="jogo"><span class="tag">🕰️ Linha do tempo da ocupação</span>
        <div class="tl">${E.map((e, k) => `<button class="${k === i ? 'on' : k < i ? 'foi' : ''}" data-k="${k}"><i>${e[1]}</i><small>${e[0]}</small></button>`).join('')}</div>
        <div class="tl-card"><span class="big-e">${E[i][1]}</span><div><b>${E[i][0]} · ${E[i][2]}</b><p>${E[i][3]}</p></div></div>
        <div class="row"><button class="btn sm ghost" id="ta" ${i ? '' : 'disabled'}>← antes</button><button class="btn sm" id="td" ${i < E.length - 1 ? '' : 'disabled'}>depois →</button></div></div>`;
      $$('[data-k]', el).forEach(b => b.onclick = () => { i = +b.dataset.k; draw(); });
      $('#ta', el).onclick = () => { i--; draw(); }; $('#td', el).onclick = () => { i++; draw(); };
    };
    draw();
  },

  calagem(el) {
    const P = [['😣 Solo ácido', 'pH ≈ 4,5: o Cerrado "natural". A lavoura cresce mal.', '#c4683b', .22], ['🪨 + Calcário (calagem)', 'pH ≈ 6: a acidez foi corrigida!', '#8b5a2b', .55], ['🌱 + Adubo e sementes da Embrapa', 'Lavoura farta de soja, milho e algodão!', '#6b4226', 1]];
    let p = 0;
    const draw = () => {
      const [t, d, cor, h] = P[p];
      el.innerHTML = `<div class="jogo"><span class="tag">🧪 Experiência: transformar o solo do Cerrado</span>
        <svg viewBox="0 0 300 150" class="ilus"><rect width="300" height="150" rx="12" fill="#eaf4ff"/>
          <rect y="100" width="300" height="50" fill="${cor}"/>
          ${p >= 1 ? Array.from({ length: 30 }, (_, k) => `<circle cx="${(k * 37) % 300}" cy="${104 + (k * 13) % 40}" r="2.5" fill="#fff"/>`).join('') : ''}
          ${[30, 80, 130, 180, 230, 270].map(x => `<line x1="${x}" y1="100" x2="${x}" y2="${100 - 70 * h}" stroke="#3d8b2a" stroke-width="3"/><ellipse cx="${x - 8}" cy="${100 - 70 * h + 10}" rx="${4 + 6 * h}" ry="${2 + 3 * h}" fill="#5fbf3a"/><ellipse cx="${x + 8}" cy="${100 - 70 * h + 18}" rx="${4 + 6 * h}" ry="${2 + 3 * h}" fill="#5fbf3a"/>`).join('')}
        </svg><p class="msg"><b>${t}</b>: ${d}</p>
        <div class="row">${P.map((x, k) => `<button class="btn sm ${k === p ? 'on' : 'ghost'}" data-p="${k}">${k + 1}</button>`).join('')}</div></div>`;
      $$('[data-p]', el).forEach(b => b.onclick = () => { p = +b.dataset.p; draw(); });
    };
    draw();
  },

  ecoQuiz(el) {
    miniQuiz(el, '🧩 Qual setor da economia?', [
      ['🌱 Plantação de soja em Mato Grosso', 0], ['⛏️ Maciço do Urucum: ferro e manganês', 1], ['💊 Polo farmacêutico de Anápolis (GO)', 2],
      ['🏛️ Funcionários do governo federal em Brasília', 3, 'O DF vive do setor terciário (serviços).'], ['🥩 Frigorífico perto das fazendas de gado', 2, 'É uma agroindústria: transforma matéria-prima do campo.'],
      ['🤿 Flutuação em rios cristalinos de Bonito (MS)', 3, 'Ecoturismo é serviço.'], ['🐄 Maior rebanho bovino do país', 0], ['⛽ Usina de etanol feita de cana', 2]
    ], ['🌾 Agropecuária', '⛏️ Mineração', '🏭 Indústria', '🛎️ Serviços / turismo']);
  },

  esponja(el) {
    let veg = true;
    const draw = () => {
      el.innerHTML = `<div class="jogo"><span class="tag">🌧️ Está chovendo no Cerrado…</span>
        <div class="row"><button class="btn sm ${veg ? 'on' : 'ghost'}" id="ev">🌳 Com Cerrado</button><button class="btn sm ${!veg ? 'on' : 'ghost'}" id="ed">🪓 Desmatado</button></div>
        <svg viewBox="0 0 320 210" class="ilus"><rect width="320" height="210" rx="12" fill="#dbe9f5"/>
          ${Array.from({ length: 16 }, (_, k) => `<line x1="${10 + k * 19}" y1="${6 + (k % 4) * 5}" x2="${5 + k * 19}" y2="${20 + (k % 4) * 5}" stroke="#1d6fb8" stroke-width="2" class="gota" style="animation-delay:${k * 60}ms"/>`).join('')}
          <path d="M0,80 L230,80 L320,120 L320,210 L0,210 Z" fill="${veg ? '#c98d55' : '#b77a45'}"/>
          <rect x="0" y="168" width="320" height="42" fill="#4fa3dc" opacity="${veg ? .85 : .3}"/><text x="12" y="198" class="sv-t" fill="#fff">aquífero ${veg ? 'cheio 💧' : 'baixo'}</text>
          ${veg ? [30, 90, 150, 200].map(x => `<rect x="${x}" y="52" width="5" height="28" fill="#7a4a24"/><circle cx="${x + 2}" cy="48" r="12" fill="#6a9a3a"/><path d="M${x + 2},80 C${x},110 ${x + 6},140 ${x + 2},164" stroke="#7a4a24" stroke-width="2" fill="none"/>`).join('') + [55, 120, 175].map(x => `<path d="M${x},84 V158" stroke="#1d6fb8" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#mE)"/>`).join('')
          : `<path d="M30,82 L60,96 M100,82 L118,98 M160,82 L170,100" stroke="#6b4226" stroke-width="3"/>${[40, 120, 190].map(x => `<path d="M${x},76 H${x + 40}" stroke="#1d6fb8" stroke-width="3" marker-end="url(#mE)"/>`).join('')}<text x="80" y="70" class="sv-t">enxurrada → erosão</text>`}
          <path d="M262,104 Q290,118 320,130" stroke="#1d6fb8" stroke-width="${veg ? 8 : 2}" fill="none" ${veg ? '' : 'stroke-dasharray="3 5"'}/><text x="244" y="150" class="sv-t">nascente ${veg ? 'viva 💧' : 'seca 🏜️'}</text>
          <defs><marker id="mE" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d6fb8"/></marker></defs>
        </svg>
        <p class="msg">${veg ? '🧽 As raízes profundas ajudam a água a <b>infiltrar no solo</b> e abastecer <b>aquíferos e nascentes</b>.' : '😟 Sem vegetação, a água <b>escorre por cima</b>: causa <b>erosão</b>, não abastece o subsolo e as <b>nascentes secam</b>.'}</p></div>`;
      $('#ev', el).onclick = () => { veg = true; draw(); }; $('#ed', el).onclick = () => { veg = false; draw(); };
    };
    draw();
  },

  /* ---------------- ARTES ---------------- */
  contraposto(el) {
    let cp = false;
    const draw = () => {
      el.innerHTML = `<div class="jogo"><span class="tag">🗿 Mude a pose da estátua</span>
        <div class="row"><button class="btn sm ${!cp ? 'on' : 'ghost'}" id="c0">🧍 Rígida (arcaica)</button><button class="btn sm ${cp ? 'on' : 'ghost'}" id="c1">💃 Contraposto (clássica)</button></div>
        <div class="pose-box">${corpoPose(cp)}</div>
        <p class="msg">${cp ? 'O peso fica numa <b>perna só</b>, e a outra relaxa. <b>Quadris</b> e <b>ombros</b> inclinam para lados <b>opostos</b>, formando uma curva em <b>"S"</b>. Parece que a estátua vai andar! (<i>Doríforo</i>, de Policleto)' : 'Estátuas arcaicas: corpo <b>simétrico e duro</b>, ombros e quadris retos, peso nas duas pernas. Parecem "travadas".'}</p></div>`;
      $('#c0', el).onclick = () => { cp = false; draw(); }; $('#c1', el).onclick = () => { cp = true; draw(); };
    };
    draw();
  },

  luz(el) {
    el.innerHTML = `<div class="jogo"><span class="tag">💡 Arraste: de sfumato para claro-escuro</span><input type="range" min="0" max="100" value="0" id="lz"><div id="lzo"></div></div>`;
    const upd = () => {
      const k = +$('#lz', el).value / 100;
      const bg = mixCor('#c9b996', '#0b0b0b', k), meio = (.6 - .35 * k).toFixed(2), esc = (1 - .42 * k).toFixed(2), corE = mixCor('#8a6a4a', '#000000', k);
      $('#lzo', el).innerHTML = `<svg viewBox="0 0 300 170" class="ilus"><defs><radialGradient id="gLz" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff3dc"/><stop offset="${meio}" stop-color="${mixCor('#d9b48a', '#c98a50', k)}"/><stop offset="${esc}" stop-color="${corE}"/></radialGradient></defs>
        <rect width="300" height="170" rx="12" fill="${bg}"/><ellipse cx="166" cy="150" rx="${60 - 10 * k}" ry="9" fill="#000" opacity="${.15 + .5 * k}"/><circle cx="150" cy="84" r="62" fill="url(#gLz)"/></svg>
        <p class="msg">${k < .35 ? '🌫️ <b>Sfumato</b> (Leonardo, <i>Mona Lisa</i>): passagem <b>suave</b>, "esfumaçada", entre luz e sombra.' : k > .65 ? '🔦 <b>Claro-escuro</b> (Caravaggio, Rembrandt): contraste <b>dramático</b>, luz forte e sombra profunda.' : 'Continue arrastando…'}</p>`;
    };
    $('#lz', el).oninput = upd; upd();
  },

  epocas(el) {
    const E = [['🦴', 'Pré-História', SVG_VENUS, '<b>Pinturas rupestres</b> mostram caça e rituais com figuras simples. Estatuetas como a <b>Vênus de Willendorf</b> exageram formas ligadas à <b>fertilidade</b>.'],
      ['🇪🇬', 'Egito Antigo', SVG_EGITO(false), '<b>Lei da Frontalidade</b> e <b>escala hierárquica</b>: quem é mais importante (o faraó) aparece maior. Figuras rígidas, ligadas à religião.'],
      ['🏛️', 'Grécia e Roma', SVG_CANON, 'Busca da <b>beleza ideal</b> e do equilíbrio. O <b>cânone de Policleto</b>: o corpo ideal mede <b>7,5 cabeças</b> de altura.'],
      ['⛪', 'Idade Média', SVG_MEDIEVAL, 'Visão <b>teocêntrica</b>: o corpo é <b>espiritualizado</b>, <b>alongado</b>, coberto por vestes, sem preocupação com a anatomia.'],
      ['📐', 'Renascimento', SVG_VITRU, 'Volta do interesse pelo ser humano: estudo de <b>anatomia</b>, <b>perspectiva</b> e <b>proporção matemática</b>. Símbolo: o <b>Homem Vitruviano</b>, de Leonardo.']];
    let i = 0;
    const draw = () => {
      el.innerHTML = `<div class="jogo"><span class="tag">⏳ Viaje pelas épocas</span>
        <div class="tl">${E.map((e, k) => `<button class="${k === i ? 'on' : k < i ? 'foi' : ''}" data-k="${k}"><i>${e[0]}</i><small>${e[1]}</small></button>`).join('')}</div>
        <div class="ep-card"><div class="ep-ilus">${E[i][2]}</div><div><b>${E[i][1]}</b><p>${E[i][3]}</p></div></div></div>`;
      $$('[data-k]', el).forEach(b => b.onclick = () => { i = +b.dataset.k; draw(); });
    };
    draw();
  },

  egito(el) {
    const T = { cabeca: '👤 <b>Cabeça de PERFIL</b> (vista de lado).', olho: '👁️ <b>Olho de FRENTE</b>: mesmo num rosto de perfil, o olho é desenhado inteiro!', tronco: '🫁 <b>Tronco e ombros de FRENTE</b>.', bracos: '💪 <b>Braços de PERFIL</b>.', pernas: '🦵 <b>Pernas e pés de PERFIL</b>, como se a pessoa andasse para o lado.' };
    el.innerHTML = `<div class="jogo"><span class="tag">🇪🇬 Toque nas partes do faraó</span><div class="eg-box">${SVG_EGITO(true)}</div><p class="msg" id="egm">👆 Toque na cabeça, no olho, no tronco, nos braços e nas pernas. <br><small>E repare: o <b>faraó é maior</b> que o servo (escala hierárquica).</small></p></div>`;
    $$('.farao [data-p]', el).forEach(g => g.onclick = () => { $$('.farao .pt', el).forEach(x => x.classList.remove('on')); g.classList.add('on'); $('#egm', el).innerHTML = T[g.dataset.p]; });
  },

  movimentos(el) {
    let k = 'ren';
    const draw = () => {
      el.innerHTML = `<div class="jogo"><span class="tag">🖼️ O mesmo rosto pintado em 6 estilos</span>
        <div class="row">${Object.keys(ROSTO).map(x => `<button class="btn sm ${x === k ? 'on' : 'ghost'}" data-r="${x}">${ROSTO[x][0]}</button>`).join('')}</div>
        <div class="ep-card"><div class="ep-ilus">${rostoSVG(k)}</div><div><b>${ROSTO[k][0]}</b><small class="art">${ROSTO[k][1]}</small><p>${ROSTO[k][2]}</p></div></div></div>`;
      $$('[data-r]', el).forEach(b => b.onclick = () => { k = b.dataset.r; draw(); });
    };
    draw();
  },

  artQuiz(el) {
    miniQuiz(el, '🎨 Qual é o movimento?', [
      ['Courbet pinta <i>Os Quebradores de Pedra</i>: trabalhadores cansados, sem enfeite.', 0], ['Degas e suas bailarinas em movimento, com pinceladas soltas.', 1],
      ['Picasso: <i>Les Demoiselles d’Avignon</i>, rostos em formas geométricas.', 2], ['Munch: <i>O Grito</i>, rosto deformado pela angústia.', 3],
      ['Magritte: maçã verde flutuando na frente do rosto.', 4], ['Anita Malfatti: cores fortes e formas distorcidas para mostrar emoção.', 3],
      ['Dalí: cenas de sonho e do inconsciente.', 4], ['Frente e perfil do rosto aparecem ao mesmo tempo.', 2], ['Captar a luz de um instante.', 1], ['Frida Kahlo: autorretratos cheios de símbolos e dores.', 4, 'Dialoga com o Surrealismo.']
    ], ['Realismo', 'Impressionismo', 'Cubismo', 'Expressionismo', 'Surrealismo']);
  },

  /* ---------------- FILOSOFIA ---------------- */
  metodo(el) {
    const P = [['👁️', 'Observação', 'Galileu observa objetos caindo.'], ['💡', 'Hipótese', 'Talvez, sem o ar, objetos leves e pesados caiam juntos.'], ['🧪', 'Experimentação', 'Rola bolas em planos inclinados e mede o tempo.'], ['📐', 'Matematização', 'Transforma as medidas em números e fórmulas.'], ['📜', 'Lei / Teoria', 'Chega a uma lei do movimento, que outros cientistas podem testar e repetir.']];
    let feitos = [], erro = '';
    const ordem = [3, 0, 4, 1, 2];
    const draw = () => {
      const fim = feitos.length === P.length;
      el.innerHTML = `<div class="jogo"><span class="tag">🪜 Monte o método científico na ordem certa</span>
        <div class="metodo">${feitos.map(k => `<div class="mp"><i>${P[k][0]}</i><b>${P[k][1]}</b>${fim ? `<small>${P[k][2]}</small>` : ''}</div>`).join('<span class="seta">➜</span>')}${fim ? '' : '<div class="mp vazio">?</div>'}</div>
        ${fim ? '' : `<div class="row">${ordem.filter(k => !feitos.includes(k)).map(k => `<button class="btn sm ghost" data-k="${k}">${P[k][0]} ${P[k][1]}</button>`).join('')}</div>`}
        <p class="msg">${fim ? '🎉 Isso! Exemplo: <b>Galileu</b> e a queda dos corpos.' : erro}</p>
        ${fim ? '<div class="row"><button class="btn sm" id="mr">Jogar de novo</button></div>' : ''}</div>`;
      $$('[data-k]', el).forEach(b => b.onclick = () => { const k = +b.dataset.k; if (k === feitos.length) { feitos.push(k); erro = '✅'; } else erro = `❌ Ainda não é "${P[k][1]}". O que vem depois?`; draw(); });
      $('#mr', el) && ($('#mr', el).onclick = () => { feitos = []; erro = ''; draw(); });
    };
    draw();
  },

  cosmos(el) {
    let m = 'geo';
    const T = { geo: '🌍 <b>Geocentrismo</b> (Ptolomeu): a <b>Terra parada no centro</b> e tudo girando em volta dela. Foi aceito por séculos por <b>argumento de autoridade</b>.', helio: '☀️ <b>Heliocentrismo</b> (Copérnico, 1543): o <b>Sol no centro</b>; a Terra gira em torno de si e em volta do Sol. Repare nas 4 luas de Júpiter!', kepler: '🥚 <b>Kepler</b>: as órbitas não são círculos perfeitos, são <b>elipses</b> (ovais), com o Sol num dos focos.', luneta: '🔭 <b>Galileu</b> (1609–1610) apontou a luneta para o céu: viu <b>crateras na Lua</b>, <b>manchas no Sol</b>, as <b>fases de Vênus</b> e <b>4 luas de Júpiter</b>. Prova: nem tudo gira em volta da Terra!' };
    const draw = () => {
      el.innerHTML = `<div class="jogo"><span class="tag">🌌 Quem está no centro?</span>
        <div class="row">${[['geo', '🌍 Ptolomeu'], ['helio', '☀️ Copérnico'], ['kepler', '🥚 Kepler'], ['luneta', '🔭 Galileu']].map(([k, t]) => `<button class="btn sm ${m === k ? 'on' : 'ghost'}" data-m="${k}">${t}</button>`).join('')}</div>
        <div class="cosmos-box">${cosmosSVG(m)}</div><p class="msg">${T[m]}</p></div>`;
      $$('[data-m]', el).forEach(b => b.onclick = () => { m = b.dataset.m; draw(); });
    };
    draw();
  },

  quem(el) {
    miniQuiz(el, '🧑‍🔬 Quem foi?', [
      ['Colocou o Sol no centro (1543).', 0], ['Descobriu que as órbitas são elípticas.', 1], ['Viu as 4 luas de Júpiter com a luneta.', 2], ['Criou a Lei da Gravitação Universal.', 3],
      ['"O livro da natureza está escrito em língua matemática."', 2], ['Formulou as 3 leis do movimento.', 3], ['Viu crateras na Lua e manchas no Sol.', 2], ['Foi julgado pela Inquisição.', 2]
    ], ['Copérnico', 'Kepler', 'Galileu', 'Newton']);
  },

  remo(el) {
    let real = false;
    const draw = () => {
      el.innerHTML = `<div class="jogo"><span class="tag">🚣 Olhe bem para o remo</span>${remoSVG(real)}
        <div class="row"><button class="btn sm" id="rr">${real ? '🙈 Ver de novo como parece' : '🤔 Ele está mesmo quebrado?'}</button></div>
        <p class="msg">${real ? 'O remo é <b>reto</b>! A água desvia a luz e <b>engana os olhos</b>. Para <b>Descartes</b>, isso mostra que os <b>sentidos enganam</b> e só a <b>razão</b> dá certeza.' : 'Dentro da água, o remo parece quebrado…'}</p></div>`;
      $('#rr', el).onclick = () => { real = !real; draw(); };
    };
    draw();
  },

  duvida(el) {
    const P = [['🚣', 'Duvido dos sentidos', 'Os olhos já me enganaram (o remo "quebrado"). Então não posso confiar 100% neles.'],
      ['😴', 'Duvido se estou acordado', 'Nos sonhos tudo parece real. Como saber que agora não estou sonhando?'],
      ['🧮', 'Duvido de tudo', 'E se um "gênio enganador" me fizesse errar até em 2 + 2? Duvido de tudo, provisoriamente.'],
      ['💡', 'Mas espere…', 'Se eu estou <b>duvidando</b>, eu estou <b>pensando</b>. E, para pensar, eu preciso <b>existir</b>!'],
      ['🏁', '"Penso, logo existo"', '<b>Cogito, ergo sum</b>: a primeira certeza que ninguém consegue derrubar. A partir dela, Descartes reconstrói o conhecimento com a <b>razão</b>.']];
    let i = 0;
    const draw = () => {
      el.innerHTML = `<div class="jogo"><span class="tag">🤔 Dúvida metódica (${i + 1}/${P.length})</span>
        <div class="tl-card"><span class="big-e">${P[i][0]}</span><div><b>${P[i][1]}</b><p>${P[i][2]}</p></div></div>
        <div class="pontos-m">${P.map((_, k) => `<i class="${k <= i ? 'on' : ''}"></i>`).join('')}</div>
        <div class="row"><button class="btn sm ghost" id="da" ${i ? '' : 'disabled'}>←</button><button class="btn sm" id="dp">${i < P.length - 1 ? 'Continuar duvidando →' : '🔁 Recomeçar'}</button></div></div>`;
      $('#da', el).onclick = () => { i--; draw(); };
      $('#dp', el).onclick = () => { i = i < P.length - 1 ? i + 1 : 0; draw(); };
    };
    draw();
  },

  filoQuiz(el) {
    miniQuiz(el, '⚔️ Bacon ou Descartes?', [
      ['"Saber é poder."', 0], ['"Penso, logo existo."', 1], ['Método indutivo: de muitos casos observados, uma lei geral.', 0], ['Dúvida metódica.', 1],
      ['Os sentidos enganam; a certeza vem da razão.', 1], ['Cuidado com os "ídolos" que enganam a mente.', 0], ['Escreveu o <i>Novum Organum</i>.', 0], ['Escreveu o <i>Discurso do Método</i>.', 1],
      ['Regra da análise: dividir o problema em partes menores.', 1], ['Observar, registrar dados e fazer experimentos.', 0]
    ], ['👁️ Bacon (empirismo)', '🧠 Descartes (racionalismo)']);
  }
};

function initWidgets(root) {
  $$('[data-w]', root).forEach(el => WIDGETS[el.dataset.w] && WIDGETS[el.dataset.w](el));
}
