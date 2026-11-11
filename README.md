# CI-ZX-campanhas-saude

Portal das campanhas de saúde da ConsultIT e da Zentrix, publicado com GitHub Pages.
Uma só página, sempre do tamanho do ecrã, com cinco vistas:

| Vista | Endereço | Para quê |
|---|---|---|
| Início | `/` | Portal com os botões «Ver o vídeo» e «Fazer o quiz» e o QR Code |
| Vídeo | `/#video` | Vídeo de sensibilização |
| Quiz individual | `/#quiz` | Quiz sem ranking, para quem visita o portal |
| Quiz com ranking | `/?sala=CÓDIGO` | O que o telemóvel abre ao ler o QR do ecrã de ranking |
| Ranking | `/#ranking` | Ecrã do apresentador: QR, classificação ao vivo, pódio |

## Estrutura

```
index.html                      A página (todas as vistas)
firestore.rules                 Regras de segurança do Firestore
assets/                         Selo, laço, imagem de partilha, biblioteca de QR (MIT)
outubro-rosa-2026/
  questoes.js                   As 12 perguntas e a regra de pontuação
  firebase-config.js            Configuração do Firebase (preencher)
  video.mp4, poster.jpg         Vídeo e imagem de capa
```

## Pontuação

Resposta certa: entre 1000 e 500 pontos, conforme a rapidez (menos 25 pontos por segundo, até 20 s).
Resposta errada: 0. Desempate: mais respostas certas e, depois, quem terminou primeiro.

## Configurar o Firebase (uma vez, cerca de 5 minutos)

1. Em <https://console.firebase.google.com>, **Adicionar projecto** (por exemplo `ci-zx-campanhas`). O Google Analytics pode ficar desligado.
2. **Build → Authentication → Começar → Método de início de sessão → Anónimo → Activar → Guardar.**
3. **Build → Firestore Database → Criar base de dados →** modo de produção, localização `africa-south1 (Joanesburgo)` ou `europe-west1`.
4. No Firestore, separador **Regras**: apagar o conteúdo, colar o de `firestore.rules` e **Publicar**.
5. **Definições do projecto (roda dentada) → As suas aplicações → Web (`</>`)**, registar a aplicação (sem Hosting) e copiar o objecto `firebaseConfig`.
6. Colar esses valores em `outubro-rosa-2026/firebase-config.js` (substituir cada `COLAR_AQUI`) e fazer commit.
7. Em **Authentication → Definições → Domínios autorizados**, confirmar que existe `hfernandesao-max.github.io` (acrescentar se não existir).

Os valores de `firebaseConfig` identificam o projecto e podem estar num repositório público; quem protege os dados são as regras do Firestore (cada telemóvel só escreve a sua própria linha, com limites de pontos).

## Protecção de dados e segurança

- **Apagamento automático (30 dias):** em Firestore → *Time-to-live (TTL)* → *Criar política*: grupo de colecções `jogadores`, campo `expira`.
- **Chave restrita ao site:** em Google Cloud Console → *APIs e serviços* → *Credenciais* → chave «Browser key» → *Restrições de aplicações: Referenciadores HTTP* → `hfernandesao-max.github.io/*` (e o domínio novo, quando existir).
- O ranking mostra só os 10 primeiros; as restantes aparecem como «+ N participantes».

## No dia

1. No portátil ligado ao projector, abrir o portal e tocar em **Fazer o quiz**: a página passa a ecrã inteiro e mostra o QR da sala em grande.
2. As colaboradoras lêem o QR, escrevem o nome e respondem às 12 perguntas; o ecrã muda sozinho para o ranking ao vivo.
3. Quando todas terminam, o ecrã mostra sozinho as 3 perguntas mais falhadas (para comentar) e, com um toque em **Mostrar vencedoras**, o pódio com a utilidade média da sessão.
4. Para outra ronda, voltar ao **Início** e tocar outra vez em **Fazer o quiz** (nova sala e novo QR).

## Novembro Azul 2026

Portal igual ao do Outubro Rosa (vídeo, quiz individual, QR da sala, ranking ao vivo, perguntas mais falhadas e pódio), dedicado à prevenção do cancro da próstata, para os colaboradores.

- Endereço: <https://hfernandesao-max.github.io/CI-ZX-campanhas-saude/novembro-azul-2026/>
- QR do portal para imprimir: `novembro-azul-2026/qr-portal.png`
- 12 perguntas por pessoa (6 «Mito ou Verdade?» e 6 de escolha múltipla), de um banco de 150, sobre a saúde do homem. Na sala, cada participante recebe um bloco conforme a ordem de entrada: cada grupo de 12 participantes seguidos não tem nenhuma pergunta em comum e, para 50 pessoas, cada pergunta sai 3 a 5 vezes. Ninguém recebe duas perguntas sobre o mesmo assunto. No modo individual, o mesmo telemóvel não repete perguntas enquanto houver perguntas por ver.
- Preparado para cerca de 50 participantes: os telemóveis não descarregam o vídeo; o ranking mostra os 10 primeiros e «+ N participantes».
- Usa o mesmo projecto Firebase e as mesmas regras do Firestore; não é preciso configurar nada de novo.

```
novembro-azul-2026/
  index.html                    A página (todas as vistas)
  questoes.js                   Banco de perguntas e regra de pontuação
  firebase-config.js            Configuração do Firebase (igual à do Outubro Rosa)
  video.mp4, poster.jpg         Vídeo e imagem de capa
  laco-azul.png, og.jpg         Laço azul e imagem de partilha
  qr-portal.png                 QR do portal para imprimir
```

No dia (13 de Novembro), **modo automático**, sem intervenção do apresentador:

- Abrir o endereço com `?auto` no fim (`…/novembro-azul-2026/?auto`), de preferência pelo atalho «INICIAR - Novembro Azul.bat» do pacote da pen, que abre o Edge em ecrã inteiro (modo quiosque) e com som.
- Sequência: vídeo → QR da sala → ranking ao vivo → perguntas mais falhadas (45 s) → pódio com o resumo do inquérito.
- A ronda fecha sozinha quando todos terminam ou 8 minutos depois de entrar o primeiro participante.
- Para sair do ecrã automático: Alt + F4.

Sem `?auto`, o portal funciona como o do Outubro Rosa (toque em **Fazer o quiz**).

Outras funcionalidades:

- **Ranking por empresa**: cada participante escolhe consult.IT ou Zentrix; o ranking e o pódio mostram a média de pontos de cada empresa.
- **No fim do quiz**: botão «Pôr lembrete no calendário» (ficheiro .ics para daqui a 7 dias, às 09h00, «Marcar o meu check-up») e «Partilhar com a família (WhatsApp)».
- **Painel de resultados para a Administração**: <https://hfernandesao-max.github.io/CI-ZX-campanhas-saude/novembro-azul-2026/resultados.html> — participação, conhecimento antes e depois, intenção de check-up, utilidade, por empresa, perguntas mais falhadas e sessões, lidos do Firestore, com exportação CSV. Os dados são apagados ao fim de 30 dias: descarregar o CSV antes.
- Estas funcionalidades precisam das regras do Firestore deste repositório (campos `empresa` e `campanha` e leitura de grupo para o painel).

## Nova campanha

Acrescentar uma pasta (por exemplo `dezembro-2026/`) com a sua página, as perguntas e os materiais, como em `novembro-azul-2026/`.
