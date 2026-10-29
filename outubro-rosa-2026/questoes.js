// Perguntas do quiz «Mito ou Verdade?» — Outubro Rosa 2026
// t: "tf" (Verdade/Mito, a = true/false) ou "mc" (escolha múltipla, a = índice da opção certa)
const ACS = "American Cancer Society", OMS = "OMS", IARC = "OMS / IARC — GLOBOCAN 2024";

export const QUESTOES = [
  { t: "tf", s: "O cancro da mama dói sempre.", a: false, src: ACS,
    e: "Muitas vezes não dói, sobretudo no início. Um nódulo sem dor também deve ser visto por um médico." },
  { t: "mc", s: "Qual é o principal factor de risco para o cancro da mama?",
    o: ["Usar desodorizante", "Ser mulher e a idade avançar", "Ter mamas grandes", "Beber café"], a: 1, src: ACS,
    e: "Ser mulher e envelhecer são os factores de risco mais importantes. A maioria dos casos surge depois dos 50 anos." },
  { t: "tf", s: "Ter mãe, irmã ou filha com cancro da mama aumenta o risco.", a: true, src: ACS,
    e: "Ter uma familiar directa com a doença quase duplica o risco. Mesmo assim, a maioria das mulheres diagnosticadas não tem casos na família." },
  { t: "mc", s: "Quantos novos casos de cancro da mama houve no mundo em 2024?",
    o: ["Cerca de 240 mil", "Cerca de 2,4 milhões", "Cerca de 24 milhões"], a: 1, src: IARC,
    e: "Foram cerca de 2,4 milhões de novos casos e quase 694 mil mortes. São mais de 4 diagnósticos por minuto." },
  { t: "mc", s: "Qual destas situações é normal e, em geral, NÃO é sinal de alerta?",
    o: ["Pele com aspecto de casca de laranja", "Mamilo que passou a estar retraído", "Uma mama ligeiramente maior do que a outra desde sempre", "Um nódulo novo na axila"], a: 2, src: ACS,
    e: "Ter mamas um pouco diferentes é comum. O que conta é a mudança: o que é novo ou diferente do habitual deve ser visto por um médico." },
  { t: "tf", s: "Mulheres jovens não têm cancro da mama.", a: false, src: ACS,
    e: "É menos frequente antes dos 40 anos, mas pode acontecer. Em qualquer idade, uma alteração na mama merece atenção." },
  { t: "tf", s: "O consumo de álcool aumenta o risco de cancro da mama.", a: true, src: OMS + " / IARC",
    e: "Sim, e o risco cresce com a quantidade. Mesmo o consumo moderado tem efeito. Menos álcool é melhor." },
  { t: "mc", s: "Que hábito ajuda comprovadamente a reduzir o risco?",
    o: ["Evitar desodorizante", "Praticar actividade física regularmente", "Dormir sem soutien"], a: 1, src: ACS,
    e: "Mexer-se com regularidade, manter um peso saudável e beber pouco ou nenhum álcool reduzem o risco. Os outros dois não têm efeito." },
  { t: "tf", s: "Amamentar pode reduzir o risco de cancro da mama.", a: true, src: OMS,
    e: "A amamentação, sobretudo quando se prolonga, está associada a um risco menor." },
  { t: "tf", s: "A mamografia pode detectar o cancro antes de se sentir qualquer nódulo.", a: true, src: ACS,
    e: "É essa a sua grande vantagem: encontrar a doença numa fase inicial, quando o tratamento resulta melhor." },
  { t: "mc", s: "Para uma mulher sem risco elevado, a partir de que idade se pode começar a mamografia anual?",
    o: ["30 anos", "40 anos", "60 anos"], a: 1, src: ACS,
    e: "Dos 40 aos 44 anos é uma opção a falar com o médico, e a partir dos 45 é recomendada todos os anos. Com casos na família, a conversa deve começar mais cedo." },
  { t: "mc", s: "Quando o cancro da mama é detectado cedo e tratado, quantas mulheres sobrevivem pelo menos 5 anos?",
    o: ["Cerca de metade", "Cerca de 7 em cada 10", "Mais de 9 em cada 10"], a: 2, src: OMS,
    e: "Mais de 90%, em países com acesso a diagnóstico precoce e tratamento. Por isso, cada consulta conta." }
];

// Pontuação ao estilo dos quizzes ao vivo: resposta certa vale entre 500 e 1000 pontos,
// conforme a rapidez (perde-se 25 pontos por segundo, até 20 segundos).
export function pontosPara(certa, segundos) {
  if (!certa) return 0;
  return Math.round(1000 - Math.min(500, Math.max(0, segundos) * 25));
}
export const PONTOS_MAX = 1000 * QUESTOES.length;
