// ---------------- DATA ----------------
const CATS = {
  psiquiatria:  { label:"Psiquiatria & higiene mental", color:"var(--left-1)"  },
  experimental: { label:"Psicologia experimental",        color:"var(--left-2)"  },
  behaviorismo: { label:"Análise do comportamento",       color:"var(--left-3)"  },
  psicanalise:  { label:"Psicanálise",                    color:"var(--right-1)" },
  educacional:  { label:"Escola Nova / educação",         color:"var(--right-2)" },
  social:       { label:"Psicologia social sócio-histórica", color:"var(--right-3)" },
};

const ROOTS = [
  { id:"r-wundt", img:"wundt.jpg", x:260, y:1010, name:"Wilhelm Wundt", meta:"Leipzig, Alemanha · 1879", tag:"Alemanha",
    blurb:"Funda o primeiro laboratório de psicologia experimental do mundo, criando o paradigma da psicologia como ciência de laboratório — referência de fundo para a psiquiatria e a psicologia científica que chegam ao Brasil.", refs:[6] },
  { id:"r-franca", img:"francesa.jpg", x:480, y:930, name:"Psicologia francesa", meta:"Charcot · Janet · Ribot · Piéron · Binet-Simon", tag:"França",
    blurb:"Psiquiatria clínica, psicometria e testes (escala Binet-Simon). Henri Piéron leciona pessoalmente em São Paulo em 1927; os testes franceses inspiram os primeiros instrumentos psicológicos brasileiros.", refs:[3,4] },
  { id:"r-claparede", img:"claparede.jpg", x:800, y:920, name:"Édouard Claparède", meta:"Instituto J.-J. Rousseau, Genebra", tag:"Suíça",
    blurb:"Psicologia funcional aplicada à educação. Forma diretamente dois pioneiros centrais da psicologia no Brasil: Waclaw Radecki (seu assistente) e Helena Antipoff.", refs:[5,6,7,8] },
  { id:"r-degeneracao", img:"degeneracao.jpeg", x:610, y:1065, name:"Psiquiatria da degeneração", meta:"Morel · Lombroso · Kraepelin", tag:"Europa",
    blurb:"Teorias europeias de degeneração/eugenia, amplamente discutidas — e em parte refutadas — pelos psiquiatras brasileiros que constroem o movimento de higiene mental.", refs:[3,4] },
  { id:"r-skinner", img:"skinner.jpg", x:170, y:1080, name:"B. F. Skinner", meta:"Análise experimental do comportamento", tag:"EUA",
    blurb:"Chega ao Brasil por meio de seu colaborador Fred Keller, convidado como Fulbright Scholar em 1961.", refs:[10] },
  { id:"r-freud", img:"freud.jpg", x:1360, y:1080, name:"Sigmund Freud", meta:"Viena", tag:"Áustria",
    blurb:"Fundador da psicanálise. Corresponde-se diretamente com Durval Marcondes a partir de 1926, incentivando a psicanálise nascente em São Paulo.", refs:[9] },
  { id:"r-dewey", img:"dewey.jpg", x:1190, y:940, name:"John Dewey", meta:"Pragmatismo, educação progressiva", tag:"EUA",
    blurb:"Inspira o movimento brasileiro da Escola Nova, por meio de Lourenço Filho, Anísio Teixeira e Fernando de Azevedo.", refs:[14] },
  { id:"r-sovietica", img:"vygotsky.jpg", x:1060, y:1010, name:"Vygotsky, Luria, Leontiev & Marx", meta:"Psicologia histórico-cultural", tag:"URSS/Alemanha",
    blurb:"Materialismo histórico-dialético e psicologia soviética, base teórica que Sílvia Lane adota para construir a psicologia social sócio-histórica brasileira.", refs:[11] },
  { id:"r-mira", img:"emilio.jpg", x:1085, y:1175, name:"Emilio Mira y López", meta:"Exilado da Guerra Civil Espanhola", tag:"Espanha",
    blurb:"Psiquiatra catalão exilado; funda em 1947 o ISOP (Instituto de Seleção e Orientação Profissional) da FGV, marco da psicotécnica no Brasil.", refs:[3,4] },
];

const NODES = [
  // --- LEFT: Psiquiatria & higiene mental ---
  { id:"p-moreira", img:"moreira.jpg", cat:"psiquiatria", x:330,y:470, name:"Juliano Moreira", meta:"Dir. Hospício Nacional, 1903–1930",
    blurb:"Moderniza a psiquiatria brasileira em diálogo crítico com a psiquiatria alemã, refutando teses raciais de degeneração; cria as condições institucionais para o laboratório de Radecki.", refs:[3,4], parents:["r-degeneracao"] },
  { id:"p-riedel", img:"riedel.jpg", cat:"psiquiatria", x:195,y:400, name:"Gustavo Riedel", meta:"1923",
    blurb:"Funda a Liga Brasileira de Higiene Mental (1923) e organiza, com Radecki, o laboratório de psicologia do Engenho de Dentro.", refs:[3,4,5], parents:["p-moreira"] },
  { id:"p-ulisses", img:"pernambucano.jpg", cat:"psiquiatria", x:355,y:305, name:"Ulisses Pernambucano", meta:"Recife, Serv. Hig. Mental de PE, 1931",
    blurb:"Lidera a “Escola do Recife”: psiquiatria social, higiene mental e diálogo pioneiro com práticas afro-brasileiras (terreiros), unindo clínica e questão social.", refs:[12,13], parents:["p-moreira"] },

  // --- LEFT: Psicologia experimental ---
  { id:"n-roxo", img:"roxo.jpg", cat:"experimental", x:485,y:530, name:"Henrique Roxo", meta:"1900",
    blurb:"Defende a primeira tese de psicologia/psiquiatria experimental do Brasil e organiza laboratório no Hospício Nacional.", refs:[3,4], parents:["r-franca"] },
  { id:"n-radecki", img:"radecki.jpg", cat:"experimental", x:565,y:400, name:"Waclaw Radecki", meta:"Polônia → Brasil, 1923–1932",
    blurb:"Ex-assistente de Claparède em Genebra; funda em 1923 o laboratório de psicologia do Engenho de Dentro (RJ), elevado a Instituto de Psicologia em 1932.", refs:[5,6], parents:["r-claparede","p-riedel"] },
  { id:"n-discipulos", img:"campos.png", cat:"experimental", x:495,y:270, name:"N. Campos · J. Grabois", meta:"Discípulos de Radecki",
    blurb:"Formados no Instituto de Psicologia do Engenho de Dentro, dão continuidade à pesquisa experimental após a partida de Radecki (1932).", refs:[5,6], parents:["n-radecki"] },
  { id:"n-ipufrj", img:"ufrj.jpg", cat:"experimental", x:645,y:200, name:"Instituto de Psicologia (UFRJ)", inst:true, meta:"Continuidade institucional",
    blurb:"O núcleo experimental fundado por Radecki desdobra-se no Instituto de Psicologia da então Universidade do Brasil, hoje UFRJ.", refs:[5,6], parents:["n-discipulos"] },

  // --- LEFT: Behaviorismo ---
  { id:"b-keller", img:"keller.jpg", cat:"behaviorismo", x:250,y:225, name:"Fred S. Keller", meta:"USP, 1961 (Fulbright)",
    blurb:"Ministra o primeiro curso de análise experimental do comportamento da América Latina, na USP.", refs:[10], parents:["r-skinner"] },
  { id:"b-bori", img:"bori.jpg", cat:"behaviorismo", x:120,y:165, name:"Carolina Bori", meta:"USP",
    blurb:"Colaboradora e ex-aluna de Keller; torna-se a principal responsável pela disseminação da análise do comportamento no Brasil.", refs:[10], parents:["b-keller"] },
  { id:"b-psi", img:"unb.png", cat:"behaviorismo", x:290,y:95, name:"Sistema PSI (UnB)", inst:true, meta:"1964 — Keller, Bori, Azzi",
    blurb:"Implantação do Sistema Personalizado de Ensino de Keller na Universidade de Brasília, marco da institucionalização do behaviorismo no ensino superior.", refs:[10], parents:["b-keller","b-bori"] },
  { id:"b-expansao", img:"nacional.jpg", cat:"behaviorismo", x:440,y:60, name:"Expansão nacional", inst:true, meta:"PUC-SP · UFSCar · UFPA · UFSC",
    blurb:"O Brasil torna-se o maior centro de análise do comportamento fora dos Estados Unidos.", refs:[10], parents:["b-psi"] },

  // --- RIGHT: Psicanálise ---
  { id:"a-franco", img:"rocha.jpg", cat:"psicanalise", x:1070,y:475, name:"Franco da Rocha", meta:"São Paulo, 1919",
    blurb:"Professor de psiquiatria que primeiro apresenta Freud ao público brasileiro (aula “Do delírio em geral”, 1919).", refs:[9], parents:["r-freud","r-franca"] },
  { id:"a-marcondes", img:"marcondes.jpg", cat:"psicanalise", x:1225,y:415, name:"Durval Marcondes", meta:"1926–1927",
    blurb:"Corresponde-se com Freud a partir de 1926; funda em 1927 a primeira Sociedade Brasileira de Psicanálise, reconhecida pela IPA em 1929.", refs:[9], parents:["a-franco","r-freud"] },
  { id:"a-nucleorj", img:"psicopatas-rj.jpg", cat:"psicanalise", x:985,y:355, name:"Núcleo do Rio de Janeiro", inst:true, meta:"1928, Hosp. Nacional de Psicopatas",
    blurb:"Presidido por Juliano Moreira, amplia a psicanálise nascente para o Rio de Janeiro.", refs:[9], parents:["a-marcondes","p-moreira"] },
  { id:"a-koch", img:"koch.jpg", cat:"psicanalise", x:1300,y:325, name:"Adelheid Koch", meta:"Berlim → São Paulo, 1936",
    blurb:"Psicanalista alemã (análise didática com Otto Fenichel); com Marcondes, funda em 1937 o 1º centro de formação psicanalítica da América Latina.", refs:[9], parents:["r-freud","a-marcondes"] },
  { id:"a-sbpsp", img:"sbsp.jpg", cat:"psicanalise", x:1155,y:235, name:"Soc. Bras. Psicanálise SP", inst:true, meta:"IPA: 1944 (provis.) / 1951 (defin.)",
    blurb:"Marcondes é o primeiro presidente; consolida a formação psicanalítica institucionalizada no Brasil.", refs:[9], parents:["a-marcondes","a-koch"] },

  // --- RIGHT: Escola Nova / educação ---
  { id:"e-bomfim", img:"bomfim.jpg", cat:"educacional", x:1340,y:515, name:"Manoel Bomfim", meta:"1906–1928",
    blurb:"Cria em 1906 o primeiro laboratório de psicologia no Pedagogium (RJ); publica obras pioneiras sobre testes psicológicos.", refs:[3,4], parents:["r-franca"] },
  { id:"e-lourenco", img:"lourenco.jpg", cat:"educacional", x:1450,y:435, name:"Lourenço Filho", meta:"1925",
    blurb:"Assume a cátedra de psicologia da Escola Normal de SP, cria os Testes ABC e torna-se voz central da Escola Nova.", refs:[3,4,14], parents:["r-dewey","e-bomfim"] },
  { id:"e-manifesto", img:"teixeira.jpg", cat:"educacional", x:1525,y:345, name:"Anísio Teixeira · F. Azevedo", meta:"Manifesto dos Pioneiros, 1932",
    blurb:"Lideram a reforma educacional brasileira sob influência do pragmatismo de Dewey, integrando psicologia à política educacional.", refs:[14], parents:["r-dewey","e-lourenco"] },
  { id:"e-antipoff", img:"antipoff.jpg", cat:"educacional", x:1400,y:255, name:"Helena Antipoff", meta:"Rússia → Minas Gerais, 1929",
    blurb:"Formada com Claparède no Instituto J.-J. Rousseau; funda a Sociedade Pestalozzi (1932), pioneira da psicologia aplicada à educação especial no Brasil.", refs:[7,8], parents:["r-claparede","e-manifesto"] },

  // --- RIGHT: Psicologia social sócio-histórica ---
  { id:"s-lane", img:"lane.png", cat:"social", x:1225,y:195, name:"Sílvia Lane", meta:"PUC-SP, 1970–1971",
    blurb:"Doutora em 1970; funda em 1971 a Faculdade de Psicologia da PUC-SP; sintetiza materialismo histórico-dialético e psicologia soviética numa psicologia social brasileira original.", refs:[11], parents:["r-sovietica"] },
  { id:"s-abrapso", img:"abrapso.jpg", cat:"social", x:1345,y:130, name:"ABRAPSO", inst:true, meta:"Fundada por Lane, 10/07/1980",
    blurb:"Associação Brasileira de Psicologia Social; formaliza a psicologia sócio-histórica como corrente brasileira, em rede com a psicologia latino-americana crítica.", refs:[11], parents:["s-lane"] },
  { id:"s-legado", img:"sawaia.jpg", cat:"social", x:1465,y:75, name:"B. Sawaia · A. Ciampa", meta:"Psicologia comunitária, identidade",
    blurb:"Continuam e ampliam a psicologia sócio-histórica e a psicologia comunitária no Brasil.", refs:[11], parents:["s-lane","s-abrapso"] },
];

const FLAGS = [
  { id:"m1", x:845, y:1225, name:"Decreto-Lei nº 21.173", meta:"1931", blurb:"Reconhece oficialmente o Instituto de Psicologia do Engenho de Dentro.", parents:["n-radecki"] },
  { id:"m2", x:845, y:1170, name:"Primeiro diploma de especialização", meta:"1946", blurb:"Primeira habilitação formal em psicologia autorizada no país.", parents:["m1"] },
  { id:"m3", x:845, y:1115, name:"Primeiros cursos de graduação", meta:"PUC-Rio 1953 · PUC-RS 1954", blurb:"Convergência das correntes anteriores no primeiro currículo universitário de Psicologia do Brasil.", parents:["m2","r-mira"] },
  { id:"m4", x:845, y:1060, name:"Lei nº 4.119", meta:"27/08/1962", blurb:"Regulamenta a profissão de psicólogo no Brasil.", parents:["m3"] },
  { id:"m5", x:845, y:1005, name:"Lei nº 5.766 / CFP", meta:"1971 (instalado 1973)", blurb:"Cria o Conselho Federal de Psicologia.", parents:["m4"] },
];

const CAPTIONS = [
  { x:200, y:330, text:"Higiene mental", color:"var(--left-1)" },
  { x:520, y:460, text:"Psicologia experimental", color:"var(--left-2)" },
  { x:145, y:295, text:"Behaviorismo", color:"var(--left-3)" },
  { x:1040, y:280, text:"Psicanálise", color:"var(--right-1)" },
  { x:1290, y:610, text:"Escola Nova", color:"var(--right-2)" },
  { x:1200, y:90, text:"Sócio-histórica", color:"var(--right-3)" },
];

const SOURCES = [
  { t:"JACÓ-VILELA, A. M.; FERREIRA, A. A. L.; PORTUGAL, F. T. (orgs.). <em>História da Psicologia: Rumos e Percursos</em>. Rio de Janeiro: Nau (coleção Clio-Psyché, via SciELO Books).", u:"https://books.scielo.org/id/27bn3/pdf/jaco-9788575114988.pdf" },
  { t:"ANTUNES, M. A. M. <em>A Psicologia no Brasil: Leitura Histórica sobre sua Constituição</em>. São Paulo: EDUC/Unimarco.", u:"https://www.pucsp.br/educ/livro?id=127" },
  { t:"“História da Psicologia no Brasil: uma narrativa por meio de seu ensino”. <em>Psicologia: Ciência e Profissão</em>, SciELO.", u:"http://www.scielo.br/j/pcp/a/9KqzhPLhtm58PQNGQB39GLq/?lang=pt" },
  { t:"“A Psicologia no Brasil” (introdução). <em>Psicologia: Ciência e Profissão</em>, n.0, PePSIC.", u:"https://pepsic.bvsalud.org/pdf/pcp/n0/03.pdf" },
  { t:"“Radecki e a Psicologia no Brasil”. <em>Psicologia: Ciência e Profissão</em>, SciELO.", u:"https://www.scielo.br/j/pcp/a/S99LKWZM3pbmWFkW5MxSZqF/?lang=pt" },
  { t:"“Yes, nosotros tenemos a Wundt: Radecki y la historia de la psicología en Brasil”. Redalyc.", u:"https://www.redalyc.org/journal/1390/139050020004/html/" },
  { t:"“Helena Antipoff: razão e sensibilidade na psicologia e na educação”. <em>Educação e Pesquisa</em>, SciELO.", u:"http://www.scielo.br/j/ea/a/vrRrrTKm57vsYZvqDVpsgbx/?lang=pt" },
  { t:"“Helena Antipoff (1892–1974)”. <em>Psicologia: Ciência e Profissão</em>, SciELO.", u:"https://www.scielo.br/j/pcp/a/98LdGBPmKNgrPKzgZfYDLJp/?lang=pt" },
  { t:"“Notas para a história da psicanálise em São Paulo”. <em>Revista Brasileira de Psicanálise</em>, PePSIC.", u:"https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S0486-641X2012000200006" },
  { t:"“Análise do comportamento no Brasil”. <em>Psicologia: Teoria e Pesquisa</em>, SciELO.", u:"https://www.scielo.br/j/ptp/a/mxLr4CXqhTvFRppTrk3jTLL/?lang=pt" },
  { t:"“Sílvia Lane e o projeto do 'Compromisso Social da Psicologia'”. <em>Psicologia & Sociedade</em>, SciELO.", u:"https://www.scielo.br/j/psoc/a/w5gPmcgxnB5w5ThhFkCyCtb/?format=html&lang=pt" },
  { t:"“Na história da medicina social, o grupo de Recife que levou a psiquiatria para além do muro dos sanatórios”. Casa de Oswaldo Cruz/Fiocruz.", u:"https://coc.fiocruz.br/todas-as-noticias/na-historia-da-medicina-social-o-grupo-de-recife-que-levou-a-psiquiatria-para-alem-do-muro-dos-sanatorios/" },
  { t:"“Ulisses Pernambucano, educador”. <em>Psicologia: Ciência e Profissão</em>, PePSIC.", u:"https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1414-98931992000100003" },
  { t:"“As influências do pensamento de John Dewey no movimento escolanovista brasileiro”. Revista Redescrições, UFRJ.", u:"https://revistas.ufrj.br/index.php/Redescricoes/article/download/15281/10035/33328" },
];

// ---------------- RENDER ----------------
function initials(name){
  const clean = name.replace(/[·(].*$/,'').trim();
  const parts = clean.split(/\s+/).filter(w=>w.length>1 || /[A-ZÀ-Ú]/.test(w));
  if (parts.length===1) return parts[0].slice(0,2).toUpperCase();
  return (parts[0][0]+parts[parts.length-1][0]).toUpperCase();
}

// legend
const legend = document.getElementById('legend');
Object.values(CATS).forEach(c=>{
  const s = document.createElement('span'); s.className='sw';
  s.innerHTML = `<span class="dot" style="border-color:${c.color}"></span>${c.label}`;
  legend.appendChild(s);
});
legend.innerHTML += `<span class="sw"><span class="dot" style="border-color:var(--root-ring); border-style:dashed;"></span>Raízes estrangeiras</span>`;

const nodesLayer = document.getElementById('nodesLayer');
const flagsLayer = document.getElementById('flagsLayer');
const captionsLayer = document.getElementById('captionsLayer');

function refLinks(refs){ return (refs||[]).map(r=>`<a href="#src-${r}">[${r}]</a>`).join(' '); }

function makeNode(n, isRoot){
  const div = document.createElement('div');
  div.className = 'node' + (n.inst ? ' institution' : '');
  div.id = n.id;
  div.style.left = n.x+'px'; div.style.top = n.y+'px';
  const ring = isRoot ? 'var(--root-ring)' : `var(${'--'+(n.cat==='psiquiatria'?'left-1':n.cat==='experimental'?'left-2':n.cat==='behaviorismo'?'left-3':n.cat==='psicanalise'?'right-1':n.cat==='educacional'?'right-2':'right-3')})`;
  div.style.setProperty('--ring', ring);
  if (isRoot) div.querySelector; // noop
  const photo = n.img ? `<img src="img/${n.img}" alt="${n.name}" loading="lazy" onerror="this.remove()">` : '';
  div.innerHTML = `<div class="avatar" style="${isRoot?'border-style:dashed;':''}">${photo}<span class="init">${initials(n.name)}</span></div>
    <div class="label">${n.name}</div><div class="meta">${n.meta}</div>${isRoot?`<div class="root-tag">${n.tag}</div>`:''}`;
  div.dataset.name = n.name; div.dataset.meta = n.meta; div.dataset.blurb = n.blurb; div.dataset.refs = JSON.stringify(n.refs||[]);
  div.addEventListener('click', ()=>{ openDrawer(n, div); toggleTrajectory(n.id); });
  nodesLayer.appendChild(div);
}

ROOTS.forEach(r=>makeNode(r, true));
NODES.forEach(n=>makeNode(n, false));

FLAGS.forEach(m=>{
  const div = document.createElement('div');
  div.className='flag'; div.id=m.id;
  div.style.left=m.x+'px'; div.style.top=m.y+'px';
  div.innerHTML = `<div class="pin"><b>${m.meta}</b> — ${m.name}</div>`;
  div.dataset.name=m.name; div.dataset.meta=m.meta; div.dataset.blurb=m.blurb; div.dataset.refs="[]";
  div.addEventListener('click', ()=>{ openDrawer(m, div); toggleTrajectory(m.id); });
  flagsLayer.appendChild(div);
});

// decorative element (não é nó clicável — apenas ilustra a dimensão institucional/legal)
const decor = document.createElement('div');
decor.className = 'decor';
decor.style.left = '935px'; decor.style.top = '1000px';
decor.innerHTML = `<img src="img/brasao.jpg" alt="Brasão" loading="lazy" onerror="this.parentElement.remove()"><div class="dlabel">Marcos legais</div>`;
document.getElementById('stage').appendChild(decor);

CAPTIONS.forEach(c=>{
  const d = document.createElement('div');
  d.className='branch-caption';
  d.style.left=c.x+'px'; d.style.top=c.y+'px';
  d.style.setProperty('--cap-color', c.color);
  d.style.transform='translate(-50%,-50%)';
  d.textContent=c.text;
  captionsLayer.appendChild(d);
});

// macro-branch banners — deixam explícito a que vertente cada galho pertence
const BRANCH_BANNERS = [
  { x:430, y:825, side:'left',  text:"RAMO CIENTÍFICO-EXPERIMENTAL", sub:"Higiene mental · Psicologia experimental · Behaviorismo" },
  { x:1170, y:825, side:'right', text:"RAMO CLÍNICO-EDUCACIONAL-SOCIAL", sub:"Psicanálise · Escola Nova · Sócio-histórica" },
];
BRANCH_BANNERS.forEach(b=>{
  const d = document.createElement('div');
  d.className = 'branch-banner ' + b.side;
  d.style.left = b.x+'px'; d.style.top = b.y+'px';
  d.style.transform = 'translate(-50%,-50%)';
  d.innerHTML = `${b.text}<span class="sub">${b.sub}</span>`;
  captionsLayer.appendChild(d);
});

// sources
const sourcesList = document.getElementById('sourcesList');
SOURCES.forEach((s,i)=>{
  const li=document.createElement('li'); li.id=`src-${i+1}`;
  li.innerHTML = `${s.t} <a href="${s.u}" target="_blank" rel="noopener">${s.u}</a>`;
  sourcesList.appendChild(li);
});

// drawer
const drawer = document.getElementById('drawer');
document.getElementById('drawerClose').addEventListener('click', ()=>{
  drawer.classList.remove('open');
  document.querySelectorAll('.node.selected').forEach(e=>e.classList.remove('selected'));
});
function openDrawer(n, el){
  document.querySelectorAll('.node.selected').forEach(e=>e.classList.remove('selected'));
  if (el.classList.contains('node')) el.classList.add('selected');
  document.getElementById('dName').textContent = n.name;
  document.getElementById('dMeta').textContent = n.meta + (n.tag? '  ·  Origem: '+n.tag : '');
  document.getElementById('dBlurb').textContent = n.blurb;
  document.getElementById('dRefs').innerHTML = refLinks(n.refs);
  drawer.classList.add('open');
}

// ---------------- decorative background (trunk, boughs, foliage) ----------------
const bg = document.getElementById('bgSvg');
bg.innerHTML = `
<defs>
  <filter id="soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="22"/></filter>
  <linearGradient id="trunkGrad" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#4d3720"/><stop offset="0.5" stop-color="#7a5735"/><stop offset="1" stop-color="#4d3720"/>
  </linearGradient>
  <radialGradient id="gL1"><stop offset="0" stop-color="#e8734f" stop-opacity=".85"/><stop offset="1" stop-color="#a8321f" stop-opacity="0"/></radialGradient>
  <radialGradient id="gL2"><stop offset="0" stop-color="#f0a24b" stop-opacity=".85"/><stop offset="1" stop-color="#d97a1f" stop-opacity="0"/></radialGradient>
  <radialGradient id="gL3"><stop offset="0" stop-color="#f7d24e" stop-opacity=".85"/><stop offset="1" stop-color="#e3ab1a" stop-opacity="0"/></radialGradient>
  <radialGradient id="gR1"><stop offset="0" stop-color="#5aa9c2" stop-opacity=".85"/><stop offset="1" stop-color="#1f6f8b" stop-opacity="0"/></radialGradient>
  <radialGradient id="gR2"><stop offset="0" stop-color="#5fbf9e" stop-opacity=".85"/><stop offset="1" stop-color="#237a63" stop-opacity="0"/></radialGradient>
  <radialGradient id="gR3"><stop offset="0" stop-color="#7d8fd6" stop-opacity=".85"/><stop offset="1" stop-color="#3d4fa0" stop-opacity="0"/></radialGradient>
  <radialGradient id="gGold"><stop offset="0" stop-color="#e7cf8a" stop-opacity=".7"/><stop offset="1" stop-color="#c9a24a" stop-opacity="0"/></radialGradient>
  <radialGradient id="gLeftAll"><stop offset="0" stop-color="#d97a1f" stop-opacity=".16"/><stop offset="1" stop-color="#d97a1f" stop-opacity="0"/></radialGradient>
  <radialGradient id="gRightAll"><stop offset="0" stop-color="#1f6f8b" stop-opacity=".16"/><stop offset="1" stop-color="#1f6f8b" stop-opacity="0"/></radialGradient>
  <pattern id="psiPattern" width="150" height="150" patternUnits="userSpaceOnUse" patternTransform="rotate(9)">
    <text x="10" y="110" font-family="Georgia, serif" font-size="70" fill="#5a4a34" opacity="0.05">&#936;</text>
  </pattern>
</defs>

<rect x="0" y="0" width="1600" height="1320" fill="url(#psiPattern)"/>
<text x="800" y="1150" font-family="Georgia, serif" font-size="340" font-weight="700" fill="#a9803f" opacity="0.055" text-anchor="middle">&#936;</text>

<ellipse cx="340" cy="430" rx="440" ry="440" fill="url(#gLeftAll)" filter="url(#soft)"/>
<ellipse cx="1260" cy="430" rx="440" ry="440" fill="url(#gRightAll)" filter="url(#soft)"/>

<!-- watermarks temáticos de psicologia, um por sub-ramo -->
<g transform="translate(150,470)" opacity="0.22" stroke="#a8321f" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10,60 C-5,30 10,0 40,-5 C55,-25 90,-25 105,-8 C130,-12 150,5 145,25 C165,30 168,55 150,68 C155,88 135,102 115,95 C100,112 70,112 60,98 C35,105 12,90 10,60 Z"/>
  <path d="M30,20 C45,15 55,25 50,38"/>
  <path d="M60,10 C72,8 80,20 72,30"/>
  <path d="M90,5 C102,8 105,20 95,26"/>
  <path d="M110,15 C122,18 122,32 110,35"/>
  <path d="M120,45 C132,45 135,58 122,62"/>
  <path d="M115,95 L112,115 L128,118"/>
</g>
<g transform="translate(575,510)" opacity="0.22" stroke="#d97a1f" stroke-width="4" fill="none" stroke-linecap="round">
  <circle cx="40" cy="40" r="38"/>
  <line x1="66" y1="66" x2="108" y2="108"/>
</g>
<g transform="translate(120,120)" opacity="0.22" stroke="#e3ab1a" stroke-width="3" fill="none" stroke-linecap="round">
  <circle cx="0" cy="0" r="32"/>
  <circle cx="0" cy="0" r="9" fill="#e3ab1a" stroke="none"/>
  <line x1="32" y1="0" x2="40" y2="0"/><line x1="22.6" y1="22.6" x2="28.3" y2="28.3"/>
  <line x1="0" y1="32" x2="0" y2="40"/><line x1="-22.6" y1="22.6" x2="-28.3" y2="28.3"/>
  <line x1="-32" y1="0" x2="-40" y2="0"/><line x1="-22.6" y1="-22.6" x2="-28.3" y2="-28.3"/>
  <line x1="0" y1="-32" x2="0" y2="-40"/><line x1="22.6" y1="-22.6" x2="28.3" y2="-28.3"/>
  <circle cx="46" cy="30" r="20"/>
  <circle cx="46" cy="30" r="5" fill="#e3ab1a" stroke="none"/>
  <line x1="66" y1="30" x2="72" y2="30"/><line x1="56" y1="47.3" x2="59" y2="52.5"/>
  <line x1="36" y1="47.3" x2="33" y2="52.5"/><line x1="26" y1="30" x2="20" y2="30"/>
  <line x1="36" y1="12.7" x2="33" y2="7.5"/><line x1="56" y1="12.7" x2="59" y2="7.5"/>
</g>
<g transform="translate(1130,520)" opacity="0.22" fill="#1f6f8b" stroke="none">
  <path id="inkHalf" d="M0,-70 C25,-65 20,-40 35,-30 C55,-20 55,5 35,10 C50,20 45,45 25,42 C35,60 15,72 0,70 Z"/>
  <use href="#inkHalf" transform="scale(-1,1)"/>
</g>
<g transform="translate(1420,520)" opacity="0.22" stroke="#237a63" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M0,0 C-30,-8 -55,-4 -55,10 L-55,70 C-55,56 -30,60 0,68"/>
  <path d="M0,0 C30,-8 55,-4 55,10 L55,70 C55,56 30,60 0,68"/>
  <line x1="0" y1="0" x2="0" y2="68"/>
  <line x1="-40" y1="15" x2="-15" y2="12"/><line x1="-40" y1="28" x2="-15" y2="25"/><line x1="-40" y1="41" x2="-15" y2="38"/>
  <line x1="15" y1="12" x2="40" y2="15"/><line x1="15" y1="25" x2="40" y2="28"/><line x1="15" y1="38" x2="40" y2="41"/>
</g>
<g transform="translate(1330,150)" opacity="0.24" stroke="#3d4fa0" stroke-width="2.5" fill="#3d4fa0">
  <line x1="-40" y1="-10" x2="0" y2="20" stroke-opacity="0.6"/>
  <line x1="0" y1="20" x2="45" y2="-5" stroke-opacity="0.6"/>
  <line x1="0" y1="20" x2="-10" y2="55" stroke-opacity="0.6"/>
  <line x1="0" y1="20" x2="35" y2="50" stroke-opacity="0.6"/>
  <line x1="-40" y1="-10" x2="-10" y2="55" stroke-opacity="0.6"/>
  <circle cx="-40" cy="-10" r="7" stroke="none"/>
  <circle cx="45" cy="-5" r="6" stroke="none"/>
  <circle cx="0" cy="20" r="9" stroke="none"/>
  <circle cx="-10" cy="55" r="6" stroke="none"/>
  <circle cx="35" cy="50" r="7" stroke="none"/>
</g>

<ellipse cx="800" cy="1270" rx="300" ry="46" fill="#c9a869" opacity=".55"/>

<path d="M 745,1300 C 720,1160 730,1000 775,880 L 835,880 C 875,1000 885,1160 860,1300 Z" fill="url(#trunkGrad)"/>

<path d="M 800,905 C 620,860 480,760 400,650" stroke="url(#trunkGrad)" stroke-width="30" fill="none" stroke-linecap="round"/>
<path d="M 800,905 C 620,860 480,760 400,650" stroke="#3a2a17" stroke-width="30" fill="none" stroke-linecap="round" opacity=".18"/>
<path d="M 400,650 C 340,540 300,420 270,300" stroke="url(#trunkGrad)" stroke-width="20" fill="none" stroke-linecap="round"/>
<path d="M 400,650 C 460,560 480,440 470,340" stroke="url(#trunkGrad)" stroke-width="18" fill="none" stroke-linecap="round"/>
<path d="M 400,650 C 380,540 330,420 260,290" stroke="url(#trunkGrad)" stroke-width="14" fill="none" stroke-linecap="round"/>

<path d="M 800,905 C 980,860 1120,760 1200,650" stroke="url(#trunkGrad)" stroke-width="30" fill="none" stroke-linecap="round"/>
<path d="M 800,905 C 980,860 1120,760 1200,650" stroke="#3a2a17" stroke-width="30" fill="none" stroke-linecap="round" opacity=".18"/>
<path d="M 1200,650 C 1260,540 1300,420 1330,300" stroke="url(#trunkGrad)" stroke-width="20" fill="none" stroke-linecap="round"/>
<path d="M 1200,650 C 1300,560 1370,460 1400,360" stroke="url(#trunkGrad)" stroke-width="18" fill="none" stroke-linecap="round"/>
<path d="M 1200,650 C 1230,530 1250,400 1280,290" stroke="url(#trunkGrad)" stroke-width="14" fill="none" stroke-linecap="round"/>

<circle cx="800" cy="930" r="90" fill="url(#gGold)" filter="url(#soft)"/>

<circle cx="270" cy="380" r="230" fill="url(#gL1)" filter="url(#soft)"/>
<circle cx="520" cy="380" r="210" fill="url(#gL2)" filter="url(#soft)"/>
<circle cx="260" cy="140" r="220" fill="url(#gL3)" filter="url(#soft)"/>

<circle cx="1140" cy="360" r="240" fill="url(#gR1)" filter="url(#soft)"/>
<circle cx="1420" cy="400" r="220" fill="url(#gR2)" filter="url(#soft)"/>
<circle cx="1320" cy="140" r="220" fill="url(#gR3)" filter="url(#soft)"/>
`;

// ---------------- connectors (computed from actual DOM positions) ----------------
const ALL = [...ROOTS, ...NODES, ...FLAGS];
const EDGES = [];
ALL.forEach(n => { if (n.parents) n.parents.forEach(p => EDGES.push([p, n.id])); });

function catVar(id){
  const n = NODES.find(x=>x.id===id);
  if (!n) return '--root-ring';
  return n.cat==='psiquiatria'?'--left-1':n.cat==='experimental'?'--left-2':n.cat==='behaviorismo'?'--left-3':n.cat==='psicanalise'?'--right-1':n.cat==='educacional'?'--right-2':'--right-3';
}

function drawConnectors(){
  const svg = document.getElementById('connSvg');
  const stage = document.getElementById('stage');
  const stageRect = stage.getBoundingClientRect();
  svg.innerHTML = '';
  function centerOf(el){
    const r = el.getBoundingClientRect();
    return { x: r.left - stageRect.left + r.width/2, y: r.top - stageRect.top + r.height/2 };
  }
  EDGES.forEach(([fromId,toId])=>{
    const from = document.getElementById(fromId), to = document.getElementById(toId);
    if (!from || !to) return;
    const a = centerOf(from), b = centerOf(to);
    const midX = (a.x+b.x)/2, midY=(a.y+b.y)/2;
    const d = `M ${a.x} ${a.y} Q ${midX} ${a.y}, ${midX} ${midY} T ${b.x} ${b.y}`;
    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d', d);
    path.setAttribute('fill','none');
    path.setAttribute('stroke', getComputedStyle(document.documentElement).getPropertyValue(catVar(toId)).trim() || '#8a6a2f');
    path.setAttribute('stroke-width','1.8');
    path.setAttribute('stroke-opacity','0.55');
    path.setAttribute('stroke-linecap','round');
    path.dataset.from = fromId; path.dataset.to = toId;
    svg.appendChild(path);
  });
  if (activeNode) applyHighlight(activeNode);
}
window.addEventListener('load', drawConnectors);
window.addEventListener('resize', drawConnectors);
setTimeout(drawConnectors, 250);

// ---------------- trajectory highlight (bidirecional: ancestrais + descendentes) ----------------
const ADJ = {}, REV = {};
EDGES.forEach(([f,t]) => { (ADJ[f]=ADJ[f]||[]).push(t); (REV[t]=REV[t]||[]).push(f); });

function fullTrajectory(id){
  const visited = new Set([id]);
  const usedEdges = new Set();
  let stack = [id];
  while (stack.length){
    const cur = stack.pop();
    (ADJ[cur] || []).forEach(next => {
      usedEdges.add(cur+'->'+next);
      if (!visited.has(next)){ visited.add(next); stack.push(next); }
    });
  }
  stack = [id];
  const seenUp = new Set([id]);
  while (stack.length){
    const cur = stack.pop();
    (REV[cur] || []).forEach(prev => {
      usedEdges.add(prev+'->'+cur);
      if (!seenUp.has(prev)){ seenUp.add(prev); visited.add(prev); stack.push(prev); }
    });
  }
  return { visited, usedEdges };
}

let activeNode = null;

function clearHighlight(){
  document.querySelectorAll('.node, .flag').forEach(el => {
    el.classList.remove('dimmed', 'lit', 'active-node');
  });
  document.querySelectorAll('#connSvg path').forEach(p => {
    p.setAttribute('stroke-width', '1.8');
    p.setAttribute('stroke-opacity', '0.55');
    p.style.filter = '';
  });
}

function applyHighlight(id){
  const { visited, usedEdges } = fullTrajectory(id);
  document.querySelectorAll('.node, .flag').forEach(el => {
    el.classList.remove('lit', 'active-node');
    el.classList.toggle('dimmed', !visited.has(el.id));
  });
  visited.forEach(vid => document.getElementById(vid)?.classList.add('lit'));
  document.getElementById(id)?.classList.add('active-node');
  document.getElementById(id)?.classList.remove('dimmed');

  document.querySelectorAll('#connSvg path').forEach(p => {
    const key = p.dataset.from + '->' + p.dataset.to;
    if (usedEdges.has(key)){
      p.setAttribute('stroke-width', '3');
      p.setAttribute('stroke-opacity', '1');
      p.style.filter = `drop-shadow(0 0 4px ${p.getAttribute('stroke')})`;
    } else {
      p.setAttribute('stroke-width', '1.8');
      p.setAttribute('stroke-opacity', '0.06');
      p.style.filter = '';
    }
  });
}

function toggleTrajectory(id){
  if (activeNode === id){
    activeNode = null;
    clearHighlight();
  } else {
    activeNode = id;
    applyHighlight(id);
  }
}
