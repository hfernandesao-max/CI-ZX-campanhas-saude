// Banco de perguntas do quiz «Mito ou Verdade?» — Novembro Azul 2026
// Cada telemóvel recebe N_PERGUNTAS sorteadas (metade «Mito ou Verdade?», metade escolha múltipla),
// por ordem aleatória e com as opções baralhadas.
// t: "tf" (Verdade/Mito, a = true/false) ou "mc" (escolha múltipla, a = índice da opção certa na lista original)
const ACS = "American Cancer Society", OMS = "OMS", IARC = "OMS / IARC — GLOBOCAN", WCRF = "World Cancer Research Fund (GLOBOCAN 2022)";
const NA = "Campanha Novembro Azul";

export const N_PERGUNTAS = 12;

export const BANCO = [
  // ---------- Mito ou Verdade? ----------
  { t: "tf", s: "Na fase inicial, o cancro da próstata normalmente não dá sinais.", a: true, src: ACS,
    e: "No início a doença é silenciosa. Por isso não se deve esperar pelos sintomas para falar com o médico." },
  { t: "tf", s: "Se não tenho sintomas, não preciso de ir ao médico.", a: false, src: ACS,
    e: "Como a doença é silenciosa na fase inicial, só o rastreio a consegue detectar cedo. O check-up regular faz-se mesmo quando nos sentimos bem." },
  { t: "tf", s: "Ter pai ou irmão com cancro da próstata aumenta o risco.", a: true, src: ACS,
    e: "Ter um familiar directo com a doença mais do que duplica o risco. Nesse caso, a vigilância deve começar mais cedo." },
  { t: "tf", s: "Os homens de ascendência africana têm um risco mais elevado de cancro da próstata.", a: true, src: ACS,
    e: "Têm maior risco e, muitas vezes, formas da doença mais agressivas. Por isso devem falar com o médico sobre o rastreio a partir dos 45 anos." },
  { t: "tf", s: "O cancro da próstata só aparece em homens muito idosos.", a: false, src: ACS,
    e: "O risco aumenta a partir dos 45–50 anos. A maioria dos casos surge depois dos 65, mas pode aparecer mais cedo, sobretudo com histórico familiar." },
  { t: "tf", s: "A análise PSA é feita com uma simples colheita de sangue.", a: true, src: ACS,
    e: "É uma análise ao sangue. O médico interpreta o resultado e pode complementá-la com outros exames." },
  { t: "tf", s: "O toque rectal é um exame demorado e doloroso.", a: false, src: ACS,
    e: "É um exame médico rápido, de poucos segundos, e nem sempre é necessário. O médico decide consigo." },
  { t: "tf", s: "Detectado cedo, o cancro da próstata tem boas probabilidades de tratamento com sucesso.", a: true, src: ACS,
    e: "Quanto mais cedo a doença é detectada, mais simples e eficaz tende a ser o tratamento." },
  { t: "tf", s: "Urinar muitas vezes durante a noite pode ser um sinal de alerta.", a: true, src: ACS,
    e: "Justifica uma consulta. Pode ter causas benignas, como o aumento da próstata com a idade, mas só o médico pode avaliar." },
  { t: "tf", s: "Qualquer aumento da próstata é cancro.", a: false, src: ACS,
    e: "Com a idade é normal a próstata aumentar (hiperplasia benigna), e isso não é cancro. Mesmo assim, deve ser acompanhado pelo médico." },
  { t: "tf", s: "A próstata fica por baixo da bexiga.", a: true, src: ACS,
    e: "Fica logo abaixo da bexiga, à volta da uretra. Por isso, quando aumenta, pode dificultar a saída da urina." },
  { t: "tf", s: "Em Angola, o cancro da próstata é o cancro mais frequente nos homens.", a: true, src: IARC,
    e: "É o cancro mais diagnosticado nos homens angolanos e também a principal causa de morte por cancro nos homens." },
  { t: "tf", s: "O cancro da próstata é contagioso.", a: false, src: OMS,
    e: "Não se transmite de pessoa para pessoa. Apoiar quem está em tratamento só faz bem." },
  { t: "tf", s: "A actividade física regular ajuda a proteger a saúde em geral.", a: true, src: OMS,
    e: "A OMS recomenda pelo menos 150 minutos de actividade física moderada por semana. Ajuda a manter um peso saudável e protege o corpo todo." },
  { t: "tf", s: "Depois de um exame normal, nunca mais é preciso repeti-lo.", a: false, src: ACS,
    e: "A vigilância é periódica. O médico diz de quanto em quanto tempo deve repetir os exames, conforme a idade e o risco." },
  { t: "tf", s: "Sangue na urina deve ser sempre visto por um médico.", a: true, src: ACS,
    e: "Sangue na urina ou no sémen é um sinal que justifica sempre uma consulta, para perceber a causa." },
  { t: "tf", s: "Falar de saúde com a família e com os colegas ajuda a quebrar tabus.", a: true, src: NA,
    e: "Muitos homens só vão ao médico porque alguém próximo insistiu. Ninguém se cuida sozinho." },
  { t: "tf", s: "Fumar não tem qualquer efeito na saúde do homem.", a: false, src: OMS,
    e: "O tabaco prejudica praticamente todos os órgãos do corpo. Deixar de fumar traz benefícios em qualquer idade." },
  { t: "tf", s: "A próstata é uma glândula que só existe nos homens.", a: true, src: ACS,
    e: "Faz parte do sistema reprodutor masculino e produz parte do líquido seminal." },
  { t: "tf", s: "O aumento benigno da próstata transforma-se sempre em cancro.", a: false, src: ACS,
    e: "A hiperplasia benigna não é cancro e não se transforma em cancro. Mas os sintomas podem ser parecidos, por isso deve ser avaliada pelo médico." },
  { t: "tf", s: "Um valor de PSA elevado significa sempre que existe cancro.", a: false, src: ACS,
    e: "O PSA também sobe com o aumento benigno da próstata, infecções e outras causas. Só o médico interpreta o resultado e decide os exames seguintes." },
  { t: "tf", s: "O excesso de peso está associado a formas mais agressivas de cancro da próstata.", a: true, src: ACS,
    e: "Vários estudos associam a obesidade a um maior risco de formas agressivas. Manter um peso saudável protege a saúde em geral." },
  { t: "tf", s: "Deixar de fumar só traz benefícios aos mais novos.", a: false, src: OMS,
    e: "Deixar de fumar traz benefícios em qualquer idade, e alguns começam logo nas primeiras semanas." },
  { t: "tf", s: "Em fase avançada, o cancro da próstata pode espalhar-se para os ossos.", a: true, src: ACS,
    e: "Por isso, dor persistente nas costas, nas ancas ou nos ossos é um sinal que justifica uma consulta." },
  { t: "tf", s: "Dificuldade em começar a urinar ou jacto fraco é um sinal que justifica uma consulta.", a: true, src: ACS,
    e: "Pode ter causas benignas, mas deve ser sempre avaliado pelo médico." },
  { t: "tf", s: "Fazer ou não o rastreio é uma decisão a tomar em conjunto com o médico.", a: true, src: ACS,
    e: "As recomendações internacionais defendem uma decisão partilhada: o médico explica os benefícios e os riscos e decide consigo." },
  { t: "tf", s: "Os homens vão ao médico tantas vezes como as mulheres.", a: false, src: OMS,
    e: "Em média, os homens procuram menos os cuidados de saúde e chegam mais tarde ao médico. É isso que o Novembro Azul quer mudar." },
  { t: "tf", s: "Quando detectado numa fase localizada, a grande maioria dos homens sobrevive ao cancro da próstata.", a: true, src: ACS,
    e: "Nessa fase, a sobrevivência a 5 anos é superior a 99%. É por isso que detectar cedo faz toda a diferença." },
  { t: "tf", s: "Comer muitas carnes processadas faz bem à saúde.", a: false, src: OMS,
    e: "A OMS classifica as carnes processadas como cancerígenas. O ideal é comê-las raramente e preferir fruta, legumes e cereais integrais." },
  { t: "tf", s: "O movimento Movember convida os homens a deixar crescer o bigode em Novembro para promover a saúde masculina.", a: true, src: "Fundação Movember",
    e: "O bigode serve para começar conversas sobre a saúde do homem, incluindo o cancro da próstata." },
  { t: "tf", s: "Para a saúde, quanto menos álcool, melhor.", a: true, src: OMS,
    e: "A OMS indica que não existe um nível de consumo de álcool totalmente seguro para a saúde." },

  // ---------- Escolha múltipla ----------
  { t: "mc", s: "Em Angola, quantos novos casos de cancro da próstata são diagnosticados por ano?",
    o: ["Cerca de 200", "Cerca de 2 200", "Cerca de 22 000"], a: 1, src: IARC,
    e: "São cerca de 2 217 novos casos por ano, quase um em cada cinco cancros diagnosticados nos homens." },
  { t: "mc", s: "Quantos novos casos de cancro da próstata houve no mundo em 2022?",
    o: ["Cerca de 147 mil", "Cerca de 1,47 milhões", "Cerca de 14,7 milhões"], a: 1, src: WCRF,
    e: "Foram cerca de 1,47 milhões de novos casos. É o segundo cancro mais frequente nos homens a nível mundial." },
  { t: "mc", s: "Para homens de ascendência africana, a partir de que idade se recomenda falar com o médico sobre o rastreio?",
    o: ["30 anos", "45 anos", "65 anos"], a: 1, src: ACS,
    e: "Aos 45 anos, tal como para quem tem pai ou irmão diagnosticado antes dos 65. Com vários familiares diagnosticados cedo, aos 40." },
  { t: "mc", s: "Para um homem de risco médio, a partir de que idade se recomenda falar com o médico sobre o rastreio?",
    o: ["35 anos", "50 anos", "70 anos"], a: 1, src: ACS,
    e: "Para homens de risco médio, a recomendação é iniciar essa conversa aos 50 anos." },
  { t: "mc", s: "Qual é o principal factor de risco do cancro da próstata?",
    o: ["A idade", "A altura", "O tipo sanguíneo"], a: 0, src: ACS,
    e: "A idade é o principal factor de risco. O histórico familiar e a ascendência africana também aumentam o risco." },
  { t: "mc", s: "A próstata tem um tamanho semelhante a…",
    o: ["Um grão de arroz", "Uma noz", "Uma laranja"], a: 1, src: ACS,
    e: "É uma pequena glândula, do tamanho aproximado de uma noz, que tende a aumentar com a idade." },
  { t: "mc", s: "Qual é o símbolo do Novembro Azul?",
    o: ["Um laço azul", "Um laço cor-de-rosa", "Um coração vermelho"], a: 0, src: NA,
    e: "O laço azul é o símbolo do Novembro Azul. O laço cor-de-rosa é o do Outubro Rosa, dedicado ao cancro da mama." },
  { t: "mc", s: "Que análise ao sangue ajuda no rastreio do cancro da próstata?",
    o: ["Análise PSA", "Análise à glicemia", "Análise ao colesterol"], a: 0, src: ACS,
    e: "A análise PSA mede uma proteína produzida pela próstata. O médico interpreta o valor e decide os passos seguintes." },
  { t: "mc", s: "Qual destes hábitos ajuda a proteger a saúde?",
    o: ["150 minutos de actividade física por semana", "Adiar as consultas enquanto se sente bem", "Fumar só ao fim-de-semana"], a: 0, src: OMS,
    e: "Mexer-se, comer bem, manter um peso saudável, não fumar e moderar o álcool protegem a saúde. E fazer o check-up regular." },
  { t: "mc", s: "Em Angola, que lugar ocupa o cancro da próstata nas mortes por cancro nos homens?",
    o: ["É a 1.ª causa", "É a 5.ª causa", "Não causa mortes"], a: 0, src: IARC,
    e: "É a principal causa de morte por cancro nos homens angolanos, com cerca de 1 355 mortes por ano. Detectar cedo faz a diferença." },
  { t: "mc", s: "Quem pode ajudar um homem a cuidar da sua saúde?",
    o: ["Ninguém: é um assunto só dele", "A família e os colegas", "Só o médico, quando já há sintomas"], a: 1, src: NA,
    e: "A família incentiva e acompanha; o local de trabalho informa e fala de saúde sem tabus. Um homem saudável é uma família e uma equipa mais fortes." },
  { t: "mc", s: "A próstata envolve qual destes canais?",
    o: ["A uretra", "O esófago", "A traqueia"], a: 0, src: ACS,
    e: "A uretra, o canal por onde passa a urina, atravessa a próstata. Por isso, quando a próstata aumenta, pode dificultar a micção." },
  { t: "mc", s: "Qual destes NÃO é um factor de risco conhecido do cancro da próstata?",
    o: ["A idade", "O histórico familiar", "Usar o telemóvel"], a: 2, src: ACS,
    e: "Os principais factores de risco são a idade, o histórico familiar e a ascendência africana." },
  { t: "mc", s: "Com vários familiares directos diagnosticados cedo, a partir de que idade se deve falar com o médico sobre o rastreio?",
    o: ["40 anos", "55 anos", "70 anos"], a: 0, src: ACS,
    e: "Para quem tem mais de um familiar directo diagnosticado antes dos 65 anos, a recomendação é aos 40." },
  { t: "mc", s: "O que quer dizer a sigla PSA?",
    o: ["Antigénio específico da próstata", "Pressão sanguínea arterial", "Proteína do sangue alterada"], a: 0, src: ACS,
    e: "PSA vem do inglês «prostate-specific antigen»: uma proteína produzida pela próstata, medida numa análise ao sangue." },
  { t: "mc", s: "Quanta actividade física moderada recomenda a OMS aos adultos, por semana?",
    o: ["30 minutos", "150 a 300 minutos", "Mais de 1 000 minutos"], a: 1, src: OMS,
    e: "Entre 150 e 300 minutos de actividade moderada por semana, como caminhar a passo rápido." },
  { t: "mc", s: "Em Angola, quantas mortes por cancro da próstata há, aproximadamente, por ano?",
    o: ["Cerca de 135", "Cerca de 1 355", "Cerca de 13 550"], a: 1, src: IARC,
    e: "São cerca de 1 355 mortes por ano: é a principal causa de morte por cancro nos homens angolanos." },
  { t: "mc", s: "Em Angola, que parte dos cancros diagnosticados nos homens é da próstata?",
    o: ["Cerca de 2%", "Cerca de 18%", "Cerca de 60%"], a: 1, src: IARC,
    e: "Cerca de 17,7%: quase um em cada cinco cancros diagnosticados nos homens angolanos." },
  { t: "mc", s: "A nível mundial, que lugar ocupa o cancro da próstata entre os cancros mais frequentes nos homens?",
    o: ["1.º lugar", "2.º lugar", "10.º lugar"], a: 1, src: WCRF,
    e: "É o segundo cancro mais frequente nos homens no mundo, logo a seguir ao cancro do pulmão." },
  { t: "mc", s: "Qual destes sinais justifica sempre ir ao médico?",
    o: ["Sangue na urina", "Ter sede depois de correr", "Espirrar com o pó"], a: 0, src: ACS,
    e: "Sangue na urina ou no sémen deve ser sempre avaliado por um médico." },
  { t: "mc", s: "Qual é a melhor altura para fazer o check-up?",
    o: ["Só quando há dores", "Regularmente, mesmo sem sintomas", "Só depois dos 80 anos"], a: 1, src: ACS,
    e: "A vigilância regular permite detectar problemas antes de aparecerem sintomas, quando o tratamento é mais simples." },
  { t: "mc", s: "Como se chama o aumento não canceroso da próstata que surge com a idade?",
    o: ["Hiperplasia benigna da próstata", "Osteoporose", "Hipertensão"], a: 0, src: ACS,
    e: "É muito comum com a idade e não é cancro, mas pode causar sintomas urinários e deve ser acompanhada." },
  { t: "mc", s: "Qual destes alimentos convém incluir todos os dias?",
    o: ["Fruta e legumes", "Carnes processadas", "Refrigerantes"], a: 0, src: OMS,
    e: "A OMS recomenda pelo menos 400 g de fruta e legumes por dia, cerca de cinco porções." },
  { t: "mc", s: "Quem decide se um homem deve fazer a análise PSA?",
    o: ["O próprio, com o médico", "A chefia", "Ninguém: faz-se sempre"], a: 0, src: ACS,
    e: "É uma decisão partilhada entre o homem e o médico, depois de conhecer os benefícios e os riscos." },
  { t: "mc", s: "Qual destes hábitos aumenta o risco de vários tipos de cancro?",
    o: ["Fumar", "Caminhar", "Dormir bem"], a: 0, src: OMS,
    e: "O tabaco é a principal causa evitável de cancro no mundo." },
  { t: "mc", s: "Em que mês decorre a campanha Novembro Azul?",
    o: ["Outubro", "Novembro", "Dezembro"], a: 1, src: NA,
    e: "Todos os anos, em Novembro, fala-se da saúde do homem e da prevenção do cancro da próstata." },
  { t: "mc", s: "A maioria dos casos de cancro da próstata é diagnosticada depois de que idade?",
    o: ["30 anos", "45 anos", "65 anos"], a: 2, src: ACS,
    e: "Cerca de 6 em cada 10 casos são diagnosticados depois dos 65 anos. Mas a vigilância começa mais cedo." },
  { t: "mc", s: "Quando é detectado numa fase inicial, o cancro da próstata…",
    o: ["Tem boas probabilidades de tratamento com sucesso", "Não tem tratamento", "Desaparece sozinho"], a: 0, src: ACS,
    e: "Detectado cedo, o tratamento tende a ser mais simples e eficaz." },
  { t: "mc", s: "Que exame o médico pode fazer no consultório, em poucos segundos?",
    o: ["O toque rectal", "Uma ressonância magnética", "Uma colonoscopia"], a: 0, src: ACS,
    e: "O toque rectal é rápido e é o médico que decide se é necessário." },
  { t: "mc", s: "Que movimento convida os homens a deixar crescer o bigode em Novembro?",
    o: ["Movember", "Outubro Rosa", "Dia do Pai"], a: 0, src: "Fundação Movember",
    e: "O Movember usa o bigode para pôr os homens a falar da sua saúde." }
];

BANCO.forEach((q, i) => { q.id = i; });   // identificador estável de cada pergunta (para a revisão)

// ---------- Sorteio ----------
// Gerador pseudo-aleatório com semente: o mesmo telemóvel (mesma semente) recebe sempre as mesmas perguntas,
// por isso, se recarregar a página, continua exactamente onde estava.
function gerador(semente) {
  let h = 1779033703 ^ semente.length;
  for (let i = 0; i < semente.length; i++) { h = Math.imul(h ^ semente.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}
function baralhar(lista, rnd) {
  const a = lista.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// evitar: ids das perguntas que este telemóvel já viu noutros jogos — ficam para o fim da fila,
// por isso só voltam a sair quando o telemóvel já tiver visto todas as outras.
export function sortear(semente, evitar = []) {
  const rnd = gerador(String(semente || Math.random()));
  const vistas = new Set(evitar);
  const escolher = (tipo) => {
    const todas = baralhar(BANCO.filter(q => q.t === tipo), rnd);
    return todas.filter(q => !vistas.has(q.id)).concat(todas.filter(q => vistas.has(q.id))).slice(0, N_PERGUNTAS / 2);
  };
  const tf = escolher("tf");
  const mc = escolher("mc").map(q => {
    const ordem = baralhar(q.o.map((_, k) => k), rnd);          // baralhar as opções
    return { ...q, o: ordem.map(k => q.o[k]), a: ordem.indexOf(q.a) };
  });
  return baralhar(tf.concat(mc), rnd);
}

// Pontuação ao estilo dos quizzes ao vivo: resposta certa vale entre 500 e 1000 pontos,
// conforme a rapidez (perde-se 25 pontos por segundo, até 20 segundos).
export function pontosPara(certa, segundos) {
  if (!certa) return 0;
  return Math.round(1000 - Math.min(500, Math.max(0, segundos) * 25));
}
export const PONTOS_MAX = 1000 * N_PERGUNTAS;
