/* =========================================================
   ILUSTRAÇÕES (SVG desenhados à mão no código)
   ========================================================= */
const INK = '#1f2a44';

/* ---------- GEOGRAFIA ---------- */
const SVG_CERRADO = `<svg viewBox="0 0 200 230" class="ilus" role="img" aria-label="Árvore do Cerrado com raízes profundas">
  <rect width="200" height="80" fill="#fff4d6"/><rect y="80" width="200" height="150" fill="#d9a066"/>
  <rect y="192" width="200" height="38" fill="#4fa3dc" opacity=".75"/>
  <text x="100" y="216" text-anchor="middle" class="sv-t" fill="#fff">💧 lençol freático</text>
  <g stroke="#7a4a24" fill="none" stroke-linecap="round">
    <path d="M100,80 C92,62 110,52 100,40 C95,32 104,26 110,20" stroke-width="9"/>
    <path d="M100,46 C88,40 80,32 70,28 M104,32 C118,30 126,22 136,24" stroke-width="5"/>
    <path d="M100,80 C100,120 95,155 100,196" stroke-width="6"/>
    <path d="M100,108 C82,122 70,140 64,168 M100,128 C120,142 132,160 138,188 M100,92 C122,98 142,102 166,96 M100,96 C80,100 58,104 36,100" stroke-width="3"/>
  </g>
  <g stroke="#4a2a10" stroke-width="1.5"><path d="M97,70 h6 M96,62 h7 M99,54 h6"/></g>
  <g fill="#6a9a3a"><ellipse cx="66" cy="24" rx="18" ry="9"/><ellipse cx="138" cy="20" rx="20" ry="9"/><ellipse cx="106" cy="14" rx="16" ry="8"/></g>
  <g stroke="#8aa63a" stroke-width="2"><path d="M20,80 l4,-10 l3,10 M160,80 l3,-9 l4,9 M45,80 l3,-8 l3,8"/></g>
  <text x="150" y="62" class="sv-t">🔥 casca grossa</text><path d="M148,58 L108,62" stroke="${INK}" stroke-width="1"/>
  <text x="140" y="150" class="sv-t">raízes</text><text x="140" y="162" class="sv-t">profundas</text>
</svg>`;

/* ---------- ARTES ---------- */
function corpoPose(cp, mini) {
  const P = cp
    ? { h: [104, 38], sh: [[72, 64], [128, 74]], hip: [[84, 148], [116, 136]], lL: [[84, 148], [95, 206], [104, 256]], lR: [[116, 136], [112, 200], [108, 262]], aL: [[72, 64], [64, 114], [68, 160]], aR: [[128, 74], [138, 118], [132, 162]] }
    : { h: [100, 38], sh: [[72, 70], [128, 70]], hip: [[84, 142], [116, 142]], lL: [[84, 142], [82, 202], [82, 262]], lR: [[116, 142], [118, 202], [118, 262]], aL: [[72, 70], [66, 118], [64, 164]], aR: [[128, 70], [134, 118], [136, 164]] };
  const pl = a => a.map(p => p.join(',')).join(' ');
  const corpo = (cor, w) => `<g stroke="${cor}" fill="${cor}" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="${pl(P.lL)}" stroke-width="${18 + w}" fill="none"/><polyline points="${pl(P.lR)}" stroke-width="${18 + w}" fill="none"/>
    <polygon points="${pl([P.sh[0], P.sh[1], P.hip[1], P.hip[0]])}" stroke-width="${14 + w}"/>
    <polyline points="${pl(P.aL)}" stroke-width="${12 + w}" fill="none"/><polyline points="${pl(P.aR)}" stroke-width="${12 + w}" fill="none"/>
    <line x1="100" y1="64" x2="${P.h[0] - 1}" y2="${P.h[1] + 12}" stroke-width="${12 + w}"/>
    <circle cx="${P.h[0]}" cy="${P.h[1]}" r="${16 + w / 2}" stroke-width="0"/></g>`;
  const ext = (a, b, c) => { const dx = b[0] - a[0], dy = b[1] - a[1], k = 26 / Math.hypot(dx, dy); return `<line x1="${a[0] - dx * k}" y1="${a[1] - dy * k}" x2="${b[0] + dx * k}" y2="${b[1] + dy * k}" stroke="${c}" stroke-width="2.5" stroke-dasharray="6 4"/>`; };
  return `<svg viewBox="0 0 200 285" class="ilus pose${mini ? ' mini' : ''}" role="img" aria-label="${cp ? 'Estátua em contraposto' : 'Estátua rígida'}">
    <rect x="40" y="264" width="120" height="14" rx="3" fill="#cfc8b8" stroke="${INK}" stroke-width="2"/>
    ${corpo(INK, 5)}${corpo('#f1ece0', 0)}
    ${ext(P.sh[0], P.sh[1], '#e2477a')}${ext(P.hip[0], P.hip[1], '#21b5a5')}
    ${cp ? `<path d="M100,60 Q88,100 100,142 Q112,190 108,250" stroke="#ffb000" stroke-width="3" fill="none" stroke-dasharray="3 4"/>` : ''}
    <text x="172" y="${(P.sh[0][1] + P.sh[1][1]) / 2 - 6}" class="sv-t" fill="#e2477a" text-anchor="end">ombros</text>
    <text x="172" y="${(P.hip[0][1] + P.hip[1][1]) / 2 + 22}" class="sv-t" fill="#14907f" text-anchor="end">quadris</text>
    <text x="100" y="283" class="sv-t" text-anchor="middle">${cp ? '⬇️ peso numa perna só' : 'peso igual nas duas pernas'}</text>
  </svg>`;
}

function egFig() {
  return `<g data-p="pernas" class="pt"><path d="M88,178 L82,250 L92,250 L99,178 Z M106,178 L120,247 L130,245 L117,178 Z"/><path d="M80,250 L106,250 L106,258 L80,258 Z M118,246 L148,250 L146,258 L116,254 Z"/><polygon points="78,136 122,136 132,182 70,182" fill="#fff"/></g>
    <g data-p="bracos" class="pt"><path d="M60,74 L50,142 L58,144 L70,80 Z M140,74 L156,112 L182,108 L182,116 L151,122 L132,80 Z"/></g>
    <line x1="184" y1="58" x2="184" y2="258" stroke="#7a4a24" stroke-width="4"/>
    <g data-p="tronco" class="pt"><path d="M58,72 L142,72 L124,138 L76,138 Z"/><path d="M76,74 Q100,102 124,74" fill="none" stroke="#2a9d8f" stroke-width="6"/><path d="M80,74 Q100,94 120,74" fill="none" stroke="#e9c46a" stroke-width="4"/></g>
    <rect x="92" y="56" width="16" height="18" fill="#c8814a" stroke="${INK}" stroke-width="2"/>
    <g data-p="cabeca" class="pt"><path d="M86,20 Q104,6 118,20 L118,28 L96,30 L88,66 L72,72 Z" fill="#e9c46a"/><path d="M90,26 Q108,16 118,28 L120,38 L128,44 L120,48 L120,56 Q112,64 100,62 L94,58 Z"/></g>
    <g data-p="olho" class="pt"><path d="M103,36 Q110,31 117,36 Q110,41 103,36 Z" fill="#fff"/><circle cx="110" cy="36" r="2.2" fill="${INK}" stroke="none"/><path d="M117,36 L123,37" fill="none"/></g>`;
}
const SVG_EGITO = (interativo) => `<svg viewBox="0 0 300 270" class="ilus egito" role="img" aria-label="Figura egípcia">
  <rect width="300" height="270" fill="#f3e3b8"/><line x1="0" y1="260" x2="300" y2="260" stroke="${INK}" stroke-width="2"/>
  <g class="farao${interativo ? ' clic' : ''}" fill="#c8814a" stroke="${INK}" stroke-width="2">${egFig()}</g>
  <g transform="translate(205,130) scale(.5)" fill="#a8703f" stroke="${INK}" stroke-width="3">${egFig()}</g>
  <text x="100" y="12" class="sv-t" text-anchor="middle">FARAÓ (grande)</text><text x="258" y="122" class="sv-t" text-anchor="middle">servo (pequeno)</text>
</svg>`;

const SVG_VITRU = `<svg viewBox="0 0 200 220" class="ilus" role="img" aria-label="Homem Vitruviano">
  <rect width="200" height="220" fill="#f1e2bf"/>
  <g stroke="#6b4a2a" fill="none" stroke-width="2">
    <circle cx="100" cy="112" r="90"/><rect x="28" y="50" width="144" height="144"/>
    <circle cx="100" cy="64" r="12" fill="#e9d3a6"/><line x1="100" y1="76" x2="100" y2="136"/>
    <line x1="28" y1="88" x2="172" y2="88"/><path d="M100,88 L34,58 M100,88 L166,58" opacity=".55"/>
    <path d="M100,136 L92,194 M100,136 L108,194"/><path d="M100,136 L56,190 M100,136 L144,190" opacity=".55"/>
  </g>
  <text x="100" y="214" text-anchor="middle" class="sv-t" fill="#6b4a2a">○ + □ = arte + ciência + matemática</text>
</svg>`;

const SVG_VENUS = `<svg viewBox="0 0 120 200" class="ilus" role="img" aria-label="Vênus de Willendorf">
  <rect width="120" height="200" fill="#efe6d2"/>
  <g fill="#c9a46b" stroke="#7a5a2e" stroke-width="2">
    <path d="M44,150 L50,188 L58,188 L58,150 Z M76,150 L70,188 L62,188 L62,150 Z"/>
    <ellipse cx="60" cy="138" rx="36" ry="22"/><ellipse cx="60" cy="116" rx="31" ry="26"/><ellipse cx="60" cy="86" rx="28" ry="26"/>
    <circle cx="60" cy="34" r="17"/></g>
  <g fill="none" stroke="#7a5a2e" stroke-width="1.5"><path d="M45,30 Q60,22 75,30 M44,38 Q60,30 76,38 M46,46 Q60,38 74,46"/><path d="M36,74 Q46,96 56,80 M84,74 Q74,96 64,80"/></g>
</svg>`;

const SVG_CANON = `<svg viewBox="0 0 150 200" class="ilus" role="img" aria-label="Cânone de Policleto, 7,5 cabeças">
  <rect width="150" height="200" fill="#eef0f5"/>
  <g stroke="${INK}" stroke-width="1.5">${Array.from({ length: 9 }, (_, k) => `<line x1="14" x2="30" y1="${12 + Math.min(k * 24, 180)}" y2="${12 + Math.min(k * 24, 180)}"/>`).join('')}<line x1="22" y1="12" x2="22" y2="192"/></g>
  ${Array.from({ length: 8 }, (_, k) => `<text x="38" y="${28 + k * 24}" class="sv-t">${k < 7 ? k + 1 : '½'}</text>`).join('')}
  <g stroke="#f1ece0" stroke-linecap="round" fill="#f1ece0"><path d="M74,96 L72,192 M88,96 L96,190" stroke-width="10"/><polygon points="64,46 100,46 92,98 70,98" stroke-width="6"/><path d="M64,48 L58,110 M100,48 L106,108" stroke-width="7"/><circle cx="82" cy="24" r="12"/></g>
  <g fill="none" stroke="${INK}" stroke-width="1"><circle cx="82" cy="24" r="12"/><polygon points="64,46 100,46 92,98 70,98"/></g>
  <text x="120" y="110" class="sv-b" text-anchor="middle">7,5</text><text x="120" y="124" class="sv-t" text-anchor="middle">cabeças</text>
</svg>`;

const SVG_MEDIEVAL = `<svg viewBox="0 0 120 200" class="ilus" role="img" aria-label="Figura medieval alongada">
  <rect width="120" height="200" fill="#e0b743"/>
  <circle cx="60" cy="30" r="19" fill="#f6d55c" stroke="#a87908" stroke-width="2"/>
  <path d="M60,44 L84,192 L36,192 Z" fill="#2b4c8c" stroke="${INK}" stroke-width="2"/>
  <path d="M60,44 L78,124 L42,124 Z" fill="#a8262b" stroke="${INK}" stroke-width="2"/>
  <ellipse cx="60" cy="32" rx="8" ry="11" fill="#e8c9a0" stroke="${INK}" stroke-width="1.5"/>
  <path d="M56,88 L60,78 L64,88 Z" fill="#e8c9a0" stroke="${INK}" stroke-width="1"/>
</svg>`;

/* ---------- O MESMO ROSTO EM 6 ESTILOS ---------- */
const ROSTO = {
  ren: ['Renascimento', 'Leonardo, Michelangelo', 'Proporção, anatomia correta e luz suave (<b>sfumato</b>): equilíbrio e harmonia.', () => `
    <defs><radialGradient id="gRen" cx="42%" cy="38%" r="65%"><stop offset="0" stop-color="#f1d1ae"/><stop offset=".75" stop-color="#c8986d"/><stop offset="1" stop-color="#8a5f3f"/></radialGradient></defs>
    <rect width="200" height="220" fill="#6d7d58"/><path d="M50,112 C40,36 160,36 150,112 L160,220 L40,220 Z" fill="#3b2616"/>
    <rect x="88" y="146" width="24" height="40" fill="#b88a62"/><path d="M22,220 C36,178 164,178 178,220 Z" fill="#2f2418"/>
    <ellipse cx="100" cy="104" rx="38" ry="50" fill="url(#gRen)"/>
    <path d="M74,88 Q84,83 94,88 M106,88 Q116,83 126,88" stroke="#6b4a30" stroke-width="2" fill="none"/>
    <ellipse cx="85" cy="97" rx="7" ry="3.5" fill="#3b2616"/><ellipse cx="115" cy="97" rx="7" ry="3.5" fill="#3b2616"/>
    <path d="M100,98 L96,122 Q100,126 105,122" stroke="#8a5f40" stroke-width="2" fill="none"/>
    <path d="M88,136 Q100,142 112,136" stroke="#8a4a3a" stroke-width="2.5" fill="none" stroke-linecap="round"/>`],
  rea: ['Realismo', 'Courbet, Millet', 'O <b>trabalhador real</b>, cansado e suado, <b>sem idealização</b>: uma crítica social.', () => `
    <rect width="200" height="220" fill="#a39274"/>
    <g fill="#8c8c84" stroke="#5e5a50" stroke-width="2"><circle cx="20" cy="205" r="14"/><circle cx="44" cy="213" r="10"/><circle cx="182" cy="206" r="13"/></g>
    <rect x="88" y="146" width="24" height="40" fill="#9c6a44"/><path d="M22,220 C36,178 164,178 178,220 Z" fill="#5a6470"/><rect x="130" y="196" width="18" height="14" fill="#7d6a50"/>
    <ellipse cx="100" cy="108" rx="38" ry="48" fill="#b07a50"/>
    <path d="M58,84 C60,48 140,48 142,84 Z" fill="#4a3f35"/><path d="M56,84 L150,84 L164,92 L56,90 Z" fill="#3a3129"/>
    <path d="M78,102 L92,102 M108,102 L122,102" stroke="#2a1d12" stroke-width="3"/>
    <path d="M78,108 Q85,112 92,108 M108,108 Q115,112 122,108 M70,120 Q74,130 72,140 M130,120 Q126,130 128,140" stroke="#7d5232" stroke-width="1.8" fill="none"/>
    <path d="M100,102 L95,126 L106,126" stroke="#6d4528" stroke-width="2" fill="none"/>
    <path d="M88,142 L112,142" stroke="#5a2a1a" stroke-width="2.5"/>
    <path d="M66,96 q-4,6 0,8 q4,-2 0,-8z M136,112 q-4,6 0,8 q4,-2 0,-8z" fill="#8ecae6"/>`],
  imp: ['Impressionismo', 'Degas, Renoir', 'Feito de <b>pinceladas soltas</b>: capta a <b>luz</b> e o <b>instante</b>, como as bailarinas de Degas.', () => {
    let s = 11; const r = () => (s = (s * 9301 + 49297) % 233280) / 233280; let d = '<rect width="200" height="220" fill="#dfeee8"/>';
    const dab = (x, y, c, w = 7) => `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${w}" ry="${w * .55}" transform="rotate(${(r() * 180) | 0} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${c}" opacity=".85"/>`;
    for (let k = 0; k < 150; k++) d += dab(r() * 200, r() * 220, ['#9ad1d4', '#c3e0a5', '#f7e3a3', '#b8c7f0', '#e6c6e8'][k % 5]);
    for (let k = 0; k < 70; k++) d += dab(30 + r() * 140, 176 + r() * 44, ['#f7b6c8', '#ffffff', '#f4a3bd'][k % 3], 8);
    for (let k = 0; k < 60; k++) { const t = r() * 6.283, q = Math.sqrt(r()); d += dab(100 + Math.cos(t) * 44 * q, 70 + Math.sin(t) * 26 * q - 6, ['#7a4a2a', '#a0683a', '#5a3a20'][k % 3]); }
    for (let k = 0; k < 190; k++) { const t = r() * 6.283, q = Math.sqrt(r()); d += dab(100 + Math.cos(t) * 36 * q, 108 + Math.sin(t) * 46 * q, ['#f6c9a8', '#f2b38f', '#fde0c2', '#e9a0a0', '#f7d27a', '#d9a3c8'][k % 6], 5); }
    d += dab(86, 100, '#4a3a5a', 5) + dab(114, 100, '#4a3a5a', 5) + dab(100, 138, '#d0505a', 6) + dab(104, 139, '#e06a70', 5);
    return d;
  }],
  cub: ['Cubismo', 'Picasso, Braque', 'O rosto vira <b>formas geométricas</b>, visto de <b>vários ângulos ao mesmo tempo</b> (frente e perfil).', () => `
    <rect width="200" height="220" fill="#c9a66b"/>
    <polygon points="0,0 90,0 60,90 0,120" fill="#9c7b4a"/><polygon points="200,0 120,0 150,80 200,60" fill="#7f8c8d"/>
    <polygon points="0,220 0,170 60,150 90,220" fill="#5d6d7e"/><polygon points="200,220 200,160 140,150 120,220" fill="#a04000"/>
    <g stroke="${INK}" stroke-width="2.5" stroke-linejoin="round">
      <polygon points="86,174 114,174 118,212 82,212" fill="#d39b6b"/>
      <polygon points="52,62 100,24 150,52 140,90 60,96" fill="#3e2c23"/>
      <polygon points="60,82 100,58 100,182 70,162 52,120" fill="#e3b58a"/>
      <polygon points="100,58 146,84 150,130 128,170 100,182" fill="#8fa3b8"/>
      <path d="M66,110 Q80,98 94,110 Q80,120 66,110 Z" fill="#fff"/><polygon points="112,94 134,100 112,105" fill="#fff"/>
      <polygon points="100,100 130,142 100,144" fill="#c98b5a"/></g>
    <circle cx="80" cy="110" r="4" fill="${INK}"/><circle cx="118" cy="99" r="2.6" fill="${INK}"/>
    <path d="M76,158 L98,153 M100,153 L120,162" stroke="#8b1e1e" stroke-width="4"/>`],
  exp: ['Expressionismo', 'Munch, Schiele, Anita Malfatti', 'Formas <b>deformadas</b> e cores fortes para mostrar <b>emoções</b>: angústia, medo, tensão (como em <i>O Grito</i>).', () => `
    <rect width="200" height="220" fill="#f08a24"/>
    <g fill="none" stroke-width="10" stroke-linecap="round"><path d="M-5,22 C40,2 80,42 120,22 S180,2 205,22" stroke="#d9481c"/><path d="M-5,52 C40,32 80,72 120,52 S180,32 205,52" stroke="#f6c344"/><path d="M-5,80 C40,60 80,100 120,80 S180,60 205,80" stroke="#d9481c"/>
      <path d="M-5,176 C40,156 80,196 120,176 S180,156 205,176" stroke="#2f5d8a" stroke-width="14"/><path d="M-5,204 C40,186 80,222 120,204 S180,186 205,204" stroke="#1d3d5e" stroke-width="14"/></g>
    <path d="M68,220 C68,182 80,162 100,162 C120,162 132,182 132,220 Z" fill="#26303b"/>
    <path d="M100,40 C130,40 138,80 130,112 C126,142 118,162 100,162 C82,162 74,142 70,112 C62,80 70,40 100,40 Z" fill="#e6dba0" stroke="#4a4a2a" stroke-width="2"/>
    <path d="M66,118 C54,140 58,170 70,194 M134,118 C146,140 142,170 130,194" stroke="#e6dba0" stroke-width="11" stroke-linecap="round" fill="none"/>
    <ellipse cx="87" cy="92" rx="6" ry="10" fill="#2b2b1a"/><ellipse cx="113" cy="92" rx="6" ry="10" fill="#2b2b1a"/>
    <ellipse cx="100" cy="134" rx="8" ry="13" fill="#2b2b1a"/>`],
  sur: ['Surrealismo', 'Dalí, Magritte, Frida Kahlo', 'Tudo bem pintado, mas numa <b>situação impossível</b>, como num <b>sonho</b> (<i>O Filho do Homem</i>, de Magritte).', () => `
    <defs><linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fb8e0"/><stop offset="1" stop-color="#dcefff"/></linearGradient></defs>
    <rect width="200" height="220" fill="url(#gSky)"/>
    <g fill="#fff"><ellipse cx="34" cy="40" rx="22" ry="10"/><ellipse cx="50" cy="34" rx="16" ry="10"/><ellipse cx="166" cy="62" rx="22" ry="9"/></g>
    <rect y="176" width="200" height="44" fill="#9a9a92"/>
    <path d="M28,220 C40,174 160,174 172,220 Z" fill="#2b2f3a"/><polygon points="88,178 112,178 100,206" fill="#fff"/><polygon points="96,182 104,182 107,210 100,217 93,210" fill="#b3261e"/>
    <rect x="90" y="146" width="20" height="34" fill="#e2b48c"/><ellipse cx="100" cy="110" rx="32" ry="42" fill="#e2b48c"/>
    <ellipse cx="126" cy="100" rx="4" ry="2.5" fill="#2b1a10"/>
    <ellipse cx="100" cy="74" rx="46" ry="8" fill="#111"/><path d="M68,74 C68,34 132,34 132,74 Z" fill="#111"/>
    <circle cx="98" cy="120" r="30" fill="#6cbf3a" stroke="#3d7a22" stroke-width="2"/><ellipse cx="88" cy="110" rx="8" ry="5" fill="#a8e07a" opacity=".8"/>
    <path d="M98,92 Q100,84 104,80" stroke="#5a3a1a" stroke-width="3" fill="none"/><ellipse cx="110" cy="86" rx="9" ry="4" fill="#3d8b2a" transform="rotate(-25 110 86)"/>`]
};
const rostoSVG = k => `<svg viewBox="0 0 200 220" class="ilus rosto" role="img" aria-label="Rosto no estilo ${ROSTO[k][0]}">${ROSTO[k][3]()}</svg>`;

/* ---------- FILOSOFIA ---------- */
const circ = (cx, cy, r) => `M${cx + r},${cy} a${r},${r} 0 1,1 ${-2 * r},0 a${r},${r} 0 1,1 ${2 * r},0`;
function orbita(r, dur, corpo, cx = 160, cy = 160) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" class="orb"/><g><animateMotion dur="${dur}s" repeatCount="indefinite" path="${circ(cx, cy, r)}"/>${corpo}</g>`;
}
const astro = (r, cor, nome) => `<circle r="${r}" fill="${cor}" stroke="${INK}" stroke-width="1.2"/>${nome ? `<text y="${-r - 3}" text-anchor="middle" class="sv-t">${nome}</text>` : ''}`;
function cosmosSVG(modo) {
  let s = `<svg viewBox="0 0 320 320" class="ilus cosmos" role="img" aria-label="Modelo ${modo}"><rect width="320" height="320" rx="16" fill="#0f1733"/>`;
  for (let k = 0; k < 40; k++) s += `<circle cx="${(k * 73) % 320}" cy="${(k * 151) % 320}" r="${k % 3 ? .8 : 1.4}" fill="#fff" opacity=".7"/>`;
  if (modo === 'geo') {
    s += `<circle cx="160" cy="160" r="152" class="orb" stroke-dasharray="2 5"/><text x="160" y="316" text-anchor="middle" class="sv-t" fill="#cdd6ff">esfera das estrelas fixas</text>`;
    s += orbita(34, 4, astro(4, '#ddd', 'Lua')) + orbita(58, 6, astro(4, '#b0a090', 'Mercúrio')) + orbita(82, 9, astro(5, '#f2d49b', 'Vênus')) + orbita(112, 14, astro(13, '#ffd23f', 'Sol')) + orbita(140, 20, astro(5, '#e2673b', 'Marte'));
    s += `<g transform="translate(160,160)">${astro(12, '#3a86ff')}<text y="28" text-anchor="middle" class="sv-b" fill="#fff">TERRA</text></g>`;
  } else if (modo === 'helio') {
    const terra = `${astro(7, '#3a86ff', 'Terra')}<circle r="13" class="orb"/><g><animateMotion dur="1.6s" repeatCount="indefinite" path="${circ(0, 0, 13)}"/>${astro(2.5, '#ddd')}</g>`;
    const jup = `${astro(10, '#d9a066', 'Júpiter')}${[15, 18, 21, 24].map((r, k) => `<g><animateMotion dur="${1 + k * .6}s" repeatCount="indefinite" path="${circ(0, 0, r)}"/><circle r="1.8" fill="#fff"/></g>`).join('')}`;
    s += orbita(32, 3, astro(3.5, '#b0a090')) + orbita(52, 5, astro(5, '#f2d49b', 'Vênus')) + orbita(80, 8, terra) + orbita(106, 12, astro(5, '#e2673b', 'Marte')) + orbita(140, 22, jup);
    s += `<g transform="translate(160,160)"><circle r="20" fill="#ffd23f" stroke="#ff9f1c" stroke-width="4"/><text y="5" text-anchor="middle" class="sv-b">SOL</text></g>`;
  } else if (modo === 'kepler') {
    const el = 'M290,160 A130,90 0 1,1 30,160 A130,90 0 1,1 290,160';
    s += `<circle cx="160" cy="160" r="110" fill="none" stroke="#8892b0" stroke-dasharray="4 5"/><text x="160" y="44" text-anchor="middle" class="sv-t" fill="#8892b0">círculo perfeito (ideia antiga)</text>
      <path d="${el}" fill="none" stroke="#ffd23f" stroke-width="2.5"/><text x="160" y="266" text-anchor="middle" class="sv-t" fill="#ffd23f">ELIPSE (Kepler)</text>
      <g transform="translate(66,160)"><circle r="16" fill="#ffd23f" stroke="#ff9f1c" stroke-width="3"/><text y="32" text-anchor="middle" class="sv-t" fill="#fff">Sol (num foco)</text></g>
      <g><animateMotion dur="7s" repeatCount="indefinite" path="${el}"/>${astro(8, '#3a86ff')}</g>`;
  } else {
    s += `<circle cx="160" cy="150" r="128" fill="#000" stroke="#555" stroke-width="10"/>
      <g transform="translate(160,150)"><circle r="26" fill="#d9a066"/><path d="M-25,-8 H25 M-26,4 H26 M-22,14 H22" stroke="#a8703f" stroke-width="4"/></g>
      ${[[-50, 2.2], [42, 3.1], [-86, 4.3], [100, 5.6]].map(([x, d]) => `<circle cy="150" r="4" fill="#fff"><animate attributeName="cx" values="${160 + x};${160 - x};${160 + x}" dur="${d}s" repeatCount="indefinite"/></circle>`).join('')}
      <text x="160" y="304" text-anchor="middle" class="sv-t" fill="#fff">Júpiter e suas 4 luas: elas giram em volta de JÚPITER!</text>`;
  }
  return s + '</svg>';
}

const SVG_NEWTON = `<svg viewBox="0 0 340 200" class="ilus" role="img" aria-label="Maçã caindo e Lua orbitando a Terra">
  <rect width="340" height="200" rx="14" fill="#eef4ff"/><line x1="0" y1="184" x2="150" y2="184" stroke="#5a8a3a" stroke-width="6"/>
  <rect x="34" y="96" width="14" height="88" fill="#7a4a24"/><g fill="#5a9a3a"><circle cx="40" cy="80" r="30"/><circle cx="66" cy="92" r="22"/><circle cx="18" cy="96" r="18"/></g>
  <circle cx="86" cy="104" r="7" fill="#d62828" class="maca"/>
  <path d="M104,112 V170" stroke="#e2477a" stroke-width="2.5" marker-end="url(#mN)"/><text x="110" y="146" class="sv-t" fill="#e2477a">gravidade</text>
  <defs><marker id="mN" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#e2477a"/></marker></defs>
  <circle cx="258" cy="104" r="64" fill="none" stroke="#8892b0" stroke-dasharray="4 4"/>
  <circle cx="258" cy="104" r="30" fill="#3a86ff" stroke="${INK}" stroke-width="2"/><path d="M240,92 q10,-8 18,2 q6,10 -4,16 z M262,110 q12,-4 14,8 q-8,6 -14,-8z" fill="#5fbf5a"/>
  <g><animateMotion dur="6s" repeatCount="indefinite" path="${circ(258, 104, 64)}"/><circle r="9" fill="#ddd" stroke="${INK}" stroke-width="1.5"/></g>
  <text x="258" y="194" text-anchor="middle" class="sv-t">a Lua "cai" em volta da Terra</text>
  <text x="170" y="22" text-anchor="middle" class="sv-b">MESMA FORÇA ✨</text>
</svg>`;

function remoSVG(real) {
  return `<svg viewBox="0 0 300 210" class="ilus" role="img" aria-label="Remo que parece quebrado na água">
    <rect width="300" height="210" rx="14" fill="#fdf6e3"/><rect y="110" width="300" height="100" fill="#6bb6e8" opacity=".55"/>
    <path d="M0,110 Q25,104 50,110 T100,110 T150,110 T200,110 T250,110 T300,110" stroke="#2b7bb9" stroke-width="2" fill="none"/>
    <line x1="40" y1="20" x2="150" y2="110" stroke="#8a5a2b" stroke-width="9" stroke-linecap="round"/>
    <g opacity="${real ? .35 : .9}"><line x1="150" y1="110" x2="232" y2="150" stroke="#8a5a2b" stroke-width="9" stroke-linecap="round"/><ellipse cx="244" cy="156" rx="18" ry="8" fill="#8a5a2b" transform="rotate(26 244 156)"/></g>
    ${real ? `<line x1="150" y1="110" x2="226" y2="172" stroke="#e2477a" stroke-width="4" stroke-dasharray="7 5"/><ellipse cx="238" cy="182" rx="18" ry="8" fill="none" stroke="#e2477a" stroke-width="3" stroke-dasharray="5 4" transform="rotate(39 238 182)"/><text x="160" y="200" class="sv-t" fill="#b3261e">o remo REAL é reto!</text>` : `<text x="176" y="100" class="sv-t">parece quebrado! 🤨</text>`}
  </svg>`;
}

/* figuras das questões */
const FIG = {
  contra: () => `<div class="duo center"><div>${corpoPose(false, true)}<b>Arcaico: rígido</b></div><div>${corpoPose(true, true)}<b>Contraposto</b></div></div>`,
  egito: () => SVG_EGITO(false),
  vitru: () => SVG_VITRU,
  cubo: () => `<div class="center">${rostoSVG('cub')}</div>`,
  magritte: () => `<div class="center">${rostoSVG('sur')}</div>`,
  cosmos: () => `<div class="duo center"><div>${cosmosSVG('geo')}<b>Modelo I: Geocêntrico</b></div><div>${cosmosSVG('helio')}<b>Modelo II: Heliocêntrico</b></div></div>`,
  remo: () => remoSVG(false)
};
