// Banco de perguntas do quiz «Mito ou Verdade?» — Outubro Rosa 2026
// Cada telemóvel recebe N_PERGUNTAS sorteadas (metade «Mito ou Verdade?», metade escolha múltipla),
// por ordem aleatória e com as opções baralhadas.
// t: "tf" (Verdade/Mito, a = true/false) ou "mc" (escolha múltipla, a = índice da opção certa na lista original)
const ACS = "American Cancer Society", OMS = "OMS", IARC = "OMS / IARC — GLOBOCAN 2024";

export const N_PERGUNTAS = 12;

export const BANCO = [
  // ---------- Mito ou Verdade? ----------
  { t: "tf", s: "O cancro da mama dói sempre.", a: false, src: ACS,
    e: "Muitas vezes não dói, sobretudo no início. Um nódulo sem dor também deve ser visto por um médico." },
  { t: "tf", s: "Ter mãe, irmã ou filha com cancro da mama aumenta o risco.", a: true, src: ACS,
    e: "Ter uma familiar directa com a doença quase duplica o risco. Mesmo assim, a maioria das mulheres diagnosticadas não tem casos na família." },
  { t: "tf", s: "Mulheres jovens não têm cancro da mama.", a: false, src: ACS,
    e: "É menos frequente antes dos 40 anos, mas pode acontecer. Em qualquer idade, uma alteração na mama merece atenção." },
  { t: "tf", s: "O consumo de álcool aumenta o risco de cancro da mama.", a: true, src: OMS + " / IARC",
    e: "Sim, e o risco cresce com a quantidade. Mesmo o consumo moderado tem efeito. Menos álcool é melhor." },
  { t: "tf", s: "Amamentar pode reduzir o risco de cancro da mama.", a: true, src: OMS,
    e: "A amamentação, sobretudo quando se prolonga, está associada a um risco menor." },
  { t: "tf", s: "A mamografia pode detectar o cancro antes de se sentir qualquer nódulo.", a: true, src: ACS,
    e: "É essa a sua grande vantagem: encontrar a doença numa fase inicial, quando o tratamento resulta melhor." },
  { t: "tf", s: "Os homens também podem ter cancro da mama.", a: true, src: ACS,
    e: "É raro (cerca de 1 em cada 100 casos), mas acontece. Os homens também devem estar atentos a alterações." },
  { t: "tf", s: "O desodorizante causa cancro da mama.", a: false, src: ACS,
    e: "Não há provas científicas de que desodorizantes ou antitranspirantes causem cancro da mama." },
  { t: "tf", s: "O soutien com aro causa cancro da mama.", a: false, src: ACS,
    e: "O tipo de soutien não aumenta o risco. Use o que for mais confortável para si." },
  { t: "tf", s: "A maioria dos nódulos na mama é cancro.", a: false, src: ACS,
    e: "A maioria dos nódulos é benigna, como quistos ou fibroadenomas. Mesmo assim, qualquer nódulo deve ser visto por um médico." },
  { t: "tf", s: "Só tem risco quem tem casos na família.", a: false, src: ACS,
    e: "A maioria das mulheres diagnosticadas não tem casos na família. Por isso, a atenção é para todas." },
  { t: "tf", s: "Uma pancada na mama pode causar cancro.", a: false, src: ACS,
    e: "Não há provas de que uma lesão ou pancada cause cancro da mama. Mas, se notar um nódulo que não desaparece, consulte o médico." },
  { t: "tf", s: "O excesso de peso depois da menopausa aumenta o risco.", a: true, src: ACS,
    e: "Depois da menopausa, o excesso de peso aumenta o risco. Manter um peso saudável é uma das melhores formas de prevenção." },
  { t: "tf", s: "A primeira menstruação muito cedo (antes dos 12 anos) aumenta ligeiramente o risco.", a: true, src: ACS,
    e: "Mais anos de exposição às hormonas femininas aumentam ligeiramente o risco. É um factor que não se controla, por isso a vigilância conta." },
  { t: "tf", s: "A menopausa tardia (depois dos 55 anos) aumenta ligeiramente o risco.", a: true, src: ACS,
    e: "Tal como a primeira menstruação precoce, a menopausa tardia prolonga a exposição às hormonas e aumenta ligeiramente o risco." },
  { t: "tf", s: "Fumar não tem qualquer relação com o cancro da mama.", a: false, src: ACS,
    e: "Vários estudos associam o tabaco a um risco maior, sobretudo quando se começa a fumar cedo. Deixar de fumar protege em todos os sentidos." },
  { t: "tf", s: "A mamografia é um exame de raio-X às mamas.", a: true, src: ACS,
    e: "Usa uma dose muito baixa de raios X para encontrar alterações que ainda não se sentem ao toque." },
  { t: "tf", s: "Depois de uma mamografia normal, não é preciso voltar a fazê-la.", a: false, src: ACS,
    e: "O rastreio é periódico. O seu médico diz-lhe de quanto em quanto tempo deve repeti-lo, conforme a idade e o risco." },
  { t: "tf", s: "Alterações na pele da mama podem ser um sinal de alerta.", a: true, src: ACS,
    e: "Pele repuxada, vermelha, espessada ou com aspecto de casca de laranja deve ser vista por um médico." },
  { t: "tf", s: "O cancro da mama é contagioso.", a: false, src: ACS,
    e: "Não se transmite de pessoa para pessoa. Apoiar e estar perto de quem está em tratamento só faz bem." },
  { t: "tf", s: "Alterações nos genes BRCA1 e BRCA2 aumentam muito o risco.", a: true, src: ACS,
    e: "São as alterações hereditárias mais conhecidas. Quem tem vários casos na família deve falar com o médico sobre aconselhamento genético." },
  { t: "tf", s: "A maioria dos cancros da mama é hereditária.", a: false, src: ACS,
    e: "Só cerca de 5 a 10% dos casos se devem a genes herdados. A maioria surge em mulheres sem essa herança." },
  { t: "tf", s: "Uma alimentação rica em legumes e fruta está associada a um risco menor.", a: true, src: ACS,
    e: "Comer mais legumes, fruta e cereais integrais, e menos carnes processadas, faz parte de um estilo de vida que protege." },
  { t: "tf", s: "Sensibilidade nas mamas antes da menstruação é sempre sinal de doença.", a: false, src: ACS,
    e: "É muito comum e costuma estar ligada às hormonas do ciclo. O que deve ser visto pelo médico é uma dor nova e persistente." },

  // ---------- Escolha múltipla ----------
  { t: "mc", s: "Qual é o principal factor de risco para o cancro da mama?",
    o: ["Usar desodorizante", "Ser mulher e a idade avançar", "Ter mamas grandes", "Beber café"], a: 1, src: ACS,
    e: "Ser mulher e envelhecer são os factores de risco mais importantes. A maioria dos casos surge depois dos 50 anos." },
  { t: "mc", s: "Quantos novos casos de cancro da mama houve no mundo em 2024?",
    o: ["Cerca de 240 mil", "Cerca de 2,4 milhões", "Cerca de 24 milhões"], a: 1, src: IARC,
    e: "Foram cerca de 2,4 milhões de novos casos e quase 694 mil mortes. São mais de 4 diagnósticos por minuto." },
  { t: "mc", s: "Qual destas situações é normal e, em geral, NÃO é sinal de alerta?",
    o: ["Pele com aspecto de casca de laranja", "Mamilo que passou a estar retraído", "Uma mama ligeiramente maior do que a outra desde sempre", "Um nódulo novo na axila"], a: 2, src: ACS,
    e: "Ter mamas um pouco diferentes é comum. O que conta é a mudança: o que é novo ou diferente do habitual deve ser visto por um médico." },
  { t: "mc", s: "Que hábito ajuda comprovadamente a reduzir o risco?",
    o: ["Evitar desodorizante", "Praticar actividade física regularmente", "Dormir sem soutien"], a: 1, src: ACS,
    e: "Mexer-se com regularidade, manter um peso saudável e beber pouco ou nenhum álcool reduzem o risco. Os outros dois não têm efeito." },
  { t: "mc", s: "Para uma mulher sem risco elevado, a partir de que idade se pode começar a mamografia anual?",
    o: ["30 anos", "40 anos", "60 anos"], a: 1, src: ACS,
    e: "Dos 40 aos 44 anos é uma opção a falar com o médico, e a partir dos 45 é recomendada todos os anos. Com casos na família, a conversa deve começar mais cedo." },
  { t: "mc", s: "Quando o cancro da mama é detectado cedo e tratado, quantas mulheres sobrevivem pelo menos 5 anos?",
    o: ["Cerca de metade", "Cerca de 7 em cada 10", "Mais de 9 em cada 10"], a: 2, src: OMS,
    e: "Mais de 90%, em países com acesso a diagnóstico precoce e tratamento. Por isso, cada consulta conta." },
  { t: "mc", s: "Que percentagem dos cancros da mama se deve a genes herdados?",
    o: ["Cerca de 5 a 10%", "Cerca de metade", "Quase todos"], a: 0, src: ACS,
    e: "Apenas 5 a 10%. A maioria dos casos surge sem herança genética, por isso a prevenção é para todas." },
  { t: "mc", s: "Qual destas alterações é um sinal de alerta?",
    o: ["Um nódulo novo na mama ou na axila", "Mamas ligeiramente diferentes desde sempre", "Sensibilidade nos dias antes da menstruação"], a: 0, src: ACS,
    e: "Um nódulo novo deve ser sempre avaliado. As outras duas situações são comuns e, em geral, normais." },
  { t: "mc", s: "Qual é o principal exame de rastreio do cancro da mama?",
    o: ["Mamografia", "Análise ao sangue", "Electrocardiograma"], a: 0, src: OMS,
    e: "A mamografia é o exame de referência para o rastreio. O médico pode juntar-lhe outros exames, como a ecografia." },
  { t: "mc", s: "Quantas pessoas morreram de cancro da mama no mundo em 2024, aproximadamente?",
    o: ["Cerca de 69 mil", "Cerca de 694 mil", "Cerca de 6,9 milhões"], a: 1, src: IARC,
    e: "Quase 694 mil mortes. Muitas poderiam ser evitadas com diagnóstico precoce e acesso a tratamento." },
  { t: "mc", s: "Segundo a OMS, quantas mulheres terão cancro da mama ao longo da vida?",
    o: ["1 em cada 2", "1 em cada 20", "1 em cada 2000"], a: 1, src: "OMS / IARC, 2025",
    e: "Cerca de 1 em cada 20 mulheres em todo o mundo. Por isso, conhecer o corpo e fazer o rastreio é para todas." },
  { t: "mc", s: "Que alteração no mamilo deve ser vista por um médico?",
    o: ["Saída de líquido, sobretudo com sangue, sem apertar", "Mamilos que ficam erectos com o frio", "Mamilos que sempre tiveram a mesma forma"], a: 0, src: ACS,
    e: "Saída de líquido espontânea, sobretudo com sangue, ou um mamilo que passou a estar retraído merecem avaliação." },
  { t: "mc", s: "O que significa «detecção precoce»?",
    o: ["Encontrar a doença numa fase inicial", "Tratar só quando há dor", "Fazer exames apenas depois dos 70 anos"], a: 0, src: OMS,
    e: "É encontrar o cancro cedo, quando é mais pequeno e o tratamento tem mais sucesso. É a melhor arma contra a doença." },
  { t: "mc", s: "Em média, quantos novos casos de cancro da mama são diagnosticados por minuto no mundo?",
    o: ["Cerca de 1 por hora", "Mais de 4 por minuto", "Cerca de 100 por minuto"], a: 1, src: IARC,
    e: "Com cerca de 2,4 milhões de casos por ano, são mais de 4 diagnósticos por minuto." }
];

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

export function sortear(semente) {
  const rnd = gerador(String(semente || Math.random()));
  const tf = baralhar(BANCO.filter(q => q.t === "tf"), rnd).slice(0, N_PERGUNTAS / 2);
  const mc = baralhar(BANCO.filter(q => q.t === "mc"), rnd).slice(0, N_PERGUNTAS / 2).map(q => {
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
