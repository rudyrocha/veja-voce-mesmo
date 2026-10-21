'use strict';

(() => {
  // Ativação: preencher com https://NOME-DA-CONTA.goatcounter.com/count.
  // É um endereço público de coleta, nunca uma senha ou chave de API.
  const endpoint = '';
  if (!/^https:\/\/[a-z0-9-]+\.goatcounter\.com\/count$/.test(endpoint)) return;
  if (window.location.hostname !== 'rudyrocha.github.io') return;

  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  const pending = [];
  let ready = false;
  let failed = false;

  function send(event) {
    try {
      window.goatcounter.count(event);
    } catch {
      // Uma falha de estatísticas não deve afetar a página ou a cópia.
    }
  }

  document.addEventListener('prompt-copied', () => {
    if (failed) return;
    const slug = path.split('/').pop().replace(/\.html$/, '');
    const event = {
      path: 'copiar-prompt:' + slug,
      title: 'Prompt copiado: ' + document.title,
      event: true,
      no_session: true,
    };
    if (ready) send(event);
    else if (pending.length < 50) pending.push(event);
  });

  // Uma visualização por carregamento; consultas e fragmentos não dividem totais.
  // Não enviar o texto do prompt nem o conteúdo da área de transferência.
  window.goatcounter = {path, no_session: true, no_events: true};
  const script = document.createElement('script');
  script.src = 'https://gc.zgo.at/count.js';
  script.async = true;
  script.dataset.goatcounter = endpoint;
  script.onload = () => {
    ready = typeof window.goatcounter.count === 'function';
    failed = !ready;
    if (ready) pending.splice(0).forEach(send);
    else pending.length = 0;
  };
  script.onerror = () => {
    failed = true;
    pending.length = 0;
  };
  document.head.appendChild(script);
})();
