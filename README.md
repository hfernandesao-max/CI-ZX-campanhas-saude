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

## No dia

1. No portátil ligado ao projector, abrir `/#ranking` (ligação «Modo apresentador» no rodapé do portal) e carregar em **Ecrã inteiro**.
2. As colaboradoras lêem o QR, escrevem o nome e respondem às 12 perguntas.
3. Quando todas terminarem («Todas terminaram!»), carregar em **Mostrar vencedoras**.
4. Para outra ronda, **Nova sessão** (gera um novo código e um novo QR).

## Nova campanha

Acrescentar uma pasta (por exemplo `novembro-azul-2026/`) com as suas perguntas e materiais.
