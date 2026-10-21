# Publicação no GitHub Pages

## Configuração

- Branch: `main`.
- Pasta publicada: `/docs`.
- `.nojekyll`: publicação estática sem processamento por Jekyll.
- Endereço: https://rudyrocha.github.io/veja-voce-mesmo/

As alterações em `docs/` são publicadas pelo GitHub Pages após sua incorporação à `main`.

## Atualizações

Prepare e revise as alterações antes de publicar. Para uma nova investigação, inclua uma página em `docs/investigacoes/` com perguntas investigáveis, prompt integral visível e cópia em um clique; atualize o catálogo da página inicial. Não exija compêndios, anexos ou material externo do projeto.

Confira os links locais, a sintaxe JavaScript e o comportamento de geração e cópia. O texto mostrado deve ser exatamente o texto copiado. Preserve os endereços antigos com encaminhamento quando necessário.

O repositório é público: arquivos e histórico de alterações ficam acessíveis publicamente. O material histórico dos compêndios permanece no repositório e não integra o fluxo atual de pesquisa.

## Estatísticas de acessos e cópias

Integração preparada com GoatCounter, ainda inativa: falta configurar a conta.

1. Criar uma conta em https://www.goatcounter.com/signup (manter o painel privado).
2. Em `docs/assets/analytics.js`, preencher `endpoint` com o endereço de coleta fornecido pela conta: `https://NOME-DA-CONTA.goatcounter.com/count`. Não incluir senha ou token.
3. Publicar a alteração na branch `main`.
4. Acessar o site publicado e copiar um prompt. Conferir os registros no painel `https://NOME-DA-CONTA.goatcounter.com`, considerando o tempo de processamento do serviço.

O painel apresenta os acessos por página e os eventos `copiar-prompt:tentativa-de-golpe-2022-2023` e `copiar-prompt:lula-flavio-corrupcao`. Os dois botões de cada investigação somam no mesmo evento. Selecionar o período desejado e consultar os totais de visualizações/eventos, não apenas visitantes únicos. Cada carregamento e cada cópia bem-sucedida contam uma vez, inclusive repetições. A página inicial com ou sem `index.html` tem um único total; parâmetros e fragmentos não dividem as contagens.

A medição começa após a ativação e não recupera acessos anteriores. Cópias manuais pela seleção do texto não são medidas. Bloqueadores, JavaScript desativado e falhas de rede podem impedir registros. Os testes locais não geram estatísticas reais. A falha do serviço não interfere na navegação nem na cópia. O texto do prompt e o conteúdo da área de transferência não são enviados ao serviço.

Referências: https://www.goatcounter.com/help/js e https://www.goatcounter.com/help/events.
