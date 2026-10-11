# Publicação no GitHub Pages

## Estrutura

- `docs/index.html`: página inicial do website.
- `docs/criterios.md`: proposta de critérios editoriais.
- `docs/compendios/`: textos dos compêndios e arquivos de leitura/download.
- `docs/.nojekyll`: publicação estática sem processamento por Jekyll.

## Primeira publicação

1. Revise e incorpore o pull request de estrutura inicial à branch `main`.
2. Abra Settings → Pages no repositório.
3. Em Source, selecione Deploy from a branch.
4. Selecione a branch `main` e a pasta `/docs`.
5. Clique em Save.
6. Aguarde a publicação e consulte a URL exibida pelo GitHub.

Endereço esperado: https://rudyrocha.github.io/veja-voce-mesmo/

Referência oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Atualizações

Crie uma branch, prepare as alterações e abra um pull request. Após a revisão e a incorporação à `main`, alterações em `docs/` serão publicadas automaticamente conforme a configuração do Pages.

Para um novo compêndio, inclua o texto com fontes e data, uma página de leitura e um arquivo Markdown para download. Atualize o catálogo da página inicial. Confira os links e a consistência entre a página e o arquivo para download.

O repositório é público: os arquivos e o histórico de alterações ficam acessíveis publicamente.
