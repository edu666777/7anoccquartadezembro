/* =========================================================
   CONTEÚDO DO SITE — Mentoria Educacional Promover (7º Ano)
   Geografia (Unidade 8) · Artes (Unidade 04) · Filosofia (Capítulo 08)
   c = índice da correta (0=A,1=B,2=C,3=D)
   ========================================================= */
const CONFIG = { serie: '7º', serieLonga: '7º Ano', lsKey: 'promover_7ano_prova_v1', area: 'Geografia, Artes e Filosofia', prova: 'quarta-feira' };

const MODULOS = {
  m1: {
    id: 'm1', titulo: 'Geografia', sub: 'Unidade 8 · Região Centro-Oeste', emoji: '🌎',
    topicos: ['Natureza: relevo, clima, águas e biomas', 'Ocupação e interiorização', 'Economia', 'Sociedade e meio ambiente'],
    resumo: ['Única região <b>sem saída para o mar</b>: GO, MT, MS e o DF (Brasília).', '<b>"Berço das águas"</b>: os planaltos são divisores de águas das bacias <b>Amazônica, Tocantins-Araguaia e Platina</b>.', 'Clima <b>tropical típico</b>: verão chuvoso (cheia do Pantanal) e inverno seco (queimadas).', '<b>Brasília (1960)</b> + rodovias + <b>calagem</b> (calcário no solo ácido do Cerrado) = ocupação e agronegócio.', 'Lidera <b>soja, milho e algodão</b> e tem o maior rebanho bovino; Urucum = <b>ferro e manganês</b>.'],
    questoes: [
      { t: 0, txt: 'Única macrorregião brasileira inteiramente interiorana, o <b>Centro-Oeste</b> é formado por Goiás, Mato Grosso, Mato Grosso do Sul e o Distrito Federal. O território é conhecido como o <b>“berço das águas”</b> do Brasil porque:',
        ops: ['possui o maior litoral oceânico do país, banhado diretamente pelo Oceano Pacífico.', 'seus planaltos centrais funcionam como grandes divisores de águas onde nascem rios que alimentam as bacias Amazônica, do Tocantins-Araguaia e Platina.', 'apresenta clima equatorial superúmido sem nenhum período de estiagem durante o ano inteiro.', 'concentra todas as geleiras permanentes da América do Sul.'], c: 1,
        dica: 'No mapa, ative a camada "Bacias": para onde correm os rios que nascem no Planalto Central?',
        exp: 'Os <b>planaltos</b> do Centro-Oeste funcionam como <b>divisores de águas</b>: ali nascem rios que alimentam três grandes bacias — <b>Amazônica</b>, <b>Tocantins-Araguaia</b> e <b>Platina</b> (Paraguai e Paraná).' },
      { t: 0, txt: 'O <b>clima tropical típico</b> (tropical continental), dominante no Centro-Oeste, influencia o cotidiano e o calendário agrícola por apresentar:',
        ops: ['temperaturas abaixo de zero durante todo o inverno e nevascas frequentes em Goiânia.', 'duas estações bem marcadas ao longo do ano: um verão quente e chuvoso e um inverno ameno e muito seco.', 'chuvas torrenciais diárias no mês de julho e seca absoluta em janeiro.', 'forte influência da maritimidade oceânica ao longo de todas as suas fronteiras.'], c: 1,
        dica: 'Passe pelos meses no calendário do clima (tópico 1).',
        exp: 'Longe do oceano (<b>continentalidade</b>), o clima é quente o ano todo, com <b>duas estações bem definidas</b>: verão quente e chuvoso (outubro a março) e inverno seco (abril a setembro).' },
      { t: 0, txt: 'Predominante no Planalto Central, o <b>Cerrado</b> tem árvores de troncos tortuosos, casca grossa e raízes muito profundas (a “floresta invertida”). Essas características são adaptações:',
        ops: ['às inundações salinas permanentes causadas pelas marés do Oceano Atlântico.', 'à longa estação seca do inverno tropical, permitindo alcançar os lençóis freáticos profundos e resistir ao fogo natural.', 'ao congelamento contínuo do subsolo típico das regiões polares.', 'à ausência completa de luz solar sob copas fechadas de cem metros de altura.'], c: 1,
        dica: 'Olhe a ilustração da árvore do Cerrado: por que as raízes são tão compridas?',
        exp: 'As <b>raízes profundas</b> buscam água nos lençóis freáticos durante a <b>seca do inverno</b>, e a <b>casca grossa</b> protege a planta do <b>fogo</b> natural da estação seca.' },
      { t: 0, txt: 'A <b>Planície do Pantanal</b> (MT e MS) é a maior área úmida continental contínua do planeta. Sua dinâmica é regulada pelo <b>pulso de inundação</b>, que ocorre quando:',
        ops: ['as chuvas de verão nos planaltos ao redor elevam o nível do rio Paraguai e seus afluentes, alagando gradualmente a planície de baixa declividade.', 'o degelo da Cordilheira dos Andes provoca tsunamis na região de Brasília.', 'o vento frio polar congela as águas do rio Araguaia durante o mês de dezembro.', 'as usinas hidrelétricas desviam toda a água do rio Amazonas para o Distrito Federal.'], c: 0,
        dica: 'No calendário do clima, veja o nível da água do Pantanal em janeiro e em agosto.',
        exp: 'O Pantanal é uma planície <b>muito baixa e plana</b>. No <b>verão chuvoso</b>, a água dos planaltos enche o <b>rio Paraguai</b> e seus afluentes, que transbordam e alagam a planície: é o <b>pulso de inundação</b>.' },
      { t: 1, txt: 'No período colonial (século XVIII), o primeiro ciclo econômico que impulsionou o povoamento não indígena em Goiás e Mato Grosso — dando origem a Vila Boa de Goiás e Cuiabá — foi:',
        ops: ['a extração de ouro por expedições bandeirantes vindas principalmente de São Paulo.', 'a industrialização automobilística pesada ao redor do Lago Paranoá.', 'o cultivo mecanizado de soja transgênica voltado ao mercado asiático.', 'a extração de petróleo na camada do Pré-sal do rio Paraguai.'], c: 0,
        dica: 'Veja o primeiro passo da linha do tempo da ocupação.',
        exp: 'No <b>século XVIII</b>, os <b>bandeirantes</b> paulistas encontraram <b>ouro</b> em Goiás e Mato Grosso, o que deu origem a Vila Boa de Goiás e Cuiabá.' },
      { t: 1, txt: 'O marco mais importante da <b>interiorização do desenvolvimento</b> foi a inauguração de <b>Brasília</b>, em 21 de abril de 1960. Além de transferir a capital do Rio de Janeiro para o Planalto Central, essa estratégia buscou:',
        ops: ['isolar economicamente o Centro-Oeste do restante do território nacional.', 'integrar o interior ao mercado nacional por meio da abertura de grandes eixos rodoviários (como a Belém-Brasília) e estimular a ocupação demográfica.', 'transferir todas as indústrias navais e portos marítimos para o interior de Goiás.', 'extinguir a atividade agropecuária em toda a região do Cerrado.'], c: 1,
        dica: 'Brasília veio junto com quê? (veja 1960 na linha do tempo)',
        exp: 'Com <b>Brasília</b> (governo JK) vieram grandes <b>rodovias</b>, como a Belém-Brasília, para <b>integrar</b> o interior ao resto do país e atrair moradores.' },
      { t: 1, txt: 'Até a década de 1960, os solos do Cerrado eram considerados impróprios para a agricultura em larga escala por serem <b>naturalmente ácidos</b>. A transformação do Centro-Oeste em grande celeiro agrícola foi possível graças a pesquisas (como as da Embrapa) que difundiram:',
        ops: ['a irrigação com água salgada retirada de poços artesianos profundos.', 'a técnica da calagem (aplicação de calcário para corrigir a acidez do solo), aliada ao uso de fertilizantes e sementes adaptadas.', 'o abandono total de máquinas agrícolas, utilizando apenas enxadas manuais.', 'a substituição de todas as lavouras por cultivos típicos de clima polar.'], c: 1,
        dica: 'Faça a experiência "aplicar calcário" no tópico 2.',
        exp: 'A <b>calagem</b> (colocar <b>calcário</b> no solo) corrige a acidez. Junto com adubo e sementes adaptadas pela <b>Embrapa</b>, o Cerrado virou uma grande área agrícola.' },
      { t: 1, txt: 'A expansão da <b>fronteira agrícola</b> no Centro-Oeste a partir dos anos 1970 alterou profundamente a organização do espaço regional, provocando:',
        ops: ['a rápida urbanização da região (com cidades médias servindo de apoio técnico e financeiro ao campo) e intensa atração de migrantes de outras regiões.', 'a redução drástica da população urbana e o retorno exclusivo à coleta extrativista.', 'a fragmentação das grandes fazendas em pequenas hortas familiares sem uso de tecnologia.', 'o esvaziamento populacional das capitais Goiânia, Campo Grande e Cuiabá.'], c: 0,
        dica: 'Hoje, quantos por cento da população do Centro-Oeste vive em cidades?',
        exp: 'A fronteira agrícola atraiu <b>migrantes</b> (principalmente do Sul) e fez as <b>cidades crescerem</b>: hoje cerca de <b>90%</b> da população é urbana.' },
      { t: 2, txt: 'O Centro-Oeste se destaca nas exportações por meio do <b>agronegócio moderno</b>. Os três principais cultivos agrícolas da região são:',
        ops: ['cacau, seringueira e castanha-do-pará.', 'soja, milho e algodão.', 'uva, maçã e trigo de clima temperado frio.', 'café de montanha, erva-mate e oliveiras.'], c: 1,
        dica: 'Veja os cartões da economia no tópico 3.',
        exp: 'A região lidera a produção nacional de <b>soja, milho e algodão</b>, além de cana-de-açúcar e do <b>maior rebanho bovino</b> do país.' },
      { t: 2, txt: 'O Centro-Oeste também tem importante <b>extrativismo mineral</b>, com destaque, perto de Corumbá (MS), para o <b>Maciço do Urucum</b>, conhecido pelas reservas de:',
        ops: ['carvão mineral betuminoso e xisto betuminoso.', 'minério de ferro e manganês.', 'sal marinho e fosfato oceânico.', 'urânio enriquecido e petróleo offshore.'], c: 1,
        dica: 'Urucum → dois minérios de metal.',
        exp: 'O <b>Maciço do Urucum</b> (Corumbá-MS) tem grandes reservas de <b>minério de ferro e manganês</b>.' },
      { t: 2, txt: 'O crescimento econômico do Centro-Oeste impulsionou a instalação de <b>agroindústrias</b> perto das áreas produtoras. Essa localização se justifica porque:',
        ops: ['permite processar matérias-primas locais (carnes, soja, milho e cana) antes do transporte, agregando valor e reduzindo perdas logísticas.', 'depende exclusivamente de mão de obra importada da Europa Ocidental.', 'evita qualquer contato com rodovias ou ferrovias de escoamento.', 'utiliza apenas energia eólica produzida nas praias do litoral.'], c: 0,
        dica: 'É melhor transportar o boi inteiro ou a carne já embalada?',
        exp: 'Frigoríficos, esmagadoras de soja e usinas de etanol ficam <b>perto da produção</b>: transformam a matéria-prima ali mesmo, o que <b>agrega valor</b> e <b>diminui o custo do transporte</b>.' },
      { t: 3, txt: 'A região abriga terras indígenas como o <b>Parque Indígena do Xingu</b> (MT) e aldeias <b>Guarani-Kaiowá</b> (MS). Um dos principais problemas enfrentados por esses povos e por pequenos agricultores é:',
        ops: ['a elevada concentração fundiária (predomínio de grandes latifúndios) e a pressão pelo avanço de lavouras e pastagens sobre terras indígenas.', 'a falta total de terras cultiváveis devido à cobertura permanente de gelo no solo.', 'a proibição legal da existência de unidades de conservação ambiental no país.', 'o excesso de minifúndios urbanos que impedem a construção de hospitais.'], c: 0,
        dica: 'Quem é dono da maior parte das terras da região?',
        exp: 'Há forte <b>concentração fundiária</b> (poucas pessoas com muitas terras). As lavouras e pastagens avançam sobre <b>terras indígenas</b>, gerando conflitos pela demarcação.' },
      { t: 3, txt: 'O <b>Cerrado</b> já perdeu mais da metade da vegetação original. A destruição desse bioma compromete a <b>segurança hídrica</b> do Brasil porque:',
        ops: ['suas raízes profundas facilitam a infiltração da água das chuvas no solo, reabastecendo aquíferos e nascentes de grandes rios brasileiros.', 'o Cerrado é responsável por congelar a umidade atmosférica que forma os oceanos.', 'a retirada das árvores aumenta automaticamente o volume de água limpa nos rios.', 'o Cerrado impede que as chuvas de verão atinjam o interior da América do Sul.'], c: 0,
        dica: 'Faça a simulação "chuva no Cerrado": com e sem vegetação.',
        exp: 'O Cerrado funciona como uma <b>esponja</b>: as raízes profundas ajudam a água da chuva a <b>infiltrar no solo</b>, abastecendo aquíferos e <b>nascentes</b>. Sem ele, a água escorre e as nascentes secam.' },
      { t: 3, txt: 'No inverno (julho a setembro), o Pantanal e o Cerrado enfrentam graves <b>queimadas</b>, agravadas pela combinação entre:',
        ops: ['o período natural de estiagem prolongada (baixa umidade do ar e vegetação seca) e o uso irregular do fogo para abertura ou limpeza de pastagens e lavouras.', 'as nevascas de inverno e o transbordamento simultâneo de todos os rios da região.', 'a atuação de vulcões ativos situados no subsolo do Distrito Federal.', 'o excesso de chuvas torrenciais que provocam descargas elétricas contínuas.'], c: 0,
        dica: 'Inverno seco + o que as pessoas fazem com o fogo?',
        exp: 'A <b>seca do inverno</b> deixa o ar e a vegetação secos; somada ao <b>uso irregular do fogo</b> para limpar pastos e lavouras, provoca grandes incêndios.' },
      { t: 2, txt: 'Como alternativa sustentável que gera renda e preserva a natureza, destaca-se o <b>ecoturismo</b> (Bonito-MS, Pantanal e Chapada dos Veadeiros-GO). Essa atividade baseia-se:',
        ops: ['na visitação controlada a rios de águas cristalinas, cavernas, cachoeiras e fauna silvestre, respeitando a capacidade de suporte ambiental.', 'na caça esportiva indiscriminada de animais ameaçados de extinção como a arara-azul e a onça-pintada.', 'no desmatamento total das matas ciliares para construção de grandes complexos siderúrgicos.', 'na extração ilegal de ouro com uso de mercúrio nos rios turísticos.'], c: 0,
        dica: 'Ecoturismo = turismo que cuida da natureza.',
        exp: 'O <b>ecoturismo</b> é a <b>visitação planejada e controlada</b> a rios, cavernas, cachoeiras e animais, gerando emprego e renda <b>sem destruir</b> a natureza.' }
    ]
  },

  m2: {
    id: 'm2', titulo: 'Artes', sub: 'Unidade 04 · Representações do Corpo Humano', emoji: '🎨',
    topicos: ['Obras que parecem ganhar vida', 'O corpo ao longo da história', 'Do Realismo ao Surrealismo'],
    resumo: ['<b>Contraposto</b> (Grécia): peso numa perna, curva em "S", e a estátua parece viva.', '<b>Sfumato</b> = contornos suaves (Mona Lisa) · <b>Claro-escuro</b> = contraste forte de luz e sombra (Caravaggio).', '<b>Egito</b>: Lei da Frontalidade (olho e tronco de frente; cabeça, braços e pernas de perfil) e faraó maior.', '<b>Realismo</b>: trabalhadores sem idealização · <b>Impressionismo</b>: movimento e luz (Degas e as bailarinas).', '<b>Cubismo</b>: formas geométricas e vários ângulos (Picasso) · <b>Expressionismo</b>: emoção (Munch, Anita Malfatti) · <b>Surrealismo</b>: sonhos (Dalí, Magritte, Frida).'],
    questoes: [
      { t: 0, fig: 'contra', txt: 'Na escultura grega, artistas abandonaram a postura rígida das estátuas arcaicas ao adotar o <b>contraposto</b> (como no <i>Doríforo</i>, de Policleto). Esse recurso faz a escultura parecer “ganhar vida” porque:',
        ops: ['distribui o peso do corpo sobre uma das pernas enquanto a outra permanece relaxada, criando uma leve torção natural nos quadris e nos ombros.', 'utiliza motores elétricos ocultos no interior do mármore para movimentar os braços da estátua.', 'pinta a pedra com cores fluorescentes que brilham exclusivamente no escuro.', 'elimina todos os músculos e articulações, transformando o corpo em um cilindro liso.'], c: 0,
        dica: 'Observe a figura: em qual perna está o peso? O que acontece com os quadris?',
        exp: 'No <b>contraposto</b>, o peso fica sobre <b>uma perna</b> e a outra relaxa. Os quadris e os ombros se inclinam em sentidos opostos, formando uma curva em "S" natural.' },
      { t: 0, txt: 'Na pintura do Renascimento e do Barroco, dois recursos deram volume, profundidade e vida aos corpos: o <b>sfumato</b> (Leonardo, <i>Mona Lisa</i>) e o <b>claro-escuro</b> (Caravaggio). Eles consistem, respectivamente, em:',
        ops: ['colar recortes de jornal sobre a tela e utilizar apenas linhas retas geométricas.', 'suavizar gradualmente os contornos entre luz e sombra (sfumato) e criar contrastes dramáticos entre áreas intensamente iluminadas e sombras profundas (claro-escuro).', 'desenhar todas as figuras de perfil sem nenhuma variação de tonalidade.', 'utilizar exclusivamente tintas neon sobre placas metálicas perfuradas.'], c: 1,
        dica: 'Compare as duas esferas da teoria: uma suave, outra dramática.',
        exp: '<b>Sfumato</b>: passagem <b>suave</b>, "esfumaçada", entre luz e sombra. <b>Claro-escuro</b>: contraste <b>forte</b> entre partes muito iluminadas e sombras escuras.' },
      { t: 0, txt: 'Na escultura <b>hiper-realista</b> (como nas obras de Ron Mueck), figuras humanas de silicone e resina reproduzem cada detalhe da pele, muitas vezes em escalas gigantes ou muito pequenas. O principal efeito buscado é:',
        ops: ['provocar estranhamento e reflexão no espectador diante de uma presença corporal que parece prestes a respirar ou se mover.', 'comprovar que a fotografia digital substituiu completamente a escultura tridimensional.', 'ocultar qualquer semelhança com a anatomia real do ser humano.', 'resgatar as regras hieráticas da escultura funerária do Egito Antigo.'], c: 0,
        dica: 'Como você se sentiria diante de um bebê gigante que parece de verdade?',
        exp: 'O <b>hiper-realismo</b> parece real demais, e a mudança de <b>escala</b> (gigante ou mínima) provoca <b>estranhamento e reflexão</b>: parece que a figura vai respirar.' },
      { t: 0, txt: 'Na <b>performance</b> e na <b>body art</b>, a relação entre artista e obra muda radicalmente em comparação com a pintura tradicional porque:',
        ops: ['o próprio corpo vivo do artista torna-se simultaneamente o suporte, o instrumento e a obra de arte em ação no tempo e no espaço.', 'as obras são produzidas exclusivamente por robôs industriais sem presença humana.', 'é proibido qualquer tipo de movimento corporal ou interação com o público.', 'utiliza-se apenas mármore esculpido com cinzel e martelo.'], c: 0,
        dica: 'Na performance, onde está a "tela"?',
        exp: 'Na <b>performance</b> e na <b>body art</b>, o <b>próprio corpo do artista</b> é a obra, acontecendo ao vivo diante do público.' },
      { t: 1, fig: 'egito', txt: 'Na arte do <b>Egito Antigo</b>, a figura humana seguia a <b>Lei da Frontalidade</b> e a perspectiva hierárquica. Assinale a alternativa que descreve corretamente esse padrão:',
        ops: ['Todas as pessoas eram desenhadas exatamente do mesmo tamanho, com o corpo todo de costas para o observador.', 'A cabeça, os braços e as pernas apareciam de perfil, enquanto o olho e o tronco eram representados de frente, sendo o faraó desenhado em escala muito maior que os súditos.', 'Os artistas retratavam os personagens de forma espontânea e assimétrica, copiando fotografias instantâneas.', 'O corpo humano era reduzido a cubos e esferas flutuantes sem nenhuma referência anatômica.'], c: 1,
        dica: 'Toque nas partes da figura egípcia na teoria: de frente ou de perfil?',
        exp: '<b>Lei da Frontalidade</b>: <b>cabeça, braços e pernas de perfil</b>; <b>olho e tronco de frente</b>. E o tamanho mostra a importância: o <b>faraó</b> é muito maior que os servos.' },
      { t: 1, txt: 'Enquanto a arte greco-romana exaltava a beleza física do corpo, na <b>Idade Média europeia</b> a representação da figura humana passou a caracterizar-se:',
        ops: ['pelo estudo científico detalhado dos músculos e ossos por meio de dissecações públicas.', 'pela valorização da dimensão espiritual e religiosa, com corpos alongados, cobertos por vestes solenes e sem preocupação com proporções anatômicas realistas.', 'pelo retrato realista de trabalhadores rurais e operários de fábricas industriais.', 'pela fragmentação geométrica dos rostos em múltiplos planos simultâneos.'], c: 1,
        dica: 'Idade Média = visão teocêntrica (Deus no centro).',
        exp: 'Na <b>Idade Média</b> (visão <b>teocêntrica</b>), o que importava era o <b>espiritual</b>: corpos <b>alongados</b>, cobertos por <b>vestes pesadas</b>, sem preocupação com a anatomia real.' },
      { t: 1, fig: 'vitru', txt: 'O desenho <b>O Homem Vitruviano</b>, de <b>Leonardo da Vinci</b> (c. 1490), inscrito num círculo e num quadrado, tornou-se símbolo do <b>Renascimento</b> porque sintetiza:',
        ops: ['a rejeição completa da matemática e da geometria na criação artística.', 'a aliança entre arte, ciência, anatomia e proporção matemática, colocando o ser humano como medida de harmonia do universo.', 'o retorno às pinturas rupestres estilizadas das cavernas pré-históricas.', 'a defesa da deformação expressionista como forma de expressar angústia.'], c: 1,
        dica: 'Círculo e quadrado = geometria. Músculos = anatomia.',
        exp: 'O <b>Homem Vitruviano</b> une <b>arte, ciência, anatomia e matemática</b> (o círculo e o quadrado) e põe o ser humano como medida da harmonia: o ideal do Renascimento.' },
      { t: 2, txt: 'No século XIX, <b>Gustave Courbet</b> escandalizou os salões de Paris com telas como <i>Os Quebradores de Pedra</i>, inaugurando o <b>Realismo</b>. A principal ruptura desse movimento foi:',
        ops: ['idealizar camponeses e operários como deuses mitológicos perfeitos e sem sinais de cansaço.', 'retratar sem idealização o corpo real dos trabalhadores submetidos ao esforço físico árduo, denunciando as desigualdades sociais da época.', 'pintar apenas paisagens naturais vazias, proibindo a presença da figura humana nas telas.', 'representar figuras fantásticas saídas diretamente dos sonhos e do inconsciente.'], c: 1,
        dica: 'Realismo = mostrar a realidade como ela é, sem enfeitar.',
        exp: 'O <b>Realismo</b> mostrou o corpo <b>real</b> de trabalhadores cansados, <b>sem idealização</b>, como uma <b>crítica social</b> às desigualdades.' },
      { t: 2, txt: 'O impressionista <b>Edgar Degas</b> ficou célebre por suas pinturas e esculturas de <b>bailarinas</b>. Na abordagem impressionista de Degas, o corpo humano é representado:',
        ops: ['em poses rígidas e frontais semelhantes às estátuas funerárias egípcias.', 'em gestos espontâneos e transitórios, captando o movimento instantâneo e os efeitos da luz sobre os corpos por meio de pinceladas soltas.', 'com contornos negros espessos e cores sombrias que expressam terror psicológico.', 'desmontado em pequenos cubos monocromáticos sem nenhuma sensação de movimento.'], c: 1,
        dica: 'Impressionismo = impressão de um instante de luz e movimento.',
        exp: 'O <b>Impressionismo</b> capta o <b>instante</b>: gestos espontâneos, <b>movimento</b> e os efeitos da <b>luz</b>, com <b>pinceladas rápidas e soltas</b>.' },
      { t: 2, fig: 'cubo', txt: '<b>Pablo Picasso</b> revolucionou a pintura com <i>Les Demoiselles d’Avignon</i> (1907), abrindo caminho para o <b>Cubismo</b>. Nesse movimento, o corpo humano passa a ser representado:',
        ops: ['por meio da fragmentação em planos geométricos e da apresentação simultânea de vários ângulos de visão (frente e perfil ao mesmo tempo), rompendo com a perspectiva tradicional.', 'com precisão fotográfica idêntica à de um espelho plano.', 'exclusivamente por meio de pontos diminutos de cores primárias aplicados com conta-gotas.', 'segundo as normas anatômicas estabelecidas pelas academias reais do século XVII.'], c: 0,
        dica: 'Olhe o rosto cubista: quantos ângulos você vê ao mesmo tempo?',
        exp: 'No <b>Cubismo</b>, o corpo é dividido em <b>formas geométricas</b> e mostrado de <b>vários ângulos ao mesmo tempo</b> (frente e perfil), sem a perspectiva tradicional.' },
      { t: 2, txt: 'O <b>Expressionismo</b> (Edvard Munch e a brasileira Anita Malfatti) alterou intencionalmente as linhas e cores do rosto e do corpo humano com o objetivo de:',
        ops: ['exteriorizar emoções intensas, tensões psicológicas, angústias e sentimentos subjetivos do artista.', 'elaborar manuais médicos de anatomia para estudantes de cirurgia.', 'reproduzir fielmente os padrões de beleza atlética da Grécia Clássica.', 'decorar palácios reais com cenas históricas elogiosas aos governantes.'], c: 0,
        dica: 'EXPRESSionismo = expressar o quê?',
        exp: 'O <b>Expressionismo</b> deforma formas e cores de propósito para <b>mostrar emoções</b> fortes: angústia, medo, tensão.' },
      { t: 2, txt: 'Surgido na década de 1920 sob influência de Freud, o <b>Surrealismo</b> (Dalí, Magritte, Frida Kahlo) transformou a representação do corpo ao:',
        ops: ['limitar-se à cópia fiel de modelos vivos posando em estúdio acadêmico.', 'explorar o inconsciente, os sonhos e o insólito, criando corpos metamorfoseados, figuras flutuantes e associações simbólicas que desafiam a lógica racional.', 'proibir qualquer referência à memória, à fantasia ou às emoções humanas.', 'utilizar apenas esculturas geométricas feitas de concreto armado sem figuração.'], c: 1,
        dica: 'SURreal = além do real, como num sonho.',
        exp: 'O <b>Surrealismo</b> explora os <b>sonhos</b> e o <b>inconsciente</b>: corpos que se transformam, figuras flutuando, cenas que não seguem a lógica.' },
      { t: 2, fig: 'magritte', txt: 'Em obras como <i>O Filho do Homem</i> (homem de terno com o rosto encoberto por uma maçã verde flutuante), o surrealista <b>René Magritte</b> provoca o observador ao:',
        ops: ['pintar objetos e corpos com aparência realista, mas inseridos em situações impossíveis ou misteriosas que questionam o que está oculto por trás das aparências.', 'retratar cenas de batalhas medievais com rigor documental histórico.', 'utilizar exclusivamente manchas abstratas sem nenhum objeto reconhecível.', 'seguir rigorosamente o cânone de proporções de Policleto.'], c: 0,
        dica: 'A maçã é bem pintada, mas… o que ela está fazendo ali?',
        exp: 'Magritte pinta tudo de forma <b>realista</b>, mas em <b>situações impossíveis</b> (uma maçã flutuando na frente do rosto), fazendo a gente pensar no que está <b>escondido</b>.' },
      { t: 2, txt: 'A pintora mexicana <b>Frida Kahlo</b> é reconhecida por seus <b>autorretratos</b>, com o próprio corpo marcado por cirurgias e dores, entrelaçado a raízes, animais e símbolos mexicanos. Sua obra dialoga com o Surrealismo e o Modernismo porque:',
        ops: ['transforma a experiência corporal íntima e biográfica em linguagem visual simbólica e poética, rompendo com a idealização superficial do corpo.', 'copia modelos clássicos europeus sem inserir nenhum elemento pessoal ou latino-americano.', 'retrata exclusivamente paisagens industriais sem figuras humanas.', 'busca esconder completamente a identidade e os sentimentos da artista.'], c: 0,
        dica: 'Frida pintava a própria vida e as próprias dores.',
        exp: 'Frida transforma sua <b>vida e suas dores</b> em <b>símbolos e poesia visual</b>, com elementos da cultura mexicana, sem idealizar o corpo.' },
      { t: 1, txt: 'Analisando a representação do <b>corpo humano na arte</b> (da Pré-História às vanguardas), conclui-se que as diferentes maneiras de representar o corpo refletem:',
        ops: ['a incapacidade técnica dos artistas antigos em enxergar a anatomia real antes da invenção da fotografia.', 'os valores culturais, religiosos, científicos e estéticos de cada época e sociedade, revelando como a humanidade compreende a si mesma.', 'uma evolução linear em que apenas as obras hiper-realistas atuais possuem valor artístico legítimo.', 'a existência de uma única regra universal e imutável de beleza válida para todas as culturas do planeta.'], c: 1,
        dica: 'Os egípcios desenhavam assim porque não sabiam, ou porque tinham suas próprias regras?',
        exp: 'Cada jeito de representar o corpo mostra os <b>valores</b> (religiosos, culturais, científicos) da sua <b>época</b>. Não é "falta de habilidade"!' }
    ]
  },

  m3: {
    id: 'm3', titulo: 'Filosofia', sub: 'Capítulo 08 · A Revolução Científica', emoji: '🔭',
    topicos: ['O que foi a Revolução Científica', 'Astronomia e Física', 'Empirismo × Racionalismo', 'Ciência e ética'],
    resumo: ['Séculos <b>XVI e XVII</b>: em vez do <b>argumento de autoridade</b>, a ciência passa a exigir observação, experimentação e matemática.', '<b>Copérnico</b>: heliocentrismo · <b>Kepler</b>: órbitas elípticas · <b>Galileu</b>: luneta (luas de Júpiter) · <b>Newton</b>: gravitação universal.', '<b>Bacon</b> (empirismo): experiência, método indutivo, "saber é poder", ídolos.', '<b>Descartes</b> (racionalismo): os sentidos enganam; dúvida metódica; "Penso, logo existo"; regra da análise.', 'Ciência é <b>verificável e corrigível</b> (reprodutibilidade) e precisa de <b>ética</b>.'],
    questoes: [
      { t: 0, txt: 'Na Idade Média, a explicação sobre a natureza apoiava-se no <b>princípio da autoridade</b>. Com a <b>Revolução Científica</b> (séculos XVI e XVII), esse critério foi superado porque os cientistas passaram a exigir:',
        ops: ['a aceitação inquestionável de qualquer afirmação escrita na Antiguidade sem testes práticos.', 'a comprovação por meio da observação sistemática, da experimentação controlada e do raciocínio lógico-matemático.', 'o abandono completo de todos os instrumentos de medição como lunetas e termômetros.', 'a proibição do uso da matemática no estudo dos fenômenos físicos e astronômicos.'], c: 1,
        dica: 'Em vez de "está escrito, então é verdade", o que passou a valer?',
        exp: 'A ciência moderna troca o "porque alguém importante disse" pela <b>observação</b>, pela <b>experimentação</b> e pela <b>matemática</b>.' },
      { t: 1, fig: 'cosmos', txt: 'A humanidade substituiu a concepção <b>geocêntrica</b> (Modelo I, Ptolomeu) pela <b>heliocêntrica</b> (Modelo II, Copérnico, Kepler e Galileu). Essa passagem provocou grande impacto filosófico porque:',
        ops: ['demonstrou que a Terra não está imóvel no centro físico do universo, mas gira em torno de si mesma e orbita ao redor do Sol.', 'comprovou que a Lua é maior que o Sol e permanece totalmente parada no espaço.', 'confirmou que o Sol gira em torno da Terra a cada 24 horas em órbita quadrada.', 'provou que não existem outros planetas além da Terra e da Lua no sistema solar.'], c: 0,
        dica: 'Quem está no centro do Modelo II?',
        exp: 'No <b>heliocentrismo</b>, o <b>Sol</b> está no centro e a <b>Terra se move</b> (gira em torno de si — rotação — e em volta do Sol — translação). A Terra deixa de ser o centro do universo.' },
      { t: 1, txt: 'O astrônomo <b>Johannes Kepler</b> aperfeiçoou o sistema de Copérnico ao demonstrar matematicamente que as órbitas dos planetas ao redor do Sol:',
        ops: ['são retilíneas e infinitas, afastando os planetas definitivamente do Sol.', 'são elípticas (levemente ovaladas), rompendo com a antiga crença greco-medieval de que os movimentos celestes precisavam ser círculos perfeitos.', 'ocorrem apenas durante os meses de verão do Hemisfério Norte.', 'dependem exclusivamente da velocidade dos ventos terrestres.'], c: 1,
        dica: 'Use o botão "Kepler" na animação do tópico 2.',
        exp: '<b>Kepler</b> mostrou que as órbitas são <b>elípticas</b> (ovais), e não círculos perfeitos como se acreditava desde a Antiguidade.' },
      { t: 1, txt: 'Com uma luneta aperfeiçoada (1609–1610), <b>Galileu Galilei</b> descobriu quatro satélites orbitando <b>Júpiter</b>. Essa descoberta foi decisiva contra o geocentrismo porque provou que:',
        ops: ['a Terra era o único corpo celeste capaz de atrair outros astros.', 'nem todos os astros do universo giravam ao redor da Terra, pois Júpiter possuía seu próprio sistema de luas.', 'a superfície da Lua era perfeitamente lisa como uma esfera de cristal.', 'os telescópios distorciam a luz e não serviam para investigações astronômicas.'], c: 1,
        dica: 'Se as luas giram em volta de Júpiter, elas giram em volta da Terra?',
        exp: 'As luas giravam em torno de <b>Júpiter</b>, e não da Terra: prova de que <b>nem tudo gira em torno da Terra</b>.' },
      { t: 1, txt: 'Galileu afirmou que o grande livro da natureza — o universo — “está escrito em <b>língua matemática</b>”. Essa reflexão expressa uma característica central da ciência moderna:',
        ops: ['a substituição das poesias mitológicas pela quantificação, medição e formulação matemática das leis naturais.', 'a ideia de que apenas matemáticos podem observar as estrelas sem utilizar experimentos.', 'a rejeição completa de qualquer experimento realizado em laboratório.', 'a crença de que os números possuem poderes mágicos capazes de prever o futuro pessoal.'], c: 0,
        dica: 'Matematização da natureza.',
        exp: 'A natureza passa a ser explicada por <b>medições e fórmulas matemáticas</b>, e não por mitos: é a <b>matematização</b> da natureza.' },
      { t: 1, txt: '<b>Isaac Newton</b> coroou a Revolução Científica ao formular a <b>Lei da Gravitação Universal</b>. A grande revolução filosófica dessa descoberta foi demonstrar que:',
        ops: ['o céu e a Terra obedecem a leis físicas completamente opostas e incompatíveis.', 'uma mesma lei natural universal governa tanto a queda dos corpos na superfície terrestre quanto o movimento orbital dos planetas no espaço.', 'a gravidade atua apenas sobre objetos metálicos fabricados pelo ser humano.', 'os planetas permanecem parados no espaço graças à ausência total de forças físicas.'], c: 1,
        dica: 'A maçã e a Lua: veja a animação de Newton.',
        exp: 'A <b>mesma força</b> (gravidade) que faz a <b>maçã cair</b> mantém a <b>Lua e os planetas em órbita</b>: as mesmas leis valem na Terra e no céu.' },
      { t: 2, txt: '<b>Francis Bacon</b>, fundador do <b>empirismo moderno</b>, cunhou a expressão “<b>Saber é poder</b>”. No contexto da Revolução Científica, essa frase significa que:',
        ops: ['o conhecimento científico das leis da natureza permite ao ser humano criar técnicas e invenções para transformar o mundo em seu benefício.', 'apenas os reis absolutistas têm o direito legal de ler livros de filosofia e ciências.', 'a ignorância científica garante maior domínio político sobre as sociedades.', 'a filosofia deve afastar-se totalmente das aplicações práticas e tecnológicas.'], c: 0,
        dica: 'Quem conhece como a natureza funciona pode fazer o quê?',
        exp: 'Conhecendo as <b>leis da natureza</b>, o ser humano pode criar <b>técnicas e invenções</b> para melhorar a vida.' },
      { t: 2, txt: 'No <i>Novum Organum</i>, Bacon alertou que a mente é enganada pelos <b>“ídolos”</b> (preconceitos, crenças infundadas, dogmas). Para superá-los e alcançar conhecimento seguro, Bacon propôs:',
        ops: ['o método indutivo baseado na observação rigorosa, no registro ordenado de dados e na experimentação controlada.', 'a aceitação imediata das primeiras impressões dos sentidos sem nenhuma verificação.', 'a leitura exclusiva de fábulas antigas como única fonte de verdade científica.', 'o abandono de toda forma de dúvida ou questionamento diante das tradições.'], c: 0,
        dica: 'Indução: de muitos casos observados → uma lei geral.',
        exp: 'Contra os <b>ídolos</b>, Bacon propõe o <b>método indutivo</b>: observar com cuidado, anotar os dados e fazer experimentos até chegar a uma lei geral.' },
      { t: 2, fig: 'remo', txt: 'Diferente dos empiristas, <b>René Descartes</b> (racionalismo) desconfiava dos sentidos, pois eles nos iludem (como um remo que parece quebrado dentro da água). Para encontrar uma verdade indubitável, Descartes utilizou:',
        ops: ['a adivinhação astrológica baseada na posição dos cometas.', 'a dúvida metódica, questionando provisoriamente todas as crenças até chegar à certeza racional do “Penso, logo existo”.', 'a obediência cega às opiniões da maioria sem reflexão individual.', 'a renúncia total ao uso da razão lógica e da geometria.'], c: 1,
        dica: 'Faça o passo a passo da dúvida metódica no tópico 3.',
        exp: 'Com a <b>dúvida metódica</b>, Descartes duvidou de tudo, até perceber que, se está duvidando, está pensando: <b>"Penso, logo existo"</b>.' },
      { t: 2, txt: 'No <i>Discurso do Método</i>, Descartes apresentou quatro regras. A <b>regra da análise</b> orienta o investigador a:',
        ops: ['aceitar como verdadeiro tudo aquilo que pareça complexo e confuso.', 'dividir cada problema complexo em tantas partes menores e mais simples quanto possível, para melhor resolvê-lo.', 'misturar todos os dados de uma pesquisa sem organizá-los em etapas.', 'tirar conclusões precipitadas antes mesmo de examinar as evidências.'], c: 1,
        dica: 'Analisar = quebrar em pedaços.',
        exp: '<b>Análise</b>: dividir um problema difícil em <b>partes menores e mais simples</b>.' },
      { t: 2, txt: 'Comparando o <b>Empirismo</b> (Bacon) e o <b>Racionalismo</b> (Descartes), assinale a alternativa que distingue corretamente as duas perspectivas:',
        ops: ['O empirismo valoriza a experiência sensível e a experimentação como origem do conhecimento, enquanto o racionalismo enfatiza a razão e o raciocínio lógico-matemático como fundamentos da verdade.', 'O empirismo rejeita qualquer experimento prático, enquanto o racionalismo proíbe o uso da razão humana.', 'Ambas as correntes defendem que o ser humano é incapaz de compreender as leis da natureza.', 'O empirismo foi criado na Grécia Antiga por Sócrates, e o racionalismo surgiu apenas no século XXI.'], c: 0,
        dica: 'Empírico = experiência. Racional = razão.',
        exp: '<b>Empirismo</b>: o conhecimento vem da <b>experiência</b> e dos <b>experimentos</b>. <b>Racionalismo</b>: o conhecimento seguro vem da <b>razão</b> e da lógica matemática.' },
      { t: 1, txt: 'A <b>“revolução copernicana”</b> transformou também a visão que o ser humano tinha de si mesmo, porque:',
        ops: ['retirou a humanidade do centro geométrico privilegiado do cosmos, convidando-a a compreender seu lugar no universo por meio da investigação crítica.', 'provou que a humanidade possui o poder de controlar a órbita das estrelas com o pensamento.', 'demonstrou que a Terra é o único planeta existente em toda a Via Láctea.', 'eliminou a curiosidade filosófica sobre a origem e o funcionamento do universo.'], c: 0,
        dica: 'Se a Terra não é o centro, o ser humano está no centro?',
        exp: 'Se a Terra não está no centro, o ser humano também <b>não ocupa o centro</b> do universo. Isso fez a humanidade repensar seu lugar no cosmos.' },
      { t: 0, txt: 'Na Revolução Científica surgiram as primeiras <b>academias e sociedades científicas</b> (como a <i>Royal Society</i>, de Londres) e os periódicos especializados. Essas instituições foram fundamentais porque permitiram:',
        ops: ['esconder todas as descobertas em segredo absoluto para que nenhum outro pesquisador pudesse testá-las.', 'o debate público, a divulgação dos resultados e a verificação coletiva dos experimentos por outros cientistas.', 'a substituição dos laboratórios por julgamentos baseados apenas em boatos populares.', 'a proibição de qualquer intercâmbio de ideias entre pesquisadores de países diferentes.'], c: 1,
        dica: 'Ciência é trabalho em grupo: um cientista confere o do outro.',
        exp: 'As <b>academias</b> tornaram a ciência <b>pública e coletiva</b>: os resultados eram divulgados, debatidos e <b>testados por outros cientistas</b>.' },
      { t: 0, txt: 'Na ciência moderna, uma hipótese só se consolida como teoria confiável quando pode ser testada e reproduzida por outros pesquisadores (<b>reprodutibilidade</b>). Esse princípio garante que o conhecimento científico seja:',
        ops: ['uma opinião puramente subjetiva que varia conforme o humor de cada pessoa.', 'objetivo, verificável e sujeito à revisão crítica sempre que surgirem novas evidências.', 'um dogma eterno e imutável que jamais pode ser corrigido ou aperfeiçoado.', 'acessível apenas por meio de revelações místicas individuais.'], c: 1,
        dica: 'A ciência pode mudar de ideia quando aparecem novas provas?',
        exp: 'A ciência é <b>objetiva</b>, <b>verificável</b> (outros podem repetir o teste) e <b>corrigível</b>: muda quando surgem novas evidências. Não é dogma.' },
      { t: 3, txt: 'Embora a Revolução Científica tenha trazido grandes avanços na medicina, nos transportes e nas comunicações, a Filosofia alerta que o desenvolvimento científico exige <b>reflexão ética constante</b> porque:',
        ops: ['o conhecimento técnico pode ser usado tanto para promover a vida e o bem-estar quanto para gerar destruição ambiental e armas letais, exigindo responsabilidade moral da humanidade.', 'a ciência já resolveu todos os problemas sociais e morais da humanidade, tornando a ética desnecessária.', 'os cientistas devem interromper todas as pesquisas médicas para retornar ao estilo de vida medieval.', 'a tecnologia moderna funciona de maneira totalmente autônoma sem nenhuma decisão humana.'], c: 0,
        dica: 'O mesmo conhecimento pode curar e pode destruir.',
        exp: 'A ciência <b>não é neutra</b> em seus usos: o mesmo saber pode <b>salvar vidas</b> ou <b>destruir</b>. Por isso precisa de <b>responsabilidade ética</b>.' }
    ]
  }
};

/* ---------------- TEORIA ---------------- */
const TEORIA = {
  m1: [
    () => `
      <p class="lead">O Centro-Oeste é a <b>única região sem saída para o mar</b>. Faz fronteira com a <b>Bolívia</b> e o <b>Paraguai</b> e é formado por <b>Goiás (GO)</b>, <b>Mato Grosso (MT)</b>, <b>Mato Grosso do Sul (MS)</b> e o <b>Distrito Federal (DF)</b>, onde fica Brasília.</p>
      <div data-w="mapaCO"></div>
      <div class="duo">
        <div class="box"><b>⛰️ Relevo</b><p><b>Planaltos e chapadas</b> (Planalto Central, Chapadas dos Parecis, dos Veadeiros e dos Guimarães) e, a oeste, a <b>Planície do Pantanal</b>: muito baixa e sujeita a inundações.</p></div>
        <div class="box"><b>💧 "Berço das águas"</b><p>Os planaltos são <b>divisores de águas</b>: ali nascem rios das bacias <b>Amazônica</b> (Xingu, Tapajós, Teles Pires), <b>Tocantins-Araguaia</b> e <b>Platina</b> (Paraguai e Paraná).</p></div>
      </div>
      <h4>☀️🌧️ O clima mês a mês</h4>
      <div data-w="clima"></div>
      <h4>🌳 Os 3 biomas</h4>
      <div class="biomas">
        <div class="bio cer">${SVG_CERRADO}<b>Cerrado</b><p>Predomina na região. Árvores tortas, <b>casca grossa</b> (contra o fogo) e <b>raízes profundas</b> (para buscar água na seca): a "floresta invertida".</p></div>
        <div class="bio pan"><span class="big-e">🐊🦜💧</span><b>Pantanal</b><p>A <b>maior planície inundável</b> do planeta, com enorme biodiversidade (onça-pintada, arara-azul, jacaré).</p></div>
        <div class="bio ama"><span class="big-e">🌳🌳🌳</span><b>Amazônia</b><p>Floresta Amazônica no <b>norte de Mato Grosso</b>.</p></div>
      </div>`,
    () => `
      <p class="lead">Até a metade do século XX, o Centro-Oeste era <b>pouco povoado</b> e isolado do litoral. Veja como isso mudou:</p>
      <div data-w="ocupacao"></div>
      <h4>🧪 A experiência da calagem</h4>
      <div data-w="calagem"></div>
      <div class="alerta">🏙️ Hoje a região é <b>muito urbanizada (cerca de 90%)</b>, com destaque para <b>Brasília, Goiânia, Campo Grande e Cuiabá</b>. Muitos migrantes vieram principalmente do <b>Sul</b>.</div>`,
    () => `
      <p class="lead">O Centro-Oeste virou uma das maiores <b>potências agroexportadoras</b> do mundo, com <b>grandes fazendas</b> muito <b>mecanizadas</b>.</p>
      <div class="eco">
        <div><i>🌱</i><b>Soja</b><small>líder nacional</small></div><div><i>🌽</i><b>Milho</b><small>líder nacional</small></div><div><i>☁️</i><b>Algodão</b><small>líder nacional</small></div>
        <div><i>🎋</i><b>Cana-de-açúcar</b><small>etanol</small></div><div><i>🐄</i><b>Gado bovino</b><small>maior rebanho do país</small></div>
        <div><i>⛏️</i><b>Maciço do Urucum</b><small>Corumbá-MS: <b>ferro e manganês</b></small></div><div><i>💊</i><b>Polo de Anápolis-GO</b><small>indústria farmacêutica</small></div>
        <div><i>🏛️</i><b>Distrito Federal</b><small>setor terciário: governo e serviços</small></div><div><i>🏞️</i><b>Ecoturismo</b><small>Bonito-MS, Pantanal, Chapada dos Veadeiros-GO</small></div>
      </div>
      <h4>🏭 Por que as agroindústrias ficam perto das fazendas?</h4>
      <div class="agro"><span>🐄🌱🌽 matéria-prima</span><i>➜</i><span>🏭 frigorífico · esmagadora · usina</span><i>➜</i><span>📦 produto pronto</span><i>➜</i><span>🚛 transporte</span></div>
      <p class="center">Transformar a matéria-prima <b>perto da produção</b> <b>agrega valor</b> e <b>reduz o custo e as perdas no transporte</b>.</p>
      <div data-w="ecoQuiz"></div>`,
    () => `
      <div class="duo">
        <div class="box"><b>👥 Diversidade cultural</b><p>Migrantes <b>nordestinos, sudestinos e sulistas</b> se misturaram às culturas locais e aos <b>povos indígenas</b> (Parque Indígena do <b>Xingu</b>-MT, <b>Guarani-Kaiowá</b>-MS).</p></div>
        <div class="box"><b>⚖️ Conflitos pela terra</b><p>A <b>concentração fundiária</b> (poucos donos de muitas terras) gera disputas pela <b>demarcação de terras indígenas</b> e pela reforma agrária.</p></div>
      </div>
      <h4>🧽 O Cerrado é uma esponja: faça chover!</h4>
      <div data-w="esponja"></div>
      <h4>⚠️ Impactos ambientais</h4>
      <div class="impactos"><span>🪓 Mais da metade do Cerrado <b>desmatado</b></span><span>💧 Perda de <b>nascentes</b></span><span>🟫 <b>Erosão</b> e solo compactado</span><span>☠️ Rios contaminados por <b>agrotóxicos</b> e <b>mercúrio</b> de garimpo</span><span>🔥 <b>Queimadas</b> no inverno seco (+ uso irregular do fogo)</span></div>`
  ],
  m2: [
    () => `
      <p class="lead">Desde a Antiguidade, artistas tentam fazer a pedra, a madeira ou a tela <b>parecerem vivas</b>: respirando, se movendo, presentes.</p>
      <h4>🗿 O contraposto: a estátua "ganha vida"</h4>
      <div data-w="contraposto"></div>
      <div class="duo">
        <div class="box"><b>🏛️ Grécia</b><p><b>Contraposto</b> e estudo dos músculos em tensão (<i>Discóbolo</i>, de Míron).</p></div>
        <div class="box"><b>🌀 Barroco (séc. XVII–XVIII)</b><p><b>Bernini</b> esculpia o mármore com torções dramáticas e texturas que parecem pele macia e tecido esvoaçante.</p></div>
      </div>
      <h4>💡 Luz e sombra na pintura</h4>
      <div data-w="luz"></div>
      <div class="duo">
        <div class="box"><b>👶 Hiper-realismo</b><p><b>Ron Mueck</b>: silicone e resina reproduzem poros e veias, muitas vezes em <b>escala gigante ou mínima</b>, o que causa <b>estranhamento</b>.</p></div>
        <div class="box"><b>🕺 Performance e body art</b><p>O <b>próprio corpo vivo do artista</b> é a obra, em movimento diante do público.</p></div>
      </div>`,
    () => `
      <p class="lead">Cada época criou seu jeito de representar o corpo, de acordo com seus <b>valores</b> (religiosos, culturais e científicos). Toque nas épocas:</p>
      <div data-w="epocas"></div>
      <h4>🇪🇬 A Lei da Frontalidade: toque nas partes</h4>
      <div data-w="egito"></div>`,
    () => `
      <p class="lead">Do século XIX ao XX, os artistas <b>romperam</b> com o ideal "acadêmico" de beleza perfeita.</p>
      <div data-w="movimentos"></div>
      <table class="mini wide"><tr><th>Movimento</th><th>Artistas</th><th>Como é o corpo</th></tr>
        <tr><td><b>Renascimento</b></td><td>Leonardo da Vinci, Michelangelo</td><td>Proporção matemática, anatomia precisa, equilíbrio</td></tr>
        <tr><td><b>Realismo</b></td><td>Courbet, Millet</td><td>Trabalhadores reais, sem idealização, com crítica social</td></tr>
        <tr><td><b>Impressionismo</b></td><td>Degas, Renoir</td><td>Movimento espontâneo e luz, com pinceladas rápidas</td></tr>
        <tr><td><b>Pós-Impressionismo</b></td><td>Van Gogh, Gauguin</td><td>Cores intensas e emoção</td></tr>
        <tr><td><b>Cubismo</b></td><td>Picasso, Braque</td><td>Formas geométricas, vários ângulos ao mesmo tempo</td></tr>
        <tr><td><b>Expressionismo</b></td><td>Munch, Schiele, Anita Malfatti</td><td>Deformação para mostrar angústia e emoção</td></tr>
        <tr><td><b>Surrealismo</b></td><td>Dalí, Magritte, Frida Kahlo</td><td>Sonhos, inconsciente, corpos que se transformam</td></tr></table>
      <div data-w="artQuiz"></div>`
  ],
  m3: [
    () => `
      <div class="antes-depois">
        <div class="ad antes"><b>📜 Idade Média</b><p><b>Argumento de autoridade</b>: era verdade porque estava escrito na Bíblia, em Aristóteles ou em Ptolomeu. Visão <b>teocêntrica</b>.</p></div>
        <i>➜</i>
        <div class="ad depois"><b>🔬 Séculos XVI–XVII</b><p><b>Revolução Científica</b>: nasce a ciência moderna, impulsionada pelo Renascimento, pelas Grandes Navegações e por novos instrumentos.</p></div>
      </div>
      <h4>🏛️ Os 4 pilares da ciência moderna</h4>
      <div class="pilares"><div><i>👁️</i><b>Observação</b><small>sistemática</small></div><div><i>🧪</i><b>Experimentação</b><small>controlada</small></div><div><i>📐</i><b>Matematização</b><small>leis em fórmulas</small></div><div><i>🧠</i><b>Autonomia da razão</b><small>ciência separada da fé</small></div></div>
      <h4>🪜 O método científico (toque nas etapas)</h4>
      <div data-w="metodo"></div>
      <div class="alerta">👥 <b>Academias científicas</b> (Royal Society, Academia de Ciências de Paris) e revistas permitiram <b>divulgar, debater e testar</b> as descobertas. A ciência ficou <b>verificável e corrigível</b>: outro cientista precisa conseguir <b>repetir o experimento</b> (reprodutibilidade).</div>`,
    () => `
      <h4 class="no-top">🌍☀️ Quem está no centro?</h4>
      <div data-w="cosmos"></div>
      <div class="sabios">
        <div><i>☀️</i><b>Copérnico</b><small>1473–1543</small><p><b>Heliocentrismo</b>: o Sol no centro; a Terra gira (rotação e translação). O "giro copernicano".</p></div>
        <div><i>🥚</i><b>Kepler</b><small>1571–1630</small><p>Órbitas <b>elípticas</b> (ovais), e não círculos perfeitos.</p></div>
        <div><i>🔭</i><b>Galileu</b><small>1564–1642</small><p>Luneta: crateras na Lua, manchas solares, fases de Vênus e <b>4 luas de Júpiter</b>. "A natureza está escrita em língua <b>matemática</b>". Enfrentou a Inquisição.</p></div>
        <div><i>🍎</i><b>Newton</b><small>1643–1727</small><p>3 leis do movimento e a <b>Gravitação Universal</b>: a mesma força na Terra e no céu.</p></div>
      </div>
      <div data-w="quem"></div>
      <h4>🍎🌙 A maçã e a Lua de Newton</h4>
      <div class="newton">${SVG_NEWTON}<p>A <b>mesma força</b> (gravidade) que puxa a <b>maçã</b> para o chão mantém a <b>Lua</b> girando em volta da Terra e os <b>planetas</b> em volta do Sol.</p></div>`,
    () => `
      <p class="lead">Como ter certeza de que a razão não está sendo enganada? Dois caminhos:</p>
      <div class="vs-box">
        <div class="emp"><b>👁️ EMPIRISMO</b><small>Francis Bacon (1561–1626)</small>
          <p>O conhecimento nasce da <b>experiência</b>, da <b>observação</b> e dos <b>experimentos</b>.</p>
          <p>📈 <b>Método indutivo</b>: de vários casos observados → uma lei geral.</p>
          <p>💪 "<b>Saber é poder</b>": quem conhece a natureza pode transformá-la.</p>
          <p>👻 Cuidado com os <b>ídolos</b>: preconceitos que enganam a mente.</p></div>
        <div class="vsx">×</div>
        <div class="rac"><b>🧠 RACIONALISMO</b><small>René Descartes (1596–1650)</small>
          <p>Os <b>sentidos enganam</b>; a verdade segura está na <b>razão</b> e na lógica matemática.</p>
          <p>📉 <b>Método dedutivo</b> e <b>dúvida metódica</b>.</p>
          <p>💭 "<b>Penso, logo existo</b>" (Cogito, ergo sum).</p>
          <p>📋 4 regras: <b>evidência, análise</b> (dividir em partes), <b>síntese, enumeração</b>.</p></div>
      </div>
      <h4>🚣 Os sentidos enganam? O remo na água</h4>
      <div data-w="remo"></div>
      <h4>🤔 A dúvida metódica, passo a passo</h4>
      <div data-w="duvida"></div>
      <div data-w="filoQuiz"></div>`,
    () => `
      <div class="etica"><div class="lado-b"><b>✅ Usos que promovem a vida</b><span>💉 vacinas e remédios</span><span>🏥 medicina e cirurgias</span><span>🚆 transportes</span><span>📡 comunicações</span></div>
        <div class="balanca">⚖️<b>Ética</b><small>responsabilidade</small></div>
        <div class="lado-m"><b>⚠️ Usos que destroem</b><span>💣 armas letais</span><span>🏭 poluição</span><span>🌳 destruição ambiental</span></div></div>
      <div class="alerta">🤝 A ciência <b>não é neutra</b> em suas aplicações: cabe à humanidade usar o poder técnico com <b>responsabilidade ambiental</b> e <b>respeito à dignidade humana</b>.</div>`
  ]
};
