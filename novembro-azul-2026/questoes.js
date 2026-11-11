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
  ,
  // ---------- Mito ou Verdade? (saúde do homem, alargado) ----------
  { t: "tf", g: "testiculo", s: "O cancro do testículo é mais frequente em homens jovens, entre os 15 e os 40 anos.", a: true, src: ACS,
    e: "É o cancro mais comum nos homens jovens. Detectado cedo, tem taxas de cura muito elevadas." },
  { t: "tf", g: "testiculo-sinais", s: "Conhecer o próprio corpo ajuda a notar alterações nos testículos, como um nódulo ou um inchaço.", a: true, src: "Fundação Movember",
    e: "Qualquer alteração nova deve ser mostrada ao médico, sem esperar." },
  { t: "tf", g: "testiculo-sinais", s: "Um nódulo sem dor num testículo pode ser ignorado.", a: false, src: ACS,
    e: "Muitos cancros do testículo começam com um nódulo que não dói. Deve ser sempre avaliado pelo médico." },
  { t: "tf", g: "tensao", s: "A tensão arterial alta, muitas vezes, não dá sintomas.", a: true, src: OMS,
    e: "Por isso é chamada «assassina silenciosa». A única forma de saber é medi-la regularmente." },
  { t: "tf", g: "tensao-valor", s: "Num adulto, considera-se tensão arterial alta a partir de 140/90 mmHg.", a: true, src: OMS,
    e: "Valores iguais ou superiores a 140/90 mmHg, em medições repetidas, indicam hipertensão." },
  { t: "tf", g: "diabetes", s: "A diabetes tipo 2 pode existir durante anos sem dar sintomas.", a: true, src: OMS,
    e: "Muitas pessoas só descobrem a diabetes numa análise de rotina. Medir a glicemia ajuda a detectá-la cedo." },
  { t: "tf", g: "tensao-medir", s: "Medir a tensão arterial só é necessário depois dos 60 anos.", a: false, src: OMS,
    e: "Todos os adultos devem medir a tensão regularmente, sobretudo a partir dos 40 anos ou com excesso de peso." },
  { t: "tf", g: "depressao", s: "A depressão é um sinal de fraqueza.", a: false, src: OMS,
    e: "A depressão é uma doença comum e tratável, não uma fraqueza. Falar com um profissional de saúde é o primeiro passo." },
  { t: "tf", g: "ajuda", s: "Pedir ajuda para a saúde mental é um sinal de força.", a: true, src: "Fundação Movember",
    e: "Falar sobre o que se sente e pedir ajuda faz parte de cuidar da saúde, tal como ir ao médico." },
  { t: "tf", g: "sono", s: "Para a maioria dos adultos, recomenda-se dormir pelo menos 7 horas por noite.", a: true, src: "CDC (EUA)",
    e: "Dormir pouco de forma habitual está associado a mais doenças cardíacas, diabetes e acidentes." },
  { t: "tf", g: "colorrectal", s: "Para quem tem risco médio, o rastreio do cancro colorrectal deve começar aos 45 anos.", a: true, src: ACS,
    e: "A American Cancer Society recomenda começar aos 45 anos. Fale com o médico sobre o exame mais indicado." },
  { t: "tf", g: "colorrectal-sinais", s: "Sangue nas fezes deve ser sempre avaliado por um médico.", a: true, src: ACS,
    e: "Pode ter causas benignas, mas também pode ser sinal de cancro colorrectal. Não deve ser ignorado." },
  { t: "tf", g: "sal", s: "O sal em excesso aumenta a tensão arterial.", a: true, src: OMS,
    e: "Reduzir o sal é uma das formas mais eficazes de baixar a tensão arterial e o risco de AVC." },
  { t: "tf", g: "sal-limite", s: "A OMS recomenda consumir menos de 5 gramas de sal por dia.", a: true, src: OMS,
    e: "Menos de 5 g por dia, o que corresponde a cerca de uma colher de chá rasa." },
  { t: "tf", g: "t14", s: "O cigarro electrónico é totalmente inofensivo.", a: false, src: OMS,
    e: "A OMS considera que os cigarros electrónicos têm riscos para a saúde, sobretudo para o coração e os pulmões." },
  { t: "tf", g: "passivo", s: "Respirar o fumo do tabaco dos outros também faz mal à saúde.", a: true, src: OMS,
    e: "O fumo passivo causa doenças cardíacas e pulmonares em quem não fuma. Não existe um nível seguro." },
  { t: "tf", g: "t0", s: "Os check-ups regulares servem apenas para quem já está doente.", a: false, src: OMS,
    e: "Servem precisamente para detectar problemas antes de aparecerem sintomas." },
  { t: "tf", g: "acucar", s: "Trocar os refrigerantes por água ajuda a reduzir o açúcar na alimentação.", a: true, src: OMS,
    e: "Os refrigerantes são uma das principais fontes de açúcar. A água é a melhor escolha para o dia-a-dia." },
  { t: "tf", g: "acucar-limite", s: "A OMS recomenda que os açúcares livres sejam menos de 10% da energia diária.", a: true, src: OMS,
    e: "E, idealmente, menos de 5%. Os açúcares livres incluem o açúcar adicionado e o dos sumos." },
  { t: "tf", g: "t15", s: "Caminhar a passo rápido conta como actividade física moderada.", a: true, src: OMS,
    e: "Não é preciso ir ao ginásio: caminhar a passo rápido 30 minutos, 5 dias por semana, já cumpre a recomendação." },
  { t: "tf", g: "sentado", s: "Passar muitas horas sentado não tem efeito na saúde.", a: false, src: OMS,
    e: "O sedentarismo aumenta o risco de várias doenças. Levantar-se e mexer-se ao longo do dia ajuda." },
  { t: "tf", g: "cintura", s: "Um perímetro abdominal elevado é um sinal de risco para o coração.", a: true, src: OMS,
    e: "Nos homens, o risco aumenta acima de 94 cm e é elevado acima de 102 cm." },
  { t: "tf", g: "stress", s: "O stress prolongado pode afectar a saúde física.", a: true, src: OMS,
    e: "Pode afectar o sono, a tensão arterial e o coração. Exercício, descanso e conversar com alguém ajudam." },
  { t: "tf", g: "ajuda", s: "Conversar com um amigo sobre um problema pode ajudar a aliviar o peso que sentimos.", a: true, src: "Fundação Movember",
    e: "Uma conversa simples pode fazer a diferença. Perguntar «Como estás?» e ouvir também ajuda os outros." },
  { t: "tf", g: "t10", s: "Na maioria dos homens, a próstata vai aumentando de tamanho com a idade.", a: true, src: ACS,
    e: "É o chamado aumento benigno, muito comum depois dos 50 anos. Não é cancro, mas deve ser acompanhado." },
  { t: "tf", g: "t1", s: "Só quem tem sintomas precisa de conhecer o histórico de saúde da família.", a: false, src: ACS,
    e: "Conhecer as doenças da família ajuda o médico a decidir quando começar a vigilância, mesmo sem sintomas." },
  { t: "tf", g: "brca", s: "Ter familiares com cancro da mama ou do ovário pode aumentar o risco de cancro da próstata.", a: true, src: ACS,
    e: "Alterações em genes como o BRCA2 aumentam o risco de vários cancros, incluindo o da próstata." },
  { t: "tf", g: "tratamento", s: "O cancro da próstata pode ser tratado de várias formas, conforme cada caso.", a: true, src: ACS,
    e: "Cirurgia, radioterapia, terapia hormonal ou vigilância: o médico escolhe com o doente a melhor opção." },
  { t: "tf", g: "vigilancia", s: "Em alguns cancros da próstata de crescimento lento, o médico pode propor apenas vigilância activa.", a: true, src: ACS,
    e: "Significa acompanhar com exames regulares e tratar apenas se a doença evoluir." },
  { t: "tf", g: "hpv", s: "A vacina contra o HPV também pode proteger os rapazes de alguns cancros.", a: true, src: ACS,
    e: "O HPV pode causar cancros da garganta, do ânus e do pénis. A vacina reduz esse risco." },
  { t: "tf", g: "t-alcool", s: "O álcool aumenta o risco de vários tipos de cancro.", a: true, src: OMS,
    e: "O álcool está associado a pelo menos sete tipos de cancro, incluindo os do fígado, do esófago e do intestino." },
  { t: "tf", g: "mama-h", s: "Os homens também podem ter cancro da mama.", a: true, src: ACS,
    e: "É raro, mas acontece. Um nódulo no peito de um homem também deve ser visto pelo médico." },
  { t: "tf", g: "apneia", s: "Ressonar alto, com pausas na respiração durante o sono, deve ser avaliado pelo médico.", a: true, src: "CDC (EUA)",
    e: "Pode ser apneia do sono, que aumenta o risco de tensão alta, doenças cardíacas e acidentes por sonolência." },
  { t: "tf", g: "diabetes-risco", s: "A obesidade aumenta o risco de diabetes tipo 2.", a: true, src: OMS,
    e: "O excesso de peso é o principal factor de risco evitável da diabetes tipo 2." },
  { t: "tf", g: "t16", s: "Comer fruta e legumes todos os dias ajuda a prevenir doenças crónicas.", a: true, src: OMS,
    e: "A OMS recomenda pelo menos 400 g de fruta e legumes por dia." },
  { t: "tf", g: "maos", s: "Lavar as mãos é uma das formas mais simples de prevenir infecções.", a: true, src: OMS,
    e: "Lavar as mãos com água e sabão, durante 40 a 60 segundos, evita muitas doenças." },
  { t: "tf", g: "cansaco", s: "Estar acordado há cerca de 18 horas pode afectar a condução de forma semelhante ao álcool.", a: true, src: "CDC (EUA)",
    e: "A falta de sono reduz os reflexos e a atenção. Conduzir cansado é perigoso." },
  { t: "tf", g: "cinto", s: "O cinto de segurança só é necessário em viagens longas.", a: false, src: OMS,
    e: "O cinto reduz muito o risco de morte em qualquer viagem, curta ou longa, à frente e atrás." },
  { t: "tf", g: "cinto", s: "Usar o telemóvel enquanto se conduz aumenta o risco de acidente.", a: true, src: OMS,
    e: "Ler ou escrever mensagens ao volante distrai e aumenta muito o risco de acidente." },
  { t: "tf", g: "t5", s: "O resultado do PSA deve ser interpretado pelo médico, tendo em conta a idade e outros factores.", a: true, src: ACS,
    e: "Não existe um valor igual para todos. O médico avalia o PSA em conjunto com a idade, o histórico e outros exames." },
  { t: "tf", g: "t8", s: "Dor ao urinar ou ao ejacular é um sinal que justifica uma consulta.", a: true, src: ACS,
    e: "Pode ter várias causas, incluindo infecções. Só o médico pode avaliar." },
  { t: "tf", g: "erectil", s: "A disfunção eréctil pode ser um sinal de alerta de doença do coração.", a: true, src: "American Heart Association",
    e: "Pode indicar problemas nos vasos sanguíneos. Vale a pena falar com o médico sem vergonha." },
  { t: "tf", g: "dentes", s: "A saúde da boca não tem relação com a saúde geral.", a: false, src: OMS,
    e: "As doenças da boca estão associadas a doenças cardíacas e à diabetes. Escovar os dentes e ir ao dentista conta." },
  { t: "tf", g: "forca", s: "A OMS recomenda aos adultos exercícios de força pelo menos 2 dias por semana.", a: true, src: OMS,
    e: "Exercícios que trabalham os principais grupos musculares, além da actividade aeróbica." },
  { t: "tf", g: "idoso-ex", s: "A partir dos 65 anos, deixa de valer a pena fazer actividade física.", a: false, src: OMS,
    e: "A actividade física traz benefícios em qualquer idade, incluindo melhor equilíbrio e menos quedas." },

  // ---------- Escolha múltipla (saúde do homem, alargado) ----------
  { t: "mc", g: "testiculo", s: "Em que idades é mais frequente o cancro do testículo?",
    o: ["Entre os 15 e os 40 anos", "Entre os 50 e os 70 anos", "Depois dos 80 anos"], a: 0, src: ACS,
    e: "É o cancro mais frequente nos homens jovens. Por isso, conhecer o corpo é importante desde cedo." },
  { t: "mc", g: "testiculo-sinais", s: "Qual destes pode ser um sinal de cancro do testículo?",
    o: ["Um nódulo ou inchaço num testículo", "Unhas fracas", "Soluços"], a: 0, src: ACS,
    e: "Um nódulo, inchaço ou sensação de peso no escroto deve ser visto pelo médico." },
  { t: "mc", g: "tensao-valor", s: "A partir de que valor a tensão arterial é considerada alta?",
    o: ["120/80 mmHg", "140/90 mmHg", "200/120 mmHg"], a: 1, src: OMS,
    e: "A partir de 140/90 mmHg, em medições repetidas, considera-se hipertensão." },
  { t: "mc", g: "sal-limite", s: "Qual é o limite diário de sal recomendado pela OMS?",
    o: ["Menos de 5 g (cerca de uma colher de chá)", "Até 15 g", "Não há limite"], a: 0, src: OMS,
    e: "Menos de 5 g por dia. Grande parte do sal vem de alimentos processados." },
  { t: "mc", g: "sono", s: "Quantas horas de sono por noite se recomendam à maioria dos adultos?",
    o: ["4 horas", "Pelo menos 7 horas", "12 horas"], a: 1, src: "CDC (EUA)",
    e: "Pelo menos 7 horas. Dormir pouco de forma habitual prejudica a saúde." },
  { t: "mc", g: "colorrectal", s: "Para quem tem risco médio, a partir de que idade se recomenda o rastreio do cancro colorrectal?",
    o: ["25 anos", "45 anos", "75 anos"], a: 1, src: ACS,
    e: "Aos 45 anos, segundo a American Cancer Society. O médico indica o exame mais adequado." },
  { t: "mc", g: "diabetes-risco", s: "Qual destes é um factor de risco de diabetes tipo 2?",
    o: ["Excesso de peso", "Beber água", "Dormir 8 horas"], a: 0, src: OMS,
    e: "O excesso de peso e o sedentarismo são os principais factores de risco evitáveis." },
  { t: "mc", g: "tensao", s: "Que doença é muitas vezes chamada «assassina silenciosa»?",
    o: ["A hipertensão", "A gripe", "A constipação"], a: 0, src: OMS,
    e: "A tensão alta raramente dá sintomas, mas aumenta muito o risco de AVC e enfarte." },
  { t: "mc", g: "forca", s: "Com que frequência a OMS recomenda exercícios de força aos adultos?",
    o: ["Nunca", "Pelo menos 2 dias por semana", "Todos os dias, 3 horas"], a: 1, src: OMS,
    e: "Pelo menos 2 dias por semana, trabalhando os principais grupos musculares." },
  { t: "mc", g: "cinto", s: "Qual destes comportamentos reduz o risco de acidente ao volante?",
    o: ["Usar sempre o cinto e não usar o telemóvel", "Responder a mensagens nos semáforos", "Conduzir com sono"], a: 0, src: OMS,
    e: "Cinto sempre posto, telemóvel guardado e nunca conduzir cansado." },
  { t: "mc", g: "sono-h", s: "Qual destes hábitos ajuda a dormir melhor?",
    o: ["Ter um horário regular para deitar", "Usar o telemóvel na cama até tarde", "Beber café à noite"], a: 0, src: "CDC (EUA)",
    e: "Horários regulares, quarto escuro e menos ecrãs antes de dormir melhoram o sono." },
  { t: "mc", g: "vigilancia", s: "O que é a «vigilância activa» no cancro da próstata?",
    o: ["Acompanhar com exames regulares um cancro de crescimento lento", "Fazer exercício intenso", "Tomar vitaminas"], a: 0, src: ACS,
    e: "Em cancros de baixo risco, evita tratamentos desnecessários sem deixar de vigiar." },
  { t: "mc", g: "t11", s: "Qual destes órgãos só existe nos homens?",
    o: ["A próstata", "O fígado", "Os rins"], a: 0, src: ACS,
    e: "A próstata faz parte do sistema reprodutor masculino." },
  { t: "mc", g: "cintura", s: "Nos homens, a partir de que perímetro abdominal o risco para a saúde aumenta?",
    o: ["Mais de 94 cm", "Mais de 60 cm", "Mais de 150 cm"], a: 0, src: OMS,
    e: "Acima de 94 cm o risco aumenta; acima de 102 cm é elevado." },
  { t: "mc", g: "acucar-limite", s: "Segundo a OMS, que parte da energia diária deve vir, no máximo, de açúcares livres?",
    o: ["Menos de 10%", "Cerca de 50%", "Não há limite"], a: 0, src: OMS,
    e: "Menos de 10%, e idealmente menos de 5%." },
  { t: "mc", g: "acucar", s: "Qual destas bebidas é a melhor escolha para o dia-a-dia?",
    o: ["Água", "Refrigerante", "Bebida energética"], a: 0, src: OMS,
    e: "A água hidrata sem açúcar nem calorias." },
  { t: "mc", g: "depressao", s: "Qual destes pode ser um sinal de depressão?",
    o: ["Tristeza e falta de interesse durante semanas", "Ter fome antes do almoço", "Espirrar com o pó"], a: 0, src: OMS,
    e: "Quando dura mais de duas semanas e afecta o dia-a-dia, deve falar com um profissional de saúde." },
  { t: "mc", g: "ajuda", s: "Um colega parece em baixo há várias semanas. O que é melhor fazer?",
    o: ["Perguntar como está e ouvir", "Ignorar", "Fazer piadas sobre isso"], a: 0, src: "Fundação Movember",
    e: "Perguntar, ouvir, incentivar a procurar ajuda e voltar a falar mais tarde." },
  { t: "mc", g: "t15", s: "Qual destes é um exemplo de actividade física moderada?",
    o: ["Caminhar a passo rápido", "Ver televisão", "Conduzir"], a: 0, src: OMS,
    e: "Caminhar a passo rápido, subir escadas ou andar de bicicleta são boas opções." },
  { t: "mc", g: "brca", s: "Alterações nos genes BRCA aumentam o risco de que cancro nos homens?",
    o: ["Cancro da próstata", "Nenhum", "Só cancro da pele"], a: 0, src: ACS,
    e: "Também aumentam o risco de cancro da mama e do pâncreas. Conhecer o histórico familiar ajuda o médico." },
  { t: "mc", g: "mama-h", s: "Qual destes cancros também pode afectar os homens?",
    o: ["Cancro da mama", "Cancro do colo do útero", "Cancro do ovário"], a: 0, src: ACS,
    e: "O cancro da mama nos homens é raro, mas existe." },
  { t: "mc", g: "colorrectal-sinais", s: "Qual destes é um sinal de alerta de cancro colorrectal?",
    o: ["Sangue nas fezes", "Pele seca", "Cabelo branco"], a: 0, src: ACS,
    e: "Sangue nas fezes ou alterações persistentes do trânsito intestinal devem ser avaliados." },
  { t: "mc", g: "coracao", s: "Qual destes é um factor de risco de doença cardíaca?",
    o: ["Fumar", "Caminhar", "Comer legumes"], a: 0, src: OMS,
    e: "Tabaco, tensão alta, colesterol, diabetes e sedentarismo aumentam o risco de doença cardíaca." },
  { t: "mc", g: "erectil", s: "A disfunção eréctil pode estar ligada a que problema de saúde?",
    o: ["Doença cardiovascular", "Miopia", "Caspa"], a: 0, src: "American Heart Association",
    e: "Pode ser um sinal precoce de problemas nos vasos sanguíneos." },
  { t: "mc", g: "sal", s: "Qual destes alimentos tem, normalmente, mais sal escondido?",
    o: ["Enchidos e comida processada", "Fruta fresca", "Água"], a: 0, src: OMS,
    e: "A maior parte do sal vem de alimentos processados, pão, enchidos e molhos." },
  { t: "mc", g: "t14", s: "Fumar aumenta muito o risco de que doença?",
    o: ["Cancro do pulmão", "Daltonismo", "Alergia ao pólen"], a: 0, src: OMS,
    e: "O tabaco é a principal causa de cancro do pulmão." },
  { t: "mc", g: "diabetes", s: "Que análise mede o açúcar no sangue?",
    o: ["A glicemia", "O audiograma", "A radiografia ao pé"], a: 0, src: OMS,
    e: "A glicemia ajuda a detectar a diabetes cedo." },
  { t: "mc", g: "apneia", s: "Quem ressona alto, com pausas na respiração, deve…",
    o: ["Falar com o médico", "Beber café para ficar acordado", "Ignorar"], a: 0, src: "CDC (EUA)",
    e: "Pode ser apneia do sono, que tem tratamento." },
  { t: "mc", g: "deixar", s: "Qual é um bom primeiro passo para deixar de fumar?",
    o: ["Marcar uma data e pedir apoio", "Esperar ficar doente", "Fumar só ao fim-de-semana"], a: 0, src: OMS,
    e: "Marcar uma data, pedir apoio ao médico e à família e evitar as situações em que se fuma." },
  { t: "mc", g: "deixar", s: "Quanto tempo depois de deixar de fumar o risco de doença coronária cai para cerca de metade?",
    o: ["Cerca de 1 ano", "Nunca", "50 anos"], a: 0, src: OMS,
    e: "Ao fim de um ano, o risco de doença coronária cai para cerca de metade do de um fumador." },
  { t: "mc", g: "t8", s: "Qual destes sinais urinários justifica uma consulta?",
    o: ["Levantar-se várias vezes por noite para urinar", "Urinar depois de beber água", "Ter sede depois do exercício"], a: 0, src: ACS,
    e: "Pode ser aumento benigno da próstata ou outro problema. O médico avalia." },
  { t: "mc", g: "t11", s: "O que é a uretra?",
    o: ["O canal por onde passa a urina", "Um osso da anca", "Uma glândula do pescoço"], a: 0, src: ACS,
    e: "A uretra atravessa a próstata, por isso o aumento da próstata pode dificultar a micção." },
  { t: "mc", g: "t11", s: "Que órgão fica logo acima da próstata?",
    o: ["A bexiga", "O coração", "O estômago"], a: 0, src: ACS,
    e: "A próstata fica logo abaixo da bexiga." },
  { t: "mc", g: "uro", s: "Que médico especialista trata os problemas da próstata?",
    o: ["O urologista", "O oftalmologista", "O dermatologista"], a: 0, src: ACS,
    e: "O médico de família pode encaminhar para o urologista quando necessário." },
  { t: "mc", g: "tratamento", s: "Qual destes é um tratamento possível para o cancro da próstata?",
    o: ["Cirurgia ou radioterapia", "Antibiótico para a gripe", "Óculos"], a: 0, src: ACS,
    e: "Há várias opções, escolhidas pelo médico com o doente conforme cada caso." },
  { t: "mc", g: "stress", s: "Qual destas é uma boa forma de lidar com o stress?",
    o: ["Fazer exercício e conversar com alguém", "Beber mais álcool", "Dormir menos"], a: 0, src: OMS,
    e: "Exercício, descanso, rotinas e apoio de pessoas próximas ajudam a gerir o stress." },
  { t: "mc", g: "dentes", s: "Qual destes hábitos protege os dentes e as gengivas?",
    o: ["Escovar duas vezes por dia com pasta com flúor", "Escovar uma vez por semana", "Usar só pastilha elástica"], a: 0, src: OMS,
    e: "Escovar duas vezes por dia com pasta com flúor e reduzir o açúcar protegem a boca." },
  { t: "mc", g: "t0", s: "Qual é o principal objectivo de um check-up?",
    o: ["Detectar problemas antes de haver sintomas", "Receber um certificado", "Mudar de médico"], a: 0, src: OMS,
    e: "Detectar cedo permite tratar mais cedo e com mais sucesso." },
  { t: "mc", g: "maos", s: "Durante quanto tempo se devem lavar as mãos com água e sabão?",
    o: ["Cerca de 40 a 60 segundos", "2 segundos", "10 minutos"], a: 0, src: OMS,
    e: "A OMS recomenda 40 a 60 segundos, esfregando todas as partes das mãos." },
  { t: "mc", g: "t-alcool", s: "Que efeito tem o álcool na condução?",
    o: ["Diminui os reflexos e aumenta o risco de acidente", "Melhora a atenção", "Não tem efeito"], a: 0, src: OMS,
    e: "Mesmo pequenas quantidades de álcool afectam a condução." },
  { t: "mc", g: "cansaco", s: "Ao fim de quantas horas acordado a condução pode ficar afectada como com álcool no sangue?",
    o: ["Cerca de 18 horas", "2 horas", "Nunca"], a: 0, src: "CDC (EUA)",
    e: "A partir de cerca de 18 horas sem dormir, os efeitos são semelhantes aos do álcool." },
  { t: "mc", g: "cinto", s: "Que equipamento reduz muito o risco de morte num acidente de carro?",
    o: ["O cinto de segurança", "O rádio", "O ar condicionado"], a: 0, src: OMS,
    e: "O cinto reduz em cerca de metade o risco de morte de quem vai à frente." },
  { t: "mc", g: "sal", s: "Qual destes hábitos ajuda a controlar a tensão arterial?",
    o: ["Comer menos sal", "Fumar", "Dormir 3 horas por noite"], a: 0, src: OMS,
    e: "Menos sal, mais actividade física, não fumar e moderar o álcool ajudam a controlar a tensão." },
  { t: "mc", g: "sentado", s: "O que recomenda a OMS sobre o tempo que passamos sentados?",
    o: ["Reduzir e intercalar com movimento", "Ficar sentado o máximo possível", "Não há recomendação"], a: 0, src: OMS,
    e: "Reduzir o tempo sentado e substituí-lo por qualquer actividade, mesmo leve, traz benefícios." }
];

BANCO.forEach((q, i) => { q.id = i; });   // identificador estável de cada pergunta (para a revisão)

// Temas: perguntas sobre o mesmo assunto nunca saem à mesma pessoa (para não parecerem repetidas)
const TEMAS = [
  [0, 1, 51], [2, 44], [3, 33], [4, 34, 35, 57, 43], [5, 38, 45], [20, 25, 54], [6, 59], [7, 27, 58],
  [8, 24], [15, 50], [9, 19, 52], [10, 18, 36, 42], [11, 31, 48], [40, 47], [17, 22, 55], [13, 39, 46],
  [28, 53], [16, 41], [29, 60], [37, 56], [32, 49]
];
BANCO.forEach(q => { q.tema = q.g || ("q" + q.id); });
TEMAS.forEach((g, k) => g.forEach(id => { BANCO[id].tema = "t" + k; }));
BANCO[30].tema = "t-alcool";

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
// Escolhe n perguntas da lista (por ordem), sem repetir temas já usados por esta pessoa
function semTemasRepetidos(lista, n, usados) {
  const out = [];
  for (const q of lista) { if (out.length >= n) break; if (!usados.has(q.tema)) { out.push(q); usados.add(q.tema); } }
  return out;
}
export function sortear(semente, evitar = []) {
  const rnd = gerador(String(semente || Math.random()));
  const vistas = new Set(evitar), usados = new Set();
  const escolher = (tipo) => {
    const todas = baralhar(BANCO.filter(q => q.t === tipo), rnd);
    return semTemasRepetidos(todas.filter(q => !vistas.has(q.id)).concat(todas.filter(q => vistas.has(q.id))), N_PERGUNTAS / 2, usados);
  };
  const tf = escolher("tf");
  const mc = escolher("mc").map(q => {
    const ordem = baralhar(q.o.map((_, k) => k), rnd);          // baralhar as opções
    return { ...q, o: ordem.map(k => q.o[k]), a: ordem.indexOf(q.a) };
  });
  return baralhar(tf.concat(mc), rnd);
}

// Tamanho do grupo sem nenhuma pergunta em comum: quantas pessoas cabem no banco (6 + 6 perguntas cada)
export const GRUPO = Math.floor(Math.min(BANCO.filter(q => q.t === "tf").length, BANCO.filter(q => q.t === "mc").length) / (N_PERGUNTAS / 2));
// Distribuição equilibrada numa sala: o k-ésimo participante (por ordem de entrada) recebe um bloco próprio.
// Cada grupo de GRUPO participantes seguidos recebe perguntas totalmente diferentes entre si; entre grupos,
// o banco é baralhado de novo. Assim, as 61 perguntas são usadas por igual e nenhum par tem as mesmas 12.
export function blocoSala(sala, k) {
  const n = N_PERGUNTAS / 2, G = GRUPO, g = Math.floor(k / G), pos = k % G;
  // Reparte o banco pelos G participantes do grupo: cada pergunta vai para um só deles e ninguém recebe dois do mesmo tema
  const blocos = Array.from({ length: G }, () => ({ usados: new Set(), ids: [] }));
  for (const tipo of ["tf", "mc"]) {
    const pool = baralhar(BANCO.filter(q => q.t === tipo), gerador(`${sala}:${tipo}:${g}`));
    const livres = new Set(pool.map(q => q.id));
    for (let r = 0; r < n; r++) for (const b of blocos) {
      let q = pool.find(x => livres.has(x.id) && !b.usados.has(x.tema));
      if (!q) q = pool.find(x => !b.usados.has(x.tema) && !b.ids.includes(x.id));   // reserva: pode coincidir com um colega do grupo
      if (!q) continue;
      livres.delete(q.id); b.usados.add(q.tema); b.ids.push(q.id);
    }
  }
  return blocos[pos].ids;
}
// Monta a lista a partir dos ids: ordem das perguntas e das opções baralhada (sempre igual para a mesma semente)
export function montar(ids, semente) {
  const rnd = gerador(String(semente));
  const lista = ids.map(id => BANCO[id]).filter(Boolean).map(q => {
    if (q.t !== "mc") return q;
    const ordem = baralhar(q.o.map((_, k) => k), rnd);
    return { ...q, o: ordem.map(k => q.o[k]), a: ordem.indexOf(q.a) };
  });
  return baralhar(lista, rnd);
}

// Pontuação ao estilo dos quizzes ao vivo: resposta certa vale entre 500 e 1000 pontos,
// conforme a rapidez (perde-se 25 pontos por segundo, até 20 segundos).
export function pontosPara(certa, segundos) {
  if (!certa) return 0;
  return Math.round(1000 - Math.min(500, Math.max(0, segundos) * 25));
}
export const PONTOS_MAX = 1000 * N_PERGUNTAS;
