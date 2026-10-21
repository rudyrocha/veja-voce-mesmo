'use strict';
const field = document.getElementById('prompt-text');
const status = document.getElementById('copy-status');
if (field) {
  document.querySelectorAll('.copy-prompt, #copy-prompt').forEach(button => {
    button.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(field.value);
        } else {
          field.focus();
          field.select();
          if (!document.execCommand('copy')) throw new Error('copy failed');
        }
        if (status) status.textContent = 'Prompt completo copiado. Confira o texto ao colar na sua IA.';
        document.dispatchEvent(new Event('prompt-copied'));
      } catch {
        field.focus();
        field.select();
        if (status) status.textContent = 'Selecionei o prompt. Use Copiar no seu dispositivo.';
      }
    });
  });
}
